#!/usr/bin/env node

/**
 * mdlink-check - Markdown Link Checker CLI
 * Usage: mdlink-check <file-or-directory>
 */

const fs = require('fs');
const path = require('path');
const { parseLinks } = require('./parser');
const { checkUrl } = require('./url-checker');
const { checkFilePath } = require('./file-checker');

// ANSI colors
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

/**
 * Find all markdown files in a directory (recursive)
 */
function findMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Check all links in a markdown file
 */
async function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = parseLinks(content);
  const results = [];
  const baseDir = path.dirname(filePath);

  for (const link of links) {
    if (link.type === 'url') {
      const result = await checkUrl(link.url);
      results.push({
        file: filePath,
        line: link.line,
        url: link.url,
        text: link.text,
        valid: result.valid,
        error: result.error,
        status: result.status
      });
    } else {
      const result = checkFilePath(link.url, baseDir);
      results.push({
        file: filePath,
        line: link.line,
        url: link.url,
        text: link.text,
        valid: result.valid,
        error: result.error,
        status: null
      });
    }
  }

  return results;
}

/**
 * Main CLI function
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: mdlink-check <file-or-directory>');
    console.log('');
    console.log('Check markdown files for broken links.');
    process.exit(0);
  }

  const target = args[0];

  // Check if target exists
  if (!fs.existsSync(target)) {
    console.error(`${RED}Error: ${target} not found${RESET}`);
    process.exit(1);
  }

  // Get list of files to check
  const stat = fs.statSync(target);
  const files = stat.isDirectory() ? findMarkdownFiles(target) : [target];

  if (files.length === 0) {
    console.log(`${YELLOW}No markdown files found${RESET}`);
    process.exit(0);
  }

  console.log(`Checking ${files.length} file(s)...\n`);

  let totalLinks = 0;
  let brokenLinks = 0;

  for (const file of files) {
    const results = await checkFile(file);
    const relativePath = path.relative(process.cwd(), file);

    for (const result of results) {
      totalLinks++;
      if (result.valid) {
        console.log(`${GREEN}✓${RESET} ${relativePath}:${result.line} - ${result.url}`);
      } else {
        brokenLinks++;
        const errorInfo = result.error || `HTTP ${result.status}`;
        console.log(`${RED}✗${RESET} ${relativePath}:${result.line} - ${result.url} (${errorInfo})`);
      }
    }
  }

  // Summary
  console.log('');
  console.log(`Checked ${totalLinks} link(s) in ${files.length} file(s)`);

  if (brokenLinks > 0) {
    console.log(`${RED}Found ${brokenLinks} broken link(s)${RESET}`);
    process.exit(1);
  } else {
    console.log(`${GREEN}All links valid!${RESET}`);
    process.exit(0);
  }
}

main().catch(err => {
  console.error(`${RED}Error: ${err.message}${RESET}`);
  process.exit(1);
});
