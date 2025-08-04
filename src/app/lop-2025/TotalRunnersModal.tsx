// src/app/lop-2025/TotalRunnersModal.tsx

import { lop2025Runners } from '../../data/lop2025Runners';

interface TotalRunnersModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalRunners: number;
}

export default function TotalRunnersModal({ isOpen, onClose, totalRunners }: TotalRunnersModalProps) {
  if (!isOpen) return null;

  const top10Runners = lop2025Runners.slice(0, 10);

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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">👥</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Cộng Đồng LOP 2025</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mb-4"></div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">{totalRunners}</div>
            <div className="text-gray-600">Tổng VĐV Huyền Thoại</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Top 10 VĐV Xuất Sắc</h4>
            <div className="space-y-2">
              {top10Runners.map((runner, index) => (
                <div key={runner.stt} className="flex justify-between items-center text-sm">
                  <span className="flex items-center">
                    {index < 3 ? (
                      <span className="text-2xl mr-2">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full bg-yellow-500 text-white text-xs flex items-center justify-center mr-2">
                        {index + 1}
                      </span>
                    )}
                    {runner.name}
                  </span>
                  <span className="text-blue-600 font-bold">{runner.distance} KM</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-lg font-bold text-blue-600">{lop2025Runners.filter(r => parseFloat(r.distance) > 300).length}</div>
              <div className="text-xs text-gray-600">Trên 300 KM</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-lg font-bold text-blue-600">{lop2025Runners.filter(r => parseFloat(r.distance) > 200).length}</div>
              <div className="text-xs text-gray-600">Trên 200 KM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}