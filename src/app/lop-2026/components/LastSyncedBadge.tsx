// src/app/lop-2026/components/LastSyncedBadge.tsx
"use client";

import { useEffect, useState } from "react";

interface LastSyncedBadgeProps {
  fallbackLastSyncedAt?: string;
}

function formatVNDateTime(iso: string): string {
  const d = new Date(iso);
  const hh = d.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dd = d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return `${hh} ${dd}`;
}

export default function LastSyncedBadge({
  fallbackLastSyncedAt,
}: LastSyncedBadgeProps) {
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/lop26-roster");
        const data = await res.json();

        if (!cancelled) {
          if (data.lastSyncedAt) {
            setLastSyncedAt(data.lastSyncedAt);
            setIsLive(true);
          } else if (fallbackLastSyncedAt) {
            setLastSyncedAt(fallbackLastSyncedAt);
            setIsLive(false);
          }
        }
      } catch {
        if (!cancelled && fallbackLastSyncedAt) {
          setLastSyncedAt(fallbackLastSyncedAt);
          setIsLive(false);
        }
      }
    }

    load();
    const interval = setInterval(load, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [fallbackLastSyncedAt]);

  if (!lastSyncedAt) return null;

  return (
    <span>
      Cập nhật lần cuối từ pmhr.fun: {formatVNDateTime(lastSyncedAt)}
      {!isLive && <span className="text-amber-500"> (cached)</span>}
    </span>
  );
}
