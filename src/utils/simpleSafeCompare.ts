// src/utils/simpleSafeCompare.ts
// Minimal version for quick use

export type SortDirection = 'asc' | 'desc';

/**
 * Safe comparison that handles undefined/null/array values
 * Returns: -1, 0, or 1 for sorting
 */
export function safeCompare(
  // eslint-disable-next-line
  a: any,
  // eslint-disable-next-line
  b: any,
  direction: SortDirection = 'asc'
): number {
  // Handle identical values
  if (a === b) return 0;

  // Handle undefined (sort to end)
  if (a === undefined) return direction === 'asc' ? 1 : -1;
  if (b === undefined) return direction === 'asc' ? -1 : 1;

  // Handle null (sort after defined values, before undefined)
  if (a === null) return direction === 'asc' ? 1 : -1;
  if (b === null) return direction === 'asc' ? -1 : 1;

  // Handle arrays - compare by length
  if (Array.isArray(a) && Array.isArray(b)) {
    const lengthDiff = a.length - b.length;
    return direction === 'asc' ? lengthDiff : -lengthDiff;
  }
  if (Array.isArray(a)) return safeCompare(a.length, b, direction);
  if (Array.isArray(b)) return safeCompare(a, b.length, direction);

  // Normal comparison
  if (a < b) return direction === 'asc' ? -1 : 1;
  if (a > b) return direction === 'asc' ? 1 : -1;
  return 0;
}

/**
 * Safe comparison for time strings (HH:MM:SS format)
 */
export function safeTimeCompare(
  // eslint-disable-next-line
  a: any,
  // eslint-disable-next-line
  b: any,
  direction: SortDirection = 'asc'
): number {
  // eslint-disable-next-line
  const timeToSeconds = (time: any): number => {
    if (!time || typeof time !== 'string' || time === 'N/A') return 999999;
    const parts = time.split(':').map(Number);
    return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
  };

  return safeCompare(timeToSeconds(a), timeToSeconds(b), direction);
}

// Usage examples:
// 
// Simple array sort:
// [3, undefined, 1, null, 2].sort((a, b) => safeCompare(a, b, 'asc'))
// Result: [1, 2, 3, null, undefined]
//
// Object array sort:
// runners.sort((a, b) => safeTimeCompare(a.time, b.time, 'asc'))
//
// In React table:
// const sorted = data.sort((a, b) => safeCompare(a[field], b[field], direction))