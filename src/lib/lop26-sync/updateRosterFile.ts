// Updates the `todayKm`, `totalKm`, and `streak` fields inside
// runners.ts (or lop26FullRoster.ts) in place, matching runners by name
// within each team's array (fullRosterRua / fullRosterTho). Also updates
// (or inserts) a `lastSyncedAt` export tracking when this file was last
// refreshed from pmhr.fun.

import fs from 'fs';
import type { ParsedRunnerRow } from './parsePage';

export interface UpdateReport {
  updated: string[];
  notFound: string[];
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function fmtKm(value: number | null | undefined): string {
  if (value === null || value === undefined) return 'null';
  return Number(value.toFixed(1)).toString();
}

function updateArrayBlock(
  source: string,
  arrayName: string,
  rows: ParsedRunnerRow[]
): { source: string; updated: string[]; notFound: string[] } {
  const updated: string[] = [];
  const notFound: string[] = [];

  const arrayStartRe = new RegExp(`export const ${arrayName}[^=]*=\\s*\\[`);
  const startMatch = source.match(arrayStartRe);
  if (!startMatch || startMatch.index === undefined) {
    const availableExports = Array.from(source.matchAll(/export const (\w+)/g)).map(
      (m) => m[1]
    );
    throw new Error(
      `Could not find array "${arrayName}" in source file. ` +
        `Available exports in this file: ${availableExports.join(', ') || '(none found)'}`
    );
  }
  const blockStart = startMatch.index + startMatch[0].length;

  const endRe = /\r?\n\];/;
  const endMatch = source.slice(blockStart).match(endRe);
  if (!endMatch || endMatch.index === undefined) {
    throw new Error(`Could not find end of array "${arrayName}"`);
  }
  const blockEnd = blockStart + endMatch.index;

  let block = source.slice(blockStart, blockEnd);

  for (const row of rows) {
    const nameEsc = escapeRegex(row.name);
    const lineRe = new RegExp(
      `(\\{[^}]*name:\\s*['"]${nameEsc}['"][^}]*todayKm:\\s*)([^,]+)(,\\s*totalKm:\\s*)([^,]+)(,\\s*streak:\\s*)([^,]+)(,)`,
      'm'
    );

    if (!lineRe.test(block)) {
      notFound.push(row.name);
      continue;
    }

    block = block.replace(
      lineRe,
      (_m, pre, _oldToday, mid, _oldTotal, midStreak, _oldStreak, tail) =>
        `${pre}${fmtKm(row.todayKm)}${mid}${fmtKm(row.totalKm)}${midStreak}${row.streak}${tail}`
    );
    updated.push(row.name);
  }

  const newSource = source.slice(0, blockStart) + block + source.slice(blockEnd);
  return { source: newSource, updated, notFound };
}

/**
 * Update (or insert, if missing) an `export const lastSyncedAt = '...'`
 * line near the top of the file, right after the imports/type
 * declarations and before the first array export.
 */
function updateLastSyncedAt(source: string, isoTimestamp: string): string {
  const existingRe = /export const lastSyncedAt\s*=\s*['"][^'"]*['"];?/;

  if (existingRe.test(source)) {
    return source.replace(existingRe, `export const lastSyncedAt = '${isoTimestamp}';`);
  }

  // Not present yet — insert it right before the first `export const full...`
  // array declaration, so it sits near the top of the file alongside the
  // other top-level exports.
  const firstArrayRe = /export const full\w+/;
  const match = source.match(firstArrayRe);

  if (!match || match.index === undefined) {
    // Fallback: just prepend it at the very top of the file.
    return `export const lastSyncedAt = '${isoTimestamp}';\n\n${source}`;
  }

  return (
    source.slice(0, match.index) +
    `export const lastSyncedAt = '${isoTimestamp}';\n\n` +
    source.slice(match.index)
  );
}

export function updateRosterFile(
  filePath: string,
  data: { rua?: ParsedRunnerRow[]; tho?: ParsedRunnerRow[] }
): { rua?: UpdateReport; tho?: UpdateReport; lastSyncedAt: string } {
  let source = fs.readFileSync(filePath, 'utf-8');
  const report: { rua?: UpdateReport; tho?: UpdateReport; lastSyncedAt: string } = {
    lastSyncedAt: '',
  };

  if (data.rua) {
    const result = updateArrayBlock(source, 'fullRosterRua', data.rua);
    source = result.source;
    report.rua = { updated: result.updated, notFound: result.notFound };
  }

  if (data.tho) {
    const result = updateArrayBlock(source, 'fullRosterTho', data.tho);
    source = result.source;
    report.tho = { updated: result.updated, notFound: result.notFound };
  }

  const isoTimestamp = new Date().toISOString();
  source = updateLastSyncedAt(source, isoTimestamp);
  report.lastSyncedAt = isoTimestamp;

  fs.writeFileSync(filePath, source, 'utf-8');
  return report;
}