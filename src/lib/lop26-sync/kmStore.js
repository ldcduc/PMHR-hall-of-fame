// A small in-memory store keyed by runner name, holding the latest known
// { todayKm, totalKm, streak, team } for each runner.
//
// NOTE: keyed by name as requested. Names aren't guaranteed unique on the
// site (e.g. two different "Nam Nguyen" exist on the Thỏ side), so if you
// hit collisions, switch the key to the athlete id instead (parsePage.js
// can be extended to capture `/athletes/{id}` per row).

/** @type {Map<string, { todayKm: number|null, totalKm: number, streak: number, team: string, updatedAt: string }>} */
const store = new Map();

function set(name, data) {
  store.set(name, { ...data, updatedAt: new Date().toISOString() });
}

/**
 * @param {string} team
 * @param {{ name: string, todayKm: number|null, totalKm: number, streak: number }[]} rows
 */
function setMany(team, rows) {
  for (const row of rows) {
    set(row.name, {
      todayKm: row.todayKm,
      totalKm: row.totalKm,
      streak: row.streak,
      team,
    });
  }
}

function get(name) {
  return store.get(name);
}

function getAll() {
  return store;
}

function size() {
  return store.size;
}

function clear() {
  store.clear();
}

function toObject() {
  return Object.fromEntries(store.entries());
}

module.exports = { set, setMany, get, getAll, size, clear, toObject };