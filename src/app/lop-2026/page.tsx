"use client";

import { useState } from "react";
import {
  fullRosterRua,
  fullRosterTho,
  lastSyncedAt,
  type RosterRunner,
} from "./data/runners";
import LastSyncedBadge from "./components/LastSyncedBadge";
import TeamGapTable from "./components/TeamGapTable";
import AllRunnersTable from "./components/AllRunnersTable";

type TeamKey = "rua" | "tho";

interface DisplayRunner extends RosterRunner {
  team: TeamKey;
  overallRank: number; // rank within the currently selected view (1-based)
}

interface RunnerRecord {
  todayKm: number | null;
  totalKm: number;
  streak: number;
  team: string;
  updatedAt: string;
}

interface ApiResponseShape {
  size: number;
  lastSyncedAt: string | null;
  runners: Record<string, RunnerRecord>;
}

const TEAM_COLORS: Record<
  TeamKey,
  { bg: string; light: string; border: string; text: string; emoji: string }
> = {
  rua: {
    bg: "bg-blue-600",
    light: "bg-blue-50",
    border: "border-blue-300",
    text: "text-blue-700",
    emoji: "🐢",
  },
  tho: {
    bg: "bg-yellow-500",
    light: "bg-yellow-50",
    border: "border-yellow-300",
    text: "text-yellow-700",
    emoji: "🐇",
  },
};

const MEDAL: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Top 20 per team — explicitly sorted by totalKm (descending), not by array/rank order.
const top20Rua: DisplayRunner[] = fullRosterRua
  .map((r) => ({ ...r, team: "rua" as const, overallRank: r.rank }))
  .sort((a, b) => b.totalKm - a.totalKm)
  .slice(0, 20)
  .map((r, i) => ({ ...r, overallRank: i + 1 }));

const top20Tho: DisplayRunner[] = fullRosterTho
  .map((r) => ({ ...r, team: "tho" as const, overallRank: r.rank }))
  .sort((a, b) => b.totalKm - a.totalKm)
  .slice(0, 20)
  .map((r, i) => ({ ...r, overallRank: i + 1 }));

// Combined "overall" top 20 — merge both full rosters (rua + tho), sort by totalKm, re-rank 1-20.
const allRunnersForOverall: DisplayRunner[] = [
  ...fullRosterRua.map((r) => ({
    ...r,
    team: "rua" as const,
    overallRank: r.rank,
  })),
  ...fullRosterTho.map((r) => ({
    ...r,
    team: "tho" as const,
    overallRank: r.rank,
  })),
];

const top20Overall: DisplayRunner[] = [...allRunnersForOverall]
  .sort((a, b) => b.totalKm - a.totalKm)
  .slice(0, 20)
  .map((r, i) => ({ ...r, overallRank: i + 1 }));

// Convert the static roster arrays into the same shape the live API
// (/api/lop26-roster) returns, so TeamGapTable / AllRunnersTable can fall
// back to this data if the live in-memory sync is empty or has failed.
function staticRosterAsFallback(): ApiResponseShape {
  const runners: Record<string, RunnerRecord> = {};

  for (const r of fullRosterRua) {
    runners[r.name] = {
      todayKm: r.todayKm,
      totalKm: r.totalKm,
      streak: r.streak,
      team: "rua",
      updatedAt: lastSyncedAt,
    };
  }
  for (const r of fullRosterTho) {
    runners[r.name] = {
      todayKm: r.todayKm,
      totalKm: r.totalKm,
      streak: r.streak,
      team: "tho",
      updatedAt: lastSyncedAt,
    };
  }

  return { size: Object.keys(runners).length, lastSyncedAt, runners };
}

function RunnerCard({ runner }: { runner: DisplayRunner }) {
  const [imgError, setImgError] = useState(false);
  const tc = TEAM_COLORS[runner.team];
  const profileImage = runner.profileImage;
  const rank = runner.overallRank;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-lg border-2 ${
        rank <= 5 ? "border-yellow-400" : tc.border
      } flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl ${
        rank <= 5
          ? "bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100"
          : "bg-white"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Rank badge */}
      <div className="absolute top-3 left-3 z-10">
        {rank <= 3 ? (
          <span className="text-2xl leading-none">{MEDAL[rank]}</span>
        ) : (
          <span
            className={`inline-block px-2 py-0.5 rounded-full text-white text-xs font-bold ${tc.bg}`}
          >
            #{rank}
          </span>
        )}
      </div>

      {/* Status badge (only show ex-legend, since legend is the default expectation) */}
      {runner.status === "ex-legend" && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-0.5 bg-yellow-400 text-white text-xs font-bold py-0.5 px-2 rounded-full shadow">
            ● Hết HT
          </span>
        </div>
      )}

      {/* Photo */}
      <div
        className={`w-full h-44 flex items-center justify-center ${tc.light} overflow-hidden`}
      >
        {profileImage && !imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profileImage}
            alt={runner.name}
            className="w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center ${tc.bg} text-white text-2xl font-black select-none`}
          >
            {getInitials(runner.name)}
          </div>
        )}
      </div>

      {/* Team stripe */}
      <div className={`h-1.5 w-full ${tc.bg}`} />

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col gap-3">
        {/* Name + team */}
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-lg">{tc.emoji}</span>
            <span
              className={`text-xs font-bold uppercase tracking-wide ${tc.text}`}
            >
              {runner.team === "rua" ? "Rùa" : "Thỏ"}
            </span>
          </div>
          <h3 className="font-black text-gray-900 text-base leading-tight uppercase tracking-wide">
            {runner.name}
          </h3>
        </div>

        {/* Stats row */}
        <div className="mt-auto pt-2 border-t border-gray-100 grid grid-cols-3 gap-1 text-center">
          <div>
            <div
              className={`text-sm font-bold ${runner.todayKm ? "text-green-600" : "text-gray-400"}`}
            >
              {runner.todayKm ? `${runner.todayKm}` : "—"}
            </div>
            <div className="text-xs text-gray-400">Hôm nay</div>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">
              {runner.totalKm}
            </div>
            <div className="text-xs text-gray-400">Tổng KM</div>
          </div>
          <div>
            <div className="text-sm font-bold text-orange-500">
              {runner.streak > 0 ? `🔥 ${runner.streak}` : "—"}
            </div>
            <div className="text-xs text-gray-400">Streak</div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Tab = "overall" | "rua" | "tho";

const TAB_CONFIG: Record<
  Tab,
  { label: string; data: DisplayRunner[]; activeClass: string }
> = {
  overall: {
    label: "🏆 Tất cả",
    data: top20Overall,
    activeClass: "bg-white text-gray-900 shadow",
  },
  rua: {
    label: "🐢 Rùa",
    data: top20Rua,
    activeClass: "bg-blue-600 text-white shadow",
  },
  tho: {
    label: "🐇 Thỏ",
    data: top20Tho,
    activeClass: "bg-yellow-500 text-white shadow",
  },
};

export default function LOP26Page() {
  const [tab, setTab] = useState<Tab>("overall");
  const runners = TAB_CONFIG[tab].data;
  const fallbackData = staticRosterAsFallback();

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Hero */}
      <header className="bg-white border-b border-gray-200 py-10 text-center px-4">
        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Legends of PMHR 2026 · LOP26
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-1">
          🐢 <span className="text-blue-600">Rùa</span> vs{" "}
          <span className="text-yellow-500">Thỏ</span> 🐇
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          12/06/2026 → 28/07/2026 · Around the World Relay
        </p>
      </header>

      {/* Quick jump shortcuts */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <div className="flex gap-2 flex-wrap">
          <a
            href="/lop-2026/luat-choi"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
          >
            📖 Luật chơi (Cập nhật sau)
          </a>

          <a
            href="#so-sanh"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
          >
            📊 So sánh 2 team
          </a>

          <a
            href="#tat-ca-runners"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
          >
            🏃 Tất cả Runners
          </a>

          <a
            href="https://forms.gle/3SMpTuVLoSE1fGWq9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-sm font-semibold text-orange-700 hover:bg-orange-100 hover:border-orange-300 transition-colors shadow-sm"
          >
            📝 Báo cáo thiếu km
          </a>

          <a
            href="https://pmhr.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100 hover:border-gray-300 transition-colors shadow-sm"
          >
            🔗 Quay về pmhr.fun
          </a>
        </div>
      </div>

      {/* Top 20 section */}
      <section className="max-w-7xl mx-auto px-4 py-10 pb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Top 20 Runners
            </h2>
            <p className="text-sm text-gray-500">
              Những chiến binh dẫn đầu hành trình vòng quanh thế giới{" "}
              <LastSyncedBadge fallbackLastSyncedAt={lastSyncedAt} />
            </p>
          </div>

          {/* Tabs */}
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {runners.map((runner) => (
            <RunnerCard
              key={`${runner.team}-${runner.overallRank}`}
              runner={runner}
            />
          ))}
        </div>
      </section>

      {/* Team gap comparison table, with fallback to static file if live sync is empty/failed */}
      <TeamGapTable fallbackData={fallbackData} />

      {/* All runners sortable/searchable/paginated table, same fallback behavior */}
      <AllRunnersTable fallbackData={fallbackData} />
    </div>
  );
}
