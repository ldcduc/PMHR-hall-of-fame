// src/app/lop-2025/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
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
import TotalDistanceModal from './TotalDistanceModal';


export default function LOP2025() {
  const [isHighestModalOpen, setIsHighestModalOpen] = useState(false);
  const [isLowestModalOpen, setIsLowestModalOpen] = useState(false);
  const [isTotalModalOpen, setIsTotalModalOpen] = useState(false);
  const [isFemaleModalOpen, setIsFemaleModalOpen] = useState(false);
  const [isMaleModalOpen, setIsMaleModalOpen] = useState(false);
  const [isTotalDistanceModalOpen, setIsTotalDistanceModalOpen] = useState(false);
  
  const totalRunners = getTotalRunners();
  const highestDistance = getHighestDistance();
  const lowestDistance = getLowestDistance();
  const leadingRunner = getLeadingRunner();
  
  // Thống kê giới tính
  const femaleRunners = lop2025Runners.filter(r => r.gender === "Nữ");
  const maleRunners = lop2025Runners.filter(r => r.gender === "Nam");
  const femaleCount = femaleRunners.length;
  const maleCount = maleRunners.length;

  // Tính tổng khoảng cách
  const totalDistance = lop2025Runners.reduce((sum, runner) => {
    return sum + parseFloat(runner.distance);
  }, 0).toFixed(2);

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
          <p className="text-base text-gray-500 mb-8">(Thời gian sự kiện: Từ ngày 29/06/2025 đến hết ngày 12/08/2025)</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Bảng xếp hạng vận động viên huyền thoại */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vận Động Viên Huyền Thoại 2025</h2>
            <p className="text-lg text-gray-600">
              Bảng xếp hạng - {totalRunners} vận động viên tính đến ngày 12 tháng 8, 2025
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Thống kê bảng xếp hạng - 6 cards in 3 columns and 2 rows */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 */}
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
              onClick={() => setIsTotalDistanceModalOpen(true)}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">{totalDistance}</div>
              <div className="text-gray-600">Tổng Khoảng Cách (KM)</div>
              <div className="text-xs text-green-500 mt-1">Nhấp để xem chi tiết</div>
            </div>
            
            {/* Row 2 */}
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
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsLowestModalOpen(true)}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">{lowestDistance}</div>
              <div className="text-gray-600">Tích Lũy LOP Tối Thiểu (KM)</div>
              <div className="text-xs text-orange-500 mt-1">Nhấp để xem chi tiết</div>
            </div>
          </div>

          <br></br>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Table Header with Click Instruction */}
            <div className="bg-gradient-to-r from-blue-600 to-yellow-500 px-6 py-4">
              <h3 className="text-white font-semibold text-lg">Bảng Xếp Hạng</h3>
              <p className="text-blue-100 text-sm mt-1">💡 Nhấp vào tên vận động viên để xem chứng chỉ hoàn thành</p>
            </div>
            
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
                    <Link 
                      key={runner.stt} 
                      href={`/lop-2025/certificate/${runner.stt}`}
                      className="table-row hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                    >
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {index < 3 ? (
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-200 inline-block">
                            {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                          </span>
                        ) : (
                          <span className="group-hover:text-blue-600 transition-colors duration-200">
                            {runner.stt}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 font-medium group-hover:text-blue-600 transition-colors duration-200">
                        <div className="flex items-center">
                          <span>{runner.name}</span>
                          <svg className="w-4 h-4 ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono font-semibold">
                        <span className={`group-hover:scale-105 transition-transform duration-200 inline-block ${runner.gender === "Nữ" ? "text-pink-600" : "text-blue-600"}`}>
                          {runner.distance}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${
                          runner.gender === "Nữ" 
                            ? "bg-pink-100 text-pink-800 group-hover:bg-pink-200" 
                            : "bg-blue-100 text-blue-800 group-hover:bg-blue-200"
                        }`}>
                          {runner.gender}
                        </span>
                      </td>
                    </Link>
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
                    <p className="text-gray-600">Kết thúc tính đến ngày 12 tháng 8, 2025</p>
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
                    <p className="text-gray-600">Đã kết thúc</p>
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
            Cuộc thi đã kết thúc! Tham gia Câu Lạc Bộ Chạy Bộ PHÚ MỸ HƯNG RUNNERS và cạnh tranh để trở thành Huyền Thoại mùa tiếp theo!.
          </p>
          <a
            href="https://www.facebook.com/groups/phumyhungrunnersclub"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Tham Gia Câu Lạc Bộ
          </a>
        </div>
      </section>

      {/* Modal Components - All 6 modals */}
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
      
      <TotalDistanceModal 
        isOpen={isTotalDistanceModalOpen} 
        onClose={() => setIsTotalDistanceModalOpen(false)}
        totalDistance={totalDistance}
        totalRunners={totalRunners}
        femaleCount={femaleCount}
        maleCount={maleCount}
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
      
      <LowestDistanceModal 
        isOpen={isLowestModalOpen} 
        onClose={() => setIsLowestModalOpen(false)}
        lowestDistance={lowestDistance}
        totalRunners={totalRunners}
      />
    </div>
  );
}