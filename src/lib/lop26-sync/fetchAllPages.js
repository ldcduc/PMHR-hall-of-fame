// Walks every page of a tab (rua/tho/all) until pagination runs out,
// returning the combined, flattened list of parsed runner rows.

const { fetchPage } = require('./fetchPage');
const { parsePage, hasNextPage, parseTotalCount } = require('./parsePage');

/**
 * @param {'rua'|'tho'|'all'} tab
 * @param {Object} [opts]
 * @param {number} [opts.maxPages=20] - safety cap to avoid infinite loops
 * @param {number} [opts.delayMs=300] - polite delay between page requests
 */
async function fetchAllPages(tab, opts = {}) {
  const { maxPages = 20, delayMs = 300 } = opts;

  let page = 1;
  let allRows = [];
  let totalCount = null;

  while (page <= maxPages) {
    const html = await fetchPage(tab, page);
    const rows = parsePage(html);
    allRows = allRows.concat(rows);

    if (page === 1) {
      totalCount = parseTotalCount(html);
    }

    if (!hasNextPage(html)) break;

    page += 1;
    if (delayMs > 0) {
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }

  return { rows: allRows, totalCount };
}

module.exports = { fetchAllPages };