# Task 003: URL Checker

## Metadata
| Field | Value |
|-------|-------|
| **ID** | 003 |
| **Status** | ready |
| **Branch** | task/003 |
| **Assigned** | |
| **Depends** | 002 |
| **Blocked-By** | |
| **Estimated** | 30 min |

## Inputs
- Parser module from 002

## Description
Create a module that checks HTTP/HTTPS URLs for validity using HEAD requests. Should handle timeouts, redirects, and return status for each URL.

## Acceptance Criteria
- [ ] Function to check single URL validity
- [ ] Uses HEAD request (not GET)
- [ ] 5 second timeout
- [ ] Returns {url, valid, status, error}
- [ ] Handles network errors gracefully

## Context Files
- src/parser.js from 002

## Outputs
- Created: src/url-checker.js

---

## Work Log
