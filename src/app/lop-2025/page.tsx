// src/app/lop-2025/page.tsx

'use client';

import { useState } from 'react';
import { 
  lop2025Runners, 
  getTotalRunners, 
  getHighestDistance, 
  getLowestDistance, 
  getLeadingRunner 
} from '../../data/lop2025Runners';
import TotalRunnersModal from './TotalRunnersModal';
import HighestDistanceModal from './HighestDistanceModal';
import LowestDistanceModal from './LowestDistanceModal';
import FemaleStatsModal from './FemaleStatsModal';
import MaleStatsModal from './MaleStatsModal';

export default function LOP2025() {
  const [isHighestModalOpen, setIsHighestModalOpen] = useState(false);
  const [isLowestModalOpen, setIsLowestModalOpen] = useState(false);
  const [isTotalModalOpen, setIsTotalModalOpen] = useState(false);
  const [isFemaleModalOpen, setIsFemaleModalOpen] = useState(false);
  const [isMaleModalOpen, setIsMaleModalOpen] = useState(false);
  
  const totalRunners = getTotalRunners();
  const highestDistance = getHighestDistance();
  const lowestDistance = getLowestDistance();
  const leadingRunner = getLeadingRunner();
  
  // Thống kê giới tính
  const femaleRunners = lop2025Runners.filter(r => r.gender === "Nữ");
  const maleRunners = lop2025Runners.filter(r => r.gender === "Nam");
  const femaleCount = femaleRunners.length;
  const maleCount = maleRunners.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-blue-50">
      {/* Phần giới thiệu chính */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              Legend of PMHR
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">2025</h2>
          <p className="text-lg text-gray-600 mb-4">Kết quả LOP 2025</p>
          <p className="text-base text-gray-500 mb-8">(Tính đến hết ngày 04/08/2025)</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Bảng xếp hạng vận động viên huyền thoại */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vận Động Viên Huyền Thoại 2025</h2>
            <p className="text-lg text-gray-600">
              Bảng xếp hạng hiện tại - {totalRunners} vận động viên tính đến ngày 04 tháng 8, 2025
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Thống kê bảng xếp hạng - Updated with 5 cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsTotalModalOpen(true)}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalRunners}</div>
              <div className="text-gray-600">Tổng VĐV Huyền Thoại</div>
              <div className="text-xs text-blue-500 mt-1">Nhấp để xem chi tiết</div>
            </div>
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsHighestModalOpen(true)}
            >
              <div className="text-3xl font-bold text-yellow-500 mb-2">{highestDistance}</div>
              <div className="text-gray-600">Tích Lũy Cao Nhất (KM)</div>
              <div className="text-xs text-yellow-500 mt-1">Nhấp để xem người dẫn đầu</div>
            </div>
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsLowestModalOpen(true)}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">{lowestDistance}</div>
              <div className="text-gray-600">Tích Lũy LOP Tối Thiểu (KM)</div>
              <div className="text-xs text-orange-500 mt-1">Nhấp để xem chi tiết</div>
            </div>
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsFemaleModalOpen(true)}
            >
              <div className="text-3xl font-bold text-pink-600 mb-2">{femaleCount}</div>
              <div className="text-gray-600">VĐV Nữ</div>
              <div className="text-xs text-pink-500 mt-1">Nhấp để xem thống kê</div>
            </div>
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsMaleModalOpen(true)}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{maleCount}</div>
              <div className="text-gray-600">VĐV Nam</div>
              <div className="text-xs text-blue-500 mt-1">Nhấp để xem thống kê</div>
            </div>
          </div>

          <br></br>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Tên Strava</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Tổng KM</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Giới tính</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {lop2025Runners.map((runner, index) => (
                    <tr key={runner.stt} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {index < 3 ? (
                          <span className="text-2xl">
                            {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                          </span>
                        ) : (
                          runner.stt
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                        {runner.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono font-semibold">
                        <span className={runner.gender === "Nữ" ? "text-pink-600" : "text-blue-600"}>
                          {runner.distance}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          runner.gender === "Nữ" 
                            ? "bg-pink-100 text-pink-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {runner.gender}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Phần chi tiết sự kiện */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tiến Độ LOP 2025</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📅</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Tình Trạng Hiện Tại</h3>
                    <p className="text-gray-600">Tính đến ngày 03 tháng 8, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏃‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">VĐV Dẫn Đầu</h3>
                    <p className="text-gray-600">{leadingRunner.name} - {leadingRunner.distance} KM</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">👩‍🏃‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phân Bố Giới Tính</h3>
                    <p className="text-gray-600">{femaleCount} Nữ, {maleCount} Nam</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Cuộc Thi</h3>
                    <p className="text-gray-600">Vẫn Đang Diễn Ra!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lời kêu gọi hành động */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tham Gia Huyền Thoại 2025
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Cuộc thi vẫn đang diễn ra! Tham gia Câu Lạc Bộ Chạy Bộ PHÚ MỸ HƯNG và cạnh tranh để trở thành Huyền Thoại.
          </p>
          <a
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Tham Gia Câu Lạc Bộ
          </a>
        </div>
      </section>

      {/* Modal Components */}
      <TotalRunnersModal 
        isOpen={isTotalModalOpen} 
        onClose={() => setIsTotalModalOpen(false)}
        totalRunners={totalRunners}
      />
      
      <HighestDistanceModal 
        isOpen={isHighestModalOpen} 
        onClose={() => setIsHighestModalOpen(false)}
        leadingRunner={leadingRunner}
      />
      
      <LowestDistanceModal 
        isOpen={isLowestModalOpen} 
        onClose={() => setIsLowestModalOpen(false)}
        lowestDistance={lowestDistance}
        totalRunners={totalRunners}
      />
      
      <FemaleStatsModal 
        isOpen={isFemaleModalOpen} 
        onClose={() => setIsFemaleModalOpen(false)}
        totalRunners={totalRunners}
      />
      
      <MaleStatsModal 
        isOpen={isMaleModalOpen} 
        onClose={() => setIsMaleModalOpen(false)}
        totalRunners={totalRunners}
      />
    </div>
  );
}