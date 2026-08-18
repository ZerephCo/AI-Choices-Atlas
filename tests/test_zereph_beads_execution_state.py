#!/usr/bin/env python3
"""Regression tests for the cross-platform Zereph Beads execution guard."""

from __future__ import annotations

import importlib.util
import json
import subprocess
import unittest
from pathlib import Path
from unittest.mock import patch


REPO_ROOT = Path(__file__).resolve().parent.parent
GUARD_PATH = REPO_ROOT / "scripts" / "Test-ZerephBeadsExecutionState.py"
SPEC = importlib.util.spec_from_file_location("zereph_beads_execution_guard", GUARD_PATH)
if SPEC is None or SPEC.loader is None:
    raise RuntimeError(f"Unable to load guard module from {GUARD_PATH}")
GUARD = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(GUARD)


class ValidateActiveBeadsTests(unittest.TestCase):
    def test_empty_state_passes(self) -> None:
        result = GUARD.validate_active_beads([])
        self.assertEqual(result["status"], "passed")
        self.assertEqual(result["in_progress_count"], 0)

    def test_distinct_workers_pass(self) -> None:
        active = [
            {"id": "zcu-a", "assignee": "Codex"},
            {"id": "zcu-b", "assignee": "Claude"},
        ]
        result = GUARD.validate_active_beads(active)
        self.assertEqual(result["in_progress_count"], 2)

    def test_unassigned_bead_is_rejected(self) -> None:
        with self.assertRaisesRegex(GUARD.GuardError, "actual worker assigned: zcu-a"):
            GUARD.validate_active_beads([{"id": "zcu-a", "assignee": "  "}])

    def test_duplicate_worker_is_rejected_case_insensitively(self) -> None:
        active = [
            {"id": "zcu-a", "assignee": "Codex"},
            {"id": "zcu-b", "assignee": "codex"},
        ]
        with self.assertRaisesRegex(GUARD.GuardError, "only one in-progress Bead"):
            GUARD.validate_active_beads(active)

    def test_candidate_requires_worker(self) -> None:
        with self.assertRaisesRegex(GUARD.GuardError, "Worker is required"):
            GUARD.validate_active_beads([], candidate_id="zcu-a")

    def test_candidate_owned_by_other_worker_is_rejected(self) -> None:
        active = [{"id": "zcu-a", "assignee": "Claude"}]
        with self.assertRaisesRegex(GUARD.GuardError, "already in progress for 'Claude'"):
            GUARD.validate_active_beads(active, candidate_id="zcu-a", worker="Codex")

    def test_other_candidate_for_worker_is_rejected(self) -> None:
        active = [{"id": "zcu-a", "assignee": "Codex"}]
        with self.assertRaisesRegex(GUARD.GuardError, "already has in-progress Bead"):
            GUARD.validate_active_beads(active, candidate_id="zcu-b", worker="Codex")

    def test_current_candidate_for_worker_passes(self) -> None:
        active = [{"id": "zcu-a", "assignee": "Codex"}]
        result = GUARD.validate_active_beads(active, candidate_id="zcu-a", worker="codex")
        self.assertEqual(result["status"], "passed")


class ReadActiveBeadsTests(unittest.TestCase):
    @patch.object(GUARD.subprocess, "run")
    def test_reads_all_in_progress_beads_read_only(self, run_mock) -> None:
        run_mock.return_value = subprocess.CompletedProcess(
            args=[], returncode=0, stdout='[{"id":"zcu-a","assignee":"Codex"}]', stderr=""
        )
        active = GUARD.read_active_beads(REPO_ROOT)
        self.assertEqual(active[0]["id"], "zcu-a")
        self.assertEqual(
            run_mock.call_args.args[0],
            [
                "bd",
                "--readonly",
                "list",
                "--status",
                "in_progress",
                "--limit",
                "0",
                "--json",
            ],
        )

    @patch.object(GUARD.subprocess, "run")
    def test_invalid_json_is_rejected(self, run_mock) -> None:
        run_mock.return_value = subprocess.CompletedProcess(
            args=[], returncode=0, stdout="not-json", stderr=""
        )
        with self.assertRaisesRegex(GUARD.GuardError, "Unable to parse"):
            GUARD.read_active_beads(REPO_ROOT)

    @patch.object(GUARD.subprocess, "run")
    def test_bd_failure_is_rejected(self, run_mock) -> None:
        run_mock.return_value = subprocess.CompletedProcess(
            args=[], returncode=7, stdout="", stderr="database unavailable"
        )
        with self.assertRaisesRegex(GUARD.GuardError, "exited with code 7"):
            GUARD.read_active_beads(REPO_ROOT)


if __name__ == "__main__":
    unittest.main()
