// Updates the `todayKm`, `totalKm`, and `streak` fields inside
// runners.ts in place, matching runners by name within each
// team's array (fullRosterRua / fullRosterTho).
//
// Approach: rather than re-generating the whole file (which would lose
// any hand-edited profileImage URLs, comments, formatting, etc.), this
// does a targeted regex replace on each runner's object literal line,
// keyed by the `name:` field. This keeps the diff minimal.

const fs = require('fs');

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function fmtKm(value) {
  if (value === null || value === undefined) return 'null';
  return Number(value.toFixed(1)).toString();
}

/**
 * @param {string} source - full file contents
 * @param {string} arrayName - e.g. 'fullRosterRua'
 * @param {{ name: string, todayKm: number|null, totalKm: number, streak: number }[]} rows
 */
function updateArrayBlock(source, arrayName, rows) {
  const updated = [];
  const notFound = [];

  // Isolate the array's source block so name collisions in OTHER arrays
  // (e.g. same name appearing in both rua/tho) don't get touched.
  const arrayStartRe = new RegExp(`export const ${arrayName}[^=]*=\\s*\\[`);
  const startMatch = source.match(arrayStartRe);
  if (!startMatch) {
    throw new Error(`Could not find array "${arrayName}" in source file`);
  }
  const blockStart = startMatch.index + startMatch[0].length;
  const blockEndRel = source.slice(blockStart).indexOf('\n];');
  if (blockEndRel === -1) {
    throw new Error(`Could not find end of array "${arrayName}"`);
  }
  const blockEnd = blockStart + blockEndRel;

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
 * @param {string} filePath - path to runners.ts
 * @param {{ rua?: any[], tho?: any[] }} data
 */
function updateRosterFile(filePath, data) {
  let source = fs.readFileSync(filePath, 'utf-8');
  const report = {};

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

  fs.writeFileSync(filePath, source, 'utf-8');
  return report;
}

module.exports = { updateRosterFile, updateArrayBlock, fmtKm };