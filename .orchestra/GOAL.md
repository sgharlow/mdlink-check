# Goal: Markdown Link Checker CLI

## Description
Build a simple Node.js CLI tool that checks markdown files for broken links. The tool should scan markdown files, extract all links (both URLs and relative file paths), and report which ones are broken.

This is a practical utility for maintaining documentation quality.

## Acceptance Criteria
- [ ] CLI accepts file or directory path as argument
- [ ] Extracts all markdown links from files
- [ ] Checks HTTP/HTTPS URLs for validity (HEAD request)
- [ ] Checks relative file paths exist
- [ ] Outputs clear report of broken links
- [ ] Exit code 1 if broken links found, 0 if all valid

## Scope

### In Scope
- Parse markdown files for links
- Check URL validity via HTTP HEAD
- Check local file path existence
- CLI with basic argument handling
- Colored console output

### Out of Scope
- Recursive URL crawling
- Link caching
- Config file support
- Watch mode

## Technical Constraints
- Node.js (no TypeScript for simplicity)
- Minimal dependencies
- Works on Windows/Mac/Linux
