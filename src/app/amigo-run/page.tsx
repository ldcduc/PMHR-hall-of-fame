"use client";

import Image from "next/image";
import PacerCard from "../../components/PacerCard";
import { pacers } from "../../data/pacers";

export default function AmigoRun() {
  return (
    <>
      {/* Background wrapper that doesn't interfere with header/footer */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url(/vietnamese-new-year-bg.png)",
        }}
      >
        {/* Background overlay for entire content */}
        <div className="min-h-screen bg-black/20">
          {/* Hero Section */}
          <section className="py-12 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white drop-shadow-lg">
                AMIGO RUN Bính Ngọ 2026
              </h1>
              <h2 className="text-2xl font-bold text-yellow-200 mb-2 drop-shadow-md">
                Beer Run PACER TEAM
              </h2>
              <p className="text-lg text-white mb-1 drop-shadow-md">
                LONGRUN - Tuần 1
              </p>
              <p className="text-sm text-yellow-200 mb-6 drop-shadow-md">
                01.03.2026
              </p>
              <p className="text-white max-w-2xl mx-auto mb-4 drop-shadow-md">
                Healthy • Active • Sport
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white drop-shadow-md">
                <span>📍 Phú Gia, Hà Huy Tập, KĐT Phú Mỹ Hưng</span>
                <span>🏃 4H30 CỔ MẬT TẠI TRẠM NƯỚC</span>
                <span>🏃 4H45 TẬP TRUNG KHỞI ĐÔNG</span>
                <span>🏃 5H00 XUẤT PHÁT</span>
              </div>
            </div>
          </section>

          {/* Pacer Teams Grid + Sponsors */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* FM SUB 4H00/HM SUB 2H00 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-400">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                    <div>Long run 90 phút | Pace 5:00</div>
                    <div>HM SUB 1H45 | FM SUB 3H30</div>
                  </h3>
                </div>
                <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pacers
                    .filter((p) => p.group === "500")
                    .map((pacer) => (
                      <PacerCard key={pacer.id} pacer={pacer} />
                    ))}
                </div>
              </div>

              {/* FM SUB 4H00/HM SUB 2H00 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-400">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                    <div>Long run 90 phút | Pace 5:30</div>
                    <div>HM SUB 2H00 | FM SUB 4H00</div>
                  </h3>
                </div>
                <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pacers
                    .filter((p) => p.group === "530")
                    .map((pacer) => (
                      <PacerCard key={pacer.id} pacer={pacer} />
                    ))}
                </div>
              </div>

              {/* FM SUB 4H30/HM SUB 2H15 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-400">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                    <div>Long run 90 phút | Pace 6:30</div>
                    <div>HM SUB 2H15 | FM SUB 4H30</div>
                  </h3>
                </div>
                <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pacers
                    .filter((p) => p.group === "sub4h30")
                    .map((pacer) => (
                      <PacerCard key={pacer.id} pacer={pacer} />
                    ))}
                </div>
              </div>

              {/* Newbie Pacer */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-400">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                    <div>Pace rùa</div>
                    <div>Newbie</div>
                  </h3>
                </div>
                <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pacers
                    .filter((p) => p.group === "newbie2")
                    .map((pacer) => (
                      <PacerCard key={pacer.id} pacer={pacer} />
                    ))}
                </div>
              </div>

              {/* Newbie Pacer */}
              {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-400 lg:col-span-2">
                <div className="bg-gradient-to-r from-green-400 to-green-500 p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                    <div>Long run 70 phút | Pace Rùa</div>
                    <div>NEWBIE PACER</div>
                  </h3>
                </div>
                <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/.png"
                      alt="Newbie Pacer 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/.png"
                      alt="Newbie Pacer 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div> */}

              {/* SPONSORS - ngay dưới Newbie Pacer */}
              <div className="lg:col-span-2">
                <div
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    padding: "24px",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h3
                      style={{
                        color: "#374151",
                        marginBottom: "16px",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      Sponsored By
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "24px",
                      }}
                    >
                      {/* Amigo Run */}
                      <span
                        style={{
                          fontSize: "22px",
                          fontWeight: "bold",
                          color: "#2563eb",
                        }}
                      >
                        Amigo Run
                      </span>

                      {/* PMH Runners */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            background:
                              "linear-gradient(to bottom right, #fbbf24, #d97706)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <Image
                            src="/favicon.ico"
                            alt="PMH Runners Club Logo"
                            width={40}
                            height={40}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#ca8a04",
                          }}
                        >
                          PHU MY HUNG RUNNERS
                        </span>
                      </div>

                      {/* Ocany */}
                      <Image
                        src="/ocany.png"
                        alt="Ocany"
                        width={120}
                        height={48}
                        style={{
                          height: "48px",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />

                      {/* Pocari */}
                      <Image
                        src="/pocari.png"
                        alt="Pocari Sweat"
                        width={120}
                        height={48}
                        style={{
                          height: "48px",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />

                      {/* BRC Logo */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            border: "2px solid #1e3a5f",
                            flexShrink: 0,
                          }}
                        >
                          <Image
                            src="/brc-logo.png"
                            alt="Beer Runners Club Logo"
                            width={64}
                            height={64}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#1e3a5f",
                          }}
                        >
                          BEER RUN PACER TEAM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-8"></div>
        </div>
      </div>
    </>
  );
}
