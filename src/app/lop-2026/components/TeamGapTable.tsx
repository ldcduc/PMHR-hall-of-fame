"use client";

import { useEffect, useState } from "react";

interface RunnerRecord {
  todayKm: number | null;
  totalKm: number;
  streak: number;
  team: string;
  updatedAt: string;
}

interface ApiResponse {
  size: number;
  lastSyncedAt: string | null;
  runners: Record<string, RunnerRecord>;
}

const CUTOFFS = [20, 40, 60, 80, 100, 120];
const SYNC_INTERVAL_MS = 5 * 60 * 1000; // matches instrumentation.ts's backend sync interval

interface TeamTotals {
  todayKm: number;
  totalKm: number;
  count: number; // actual number of runners included (may be < N if team has fewer)
}

function sumTopN(rows: RunnerRecord[], n: number): TeamTotals {
  const slice = rows.slice(0, n);
  return {
    todayKm: slice.reduce((acc, r) => acc + (r.todayKm ?? 0), 0),
    totalKm: slice.reduce((acc, r) => acc + r.totalKm, 0),
    count: slice.length,
  };
}

function fmt(n: number): string {
  return n.toLocaleString("vi-VN", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

function DiffBadge({ value }: { value: number }) {
  if (value === 0) {
    return <span className="text-gray-400">0.0</span>;
  }
  const isPositive = value > 0;
  return (
    <span
      className={
        isPositive
          ? "text-blue-600 font-semibold"
          : "text-yellow-600 font-semibold"
      }
    >
      {isPositive ? "🐢 +" : "🐇 +"}
      {fmt(Math.abs(value))}
    </span>
  );
}

export default function TeamGapTable() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/lop26-roster");
        const json: ApiResponse = await res.json();
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    const interval = setInterval(load, SYNC_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="mt-10 text-center text-sm text-gray-400">
        Đang tải dữ liệu so sánh...
      </div>
    );
  }

  if (!data || data.size === 0) {
    return null;
  }

  const ruaRows = Object.values(data.runners)
    .filter((r) => r.team === "rua")
    .sort((a, b) => b.totalKm - a.totalKm);

  const thoRows = Object.values(data.runners)
    .filter((r) => r.team === "tho")
    .sort((a, b) => b.totalKm - a.totalKm);

  return (
    <section id="so-sanh" className="max-w-7xl mx-auto px-4 pb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-gray-900">
          So sánh Top N giữa 2 team
        </h2>
        <p className="text-sm text-gray-500">
          Tổng km (hôm nay / tổng) của Top 20, 40, 60... runners mỗi team — dữ
          liệu real-time từ pmhr.fun
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="text-left px-4 py-3">Top N</th>
                <th className="text-right px-4 py-3">🐢 Rùa — Hôm nay</th>
                <th className="text-right px-4 py-3">🐇 Thỏ — Hôm nay</th>
                <th className="text-right px-4 py-3">Chênh lệch hôm nay</th>
                <th className="text-right px-4 py-3 border-l border-gray-100">
                  🐢 Rùa — Tổng
                </th>
                <th className="text-right px-4 py-3">🐇 Thỏ — Tổng</th>
                <th className="text-right px-4 py-3">Chênh lệch tổng</th>
              </tr>
            </thead>
            <tbody>
              {CUTOFFS.map((n) => {
                const rua = sumTopN(ruaRows, n);
                const tho = sumTopN(thoRows, n);
                const todayDiff = rua.todayKm - tho.todayKm;
                const totalDiff = rua.totalKm - tho.totalKm;

                return (
                  <tr
                    key={n}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-bold text-gray-900">
                      Top {n}
                    </td>
                    <td className="px-4 py-3 text-right text-blue-700">
                      {fmt(rua.todayKm)}
                    </td>
                    <td className="px-4 py-3 text-right text-yellow-600">
                      {fmt(tho.todayKm)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <DiffBadge value={todayDiff} />
                    </td>
                    <td className="px-4 py-3 text-right text-blue-700 border-l border-gray-100">
                      {fmt(rua.totalKm)}
                    </td>
                    <td className="px-4 py-3 text-right text-yellow-600">
                      {fmt(tho.totalKm)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <DiffBadge value={totalDiff} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-gray-100 text-xs text-gray-400">
          🐢 = Rùa dẫn trước · 🐇 = Thỏ dẫn trước · So sánh dựa trên tổng km của
          N runners đứng đầu mỗi team (xếp theo Tổng km)
        </div>
      </div>
    </section>
  );
}
