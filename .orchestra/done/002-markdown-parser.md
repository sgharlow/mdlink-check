# Task 002: Markdown Link Parser

## Metadata
| Field | Value |
|-------|-------|
| **ID** | 002 |
| **Status** | done |
| **Branch** | task/002 |
| **Assigned** | task/002 |
| **Depends** | 001 |
| **Blocked-By** | |
| **Estimated** | 30 min |

## Inputs
- Project structure from 001

## Description
Create a module that parses markdown files and extracts all links. Should handle both inline links `[text](url)` and reference-style links. Return link objects with url, line number, and type (url vs file path).

## Acceptance Criteria
- [x] Function to extract links from markdown string
- [x] Handles inline links [text](url)
- [x] Handles reference links [text][ref]
- [x] Returns array of {url, line, type} objects
- [x] Correctly identifies URL vs relative path

## Context Files
- src/index.js from 001

## Outputs
- Created: src/parser.js

---

## Work Log

### 2026-01-16 23:10 - Complete
Created parser.js with parseLinks() function. Uses regex to extract inline [text](url) and reference [text][ref] style links. Returns objects with url, line number, type (url/file), and link text. Tested with sample markdown.
