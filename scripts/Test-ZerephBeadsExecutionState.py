#!/usr/bin/env python3
"""Read-only guard for Zereph's one-active-Bead-per-worker policy."""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from collections import defaultdict
from pathlib import Path
from typing import Any, Sequence


class GuardError(RuntimeError):
    """Raised when the live Beads execution state violates repository policy."""


def _clean(value: Any) -> str:
    return "" if value is None else str(value).strip()


def _identity_key(value: Any) -> str:
    return _clean(value).casefold()


def read_active_beads(repo_root: Path) -> list[dict[str, Any]]:
    command = [
        "bd",
        "--readonly",
        "list",
        "--status",
        "in_progress",
        "--limit",
        "0",
        "--json",
    ]
    try:
        result = subprocess.run(
            command,
            cwd=repo_root,
            capture_output=True,
            text=True,
            check=False,
        )
    except OSError as exc:
        raise GuardError(f"Unable to run bd: {exc}") from exc

    if result.returncode != 0:
        detail = result.stderr.strip() or result.stdout.strip() or "no error output"
        raise GuardError(
            f"Unable to read in-progress Beads; bd exited with code "
            f"{result.returncode}: {detail}"
        )

    try:
        payload = json.loads(result.stdout or "[]")
    except json.JSONDecodeError as exc:
        raise GuardError(f"Unable to parse in-progress Beads JSON: {exc.msg}") from exc

    if not isinstance(payload, list) or any(not isinstance(item, dict) for item in payload):
        raise GuardError("In-progress Beads JSON must be an array of objects.")
    return payload


def validate_active_beads(
    active: Sequence[dict[str, Any]],
    candidate_id: str | None = None,
    worker: str | None = None,
) -> dict[str, Any]:
    candidate = _clean(candidate_id)
    requested_worker = _clean(worker)
    if candidate and not requested_worker:
        raise GuardError("Worker is required when CandidateId is supplied.")

    unassigned = [_clean(item.get("id")) for item in active if not _clean(item.get("assignee"))]
    if unassigned:
        raise GuardError(
            "In-progress Beads must have an actual worker assigned: " + ", ".join(unassigned)
        )

    by_worker: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for item in active:
        by_worker[_identity_key(item.get("assignee"))].append(item)

    duplicate_groups = [group for group in by_worker.values() if len(group) > 1]
    if duplicate_groups:
        details = []
        for group in duplicate_groups:
            assignee = _clean(group[0].get("assignee"))
            ids = ", ".join(_clean(item.get("id")) for item in group)
            details.append(f"{assignee}: {ids}")
        raise GuardError(
            "A worker may have only one in-progress Bead at a time. Found: "
            + "; ".join(details)
        )

    if candidate:
        candidate_matches = [item for item in active if _clean(item.get("id")) == candidate]
        if candidate_matches and _identity_key(candidate_matches[0].get("assignee")) != _identity_key(
            requested_worker
        ):
            actual_worker = _clean(candidate_matches[0].get("assignee"))
            raise GuardError(
                f"Candidate {candidate} is already in progress for '{actual_worker}', "
                f"not '{requested_worker}'."
            )

        other_for_worker = [
            item
            for item in active
            if _identity_key(item.get("assignee")) == _identity_key(requested_worker)
            and _clean(item.get("id")) != candidate
        ]
        if other_for_worker:
            ids = ", ".join(_clean(item.get("id")) for item in other_for_worker)
            raise GuardError(
                f"Cannot start {candidate}: worker '{requested_worker}' already has "
                f"in-progress Bead(s): {ids}"
            )

    return {
        "status": "passed",
        "in_progress_count": len(active),
        "candidate_id": candidate or None,
        "worker": requested_worker or None,
        "active": [
            {"id": _clean(item.get("id")), "assignee": _clean(item.get("assignee"))}
            for item in active
        ],
    }


def parse_args(argv: Sequence[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Verify Zereph's one-active-Bead-per-worker execution state."
    )
    parser.add_argument("--candidate-id", help="Bead proposed for in_progress status")
    parser.add_argument("--worker", help="Actual worker who would own the candidate Bead")
    return parser.parse_args(argv)


def main(argv: Sequence[str] | None = None) -> int:
    args = parse_args(argv)
    repo_root = Path(__file__).resolve().parent.parent
    try:
        result = validate_active_beads(
            read_active_beads(repo_root),
            candidate_id=args.candidate_id,
            worker=args.worker,
        )
    except GuardError as exc:
        print(json.dumps({"status": "failed", "error": str(exc)}, indent=2), file=sys.stderr)
        return 1

    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
