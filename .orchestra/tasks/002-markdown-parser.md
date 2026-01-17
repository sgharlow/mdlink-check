# Task 002: Markdown Link Parser

## Metadata
| Field | Value |
|-------|-------|
| **ID** | 002 |
| **Status** | ready |
| **Branch** | task/002 |
| **Assigned** | |
| **Depends** | 001 |
| **Blocked-By** | |
| **Estimated** | 30 min |

## Inputs
- Project structure from 001

## Description
Create a module that parses markdown files and extracts all links. Should handle both inline links `[text](url)` and reference-style links. Return link objects with url, line number, and type (url vs file path).

## Acceptance Criteria
- [ ] Function to extract links from markdown string
- [ ] Handles inline links [text](url)
- [ ] Handles reference links [text][ref]
- [ ] Returns array of {url, line, type} objects
- [ ] Correctly identifies URL vs relative path

## Context Files
- src/index.js from 001

## Outputs
- Created: src/parser.js

---

## Work Log
