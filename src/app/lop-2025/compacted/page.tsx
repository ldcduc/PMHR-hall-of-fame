// src/app/lop-2025/compacted/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toPng } from 'html-to-image';
import { 
  lop2025Runners, 
  getTotalRunners, 
  getHighestDistance, 
  getLowestDistance, 
  getLeadingRunner,
  getPersistentRunnersCount // Add this import
} from '../../../data/lop2025Runners';
import TotalRunnersModal from '../TotalRunnersModal';
import HighestDistanceModal from '../HighestDistanceModal';
import LowestDistanceModal from '../LowestDistanceModal';
import FemaleStatsModal from '../FemaleStatsModal';
import MaleStatsModal from '../MaleStatsModal';
import TotalDistanceModal from '../TotalDistanceModal';
import PersistentRunnerModal from '../PersistentRunnerModal';


export default function LOP2025() {
  const router = useRouter();
  const [isHighestModalOpen, setIsHighestModalOpen] = useState(false);
  const [isLowestModalOpen, setIsLowestModalOpen] = useState(false);
  const [isTotalModalOpen, setIsTotalModalOpen] = useState(false);
  const [isFemaleModalOpen, setIsFemaleModalOpen] = useState(false);
  const [isMaleModalOpen, setIsMaleModalOpen] = useState(false);
  const [isTotalDistanceModalOpen, setIsTotalDistanceModalOpen] = useState(false);
  const [isPersistentRunnerModalOpen, setIsPersistentRunnerModalOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  
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

  const handleRowClick = (stt: number) => {
    router.push(`/lop-2025/certificate/${stt}`);
  };

  const exportTableToPNG = async () => {
    const table1Element = document.getElementById('table-1');
    const table2Element = document.getElementById('table-2');
    
    if (!table1Element || !table2Element) return;

    setIsExporting(true);
    try {
      // Ensure all fonts are loaded
      await document.fonts.ready;
      
      const exportOptions = {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        // eslint-disable-next-line
        filter: (node: any) => {
          // Skip comment nodes and hidden elements
          if (node.nodeType === Node.COMMENT_NODE) return false;
          if (node instanceof HTMLElement) {
            const style = window.getComputedStyle(node);
            if (style.display === 'none' || style.visibility === 'hidden') {
              return false;
            }
          }
          return true;
        },
      };

      // Export Table 1 (Positions 1-50)
      const dataUrl1 = await toPng(table1Element, exportOptions);
      const link1 = document.createElement('a');
      link1.href = dataUrl1;
      link1.download = `LOP2025-Top50-${new Date().toISOString().split('T')[0]}.png`;
      document.body.appendChild(link1);
      link1.click();
      document.body.removeChild(link1);

      // Small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));

      // Export Table 2 (Positions 51-100+)
      const dataUrl2 = await toPng(table2Element, exportOptions);
      const link2 = document.createElement('a');
      link2.href = dataUrl2;
      link2.download = `LOP2025-Remaining-${new Date().toISOString().split('T')[0]}.png`;
      document.body.appendChild(link2);
      link2.click();
      document.body.removeChild(link2);

      alert('✅ Hai file bảng xếp hạng đã được tải xuống thành công!\n📁 File 1: Top 50 vận động viên\n📁 File 2: Các vận động viên còn lại');
    } catch (error) {
      console.error('Export failed:', error);
      alert('❌ Không thể xuất bảng. Vui lòng thử lại.');
    } finally {
      setIsExporting(false);
    }
  };

  // Helper function to render runner row
  // eslint-disable-next-line
  const renderRunnerRow = (runner: any, index: number) => (
    <div 
      key={runner.stt}
      className="border-b border-gray-100 p-2 hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
      onClick={() => handleRowClick(runner.stt)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 min-w-0 flex-1">
          <span className="font-bold text-gray-700 text-xs flex-shrink-0">
            {index < 3 ? (
              <span className="text-sm">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
              </span>
            ) : (
              `#${runner.stt}`
            )}
          </span>
          <span className="text-xs text-gray-900 group-hover:text-blue-600 transition-colors truncate">
            {runner.name}
          </span>
        </div>
        <div className="flex items-center space-x-1 flex-shrink-0">
          <span className={`font-bold text-xs ${runner.gender === "Nữ" ? "text-pink-600" : "text-blue-600"}`}>
            {runner.distance}
          </span>
          <span className={`text-xs px-1 py-0.5 rounded ${
            runner.gender === "Nữ" 
              ? "bg-pink-100 text-pink-700" 
              : "bg-blue-100 text-blue-700"
          }`}>
            {runner.gender}
          </span>
        </div>
      </div>
    </div>
  );

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
          <p className="text-lg text-gray-600 mb-4">Kết quả LOP 2025 - Bản Thu Gọn</p>
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

            {/* Row 3 */}
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsPersistentRunnerModalOpen(true)}
            >
              <div className="text-3xl font-bold text-red-600 mb-2">{getPersistentRunnersCount()} VĐV</div>
              <div className="text-gray-600">45 ngày miệt mài</div>
              <div className="text-xs text-red-500 mt-1">Nhấp để xem VĐV</div>
            </div>
          </div>

          <br />
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" id="lop-table">
            {/* Table Header with Click Instruction */}
            <div className="bg-gradient-to-r from-blue-600 to-yellow-500 px-4 py-3">
              <h3 className="text-white font-semibold text-base">Bảng Xếp Hạng LOP 2025 - {totalRunners} VĐV (Thu Gọn)</h3>
              <p className="text-blue-100 text-xs mt-1">💡 Nhấp vào tên vận động viên để xem chứng nhận hoàn thành</p>
            </div>
            
            <div className="overflow-x-auto">
              {/* 2 Tables Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                
                {/* Table 1: Positions 1-50 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden" id="table-1">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-2 text-center font-semibold text-sm">
                    Vị Trí 1-50
                  </div>
                  <div className="grid grid-cols-2 gap-0 text-xs">
                    {/* Column 1: Positions 1-25 */}
                    <div className="border-r border-gray-200">
                      <div className="bg-blue-100 text-blue-800 p-2 text-center font-semibold text-xs">
                        Vị Trí 1-25
                      </div>
                      {lop2025Runners.slice(0, 25).map((runner, index) => 
                        renderRunnerRow(runner, index)
                      )}
                    </div>
                    
                    {/* Column 2: Positions 26-50 */}
                    <div>
                      <div className="bg-blue-50 text-blue-700 p-2 text-center font-semibold text-xs">
                        Vị Trí 26-50
                      </div>
                      {lop2025Runners.slice(25, 50).map((runner, index) => 
                        renderRunnerRow(runner, index + 25)
                      )}
                    </div>
                  </div>
                </div>

                {/* Table 2: Positions 51-100+ */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden" id="table-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-2 text-center font-semibold text-sm">
                    Vị Trí 51-{lop2025Runners.length}
                  </div>
                  <div className="grid grid-cols-2 gap-0 text-xs">
                    {/* Column 1: Positions 51-75 */}
                    <div className="border-r border-gray-200">
                      <div className="bg-yellow-100 text-yellow-800 p-2 text-center font-semibold text-xs">
                        Vị Trí 51-75
                      </div>
                      {lop2025Runners.slice(50, 75).map((runner, index) => 
                        renderRunnerRow(runner, index + 50)
                      )}
                    </div>
                    
                    {/* Column 2: Positions 76-100+ */}
                    <div>
                      <div className="bg-yellow-50 text-yellow-700 p-2 text-center font-semibold text-xs">
                        Vị Trí 76-{lop2025Runners.length}
                      </div>
                      {lop2025Runners.slice(75).map((runner, index) => 
                        renderRunnerRow(runner, index + 75)
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Export Button */}
          <div className="mt-6 text-center">
            <button 
              onClick={exportTableToPNG}
              disabled={isExporting}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg transform hover:scale-105"
            >
              {isExporting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Đang xuất...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Xuất 2 Bảng Xếp Hạng (PNG)
                </>
              )}
            </button>
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

      {/* Modal Components - All 7 modals */}
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

      <PersistentRunnerModal 
        isOpen={isPersistentRunnerModalOpen} 
        onClose={() => setIsPersistentRunnerModalOpen(false)} 
      />
    </div>
  );
}