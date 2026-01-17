# Task 004: File Path Checker

## Metadata
| Field | Value |
|-------|-------|
| **ID** | 004 |
| **Status** | done |
| **Branch** | task/004 |
| **Assigned** | task/004 |
| **Depends** | 002 |
| **Blocked-By** | |
| **Estimated** | 20 min |

## Inputs
- Parser module from 002

## Description
Create a module that checks if relative file paths exist on the filesystem. Resolves paths relative to the markdown file being checked.

## Acceptance Criteria
- [x] Function to check file path validity
- [x] Resolves relative to source file location
- [x] Handles anchor links (file.md#section)
- [x] Returns {path, valid, error}

## Context Files
- src/parser.js from 002

## Outputs
- Created: src/file-checker.js

---

## Work Log

### 2026-01-16 23:18 - Complete
Created file-checker.js with checkFilePath() and checkFilePaths() functions. Strips anchor links before checking. Resolves paths relative to provided base path. Uses fs.existsSync for validation.
