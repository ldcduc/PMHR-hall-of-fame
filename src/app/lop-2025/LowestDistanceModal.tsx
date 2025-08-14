// src/app/lop-2025/LowestDistanceModal.tsx

import { lop2025Runners } from '../../data/lop2025Runners';

interface LowestDistanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  lowestDistance: string;
  totalRunners: number;
}

export default function LowestDistanceModal({ isOpen, onClose, lowestDistance, totalRunners }: LowestDistanceModalProps) {
  if (!isOpen) return null;

  const lowestRunner = lop2025Runners[lop2025Runners.length - 1];
  // Show 10 runners without scrolling for complete screenshot
  const bottomRunners = lop2025Runners.slice(-10).reverse();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-50 pt-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
        
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">🎯</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Ngưỡng Đủ Điều Kiện</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-4"></div>
        </div>

        <div className="space-y-4">
          {/* Ngưỡng đủ điều kiện */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">{lowestDistance} KM</div>
            <div className="text-gray-600">Khoảng Cách Tối Thiểu Để Đủ Điều Kiện</div>
          </div>

          {/* VĐV đủ điều kiện */}
          {lowestRunner && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 text-center">🏆 VĐV Cuối Cùng Đủ Điều Kiện</h4>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-800 mb-1">{lowestRunner.name}</div>
                <div className="text-2xl font-bold text-orange-600 mb-1">{lowestRunner.distance} KM</div>
                <div className="text-sm text-gray-500">Vị trí #{lowestRunner.stt}</div>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">10 VĐV Cuối Bảng Đủ Điều Kiện</h4>
            <div className="space-y-2">
              {bottomRunners.map((runner, index) => (
                <div key={runner.stt} className="flex justify-between items-center text-sm">
                  <span className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center mr-2">
                      {totalRunners - index}
                    </span>
                    <span className="font-medium">{runner.name}</span>
                  </span>
                  <div className="text-right">
                    <div className="text-orange-600 font-bold">{runner.distance} KM</div>
                    <div className="text-xs text-gray-500">
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${
                        runner.gender === "Nữ" 
                          ? "bg-pink-100 text-pink-700" 
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {runner.gender}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-gray-600 text-sm text-center">
            🌟 Khoảng cách tối thiểu cần thiết để đạt được tình trạng Huyền Thoại trong LOP 2025.
          </p>
        </div>
      </div>
    </div>
  );
}