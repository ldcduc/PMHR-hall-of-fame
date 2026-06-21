// src/lib/lop26-sync/kmStore.ts

export interface KmRecord {
  todayKm: number | null;
  totalKm: number;
  streak: number;
  team: string;
  updatedAt: string;
}

export interface ParsedRunnerRow {
  name: string;
  todayKm: number | null;
  totalKm: number;
  streak: number;
}

declare global {
   
  var __lop26KmStore: Map<string, KmRecord> | undefined;
   
  var __lop26LastSyncedAt: string | null | undefined;
}

const store: Map<string, KmRecord> =
  globalThis.__lop26KmStore ?? (globalThis.__lop26KmStore = new Map());

if (globalThis.__lop26LastSyncedAt === undefined) {
  globalThis.__lop26LastSyncedAt = null;
}

export function set(
  name: string,
  data: { todayKm: number | null; totalKm: number; streak: number; team: string }
): void {
  store.set(name, { ...data, updatedAt: new Date().toISOString() });
}

export function setMany(team: string, rows: ParsedRunnerRow[]): void {
  for (const row of rows) {
    set(row.name, {
      todayKm: row.todayKm,
      totalKm: row.totalKm,
      streak: row.streak,
      team,
    });
  }
}

export function get(name: string): KmRecord | undefined {
  return store.get(name);
}

export function getAll(): Map<string, KmRecord> {
  return store;
}

export function size(): number {
  return store.size;
}

export function clear(): void {
  store.clear();
}

export function toObject(): Record<string, KmRecord> {
  return Object.fromEntries(store.entries());
}

/** Call this once per full sync (both teams), not per-row, to mark "last synced at". */
export function markSynced(): void {
  globalThis.__lop26LastSyncedAt = new Date().toISOString();
}

export function getLastSyncedAt(): string | null {
  return globalThis.__lop26LastSyncedAt ?? null;
}