# Task 005: CLI Interface and Reporter

## Metadata
| Field | Value |
|-------|-------|
| **ID** | 005 |
| **Status** | done |
| **Branch** | task/005 |
| **Assigned** | task/005 |
| **Depends** | 003, 004 |
| **Blocked-By** | |
| **Estimated** | 30 min |

## Inputs
- URL checker from 003
- File checker from 004

## Description
Create the main CLI interface that ties everything together. Parse command line arguments, scan files, run checks, and output a formatted report with colors.

## Acceptance Criteria
- [x] Accept file or directory as argument
- [x] Recursively find .md files in directory
- [x] Run all checks and collect results
- [x] Colored output (green=valid, red=broken)
- [x] Summary line at end
- [x] Exit code 1 if broken links, 0 if all valid

## Context Files
- src/url-checker.js from 003
- src/file-checker.js from 004

## Outputs
- Modified: src/index.js (main CLI logic)

---

## Work Log

### 2026-01-16 23:22 - Complete
Implemented full CLI in index.js. Integrates parser, url-checker, and file-checker modules. Recursively finds .md files (skips node_modules and hidden dirs). Colored output with ANSI codes. Summary shows total links checked and broken count. Exit code 1 if broken links found. Tested with valid and broken links.
