# Task 003: URL Checker

## Metadata
| Field | Value |
|-------|-------|
| **ID** | 003 |
| **Status** | done |
| **Branch** | task/003 |
| **Assigned** | task/003 |
| **Depends** | 002 |
| **Blocked-By** | |
| **Estimated** | 30 min |

## Inputs
- Parser module from 002

## Description
Create a module that checks HTTP/HTTPS URLs for validity using HEAD requests. Should handle timeouts, redirects, and return status for each URL.

## Acceptance Criteria
- [x] Function to check single URL validity
- [x] Uses HEAD request (not GET)
- [x] 5 second timeout
- [x] Returns {url, valid, status, error}
- [x] Handles network errors gracefully

## Context Files
- src/parser.js from 002

## Outputs
- Created: src/url-checker.js

---

## Work Log

### 2026-01-16 23:15 - Complete
Created url-checker.js with checkUrl() and checkUrls() functions. Uses Node.js http/https modules for HEAD requests. 5 second timeout. Returns {url, valid, status, error} object. Handles timeouts and network errors gracefully.
