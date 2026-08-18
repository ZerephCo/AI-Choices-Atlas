[CmdletBinding()]
param(
    [string]$CandidateId,
    [string]$Worker
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$python = Get-Command python -ErrorAction SilentlyContinue
$prefixArguments = @()
if ($null -eq $python) {
    $python = Get-Command py -ErrorAction SilentlyContinue
    $prefixArguments = @('-3')
}
if ($null -eq $python) {
    throw 'Python 3 is required to run the Zereph Beads execution-state guard.'
}

$guardPath = Join-Path $PSScriptRoot 'Test-ZerephBeadsExecutionState.py'
$arguments = @($prefixArguments) + @($guardPath)
if (-not [string]::IsNullOrWhiteSpace($CandidateId)) {
    $arguments += @('--candidate-id', $CandidateId)
}
if (-not [string]::IsNullOrWhiteSpace($Worker)) {
    $arguments += @('--worker', $Worker)
}

& $python.Source @arguments
if ($LASTEXITCODE -ne 0) {
    throw "Zereph Beads execution-state guard failed with code $LASTEXITCODE."
}
