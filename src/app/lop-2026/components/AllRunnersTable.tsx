"use client";

import { useEffect, useMemo, useState } from "react";

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

interface AllRunnersTableProps {
  fallbackData: ApiResponse;
}

type Tab = "all" | "rua" | "tho";
type SortKey = "totalKm" | "todayKm" | "streak";
type SortDir = "asc" | "desc";

const SYNC_INTERVAL_MS = 5 * 60 * 1000;
const PAGE_SIZE_OPTIONS = [20, 50, 100, -1] as const; // -1 = "All"

interface NamedRunner extends RunnerRecord {
  name: string;
}

const TEAM_BADGE: Record<
  string,
  { emoji: string; label: string; className: string }
> = {
  rua: { emoji: "🐢", label: "Rùa", className: "bg-blue-50 text-blue-700" },
  tho: { emoji: "🐰", label: "Thỏ", className: "bg-yellow-50 text-yellow-700" },
};

const VIETNAMESE_MAP: Record<string, string> = {
  à: "a",
  á: "a",
  ả: "a",
  ã: "a",
  ạ: "a",
  ă: "a",
  ằ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  â: "a",
  ầ: "a",
  ấ: "a",
  ẩ: "a",
  ẫ: "a",
  ậ: "a",
  è: "e",
  é: "e",
  ẻ: "e",
  ẽ: "e",
  ẹ: "e",
  ê: "e",
  ề: "e",
  ế: "e",
  ể: "e",
  ễ: "e",
  ệ: "e",
  ì: "i",
  í: "i",
  ỉ: "i",
  ĩ: "i",
  ị: "i",
  ò: "o",
  ó: "o",
  ỏ: "o",
  õ: "o",
  ọ: "o",
  ô: "o",
  ồ: "o",
  ố: "o",
  ổ: "o",
  ỗ: "o",
  ộ: "o",
  ơ: "o",
  ờ: "o",
  ớ: "o",
  ở: "o",
  ỡ: "o",
  ợ: "o",
  ù: "u",
  ú: "u",
  ủ: "u",
  ũ: "u",
  ụ: "u",
  ư: "u",
  ừ: "u",
  ứ: "u",
  ử: "u",
  ữ: "u",
  ự: "u",
  ỳ: "y",
  ý: "y",
  ỷ: "y",
  ỹ: "y",
  ỵ: "y",
  đ: "d",
};

function normalize(s: string): string {
  return s
    .toLowerCase()
    .split("")
    .map((char) => VIETNAMESE_MAP[char] ?? char)
    .join("")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function fmtKm(n: number | null): string {
  if (n === null) return "—";
  return n.toLocaleString("vi-VN", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  if (!active) return <span className="text-gray-300 ml-1">↕</span>;
  return (
    <span className="text-gray-700 ml-1">{dir === "desc" ? "↓" : "↑"}</span>
  );
}

export default function AllRunnersTable({
  fallbackData,
}: AllRunnersTableProps) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(true);
  const [tab, setTab] = useState<Tab>("all");
  const [sortKey, setSortKey] = useState<SortKey>("totalKm");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState<number>(20);
  const [page, setPage] = useState(1);

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

  const allRunners: NamedRunner[] = useMemo(() => {
    if (!data) return [];
    return Object.entries(data.runners).map(([name, r]) => ({ name, ...r }));
  }, [data]);

  const filteredByTab = useMemo(() => {
    if (tab === "all") return allRunners;
    return allRunners.filter((r) => r.team === tab);
  }, [allRunners, tab]);

  const filteredBySearch = useMemo(() => {
    const q = normalize(search);
    if (!q) return filteredByTab;
    return filteredByTab.filter((r) => normalize(r.name).includes(q));
  }, [filteredByTab, search]);

  const sorted = useMemo(() => {
    const list = [...filteredBySearch];
    list.sort((a, b) => {
      const aVal = sortKey === "todayKm" ? (a.todayKm ?? -1) : a[sortKey];
      const bVal = sortKey === "todayKm" ? (b.todayKm ?? -1) : b[sortKey];
      const diff = aVal - bVal;
      return sortDir === "desc" ? -diff : diff;
    });
    return list;
  }, [filteredBySearch, sortKey, sortDir]);

  const totalPages =
    pageSize === -1 ? 1 : Math.max(1, Math.ceil(sorted.length / pageSize));

  // Reset to page 1 whenever filters/sort/pageSize change underneath the user
  useEffect(() => {
    setPage(1);
  }, [tab, search, pageSize, sortKey, sortDir]);

  const paginated = useMemo(() => {
    if (pageSize === -1) return sorted;
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page, pageSize]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  if (loading) {
    return (
      <div className="mt-10 text-center text-sm text-gray-400">
        Đang tải danh sách runners...
      </div>
    );
  }

  if (!data || data.size === 0) {
    return null;
  }

  const TAB_CONFIG: Record<Tab, { label: string; activeClass: string }> = {
    all: { label: "🏆 Tất cả", activeClass: "bg-white text-gray-900 shadow" },
    rua: { label: "🐢 Rùa", activeClass: "bg-blue-600 text-white shadow" },
    tho: { label: "🐰 Thỏ", activeClass: "bg-yellow-500 text-white shadow" },
  };

  const rangeStart = pageSize === -1 ? 1 : (page - 1) * pageSize + 1;
  const rangeEnd =
    pageSize === -1 ? sorted.length : Math.min(page * pageSize, sorted.length);

  return (
    <section id="tat-ca-runners" className="max-w-7xl mx-auto px-4 pb-16">
      {!isLive && (
        <div className="mb-4 px-4 py-2 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-700">
          ⚠️ Đang hiển thị dữ liệu từ lần đồng bộ gần nhất (chưa kết nối được
          pmhr.fun real-time)
        </div>
      )}

      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Tất cả Runners
            </h2>
            <p className="text-sm text-gray-500">
              {sorted.length} / {filteredByTab.length} runners · Dữ liệu
              real-time từ pmhr.fun
            </p>
          </div>

          <div className="flex gap-1 bg-gray-100 rounded-full p-1">
            {(Object.keys(TAB_CONFIG) as Tab[]).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  tab === key
                    ? TAB_CONFIG[key].activeClass
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {TAB_CONFIG[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Search box */}
          <div className="relative max-w-sm w-full sm:w-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Tìm runner theo tên..."
              className="w-full px-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Page size selector */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Hiển thị</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="border border-gray-200 rounded-full px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {size === -1 ? "Tất cả" : size}
                </option>
              ))}
            </select>
            <span>runners / trang</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="text-left px-4 py-3 w-10">#</th>
                <th className="text-left px-4 py-3">Runner</th>
                {tab === "all" && <th className="text-left px-4 py-3">Team</th>}
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-gray-800 select-none"
                  onClick={() => handleSort("todayKm")}
                >
                  Hôm nay
                  <SortIcon active={sortKey === "todayKm"} dir={sortDir} />
                </th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-gray-800 select-none"
                  onClick={() => handleSort("totalKm")}
                >
                  Tổng km
                  <SortIcon active={sortKey === "totalKm"} dir={sortDir} />
                </th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-gray-800 select-none"
                  onClick={() => handleSort("streak")}
                >
                  Streak
                  <SortIcon active={sortKey === "streak"} dir={sortDir} />
                </th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={tab === "all" ? 6 : 5}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    Không tìm thấy runner nào khớp với &quot;{search}&quot;
                  </td>
                </tr>
              ) : (
                paginated.map((runner, i) => {
                  const badge = TEAM_BADGE[runner.team];
                  const rowNumber =
                    pageSize === -1 ? i + 1 : (page - 1) * pageSize + i + 1;
                  return (
                    <tr
                      key={`${runner.team}-${runner.name}`}
                      className="border-t border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 text-gray-400">{rowNumber}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {runner.name}
                      </td>
                      {tab === "all" && (
                        <td className="px-4 py-3">
                          {badge && (
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${badge.className}`}
                            >
                              {badge.emoji} {badge.label}
                            </span>
                          )}
                        </td>
                      )}
                      <td
                        className={`px-4 py-3 text-right ${runner.todayKm ? "text-green-600 font-medium" : "text-gray-400"}`}
                      >
                        {fmtKm(runner.todayKm)}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-gray-900">
                        {fmtKm(runner.totalKm)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {runner.streak > 0 ? (
                          <span className="text-orange-600 font-medium">
                            🔥 {runner.streak}
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        {pageSize !== -1 && sorted.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-gray-100">
            <span className="text-xs text-gray-500">
              Hiển thị {rangeStart}–{rangeEnd} / {sorted.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                ‹ Trước
              </button>
              <span className="px-3 text-sm text-gray-600">
                Trang {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Sau ›
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
