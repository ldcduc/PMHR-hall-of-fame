// src/lib/lop26-sync/startRosterSync.ts
import { fetchAllPages } from './fetchAllPages';
import * as kmStore from './kmStore';

declare global {
   
  var __lop26SyncStarted: boolean | undefined;
   
  var __lop26SyncInterval: NodeJS.Timeout | undefined;
}

const DEFAULT_INTERVAL_MS = 5 * 60 * 1000;

interface StartRosterSyncOptions {
  intervalMs?: number;
  runImmediately?: boolean;
}

export function startRosterSync(opts: StartRosterSyncOptions = {}): void {
  const { intervalMs = DEFAULT_INTERVAL_MS, runImmediately = true } = opts;

  if (globalThis.__lop26SyncStarted) {
    console.log('[lop26-sync] Already started in this process, skipping.');
    return;
  }
  globalThis.__lop26SyncStarted = true;

  async function tick() {
    try {
      console.log('[lop26-sync] Syncing pmhr.fun...');

      const [ruaResult, thoResult] = await Promise.all([
        fetchAllPages('rua'),
        fetchAllPages('tho'),
      ]);

      kmStore.setMany('rua', ruaResult.rows);
      kmStore.setMany('tho', thoResult.rows);
      kmStore.markSynced();

      console.log(
        `[lop26-sync] Updated in-memory store: ${ruaResult.rows.length} Rùa + ` +
          `${thoResult.rows.length} Thỏ = ${kmStore.size()} runners total ` +
          `(synced at ${kmStore.getLastSyncedAt()})`
      );
    } catch (err: any) {
      console.error('[lop26-sync] Sync failed:', err?.message || err);
    }
  }

  if (runImmediately) {
    tick();
  }

  globalThis.__lop26SyncInterval = setInterval(tick, intervalMs);

  process.on('SIGTERM', stopRosterSync);
  process.on('SIGINT', stopRosterSync);
}

export function stopRosterSync(): void {
  if (globalThis.__lop26SyncInterval) {
    clearInterval(globalThis.__lop26SyncInterval);
    globalThis.__lop26SyncInterval = undefined;
  }
  globalThis.__lop26SyncStarted = false;
}