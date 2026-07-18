# CLAUDE.md

## What this is

`mdlink-check` — a zero-dependency Node CLI that checks markdown files for broken links:
relative file targets (verified on disk) and HTTP(S) URLs (HEAD/GET probes). Input is a file
or a directory (recursed for `*.md`). Exit code 1 on any broken link — CI-friendly.

## Commands

```bash
npm test                    # syntax-check every src file + dogfood run against this README
node src/index.js <path>    # run against a file or directory
```

## Layout

`src/index.js` (CLI entry, shebang) · `src/parser.js` (markdown link extraction) ·
`src/file-checker.js` (relative-target existence) · `src/url-checker.js` (HTTP probes).

## Conventions

- Zero runtime dependencies — keep it that way; it's the point of the tool.
- Node >= 18 (built-in fetch).
- Publishing: tag `v*` triggers `.github/workflows/release.yml` (npm publish with provenance;
  needs the `NPM_TOKEN` repo secret). The `files` allowlist in package.json is the tarball —
  update it if you add anything a user needs at runtime.
- No `Co-Authored-By: Claude` trailers in commits (portfolio rule).
