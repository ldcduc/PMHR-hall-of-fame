// instrumentation.ts
//
// Next.js calls register() exactly once when the server process starts
// (both `next dev` and `next start`). We use it to kick off a recurring
// background sync against pmhr.fun, keeping the in-memory kmStore (and
// optionally the lop26FullRoster.ts file) fresh without any manual step.
//
// Docs: https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation

export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;

  const { startRosterSync } = await import('./lib/lop26-sync/startRosterSync');

  startRosterSync({
    intervalMs: 5 * 60 * 1000, // re-fetch every 5 minutes
    writeFile: false,          // pure in-memory, no disk writes
    runImmediately: true,
  });
}