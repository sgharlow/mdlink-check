# Task 005: CLI Interface and Reporter

## Metadata
| Field | Value |
|-------|-------|
| **ID** | 005 |
| **Status** | ready |
| **Branch** | task/005 |
| **Assigned** | |
| **Depends** | 003, 004 |
| **Blocked-By** | |
| **Estimated** | 30 min |

## Inputs
- URL checker from 003
- File checker from 004

## Description
Create the main CLI interface that ties everything together. Parse command line arguments, scan files, run checks, and output a formatted report with colors.

## Acceptance Criteria
- [ ] Accept file or directory as argument
- [ ] Recursively find .md files in directory
- [ ] Run all checks and collect results
- [ ] Colored output (green=valid, red=broken)
- [ ] Summary line at end
- [ ] Exit code 1 if broken links, 0 if all valid

## Context Files
- src/url-checker.js from 003
- src/file-checker.js from 004

## Outputs
- Modified: src/index.js (main CLI logic)

---

## Work Log
