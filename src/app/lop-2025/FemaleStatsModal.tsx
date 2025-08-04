// src/app/lop-2025/FemaleStatsModal.tsx

import { lop2025Runners } from '../../data/lop2025Runners';

interface FemaleStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalRunners: number;
}

export default function FemaleStatsModal({ isOpen, onClose, totalRunners }: FemaleStatsModalProps) {
  if (!isOpen) return null;

  // Thống kê VĐV nữ
  const femaleRunners = lop2025Runners.filter(r => r.gender === "Nữ");
  const femaleCount = femaleRunners.length;
  const femalePercentage = ((femaleCount / totalRunners) * 100).toFixed(1);
  const topFemaleRunner = femaleRunners[0];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">👩</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thống Kê VĐV Nữ</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-4"></div>
        </div>

        <div className="space-y-4">
          {/* Tổng quan VĐV nữ */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">{femaleCount}</div>
            <div className="text-gray-600">Tổng VĐV Nữ ({femalePercentage}% tổng số)</div>
          </div>

          {/* VĐV nữ hàng đầu */}
          {topFemaleRunner && (
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 text-center">🏆 VĐV Nữ Xuất Sắc Nhất</h4>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-800 mb-1">{topFemaleRunner.name}</div>
                <div className="text-2xl font-bold text-pink-600 mb-1">{topFemaleRunner.distance} KM</div>
                <div className="text-sm text-gray-500">Vị trí #{topFemaleRunner.stt} trong toàn bộ bảng xếp hạng</div>
              </div>
            </div>
          )}

          {/* Top 10 VĐV nữ */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">🌟 Top 10 VĐV Nữ Xuất Sắc</h4>
            <div className="space-y-2">
              {femaleRunners.slice(0, 10).map((runner, index) => (
                <div key={runner.stt} className="flex justify-between items-center text-sm">
                  <span className="flex items-center">
                    {index < 3 ? (
                      <span className="text-2xl mr-2">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center mr-2">
                        {index + 1}
                      </span>
                    )}
                    <span className="font-medium">{runner.name}</span>
                  </span>
                  <div className="text-right">
                    <div className="text-pink-600 font-bold">{runner.distance} KM</div>
                    <div className="text-xs text-gray-500">#{runner.stt}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thống kê thêm */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pink-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-pink-600">
                {femaleRunners.filter(r => parseFloat(r.distance) > 300).length}
              </div>
              <div className="text-xs text-gray-600">VĐV Nữ &gt; 300 KM</div>
            </div>
            <div className="bg-pink-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-pink-600">
                {femaleRunners.filter(r => parseFloat(r.distance) > 200).length}
              </div>
              <div className="text-xs text-gray-600">VĐV Nữ &gt; 200 KM</div>
            </div>
          </div>

          <p className="text-gray-600 text-sm text-center">
            💪 Thể hiện sức mạnh và tinh thần kiên trì của các VĐV nữ trong LOP 2025!
          </p>
        </div>
      </div>
    </div>
  );
}