// src/app/api/lop26-roster/route.ts
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import * as kmStore from '../../../lib/lop26-sync/kmStore';

export async function GET() {
  return NextResponse.json({
    size: kmStore.size(),
    lastSyncedAt: kmStore.getLastSyncedAt(),
    runners: kmStore.toObject(),
  });
}