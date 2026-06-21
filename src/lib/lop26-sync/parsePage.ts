// Parses a single PMHR leaderboard page (HTML string) into an array of
// { name, todayKm, totalKm, streak } records.
//
// Dependency-free: uses regex instead of an HTML parser, since the page
// markup is simple/consistent enough (server-rendered, no nested tables).

export interface ParsedRunnerRow {
  name: string;
  todayKm: number | null;
  totalKm: number;
  streak: number;
}

export function parseKmCell(text: string): number | null {
  const trimmed = text.trim();
  if (trimmed === '' || trimmed === '—' || trimmed === '-') return null;
  const num = parseFloat(trimmed.replace(/,/g, ''));
  return Number.isNaN(num) ? null : num;
}

export function parseStreakCell(text: string): number {
  const trimmed = text.replace(/\s+/g, ' ').trim();
  if (trimmed === '' || trimmed === '—' || trimmed === '-') return 0;
  // Streak cells look like "🔥 8" or just "1" (no fire emoji for streak=1 in some cases)
  const match = trimmed.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').trim();
}

/**
 * Parse a full HTML page (string) into an array of runner rows.
 */
export function parsePage(html: string): ParsedRunnerRow[] {
  const results: ParsedRunnerRow[] = [];

  // Grab each <tr ...>...</tr> inside the table body.
  const rowRe = /<tr\b[^>]*>([\s\S]*?)<\/tr>/g;
  let rowMatch: RegExpExecArray | null;

  while ((rowMatch = rowRe.exec(html)) !== null) {
    const rowHtml = rowMatch[1];

    // Skip header rows (they use <th>, not <td>)
    if (!/<td\b/i.test(rowHtml)) continue;

    const cellRe = /<td\b[^>]*>([\s\S]*?)<\/td>/g;
    const cells: string[] = [];
    let cellMatch: RegExpExecArray | null;
    while ((cellMatch = cellRe.exec(rowHtml)) !== null) {
      cells.push(cellMatch[1]);
    }
    if (cells.length < 4) continue;

    // Name: the second <td> contains two <a href="/athletes/{id}">...</a> —
    // one wraps the avatar <img> (empty text), the other wraps the name.
    const nameCellHtml = cells[1];
    const linkRe = /<a\s+href="\/athletes\/\d+"[^>]*>([\s\S]*?)<\/a>/g;
    let linkMatch: RegExpExecArray | null;
    let name: string | null = null;
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

    let todayKm: number | null = null;
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
 */
export function hasNextPage(html: string): boolean {
  return html.includes('Xem thêm');
}

/**
 * Parse the "1–20 / 125" style summary text to get the total runner count.
 */
export function parseTotalCount(html: string): number | null {
  const match = html.match(/(\d+)\s*[–-]\s*(\d+)\s*\/\s*(\d+)/);
  return match ? parseInt(match[3], 10) : null;
}