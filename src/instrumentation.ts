// src/instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;

  const { startRosterSync } = await import('./lib/lop26-sync/startRosterSync');

  startRosterSync({
    intervalMs: 5 * 60 * 1000, // re-fetch every 5 minutes
    runImmediately: true,      // populate the store as soon as the server boots
  });
}