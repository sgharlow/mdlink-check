/**
 * URL Checker
 * Validates HTTP/HTTPS URLs using HEAD requests
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

const TIMEOUT = 5000; // 5 seconds

/**
 * Check if a URL is valid and accessible
 * @param {string} url - The URL to check
 * @returns {Promise<{url: string, valid: boolean, status: number|null, error: string|null}>}
 */
async function checkUrl(url) {
  return new Promise((resolve) => {
    try {
      const parsedUrl = new URL(url);
      const protocol = parsedUrl.protocol === 'https:' ? https : http;

      const options = {
        method: 'HEAD',
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
        path: parsedUrl.pathname + parsedUrl.search,
        timeout: TIMEOUT,
        headers: {
          'User-Agent': 'mdlink-check/1.0'
        }
      };

      const req = protocol.request(options, (res) => {
        // Consider 2xx and 3xx as valid
        const valid = res.statusCode >= 200 && res.statusCode < 400;
        resolve({
          url,
          valid,
          status: res.statusCode,
          error: null
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url,
          valid: false,
          status: null,
          error: 'Timeout'
        });
      });

      req.on('error', (err) => {
        resolve({
          url,
          valid: false,
          status: null,
          error: err.message
        });
      });

      req.end();
    } catch (err) {
      resolve({
        url,
        valid: false,
        status: null,
        error: err.message
      });
    }
  });
}

/**
 * Check multiple URLs
 * @param {string[]} urls
 * @returns {Promise<Array>}
 */
async function checkUrls(urls) {
  return Promise.all(urls.map(checkUrl));
}

module.exports = { checkUrl, checkUrls };
