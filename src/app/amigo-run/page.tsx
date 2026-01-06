'use client';

import Image from 'next/image';
import PacerCard from '../../components/PacerCard';
import { pacers } from '../../data/pacers';

export default function AmigoRun() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 text-center bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">
            AMIGO RUN 2026
          </h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            PACER TEAM
          </h2>
          <p className="text-lg text-gray-600 mb-1">
            LONGRUN - Week 1 
          </p>
          <p className="text-sm text-gray-500 mb-6">
            18.01.2026
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Healthy • Active • Sport
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>📍 Phú Gia, Hà Huy Tập, KĐT Phú Mỹ Hưng</span>
            <span>🏃 4H45 CỔ MẬT TẠI TRẠM NƯỚC</span>
            <span>🏃 5H00 TẬP TRUNG KHỞI ĐÔNG</span>
            <span>🏃 5H15 XUẤT PHÁT</span>
          </div>
        </div>
      </section>

      {/* Pacer Teams Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* FM SUB 4H00/HM SUB 2H00 | 90 phút */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-400">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-4">
              <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                <div>Long run 70 phút | Pace 5:30</div>
                <div>HM SUB 2H00 | FM SUB 4H00</div>
              </h3>
            </div>
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pacers
                .filter(p => p.group === 'sub4h00')
                .map(pacer => (
                  <PacerCard key={pacer.id} pacer={pacer} />
                ))}
            </div>
          </div>

          {/* FM SUB 4H30/HM SUB 2H15 | 90 phút */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-400">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
              <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                <div>Long run 70 phút | Pace 6:30</div>
                <div>HM SUB 2H15 | FM SUB 4H30</div>
              </h3>
            </div>
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pacers
                .filter(p => p.group === 'sub4h30')
                .map(pacer => (
                  <PacerCard key={pacer.id} pacer={pacer} />
                ))}
            </div>
          </div>

          {/* Newbie Pacer */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-400 lg:col-span-2">
            <div className="bg-gradient-to-r from-green-400 to-green-500 p-4">
              <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                <div>Long run 70 phút | Pace Rùa</div>
                <div>NEWBIE PACER</div>
              </h3>
            </div>
            <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image 
                  src="/newbiepacer1.png" 
                  alt="Newbie Pacer 1" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image 
                  src="/newbiepacer2.png" 
                  alt="Newbie Pacer 2" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Club Footer */}
      <section className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-md">
              <Image src="/favicon.ico" alt="PMH Runners Club Logo" className="w-full h-full object-contain" width={40} height={40} />
            </div>
            <span className="text-2xl font-semibold bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              PHU MY HUNG RUNNERS CLUB
            </span>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-600 mb-4 font-semibold">Sponsored By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <span className="text-2xl font-bold text-blue-600">Amigo Run</span>
            <span className="text-2xl font-bold text-yellow-600">Phu My Hung Runners</span>
            <Image src="/ocany.png" alt="Ocany" width={120} height={48} className="h-12 w-auto object-contain" />
            <Image src="/pocari.png" alt="Pocari Sweat" width={120} height={48} className="h-12 w-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}