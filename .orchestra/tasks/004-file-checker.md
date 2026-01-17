# Task 004: File Path Checker

## Metadata
| Field | Value |
|-------|-------|
| **ID** | 004 |
| **Status** | ready |
| **Branch** | task/004 |
| **Assigned** | |
| **Depends** | 002 |
| **Blocked-By** | |
| **Estimated** | 20 min |

## Inputs
- Parser module from 002

## Description
Create a module that checks if relative file paths exist on the filesystem. Resolves paths relative to the markdown file being checked.

## Acceptance Criteria
- [ ] Function to check file path validity
- [ ] Resolves relative to source file location
- [ ] Handles anchor links (file.md#section)
- [ ] Returns {path, valid, error}

## Context Files
- src/parser.js from 002

## Outputs
- Created: src/file-checker.js

---

## Work Log
