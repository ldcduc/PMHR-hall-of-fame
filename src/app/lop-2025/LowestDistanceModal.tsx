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
  const bottom10Runners = lop2025Runners.slice(-10).reverse();

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
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">🎯</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Ngưỡng Đủ Điều Kiện</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-4"></div>
          
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 mb-6">
            <div className="text-4xl font-bold text-orange-500 mb-2">{lowestDistance} KM</div>
            <div className="text-gray-600">Khoảng Cách Tối Thiểu Để Đủ Điều Kiện</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">VĐV Đủ Điều Kiện</h4>
            <div className="flex justify-between items-center">
              <span className="font-medium">{lowestRunner.name}</span>
              <span className="text-orange-600 font-bold">{lowestRunner.distance} KM</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500">Vị trí #{lowestRunner.stt}</span>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                lowestRunner.gender === "Nữ" 
                  ? "bg-pink-100 text-pink-800" 
                  : "bg-blue-100 text-blue-800"
              }`}>
                {lowestRunner.gender}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">10 VĐV Cuối Bảng Đủ Điều Kiện</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {bottom10Runners.map((runner, index) => (
                <div key={runner.stt} className="flex justify-between items-center text-sm">
                  <span className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center mr-2">
                      {totalRunners - index}
                    </span>
                    <span className="flex items-center gap-1">
                      {runner.name}
                      <span className={`inline-flex items-center px-1 py-0.5 rounded text-xs font-medium ${
                        runner.gender === "Nữ" 
                          ? "bg-pink-100 text-pink-700" 
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {runner.gender}
                      </span>
                    </span>
                  </span>
                  <span className="text-orange-600 font-bold">{runner.distance} KM</span>
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