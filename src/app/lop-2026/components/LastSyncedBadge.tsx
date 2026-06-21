// src/app/lop-2026/components/LastSyncedBadge.tsx
"use client";

import { useEffect, useState } from "react";

function formatVNDateTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function LastSyncedBadge() {
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/lop26-roster");
        const data = await res.json();
        if (!cancelled) setLastSyncedAt(data.lastSyncedAt ?? null);
      } catch {
        // silently ignore — badge just won't show a time
      }
    }

    load();
    const interval = setInterval(load, 60_000); // refresh every minute
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (!lastSyncedAt) return null;

  return (
    <span>
      Cập nhật lần cuối từ{" "}
      <a
        href="https://pmhr.fun"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-700"
      >
        pmhr.fun
      </a>
      : {formatVNDateTime(lastSyncedAt)}
    </span>
  );
}
