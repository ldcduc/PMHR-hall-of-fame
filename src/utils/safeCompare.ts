// src/utils/safeCompare.ts

export type SortDirection = 'asc' | 'desc';
// eslint-disable-next-line
export type CompareValue = string | number | boolean | null | undefined | string[] | any[];

/**
 * Safe comparison utility that handles undefined, null, arrays, and various data types
 */
export function safeCompare(
  aVal: CompareValue,
  bVal: CompareValue,
  direction: SortDirection = 'asc'
): number {
  // Handle identical values (including both undefined or both null)
  if (aVal === bVal) return 0;

  // Handle undefined values - treat as "greater than" any defined value
  if (aVal === undefined && bVal === undefined) return 0;
  if (aVal === undefined) return direction === 'asc' ? 1 : -1;
  if (bVal === undefined) return direction === 'asc' ? -1 : 1;

  // Handle null values - treat as "greater than" defined values but less than undefined
  if (aVal === null && bVal === null) return 0;
  if (aVal === null) return direction === 'asc' ? 1 : -1;
  if (bVal === null) return direction === 'asc' ? -1 : 1;

  // Handle arrays - compare by length first, then by first element
  if (Array.isArray(aVal) && Array.isArray(bVal)) {
    const lengthDiff = aVal.length - bVal.length;
    if (lengthDiff !== 0) {
      return direction === 'asc' ? lengthDiff : -lengthDiff;
    }
    // If same length, compare first elements
    if (aVal.length > 0 && bVal.length > 0) {
      return safeCompare(aVal[0], bVal[0], direction);
    }
    return 0;
  }
  
  // If one is array and other isn't, treat array as having value equal to its length
  if (Array.isArray(aVal)) {
    return safeCompare(aVal.length, bVal, direction);
  }
  if (Array.isArray(bVal)) {
    return safeCompare(aVal, bVal.length, direction);
  }

  // Handle objects - convert to string for comparison
  if (typeof aVal === 'object' && typeof bVal === 'object') {
    const aStr = JSON.stringify(aVal);
    const bStr = JSON.stringify(bVal);
    return safeCompare(aStr, bStr, direction);
  }

  // Normal comparison for primitive values
  if (aVal < bVal) return direction === 'asc' ? -1 : 1;
  if (aVal > bVal) return direction === 'asc' ? 1 : -1;
  
  return 0;
}

/**
 * Safe comparison for time strings (HH:MM:SS or HH:MM format)
 */
export function safeTimeCompare(
  aTime: string | undefined,
  bTime: string | undefined,
  direction: SortDirection = 'asc'
): number {
  const timeToSeconds = (time: string | undefined): number => {
    if (!time || time === 'N/A' || time.trim() === '') return 999999;
    
    try {
      const parts = time.split(':').map(Number);
      if (parts.length < 2 || parts.some(isNaN)) return 999999;
      
      const hours = parts[0] || 0;
      const minutes = parts[1] || 0;
      const seconds = parts[2] || 0;
      
      return hours * 3600 + minutes * 60 + seconds;
    } catch {
      return 999999;
    }
  };

  const aSeconds = timeToSeconds(aTime);
  const bSeconds = timeToSeconds(bTime);

  return safeCompare(aSeconds, bSeconds, direction);
}

/**
 * Safe comparison for numeric strings
 */
export function safeNumericCompare(
  aVal: string | number | undefined,
  bVal: string | number | undefined,
  direction: SortDirection = 'asc'
): number {
  const toNumber = (val: string | number | undefined): number | undefined => {
    if (val === undefined || val === null) return undefined;
    if (typeof val === 'number') return val;
    
    const parsed = parseFloat(val);
    return isNaN(parsed) ? undefined : parsed;
  };

  const aNum = toNumber(aVal);
  const bNum = toNumber(bVal);

  return safeCompare(aNum, bNum, direction);
}

/**
 * Safe comparison for strings with case-insensitive option
 */
export function safeStringCompare(
  aVal: string | undefined,
  bVal: string | undefined,
  direction: SortDirection = 'asc',
  caseSensitive: boolean = false
): number {
  const normalize = (val: string | undefined): string | undefined => {
    if (val === undefined || val === null) return undefined;
    return caseSensitive ? val.trim() : val.trim().toLowerCase();
  };

  const aNorm = normalize(aVal);
  const bNorm = normalize(bVal);

  return safeCompare(aNorm, bNorm, direction);
}

/**
 * Safe comparison for dates
 */
export function safeDateCompare(
  aDate: string | Date | undefined,
  bDate: string | Date | undefined,
  direction: SortDirection = 'asc'
): number {
  const toDate = (val: string | Date | undefined): Date | undefined => {
    if (val === undefined || val === null) return undefined;
    if (val instanceof Date) return val;
    
    try {
      const date = new Date(val);
      return isNaN(date.getTime()) ? undefined : date;
    } catch {
      return undefined;
    }
  };

  const aDateObj = toDate(aDate);
  const bDateObj = toDate(bDate);

  if (aDateObj === undefined && bDateObj === undefined) return 0;
  if (aDateObj === undefined) return direction === 'asc' ? 1 : -1;
  if (bDateObj === undefined) return direction === 'asc' ? -1 : 1;

  const aTime = aDateObj.getTime();
  const bTime = bDateObj.getTime();

  return safeCompare(aTime, bTime, direction);
}

/**
 * Generic safe sort function for arrays
 */
export function safeSortBy<T>(
  array: T[],
  keySelector: (item: T) => CompareValue,
  direction: SortDirection = 'asc',
  compareFunction: typeof safeCompare = safeCompare
): T[] {
  return [...array].sort((a, b) => {
    const aVal = keySelector(a);
    const bVal = keySelector(b);
    return compareFunction(aVal, bVal, direction);
  });
}

/**
 * Multi-field sort utility
 */
export interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
  // eslint-disable-next-line
  compareFunction?: (a: any, b: any, direction: SortDirection) => number;
}

export function multiSort<T>(
  array: T[],
  sortConfigs: SortConfig<T>[]
): T[] {
  return [...array].sort((a, b) => {
    for (const config of sortConfigs) {
      const aVal = a[config.key];
      const bVal = b[config.key];
      const compareFunc = config.compareFunction || safeCompare;
      const result = compareFunc(aVal, bVal, config.direction);
      
      if (result !== 0) return result;
    }
    return 0;
  });
}

// Example usage and tests
export const safeCompareExamples = {
  // Basic usage
  basicSort: () => {
    const values = [3, undefined, 1, null, 2];
    return values.sort((a, b) => safeCompare(a, b, 'asc'));
    // Result: [1, 2, 3, null, undefined]
  },

  // Time sorting
  timeSort: () => {
    const times = ['1:30:45', undefined, '1:25:30', 'N/A', '2:15:00'];
    return times.sort((a, b) => safeTimeCompare(a, b, 'asc'));
    // Result: ['1:25:30', '1:30:45', '2:15:00', 'N/A', undefined]
  },

  // Object sorting
  objectSort: () => {
    const runners = [
      { name: 'Alice', time: '1:30:00' },
      { name: 'Bob', time: undefined },
      { name: 'Charlie', time: '1:25:00' }
    ];
    return safeSortBy(runners, r => r.time, 'asc', safeTimeCompare);
  },

  // Multi-field sort
  multiFieldSort: () => {
    const runners = [
      { name: 'Alice', time: '1:30:00', age: 25 },
      { name: 'Bob', time: '1:30:00', age: 30 },
      { name: 'Charlie', time: '1:25:00', age: 28 }
    ];
    return multiSort(runners, [
      { key: 'time', direction: 'asc', compareFunction: safeTimeCompare },
      { key: 'age', direction: 'asc' }
    ]);
  }
};