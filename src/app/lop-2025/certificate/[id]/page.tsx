// src/app/lop-2025/certificate/[id]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lop2025Runners } from '../../../../data/lop2025Runners';

interface PageProps {
  params: {
    id: string;
  };
}

export default function LOP2025Certificate({ params }: PageProps) {
  const runner = lop2025Runners.find(r => r.stt.toString() === params.id);
  
  if (!runner) {
    notFound();
  }

  const currentDate = new Date().toLocaleDateString('vi-VN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Calculate rank based on position in array (already sorted)
  const rank = lop2025Runners.findIndex(r => r.stt.toString() === params.id) + 1;
  
  // Get medal emoji for top 3
  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '🏆';
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'from-yellow-300 to-yellow-400';
    if (rank === 2) return 'from-gray-200 to-gray-400';
    if (rank === 3) return 'from-amber-300 to-amber-500';
    return 'from-blue-400 to-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/lop-2025"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Quay lại bảng xếp hạng LOP2025
          </Link>
        </div>

        {/* Certificate */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-yellow-300">
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-yellow-200 via-amber-300 to-blue-400 text-white py-8 px-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-amber-300 to-blue-300"></div>
            
            {/* Logo in top left */}
            {/* <div className="absolute top-4 left-4 z-10">
              <img 
                src="/logo.png" 
                alt="PMH Runners Logo" 
                className="w-10 h-10 opacity-60"
              />
            </div> */}
            
            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-yellow-200">
                  <span className="text-3xl">{getMedalEmoji(rank)}</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-blue-900">CHỨNG CHỈ HOÀN THÀNH</h1>
              <p className="text-xl opacity-90 text-blue-800">Legend of PMHR 2025</p>
              <div className="mt-4 inline-block bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-2 border border-yellow-200">
                <span className="font-semibold text-blue-900">PHÚ MỸ HƯNG RUNNERS</span>
              </div>
            </div>
          </div>

          {/* Certificate Body */}
          <div className="p-8 lg:p-12 relative">
            {/* Logo in top left of body */}
            <div className="absolute top-4 left-4">
              <img 
                src="/logo.png" 
                alt="PMH Runners Logo" 
                className="w-20 h-20 opacity-70"
              />
            </div>
            {/* Achievement Statement */}
            <div className="text-center mb-8">
              <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
                Chứng nhận rằng
              </p>
              
              {/* Runner Name - Large and Prominent */}
              <div className="mb-6">
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  {runner.name}
                </h2>
              </div>

              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                đã hoàn thành xuất sắc<br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
                  Legend of PMHR 2025
                </span>
              </p>
            </div>

            {/* Achievement Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column - Rank and Stats */}
              <div className="text-center">
                <div className={`relative w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center border-8 bg-gradient-to-r ${getRankColor(rank)} shadow-xl text-white`}>
                  <div className="text-center">
                    <div className="text-4xl mb-2">{getMedalEmoji(rank)}</div>
                    <div className="text-2xl font-bold">#{rank}</div>
                    <div className="text-sm opacity-90">Xếp hạng</div>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h3 className="font-semibold text-gray-800 mb-3">Thông Tin Vận Động Viên</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">STT:</span>
                      <span className="ml-2 font-semibold text-yellow-600">#{runner.stt}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Giới tính:</span>
                      <span className={`ml-2 font-semibold ${runner.gender === "Nữ" ? "text-pink-600" : "text-blue-600"}`}>
                        {runner.gender}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Achievement Records */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Thành Tích LOP 2025
                </h3>
                <div className="space-y-4">
                  {/* Total Distance Achievement */}
                  <div className={`bg-gradient-to-r ${runner.gender === "Nữ" ? "from-yellow-100 to-pink-100 border-l-4 border-yellow-500" : "from-yellow-100 to-blue-100 border-l-4 border-yellow-500"} rounded-lg p-6`}>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Tổng Quãng Đường Tích Lũy</div>
                      <div className={`text-4xl font-bold font-mono ${runner.gender === "Nữ" ? "text-pink-600" : "text-blue-600"}`}>
                        {runner.distance} KM
                      </div>
                    </div>
                  </div>

                  {/* Rank Achievement */}
                  <div className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Xếp hạng cuối cùng</span>
                      <span className="text-2xl font-bold text-yellow-500">
                        #{rank}/{lop2025Runners.length}
                      </span>
                    </div>
                  </div>

                  {/* Gender Rank */}
                  <div className={`bg-gradient-to-r ${runner.gender === "Nữ" ? "from-yellow-50 to-pink-50 border-l-4 border-yellow-400" : "from-yellow-50 to-blue-50 border-l-4 border-blue-400"} rounded-lg p-4`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Xếp hạng {runner.gender.toLowerCase()}</span>
                      <span className={`text-2xl font-bold ${runner.gender === "Nữ" ? "text-pink-600" : "text-blue-600"}`}>
                        #{lop2025Runners.filter(r => r.gender === runner.gender).findIndex(r => r.stt === runner.stt) + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 rounded-lg p-6 mb-8 border border-yellow-200">
              <h3 className="text-lg font-bold text-center text-gray-800 mb-4">
                🌟 Danh Hiệu Đạt Được 🌟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-yellow-100">
                  <div className="text-lg font-bold text-yellow-500">HUYỀN THOẠI</div>
                  <p className="text-xs text-gray-600">Legend of PMHR</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-amber-100">
                  <div className="text-lg font-bold text-amber-500">BỀN BỈ</div>
                  <p className="text-xs text-gray-600">Kiên trì luyện tập</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <div className="text-lg font-bold text-blue-500">XUẤT SẮC</div>
                  <p className="text-xs text-gray-600">Thành tích ấn tượng</p>
                </div>
              </div>
            </div>

            {/* Competition Period */}
            <div className="bg-yellow-50 rounded-lg p-4 mb-8 border border-yellow-300">
              <div className="text-center">
                <h4 className="font-semibold text-yellow-800 mb-2">Thời Gian Thi Đấu</h4>
                <p className="text-yellow-700">Tính đến hết ngày 04 tháng 8, 2025</p>
                <p className="text-sm text-yellow-600 mt-1">Cuộc thi vẫn đang diễn ra đến ngày 12/08/2025</p>
              </div>
            </div>

            {/* Signatures and Date */}
            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 pb-2 mb-2 mx-8">
                    <span className="text-lg font-elegant">PHÚ MỸ HƯNG RUNNERS</span>
                  </div>
                  <p className="text-sm text-gray-600">Ban Tổ Chức</p>
                </div>
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 pb-2 mb-2 mx-8">
                    <span className="text-lg font-elegant">{currentDate}</span>
                  </div>
                  <p className="text-sm text-gray-600">Ngày Cấp Chứng Chỉ</p>
                </div>
              </div>
            </div>

            {/* Certificate ID */}
            <div className="text-center mt-8">
              <p className="text-xs text-gray-500">
                Mã Chứng Chỉ: LOP2025-{runner.stt.toString().padStart(4, '0')}
              </p>
            </div>
          </div>

          {/* Decorative Border */}
          <div className="h-4 bg-gradient-to-r from-yellow-300 via-amber-300 to-blue-300"></div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-x-4">
          <button className="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-200 shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Tải Chứng Chỉ
          </button>
          <button className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Chia Sẻ Chứng Chỉ
          </button>
        </div>

        {/* Achievement Summary */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-100">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
            📊 Thống Kê Cá Nhân
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white rounded-lg p-4">
              <div className="text-2xl font-bold">{runner.distance}</div>
              <div className="text-sm opacity-90">KM Tích Lũy</div>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg p-4">
              <div className="text-2xl font-bold">#{rank}</div>
              <div className="text-sm opacity-90">Xếp Hạng Chung</div>
            </div>
            <div className={`bg-gradient-to-br ${runner.gender === "Nữ" ? "from-pink-400 to-pink-500" : "from-blue-400 to-blue-500"} text-white rounded-lg p-4`}>
              <div className="text-2xl font-bold">
                #{lop2025Runners.filter(r => r.gender === runner.gender).findIndex(r => r.stt === runner.stt) + 1}
              </div>
              <div className="text-sm opacity-90">Xếp Hạng {runner.gender}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-lg p-4">
              <div className="text-2xl font-bold">2025</div>
              <div className="text-sm opacity-90">Năm Thi Đấu</div>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl p-6 border border-yellow-300">
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            🎉 Chúc Mừng Vận Động Viên Huyền Thoại! 🎉
          </h4>
          <p className="text-gray-600">
            Thành tích của bạn trong LOP 2025 là minh chứng cho sự kiên trì, nỗ lực và tinh thần thể thao cao cả. 
            Hãy tiếp tục duy trì phong độ và chinh phục những thử thách mới!
          </p>
        </div>
      </div>
    </div>
  );
}