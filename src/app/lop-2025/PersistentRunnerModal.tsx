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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[98vh] sm:max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 text-white p-3 sm:p-4 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center">
            <div className="mb-2 sm:mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-bold mb-1">VĐV Kiên Trì LOP 2025</h2>
            <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 sm:p-4">
            {/* Total Count */}
            <div className="text-center mb-3 sm:mb-4">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{persistentRunners.length}</div>
              <div className="text-gray-600 text-xs sm:text-sm">VĐV Hoàn Thành 45 Ngày Miệt Mài</div>
            </div>

            {/* Runners List */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">Danh Sách VĐV Kiên Trì</h3>
              
              <div className="space-y-1.5 sm:space-y-2">
                {persistentRunners.map((runner) => (
                  <div 
                    key={runner.stt}
                    className="flex items-center justify-between bg-white rounded-lg p-1.5 sm:p-2 border border-orange-200 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center space-x-1.5 sm:space-x-2 flex-1 min-w-0">
                      {/* LOP 2025 Ranking Badge */}
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${
                        runner.stt === 1 
                          ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' // Gold
                          : runner.stt === 2 
                          ? 'bg-gradient-to-br from-gray-300 to-gray-500' // Silver  
                          : runner.stt === 3
                          ? 'bg-gradient-to-br from-amber-600 to-amber-800' // Bronze
                          : 'bg-blue-500' // Regular blue for others
                      }`}>
                        {runner.stt <= 3 ? (
                          <span className="text-xs sm:text-sm">
                            {runner.stt === 1 ? '🥇' : runner.stt === 2 ? '🥈' : '🥉'}
                          </span>
                        ) : (
                          runner.stt
                        )}
                      </div>
                      
                      {/* Runner Name and Distance */}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 text-xs sm:text-sm truncate">
                          {runner.name} <span className="text-xs text-gray-500 font-normal">{runner.distance} KM</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-0.5 sm:gap-1 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-800 text-xs font-medium px-1 sm:px-1.5 py-0.5 rounded-full flex-shrink-0 ml-1">
                      <span className="text-xs">🏆</span>
                      <span className="text-xs hidden sm:inline">45 ngày</span>
                      <span className="text-xs sm:hidden">45</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-xl font-bold text-slate-700">45</div>
                <div className="text-xs text-gray-600">Ngày Liên Tiếp</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-xl font-bold text-emerald-700">
                  {persistentRunners.reduce((total, runner) => total + parseFloat(runner.distance), 0).toFixed(0)}
                </div>
                <div className="text-xs text-gray-600">Tổng KM Tích Lũy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 border-t border-gray-200 flex-shrink-0">
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