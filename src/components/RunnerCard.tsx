import Image from "next/image";
import { Runner } from "../types/runner";

interface RunnerCardProps {
  runner: Runner;
  isGolden?: boolean;
}

export default function RunnerCard({
  runner,
  isGolden = false,
}: RunnerCardProps) {
  return (
    <a
      href={`/runners/${runner.id}`}
      className="rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer group"
      style={
        isGolden
          ? {
              background:
                "linear-gradient(145deg, #fff9c4 0%, #ffe135 12%, #ffd700 25%, #ffbc00 40%, #ffd700 55%, #ffe135 70%, #fff3a0 82%, #ffd700 92%, #ffbc00 100%)",
              border: "2px solid #e6ac00",
              boxShadow:
                "0 0 0 1px #fffde0 inset, 0 4px 6px rgba(0,0,0,0.15), 0 10px 40px rgba(255, 210, 0, 0.6), 0 0 80px rgba(255, 200, 0, 0.25)",
            }
          : {
              background: "white",
              border: "2px solid #e5e7eb",
              boxShadow: "0 4px 6px rgba(0,0,0,0.07)",
            }
      }
    >
      {/* Image */}
      <div className="relative flex-shrink-0">
        <Image
          className="w-full h-48 object-cover"
          src={runner.profileImage || ""}
          width={0}
          height={0}
          sizes="100vw"
          alt={runner.name}
        />

        {/* Metallic sheen sweep across image */}
        {isGolden && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,200,0) 30%, rgba(255,255,200,0.45) 50%, rgba(255,255,200,0) 70%)",
            }}
          />
        )}

        {/* Top metallic bar */}
        {isGolden && (
          <div
            className="absolute top-0 inset-x-0 h-2"
            style={{
              background:
                "linear-gradient(90deg, #b8860b 0%, #ffe135 20%, #ffffff 40%, #ffe135 55%, #ffd700 70%, #b8860b 100%)",
            }}
          />
        )}

        {runner.isElite && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full shadow-lg">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              ELITE
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className="p-6 flex flex-col flex-1"
        style={
          isGolden
            ? {
                background:
                  "linear-gradient(175deg, #fff9a0 0%, #ffe135 30%, #ffd700 60%, #ffca00 100%)",
                borderTop: "1px solid rgba(255,255,200,0.6)",
              }
            : undefined
        }
      >
        {/* Name */}
        <h3
          className="text-lg font-bold mb-3 line-clamp-2 min-h-[3.5rem] transition-opacity duration-150 group-hover:opacity-75"
          style={
            isGolden
              ? {
                  color: "#3d2000",
                  textShadow:
                    "0 1px 3px rgba(255,240,100,0.8), 0 -1px 1px rgba(180,100,0,0.3)",
                }
              : { color: "#111827" }
          }
        >
          {runner.name}
        </h3>

        {/* PR stats */}
        <div className="space-y-2 mb-4">
          {[
            {
              label: "Half Marathon PR",
              value: runner.halfMarathonPR,
              colored: runner.halfMarathonPR !== "N/A",
            },
            {
              label: "Full Marathon PR",
              value: runner.fullMarathonPR,
              colored: false,
            },
          ].map(({ label, value, colored }) => (
            <div
              key={label}
              className="flex justify-between items-center rounded-lg px-2 py-1"
              style={
                isGolden
                  ? {
                      background:
                        "linear-gradient(90deg, rgba(255,255,180,0.5), rgba(255,220,0,0.4))",
                      border: "1px solid rgba(180,130,0,0.3)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
                    }
                  : undefined
              }
            >
              <span
                className="text-sm font-medium"
                style={isGolden ? { color: "#5c3300" } : { color: "#4b5563" }}
              >
                {label}:
              </span>
              <span
                className="font-mono text-sm font-bold"
                style={
                  isGolden
                    ? {
                        color: colored ? "#1d4ed8" : "#3d2000",
                        textShadow: "0 1px 2px rgba(255,230,80,0.6)",
                      }
                    : { color: colored ? "#2563eb" : "#111827" }
                }
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Achievement */}
        <div className="flex-1">
          <p
            className="text-sm line-clamp-2"
            style={isGolden ? { color: "#5c3300" } : { color: "#374151" }}
          >
            {runner.latestAchievement}
          </p>
        </div>
      </div>

      {/* Bottom metallic edge */}
      {isGolden && (
        <div
          className="h-1 flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, #b8860b 0%, #ffe135 25%, #ffffff 50%, #ffe135 75%, #b8860b 100%)",
          }}
        />
      )}
    </a>
  );
}
