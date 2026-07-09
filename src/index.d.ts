/**
 * neon-sdk TypeScript declarations
 */
export interface NeonOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Neon {
  constructor(options?: NeonOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Neon;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
