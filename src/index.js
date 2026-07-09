/**
 * neon-sdk · sovereign wrapper for Neon
 * Database
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://api-docs.neon.tech/
 * Homepage: https://neon.tech
 */

export class Neon {
  constructor({ apiKey, baseURL = 'https://neon.tech', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://api-docs.neon.tech/. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('neon ' + res.status);
    return res.json();
  }
}

export default Neon;

// Metadata
export const meta = {
  "name": "Neon",
  "category": "Database",
  "homepage": "https://neon.tech",
  "docs_url": "https://api-docs.neon.tech/",
  "endpoints_count": 0
};
