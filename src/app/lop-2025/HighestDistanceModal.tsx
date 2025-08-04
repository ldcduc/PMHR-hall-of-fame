// src/app/lop-2025/HighestDistanceModal.tsx

interface HighestDistanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadingRunner: {
    stt: number;
    name: string;
    distance: string;
    gender: string;
  };
}

export default function HighestDistanceModal({ isOpen, onClose, leadingRunner }: HighestDistanceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">🏆</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">VĐV Dẫn Đầu Hiện Tại</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg p-6 mb-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{leadingRunner.name}</h4>
            <div className="text-4xl font-bold text-yellow-500 mb-2">{leadingRunner.distance} KM</div>
            <div className="flex justify-center items-center gap-2">
              <span className="text-sm text-gray-500">Vị trí #{leadingRunner.stt}</span>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                leadingRunner.gender === "Nữ" 
                  ? "bg-pink-100 text-pink-800" 
                  : "bg-blue-100 text-blue-800"
              }`}>
                {leadingRunner.gender}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm">
            🎉 Đang dẫn đầu trong LOP 2025! Cuộc thi vẫn đang diễn ra.
          </p>
        </div>
      </div>
    </div>
  );
}