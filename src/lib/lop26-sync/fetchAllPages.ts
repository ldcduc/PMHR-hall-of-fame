// Walks every page of a tab (rua/tho/all) until pagination runs out,
// returning the combined, flattened list of parsed runner rows.

import { fetchPage, type Tab } from './fetchPage';
import { parsePage, hasNextPage, parseTotalCount, type ParsedRunnerRow } from './parsePage';

export interface FetchAllPagesOptions {
  /** safety cap to avoid infinite loops */
  maxPages?: number;
  /** polite delay between page requests, in ms */
  delayMs?: number;
}

export interface FetchAllPagesResult {
  rows: ParsedRunnerRow[];
  totalCount: number | null;
}

export async function fetchAllPages(
  tab: Tab,
  opts: FetchAllPagesOptions = {}
): Promise<FetchAllPagesResult> {
  const { maxPages = 20, delayMs = 300 } = opts;

  let page = 1;
  let allRows: ParsedRunnerRow[] = [];
  let totalCount: number | null = null;

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