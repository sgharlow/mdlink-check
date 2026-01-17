/**
 * Markdown Link Parser
 * Extracts links from markdown content
 */

// Regex for inline links: [text](url)
const INLINE_LINK_REGEX = /\[([^\]]*)\]\(([^)]+)\)/g;

// Regex for reference-style links: [text][ref] and [ref]: url
const REF_LINK_REGEX = /\[([^\]]*)\]\[([^\]]*)\]/g;
const REF_DEF_REGEX = /^\[([^\]]+)\]:\s*(.+)$/gm;

/**
 * Determines if a URL is an external link or a relative file path
 * @param {string} url
 * @returns {'url' | 'file'}
 */
function getLinkType(url) {
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
    return 'url';
  }
  if (url.startsWith('mailto:') || url.startsWith('tel:')) {
    return 'url';
  }
  return 'file';
}

/**
 * Get line number for a match position in text
 * @param {string} text
 * @param {number} position
 * @returns {number}
 */
function getLineNumber(text, position) {
  return text.substring(0, position).split('\n').length;
}

/**
 * Parse markdown content and extract all links
 * @param {string} content - Markdown file content
 * @returns {Array<{url: string, line: number, type: 'url' | 'file', text: string}>}
 */
function parseLinks(content) {
  const links = [];

  // Extract reference definitions first
  const refDefs = {};
  let match;
  while ((match = REF_DEF_REGEX.exec(content)) !== null) {
    refDefs[match[1].toLowerCase()] = match[2].trim();
  }

  // Reset regex
  INLINE_LINK_REGEX.lastIndex = 0;
  REF_LINK_REGEX.lastIndex = 0;

  // Extract inline links [text](url)
  while ((match = INLINE_LINK_REGEX.exec(content)) !== null) {
    const url = match[2].split(' ')[0]; // Handle [text](url "title")
    links.push({
      url: url,
      line: getLineNumber(content, match.index),
      type: getLinkType(url),
      text: match[1]
    });
  }

  // Extract reference links [text][ref]
  while ((match = REF_LINK_REGEX.exec(content)) !== null) {
    const ref = (match[2] || match[1]).toLowerCase();
    const url = refDefs[ref];
    if (url) {
      links.push({
        url: url,
        line: getLineNumber(content, match.index),
        type: getLinkType(url),
        text: match[1]
      });
    }
  }

  return links;
}

module.exports = { parseLinks, getLinkType };
