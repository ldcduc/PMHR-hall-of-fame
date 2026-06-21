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

interface TeamGapTableProps {
  fallbackData: ApiResponse;
}

const PER_TEAM_CUTOFFS = [20, 40, 60, 80, 100, 120];
const COMBINED_CUTOFFS = [25, 50, 75, 100, 125, 150, 175, 200, 225, -1]; // -1 = "Toàn bộ" (all)
const SYNC_INTERVAL_MS = 5 * 60 * 1000;

interface TeamTotals {
  todayKm: number;
  totalKm: number;
  count: number;
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
      {isPositive ? "🐢 +" : "🐰 +"}
      {fmt(Math.abs(value))}
    </span>
  );
}

interface CombinedRunner extends RunnerRecord {
  name: string;
}

export default function TeamGapTable({ fallbackData }: TeamGapTableProps) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/lop26-roster");
        const json: ApiResponse = await res.json();

        if (!cancelled) {
          if (json.size > 0) {
            setData(json);
            setIsLive(true);
          } else {
            // Live store empty (cold start / sync failed) — fall back to static snapshot.
            setData(fallbackData);
            setIsLive(false);
          }
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setData(fallbackData);
          setIsLive(false);
          setLoading(false);
        }
      }
    }

    load();
    const interval = setInterval(load, SYNC_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [fallbackData]);

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

  // Combined pool: merge both teams into one list, sorted once by totalKm.
  const combinedRows: CombinedRunner[] = Object.entries(data.runners)
    .map(([name, r]) => ({ name, ...r }))
    .sort((a, b) => b.totalKm - a.totalKm);

  return (
    <section id="so-sanh" className="max-w-7xl mx-auto px-4 pb-16">
      {!isLive && (
        <div className="mb-4 px-4 py-2 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-700">
          ⚠️ Đang hiển thị dữ liệu từ lần đồng bộ gần nhất (chưa kết nối được
          pmhr.fun real-time)
        </div>
      )}

      {/* ───────────── Section 1: Per-team comparison ───────────── */}
      <div className="mb-6">
        <h2 className="text-2xl font-black text-gray-900">
          So sánh Top N giữa 2 team
        </h2>
        <p className="text-sm text-gray-500">
          Tổng km (hôm nay / tổng) của Top 20, 40, 60... runners{" "}
          <strong>mỗi team</strong> — dữ liệu real-time từ pmhr.fun
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="text-left px-4 py-3">Top N</th>
                <th className="text-right px-4 py-3">🐢 Rùa — Hôm nay</th>
                <th className="text-right px-4 py-3">🐰 Thỏ — Hôm nay</th>
                <th className="text-right px-4 py-3">Chênh lệch hôm nay</th>
                <th className="text-right px-4 py-3 border-l border-gray-100">
                  🐢 Rùa — Tổng
                </th>
                <th className="text-right px-4 py-3">🐰 Thỏ — Tổng</th>
                <th className="text-right px-4 py-3">Chênh lệch tổng</th>
              </tr>
            </thead>
            <tbody>
              {PER_TEAM_CUTOFFS.map((n) => {
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
          🐢 = Rùa dẫn trước · 🐰 = Thỏ dẫn trước · So sánh dựa trên tổng km của
          N runners đứng đầu <strong>mỗi team</strong> (xếp theo Tổng km)
        </div>
      </div>

      {/* ───────────── Section 2: Combined pool comparison ───────────── */}
      <div className="mb-6">
        <h2 className="text-2xl font-black text-gray-900">
          So sánh Top N tổng (gộp 2 team)
        </h2>
        <p className="text-sm text-gray-500">
          Gộp tất cả runners của <strong>cả 2 team</strong> vào 1 danh sách, xếp
          theo Tổng km, rồi lấy Top N — xem mỗi team góp bao nhiêu km và bao
          nhiêu runner trong nhóm dẫn đầu chung.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="text-left px-4 py-3">Top N (tổng)</th>
                <th className="text-right px-4 py-3">🐢 Rùa — Số runner</th>
                <th className="text-right px-4 py-3">🐰 Thỏ — Số runner</th>
                <th className="text-right px-4 py-3 border-l border-gray-100">
                  🐢 Rùa — Hôm nay
                </th>
                <th className="text-right px-4 py-3">🐰 Thỏ — Hôm nay</th>
                <th className="text-right px-4 py-3 border-l border-gray-100">
                  🐢 Rùa — Tổng km
                </th>
                <th className="text-right px-4 py-3">🐰 Thỏ — Tổng km</th>
                <th className="text-right px-4 py-3">Chênh lệch km</th>
                <th className="text-right px-4 py-3 border-l border-gray-100">
                  🐢 Rùa — So với mốc trước
                </th>
                <th className="text-right px-4 py-3">
                  🐰 Thỏ — So với mốc trước
                </th>
                <th className="text-right px-4 py-3 border-l border-gray-100">
                  🐢 Rùa — Trung bình mỗi runner
                </th>
                <th className="text-right px-4 py-3">
                  🐰 Thỏ — Trung bình mỗi runner
                </th>
              </tr>
            </thead>
            <tbody>
              {COMBINED_CUTOFFS.map((n, idx) => {
                const label = n === -1 ? "Toàn bộ" : `Top ${n}`;
                const slice =
                  n === -1 ? combinedRows : combinedRows.slice(0, n);

                const ruaInSlice = slice.filter((r) => r.team === "rua");
                const thoInSlice = slice.filter((r) => r.team === "tho");

                const ruaTodayKm = ruaInSlice.reduce(
                  (acc, r) => acc + (r.todayKm ?? 0),
                  0,
                );
                const thoTodayKm = thoInSlice.reduce(
                  (acc, r) => acc + (r.todayKm ?? 0),
                  0,
                );

                const ruaKm = ruaInSlice.reduce((acc, r) => acc + r.totalKm, 0);
                const thoKm = thoInSlice.reduce((acc, r) => acc + r.totalKm, 0);
                const kmDiff = ruaKm - thoKm;

                const ruaAvg =
                  ruaInSlice.length > 0 ? ruaKm / ruaInSlice.length : 0;
                const thoAvg =
                  thoInSlice.length > 0 ? thoKm / thoInSlice.length : 0;

                // Compare against the previous checkpoint's slice to see how much each
                // team's km total grew between this cutoff and the last one.
                let ruaVsPrev: number | null = null;
                let thoVsPrev: number | null = null;

                if (idx > 0) {
                  const prevN = COMBINED_CUTOFFS[idx - 1];
                  const prevSlice =
                    prevN === -1 ? combinedRows : combinedRows.slice(0, prevN);
                  const prevRuaKm = prevSlice
                    .filter((r) => r.team === "rua")
                    .reduce((acc, r) => acc + r.totalKm, 0);
                  const prevThoKm = prevSlice
                    .filter((r) => r.team === "tho")
                    .reduce((acc, r) => acc + r.totalKm, 0);
                  ruaVsPrev = ruaKm - prevRuaKm;
                  thoVsPrev = thoKm - prevThoKm;
                }

                return (
                  <tr
                    key={n}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-bold text-gray-900">
                      {label}
                    </td>
                    <td className="px-4 py-3 text-right text-blue-700">
                      {ruaInSlice.length}
                    </td>
                    <td className="px-4 py-3 text-right text-yellow-600">
                      {thoInSlice.length}
                    </td>
                    <td className="px-4 py-3 text-right text-blue-700 border-l border-gray-100">
                      {fmt(ruaTodayKm)}
                    </td>
                    <td className="px-4 py-3 text-right text-yellow-600">
                      {fmt(thoTodayKm)}
                    </td>
                    <td className="px-4 py-3 text-right text-blue-700 border-l border-gray-100">
                      {fmt(ruaKm)}
                    </td>
                    <td className="px-4 py-3 text-right text-yellow-600">
                      {fmt(thoKm)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <DiffBadge value={kmDiff} />
                    </td>
                    <td className="px-4 py-3 text-right text-blue-700 border-l border-gray-100">
                      {ruaVsPrev === null ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <>
                          {ruaVsPrev >= (thoVsPrev ?? -Infinity) && "🐢 "}+
                          {fmt(ruaVsPrev)}
                        </>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right text-yellow-600">
                      {thoVsPrev === null ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <>
                          {thoVsPrev > (ruaVsPrev ?? Infinity) && "🐰 "}+
                          {fmt(thoVsPrev)}
                        </>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right text-blue-700 border-l border-gray-100">
                      {fmt(ruaAvg)}
                    </td>
                    <td className="px-4 py-3 text-right text-yellow-600">
                      {fmt(thoAvg)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-gray-100 text-xs text-gray-400">
          🐢 = Rùa dẫn trước · 🐰 = Thỏ dẫn trước · Bảng này gộp{" "}
          <strong>tất cả runner của 2 team vào 1 danh sách chung</strong>, xếp
          theo Tổng km, rồi cắt lấy N người đầu — khác với bảng trên (mỗi team
          xếp riêng).
        </div>
      </div>
    </section>
  );
}
