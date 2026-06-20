// Thin wrapper around fetch() for grabbing a single leaderboard page from
// pmhr.fun. Kept separate from parsePage.js so the parser can be unit
// tested against saved HTML fixtures without any network access.

const BASE_URL = 'https://pmhr.fun/';

/**
 * Fetch one page of the leaderboard for a given team/tab.
 * @param {'rua'|'tho'|'all'} tab - 'all' omits the tab param (Toàn bộ tab)
 * @param {number} page - 1-based page number
 * @returns {Promise<string>} raw HTML
 */
async function fetchPage(tab, page = 1) {
  const params = new URLSearchParams();
  if (tab && tab !== 'all') params.set('tab', tab);
  if (page > 1) params.set('page', String(page));

  const url = params.toString() ? `${BASE_URL}?${params.toString()}` : BASE_URL;

  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: HTTP ${res.status}`);
  }

  return res.text();
}

module.exports = { fetchPage, BASE_URL };