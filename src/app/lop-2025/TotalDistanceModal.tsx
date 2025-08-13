// src/app/lop-2025/TotalDistanceModal.tsx

'use client';

import { lop2025Runners } from '../../data/lop2025Runners';

interface TotalDistanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalDistance: string;
  totalRunners: number;
  femaleCount: number;
  maleCount: number;
}

export default function TotalDistanceModal({ 
  isOpen, 
  onClose, 
  totalDistance, 
  totalRunners, 
  femaleCount, 
  maleCount 
}: TotalDistanceModalProps) {
  if (!isOpen) return null;

  // Tính toán thống kê chi tiết
  const femaleRunners = lop2025Runners.filter(r => r.gender === "Nữ");
  const maleRunners = lop2025Runners.filter(r => r.gender === "Nam");
  
  const totalFemaleDistance = femaleRunners.reduce((sum, runner) => {
    return sum + parseFloat(runner.distance);
  }, 0).toFixed(2);
  
  const totalMaleDistance = maleRunners.reduce((sum, runner) => {
    return sum + parseFloat(runner.distance);
  }, 0).toFixed(2);

  const averageDistance = (parseFloat(totalDistance) / totalRunners).toFixed(2);
  const averageFemaleDistance = (parseFloat(totalFemaleDistance) / femaleCount).toFixed(2);
  const averageMaleDistance = (parseFloat(totalMaleDistance) / maleCount).toFixed(2);

  // Phân tích mức độ thành tích
  const calculateDistanceRanges = () => {
    const distances = lop2025Runners.map(r => parseFloat(r.distance));
    const range200_300 = distances.filter(d => d >= 200 && d < 300).length;
    const range300_500 = distances.filter(d => d >= 300 && d < 500).length;
    const range500_700 = distances.filter(d => d >= 500 && d < 700).length;
    const range700plus = distances.filter(d => d >= 700).length;
    
    return { range200_300, range300_500, range500_700, range700plus };
  };

  const distanceRanges = calculateDistanceRanges();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-4 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">Tổng Khoảng Cách LOP 2025</h2>
              <p className="text-green-100 mt-1">Phân tích chi tiết tổng quãng đường</p>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-green-200 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tổng quan */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{totalDistance}</div>
              <div className="text-green-700 font-medium">Tổng Khoảng Cách (KM)</div>
              <div className="text-sm text-green-600 mt-2">Của tất cả {totalRunners} VĐV</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{averageDistance}</div>
              <div className="text-blue-700 font-medium">Trung Bình (KM)</div>
              <div className="text-sm text-blue-600 mt-2">Mỗi vận động viên</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {Math.round(parseFloat(totalDistance) * 100) / 100}
              </div>
              <div className="text-purple-700 font-medium">Chu Vi Trái Đất</div>
              <div className="text-sm text-purple-600 mt-2">≈ {(parseFloat(totalDistance) / 40075).toFixed(3)} vòng</div>
            </div>
          </div>

          {/* Phân tích theo giới tính */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Phân Tích Theo Giới Tính</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-pink-800">👩 Nữ VĐV</h4>
                  <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                    {femaleCount} người
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-pink-700">Tổng khoảng cách:</span>
                    <span className="font-bold text-pink-800">{totalFemaleDistance} KM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pink-700">Trung bình:</span>
                    <span className="font-bold text-pink-800">{averageFemaleDistance} KM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pink-700">Tỷ lệ tổng:</span>
                    <span className="font-bold text-pink-800">
                      {((parseFloat(totalFemaleDistance) / parseFloat(totalDistance)) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-800">👨 Nam VĐV</h4>
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {maleCount} người
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Tổng khoảng cách:</span>
                    <span className="font-bold text-blue-800">{totalMaleDistance} KM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Trung bình:</span>
                    <span className="font-bold text-blue-800">{averageMaleDistance} KM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Tỷ lệ tổng:</span>
                    <span className="font-bold text-blue-800">
                      {((parseFloat(totalMaleDistance) / parseFloat(totalDistance)) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phân tích mức độ thành tích */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Phân Bố Thành Tích</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">{distanceRanges.range200_300}</div>
                <div className="text-sm text-orange-700 font-medium">200-299 KM</div>
                <div className="text-xs text-orange-600 mt-1">Mới bắt đầu</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-1">{distanceRanges.range300_500}</div>
                <div className="text-sm text-yellow-700 font-medium">300-499 KM</div>
                <div className="text-xs text-yellow-600 mt-1">Tiến bộ</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{distanceRanges.range500_700}</div>
                <div className="text-sm text-green-700 font-medium">500-699 KM</div>
                <div className="text-xs text-green-600 mt-1">Xuất sắc</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">{distanceRanges.range700plus}</div>
                <div className="text-sm text-purple-700 font-medium">700+ KM</div>
                <div className="text-xs text-purple-600 mt-1">Huyền thoại của huyền thoại</div>
              </div>
            </div>
          </div>

          {/* Thông tin thú vị */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Thông Tin Thú Vị</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🌍</span>
                  <span>Tương đương {(parseFloat(totalDistance) / 40075).toFixed(2)} vòng quanh Trái Đất</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🏃‍♂️</span>
                  <span>Trung bình mỗi người chạy {averageDistance} KM</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">📅</span>
                  <span>Trong vòng 45 ngày (29/6 - 12/8/2025)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🚀</span>
                  <span>Tổng {Math.round(parseFloat(totalDistance) * 100) / 100} KM được hoàn thành</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  <span>Top runner: {Math.max(...lop2025Runners.map(r => parseFloat(r.distance)))} KM</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  <span>Trung bình {(parseFloat(totalDistance) / (45/7)).toFixed(0)} KM/tuần toàn đội</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Tiến độ tích lũy</span>
              <span>{totalDistance} KM</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min((parseFloat(totalDistance) / 30000) * 100, 100)}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1 text-center">
              Mục tiêu giả định: 30,000 KM ({((parseFloat(totalDistance) / 30000) * 100).toFixed(1)}% hoàn thành)
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
          <div className="flex justify-center">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 font-medium"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}