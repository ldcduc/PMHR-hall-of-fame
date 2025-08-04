// src/app/lop-2025/MaleStatsModal.tsx

import { lop2025Runners } from '../../data/lop2025Runners';

interface MaleStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalRunners: number;
}

export default function MaleStatsModal({ isOpen, onClose, totalRunners }: MaleStatsModalProps) {
  if (!isOpen) return null;

  // Thống kê VĐV nam
  const maleRunners = lop2025Runners.filter(r => r.gender === "Nam");
  const maleCount = maleRunners.length;
  const malePercentage = ((maleCount / totalRunners) * 100).toFixed(1);
  const topMaleRunner = maleRunners[0];

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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">👨</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thống Kê VĐV Nam</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4"></div>
        </div>

        <div className="space-y-4">
          {/* Tổng quan VĐV nam */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{maleCount}</div>
            <div className="text-gray-600">Tổng VĐV Nam ({malePercentage}% tổng số)</div>
          </div>

          {/* VĐV nam hàng đầu */}
          {topMaleRunner && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 text-center">🏆 VĐV Nam Xuất Sắc Nhất</h4>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-800 mb-1">{topMaleRunner.name}</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{topMaleRunner.distance} KM</div>
                <div className="text-sm text-gray-500">Vị trí #{topMaleRunner.stt} trong toàn bộ bảng xếp hạng</div>
              </div>
            </div>
          )}

          {/* Top 10 VĐV nam */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">🌟 Top 10 VĐV Nam Xuất Sắc</h4>
            <div className="space-y-2">
              {maleRunners.slice(0, 10).map((runner, index) => (
                <div key={runner.stt} className="flex justify-between items-center text-sm">
                  <span className="flex items-center">
                    {index < 3 ? (
                      <span className="text-2xl mr-2">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center mr-2">
                        {index + 1}
                      </span>
                    )}
                    <span className="font-medium">{runner.name}</span>
                  </span>
                  <div className="text-right">
                    <div className="text-blue-600 font-bold">{runner.distance} KM</div>
                    <div className="text-xs text-gray-500">#{runner.stt}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thống kê thêm */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-blue-600">
                {maleRunners.filter(r => parseFloat(r.distance) > 300).length}
              </div>
              <div className="text-xs text-gray-600">VĐV Nam &gt; 300 KM</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-blue-600">
                {maleRunners.filter(r => parseFloat(r.distance) > 200).length}
              </div>
              <div className="text-xs text-gray-600">VĐV Nam &gt; 200 KM</div>
            </div>
          </div>

          <p className="text-gray-600 text-sm text-center">
            💪 Thể hiện sức mạnh và tinh thần kiên trì của các VĐV nam trong LOP 2025!
          </p>
        </div>
      </div>
    </div>
  );
}