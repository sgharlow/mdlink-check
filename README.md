# mdlink-check

[![Skill Crossroads](https://skillcrossroads.com/api/badge/sgharlow/mdlink-check.svg)](https://skillcrossroads.com/s/sgharlow/mdlink-check)

Claude Code artifacts graded by [Skill Crossroads](https://skillcrossroads.com) — click the badge for the evidence-cited scorecard.

A small, dependency-light CLI that scans Markdown files for **broken links** — both local
file-path references and HTTP(S) URLs — and reports them with colored output. Runs recursively
over directories.

## Usage

```bash
node src/index.js <file-or-directory>
```

Point it at a single `.md` file or a folder (scanned recursively). Broken file references and
unreachable URLs are printed in red, valid ones in green.

## License

MIT
