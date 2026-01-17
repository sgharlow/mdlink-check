/**
 * File Path Checker
 * Validates relative file paths exist on filesystem
 */

const fs = require('fs');
const path = require('path');

/**
 * Check if a file path is valid (exists on filesystem)
 * @param {string} filePath - The relative path to check
 * @param {string} basePath - The base directory to resolve from
 * @returns {{path: string, valid: boolean, error: string|null}}
 */
function checkFilePath(filePath, basePath) {
  try {
    // Remove anchor links (e.g., file.md#section -> file.md)
    const pathWithoutAnchor = filePath.split('#')[0];

    // Handle empty path (just anchor link)
    if (!pathWithoutAnchor) {
      return { path: filePath, valid: true, error: null };
    }

    // Resolve the full path
    const fullPath = path.resolve(basePath, pathWithoutAnchor);

    // Check if file exists
    if (fs.existsSync(fullPath)) {
      return { path: filePath, valid: true, error: null };
    } else {
      return { path: filePath, valid: false, error: 'File not found' };
    }
  } catch (err) {
    return { path: filePath, valid: false, error: err.message };
  }
}

/**
 * Check multiple file paths
 * @param {Array<{path: string, basePath: string}>} files
 * @returns {Array}
 */
function checkFilePaths(files) {
  return files.map(f => checkFilePath(f.path, f.basePath));
}

module.exports = { checkFilePath, checkFilePaths };
