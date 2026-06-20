// Orchestrates a full sync:
//   1. Fetch all pages for 'rua' and 'tho' from pmhr.fun
//   2. Parse each page into runner rows
//   3. Update the in-memory kmStore (name -> {todayKm, totalKm, streak, team})
//   4. Patch src/app/lop-2026/data/runners.ts in place with the fresh totals
//
// CLI:           node src/lib/lop26-sync/syncRoster.js [path/to/runners.ts]
// Programmatic:  const { syncRoster } = require('./syncRoster');

const path = require('path');
const { fetchAllPages } = require('./fetchAllPages');
const kmStore = require('./kmStore');
const { updateRosterFile } = require('./updateRosterFile');

// Adjust this default if your data file lives somewhere else relative to this module.
const DEFAULT_ROSTER_PATH = path.resolve(__dirname, '../../app/lop-2026/data/runners.ts');

/**
 * @param {string} [rosterFilePath]
 * @param {Object} [opts]
 * @param {boolean} [opts.writeFile=true]
 */
async function syncRoster(rosterFilePath = DEFAULT_ROSTER_PATH, opts = {}) {
  const { writeFile = true } = opts;

  console.log('[syncRoster] Fetching Rùa team pages...');
  const ruaResult = await fetchAllPages('rua');
  console.log(`[syncRoster] Rùa: parsed ${ruaResult.rows.length} rows (site reports ${ruaResult.totalCount} total)`);

  console.log('[syncRoster] Fetching Thỏ team pages...');
  const thoResult = await fetchAllPages('tho');
  console.log(`[syncRoster] Thỏ: parsed ${thoResult.rows.length} rows (site reports ${thoResult.totalCount} total)`);

  kmStore.setMany('rua', ruaResult.rows);
  kmStore.setMany('tho', thoResult.rows);
  console.log(`[syncRoster] In-memory store now holds ${kmStore.size()} runners`);

  const report = {
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
      console.warn(`[syncRoster] Rùa: not found in file:`, fileReport.rua.notFound);
    }
    if (fileReport.tho?.notFound.length) {
      console.warn(`[syncRoster] Thỏ: not found in file:`, fileReport.tho.notFound);
    }
  }

  return report;
}

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

module.exports = { syncRoster, DEFAULT_ROSTER_PATH };