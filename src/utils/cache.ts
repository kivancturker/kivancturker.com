import fs from 'fs';
import path from 'path';

const CACHE_DIR = path.resolve('./cache');
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes in milliseconds

// Ensure cache directory exists
if (typeof window === 'undefined') {
  // This ensures `fs` logic is only run on the server
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

function getCacheFilePath(filePath: string): string {
  return path.join(CACHE_DIR, `${filePath.replace(/\//g, '_')}.json`);
}

function isCacheValid(filePath: string): boolean {
  const cacheFile = getCacheFilePath(filePath);
  if (!fs.existsSync(cacheFile)) return false;

  const stats = fs.statSync(cacheFile);
  const now = new Date().getTime();
  return now - stats.mtimeMs < CACHE_TTL;
}

export function readCache<T>(filePath: string): T | null {
  try {
    const cacheFile = getCacheFilePath(filePath);
    if (isCacheValid(filePath)) {
      const data = fs.readFileSync(cacheFile, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error(`Error reading cache for ${filePath}:`, error);
  }
  return null;
}

export function writeCache<T>(filePath: string, data: T): void {
  try {
    const cacheFile = getCacheFilePath(filePath);
    fs.writeFileSync(cacheFile, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error(`Error writing cache for ${filePath}:`, error);
  }
}
