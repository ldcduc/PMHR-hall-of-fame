// Parses a single PMHR leaderboard page (HTML string) into an array of
// { name, todayKm, totalKm, streak } records.
//
// Dependency-free: uses regex instead of an HTML parser, since the page
// markup is simple/consistent enough (server-rendered, no nested tables).

function parseKmCell(text) {
  const trimmed = text.trim();
  if (trimmed === '' || trimmed === '—' || trimmed === '-') return null;
  const num = parseFloat(trimmed.replace(/,/g, ''));
  return Number.isNaN(num) ? null : num;
}

function parseStreakCell(text) {
  const trimmed = text.replace(/\s+/g, ' ').trim();
  if (trimmed === '' || trimmed === '—' || trimmed === '-') return 0;
  const match = trimmed.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').trim();
}

/**
 * Parse a full HTML page (string) into an array of runner rows.
 * @param {string} html
 * @returns {{ name: string, todayKm: number|null, totalKm: number, streak: number }[]}
 */
function parsePage(html) {
  const results = [];

  // Grab each <tr ...>...</tr> inside the table body.
  const rowRe = /<tr\b[^>]*>([\s\S]*?)<\/tr>/g;
  let rowMatch;

  while ((rowMatch = rowRe.exec(html)) !== null) {
    const rowHtml = rowMatch[1];

    // Skip header rows (they use <th>, not <td>)
    if (!/<td\b/i.test(rowHtml)) continue;

    const cellRe = /<td\b[^>]*>([\s\S]*?)<\/td>/g;
    const cells = [];
    let cellMatch;
    while ((cellMatch = cellRe.exec(rowHtml)) !== null) {
      cells.push(cellMatch[1]);
    }
    if (cells.length < 4) continue;

    // Name: the second <td> contains two <a href="/athletes/{id}">...</a> —
    // one wraps the avatar <img> (empty text), the other wraps the name.
    const nameCellHtml = cells[1];
    const linkRe = /<a\s+href="\/athletes\/\d+"[^>]*>([\s\S]*?)<\/a>/g;
    let linkMatch;
    let name = null;
    while ((linkMatch = linkRe.exec(nameCellHtml)) !== null) {
      const text = stripTags(linkMatch[1]);
      if (text) {
        name = text;
        break;
      }
    }
    if (!name) continue;

    const totalKmCell = cells[cells.length - 2];
    const streakCell = cells[cells.length - 1];

    const totalKm = parseKmCell(stripTags(totalKmCell));
    if (totalKm === null) continue;

    const streak = parseStreakCell(stripTags(streakCell));

    let todayKm = null;
    if (cells.length >= 5) {
      const todayCell = cells[cells.length - 3];
      todayKm = parseKmCell(stripTags(todayCell));
    }

    results.push({ name, todayKm, totalKm, streak });
  }

  return results;
}

/**
 * Detect whether there's a next page available, by looking for a
 * "Xem thêm ›" pagination link.
 * @param {string} html
 * @returns {boolean}
 */
function hasNextPage(html) {
  return html.includes('Xem thêm');
}

/**
 * Parse the "1–20 / 125" style summary text to get the total runner count.
 * @param {string} html
 * @returns {number|null}
 */
function parseTotalCount(html) {
  const match = html.match(/(\d+)\s*[–-]\s*(\d+)\s*\/\s*(\d+)/);
  return match ? parseInt(match[3], 10) : null;
}

module.exports = { parsePage, hasNextPage, parseTotalCount, parseKmCell, parseStreakCell };