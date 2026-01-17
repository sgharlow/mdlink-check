#!/usr/bin/env node

/**
 * mdlink-check - Markdown Link Checker CLI
 *
 * Usage: mdlink-check <file-or-directory>
 */

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: mdlink-check <file-or-directory>');
  console.log('');
  console.log('Check markdown files for broken links.');
  process.exit(0);
}

const target = args[0];
console.log(`Checking: ${target}`);

// TODO: Implement link checking (tasks 002-005)
