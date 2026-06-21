// Orchestrates a full sync:
//   1. Fetch all pages for 'rua' and 'tho' from pmhr.fun
//   2. Parse each page into runner rows
//   3. Update the in-memory kmStore (name -> {todayKm, totalKm, streak, team})
//   4. Patch src/data/runners.ts (or lop26FullRoster.ts) in place with fresh totals
//
// CLI:           npx tsx src/lib/lop26-sync/syncRoster.ts [path/to/runners.ts]
// Programmatic:  import { syncRoster } from './syncRoster';

import path from 'path';
import { fetchAllPages } from './fetchAllPages';
import * as kmStore from './kmStore';
import { updateRosterFile, type UpdateReport } from './updateRosterFile';

const DEFAULT_ROSTER_PATH = path.resolve(__dirname, '../../app/lop-2026/data/runners.ts');

interface SyncReport {
  rua: { rowCount: number; totalCount: number | null; fileReport?: UpdateReport };
  tho: { rowCount: number; totalCount: number | null; fileReport?: UpdateReport };
  storeSize: number;
}

export async function syncRoster(
  rosterFilePath: string = DEFAULT_ROSTER_PATH,
  opts: { writeFile?: boolean } = {}
): Promise<SyncReport> {
  const { writeFile = true } = opts;

  console.log('[syncRoster] Fetching Rùa team pages...');
  const ruaResult = await fetchAllPages('rua');
  console.log(
    `[syncRoster] Rùa: parsed ${ruaResult.rows.length} rows (site reports ${ruaResult.totalCount} total)`
  );

  console.log('[syncRoster] Fetching Thỏ team pages...');
  const thoResult = await fetchAllPages('tho');
  console.log(
    `[syncRoster] Thỏ: parsed ${thoResult.rows.length} rows (site reports ${thoResult.totalCount} total)`
  );

  kmStore.setMany('rua', ruaResult.rows);
  kmStore.setMany('tho', thoResult.rows);
  console.log(`[syncRoster] In-memory store now holds ${kmStore.size()} runners`);

  const report: SyncReport = {
    rua: { rowCount: ruaResult.rows.length, totalCount: ruaResult.totalCount },
    tho: { rowCount: thoResult.rows.length, totalCount: thoResult.totalCount },
    storeSize: kmStore.size(),
  };

  if (writeFile) {
    console.log(`[syncRoster] Patching ${rosterFilePath} ...`);
    const fileReport = updateRosterFile(rosterFilePath, {
      rua: ruaResult.rows,
      tho: thoResult.rows,
    });
    report.rua.fileReport = fileReport.rua;
    report.tho.fileReport = fileReport.tho;

    if (fileReport.rua?.notFound.length) {
      console.warn('[syncRoster] Rùa: not found in file:', fileReport.rua.notFound);
    }
    if (fileReport.tho?.notFound.length) {
      console.warn('[syncRoster] Thỏ: not found in file:', fileReport.tho.notFound);
    }
  }

  return report;
}

// CLI entry point
if (require.main === module) {
  const targetPath = process.argv[2] || DEFAULT_ROSTER_PATH;
  syncRoster(targetPath)
    .then((report) => {
      console.log('[syncRoster] Done.');
      console.log(JSON.stringify(report, null, 2));
    })
    .catch((err) => {
      console.error('[syncRoster] Failed:', err);
      process.exit(1);
    });
}