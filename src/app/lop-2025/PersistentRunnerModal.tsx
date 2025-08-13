// src/app/lop-2025/PersistentRunnerModal.tsx
'use client';

import { getPersistentRunners } from '../../data/lop2025Runners';

export interface PersistentRunner {
  id: number;
  name: string;
  profileImage?: string;
}

interface PersistentRunnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PersistentRunnerModal({ isOpen, onClose }: PersistentRunnerModalProps) {
  // Get persistent runners from the actual LOP 2025 data
  const persistentRunners = getPersistentRunners();

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 text-white p-4 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center">
            <div className="mb-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-1">VĐV Kiên Trì LOP 2025</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Total Count */}
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-blue-600 mb-1">{persistentRunners.length}</div>
            <div className="text-gray-600 text-sm">VĐV Hoàn Thành 45 Ngày Miệt Mài</div>
          </div>

          {/* Runners List */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-3 mb-4">
            <h3 className="text-base font-semibold text-gray-800 mb-3">Danh Sách VĐV Kiên Trì</h3>
            
            <div className="space-y-2">
              {persistentRunners.map((runner) => (
                <div 
                  key={runner.stt}
                  className="flex items-center justify-between bg-white rounded-lg p-2 border border-orange-200 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center space-x-2">
                    {/* LOP 2025 Ranking Badge */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                      runner.stt === 1 
                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' // Gold
                        : runner.stt === 2 
                        ? 'bg-gradient-to-br from-gray-300 to-gray-500' // Silver  
                        : runner.stt === 3
                        ? 'bg-gradient-to-br from-amber-600 to-amber-800' // Bronze
                        : 'bg-blue-500' // Regular blue for others
                    }`}>
                      {runner.stt <= 3 ? (
                        <span className="text-sm">
                          {runner.stt === 1 ? '🥇' : runner.stt === 2 ? '🥈' : '🥉'}
                        </span>
                      ) : (
                        runner.stt
                      )}
                    </div>
                    
                    {/* Runner Name and Distance */}
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {runner.name} <span className="text-xs text-gray-500 font-normal">{runner.distance} KM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-800 text-xs font-medium px-1.5 py-0.5 rounded-full">
                    <span className="text-xs">🏆</span>
                    <span className="text-xs">45 ngày</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-slate-700">45</div>
              <div className="text-xs text-gray-600">Ngày Liên Tiếp</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-emerald-700">
                {persistentRunners.reduce((total, runner) => total + parseFloat(runner.distance), 0).toFixed(0)}
              </div>
              <div className="text-xs text-gray-600">Tổng KM Tích Lũy</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-600">
              🎉 Chúc mừng tất cả VĐV đã hoàn thành thử thách 45 ngày miệt mài! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}