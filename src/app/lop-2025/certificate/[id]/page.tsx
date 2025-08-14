// src/app/lop-2025/certificate/[id]/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { lop2025Runners } from '../../../../data/lop2025Runners';
import { toPng, toJpeg } from 'html-to-image';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function LOP2025Certificate({ params }: PageProps) {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [id, setId] = useState<string>('');
  // eslint-disable-next-line
  const [runner, setRunner] = useState<any>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
      const foundRunner = lop2025Runners.find(r => r.stt.toString() === resolvedParams.id);
      setRunner(foundRunner);
    };
    getParams();
  }, [params]);

  // Password check function
  const checkPasswordAndExport = () => {
    const password = prompt('Chức năng chưa được công khai, nhập password để tiếp tục:');
    
    if (password === null) {
      // User cancelled the prompt
      return;
    }
    
    if (password === '312645') {
      // Correct password, proceed with export
      downloadCertificateHtmlToImage();
    } else {
      // Wrong password
      alert('❌ Password không đúng. Vui lòng thử lại.');
    }
  };

  // Method 1: html-to-image - Better for modern browsers and CSS handling
  const downloadCertificateHtmlToImage = async () => {
    if (!certificateRef.current || !runner) return;

    setIsExporting(true);
    try {
      console.log('Starting html-to-image export...');
      
      // Scroll to certificate and wait for render
      certificateRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Ensure all fonts are loaded
      await document.fonts.ready;
      
      // Wait for any pending images
      const images = certificateRef.current.querySelectorAll('img');
      await Promise.all(Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
        });
      }));

      console.log('All resources loaded, capturing...');

      // Primary attempt with high quality settings
      const dataUrl = await toPng(certificateRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        width: certificateRef.current.offsetWidth,
        height: certificateRef.current.offsetHeight,
        canvasWidth: certificateRef.current.offsetWidth * 2,
        canvasHeight: certificateRef.current.offsetHeight * 2,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        },
        filter: (node) => {
          // Skip comment nodes and hidden elements
          if (node.nodeType === Node.COMMENT_NODE) return false;
          if (node instanceof HTMLElement) {
            const style = window.getComputedStyle(node);
            if (style.display === 'none' || style.visibility === 'hidden') {
              return false;
            }
          }
          return true;
        },
      });

      // Download the image
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `PMHR-LOP2025-Certificate-${runner.name.replace(/\s+/g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log('html-to-image export successful');
      alert('✅ Chứng nhận đã được tải xuống thành công, chúc mừng bạn đã hoàn thành LOP2025. 🎉');

    } catch (error) {
      console.error('html-to-image failed:', error);
      
      // Fallback to JPEG with lower quality
      try {
        console.log('Trying JPEG fallback...');
        const jpegDataUrl = await toJpeg(certificateRef.current!, {
          quality: 0.9,
          pixelRatio: 1.5,
          backgroundColor: '#ffffff',
        });

        const link = document.createElement('a');
        link.href = jpegDataUrl;
        link.download = `PMHR-LOP2025-Certificate-${runner.name.replace(/\s+/g, '-')}-JPEG.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('JPEG fallback successful');
        alert('✅ Chứng nhận đã được tải xuống (JPEG fallback)!\n\nĐã sử dụng format JPEG để đảm bảo tương thích. 📸');

      } catch (fallbackError) {
        console.error('JPEG fallback also failed:', fallbackError);
        alert('❌ html-to-image không thành công.\n\nLỗi: ' + (error as Error).message + '\n\nVui lòng thử phương pháp HTML2Canvas.');
      }
    } finally {
      setIsExporting(false);
    }
  };

  if (!runner) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-blue-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Đang tải chứng nhận...</p>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line
  const currentDate = new Date().toLocaleDateString('vi-VN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Calculate rank based on position in array (already sorted)
  const rank = lop2025Runners.findIndex(r => r.stt.toString() === id) + 1;
  
  // Get medal emoji for top 3
  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '🏆';
  };

  // const getRankColor = (rank: number) => {
  //   if (rank === 1) return 'from-yellow-300 to-yellow-400';
  //   if (rank === 2) return 'from-gray-200 to-gray-400';
  //   if (rank === 3) return 'from-amber-300 to-amber-500';
  //   return 'from-blue-400 to-blue-500';
  // };

  const shareToFacebook = () => {
    const url = window.location.href;
    const text = `Tôi ${runner.name} đã hoàn thành Legend of PMHR 2025! 🏆 Xếp hạng #${rank}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-blue-50 py-4 md:py-8">
      <div className="max-w-2xl md:max-w-3xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-4">
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
        <div 
          ref={certificateRef} 
          className="bg-white rounded-lg md:rounded-xl shadow-2xl overflow-hidden border-3 md:border-6 border-yellow-300"
          style={{ 
            position: 'relative',
            isolation: 'isolate'
          }}
        >
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-yellow-200 via-amber-300 to-blue-400 text-white py-3 md:py-6 px-3 md:px-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-yellow-300 via-amber-300 to-blue-300"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-2 md:mb-3">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-yellow-200">
                  <span className="text-lg md:text-2xl">{getMedalEmoji(rank)}</span>
                </div>
              </div>
              <h1 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-blue-900">CHỨNG NHẬN HOÀN THÀNH</h1>
              <p className="text-sm md:text-lg opacity-90 text-blue-800">Legend of PMHR 2025</p>
              <div className="mt-2 md:mt-3 inline-block bg-blue-600/20 backdrop-blur-sm rounded-full px-2 md:px-4 py-1 border border-yellow-200">
                <span className="font-semibold text-blue-900 text-xs md:text-sm">PHÚ MỸ HƯNG RUNNERS</span>
              </div>
            </div>
          </div>

          {/* Certificate Body */}
          <div className="p-3 md:p-6 lg:p-8 relative bg-gray-100">
            {/* Achievement Statement */}
            <div className="text-center mb-3 md:mb-6">
              <p className="text-base md:text-xl text-gray-700 mb-2 md:mb-4 leading-relaxed">
                Chứng nhận rằng
              </p>
              
              {/* Runner Name */}
              <div className="mb-2 md:mb-4">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-500 bg-clip-text text-transparent mb-2 md:mb-3 break-words">
                  {runner.name}
                </h2>
              </div>

              <p className="text-base md:text-xl text-gray-700 mb-3 md:mb-6 leading-relaxed">
                đã hoàn thành xuất sắc 45 ngày<br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
                  Legend of PMHR 2025
                </span>
              </p>
            </div>

            {/* Achievement Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-6">
                {/* Left Column - Rank and Stats */}
                <div className="flex items-center justify-center">
                  <div>
                    <Image 
                      src="/logo.png" 
                      alt="PMH Runners Logo" 
                      className="relative w-16 h-16 md:w-28 md:h-28 mx-auto mb-2 md:mb-4 rounded-full flex items-center justify-center border-3 md:border-6 bg-gradient-to-r object-cover"
                      width={112}
                      height={112}
                    />
                  </div>
                </div>

                {/* Right Column - Achievement Records */}
                <div className="flex items-center">
                  <div className="grid grid-cols-1 gap-2 md:gap-3 w-full">
                    {/* Total Distance Achievement */}
                    <div
                      className={`bg-gradient-to-r ${
                        runner.gender === "Nữ"
                          ? "from-yellow-100 to-pink-100 border-l-4 border-yellow-500"
                          : "from-yellow-100 to-blue-100 border-l-4 border-yellow-500"
                      } rounded-lg p-2 md:p-4`}
                    >
                      <div className="text-center">
                        <div className="text-xs md:text-sm text-gray-600 mb-1">
                          Tổng Quãng Đường Tích Lũy
                        </div>
                        <div
                          className={`text-xl md:text-3xl font-bold font-mono ${
                            runner.gender === "Nữ" ? "text-pink-600" : "text-blue-600"
                          }`}
                        >
                          {runner.distance} KM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            {/* Achievement Highlights */}
            <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 rounded-lg p-3 md:p-4 mb-3 md:mb-6 border border-yellow-200">
              <h3 className="text-sm md:text-base font-bold text-center text-gray-800 mb-2 md:mb-3">
                🌟 Danh Hiệu Đạt Được 🌟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 text-center">
                <div className="bg-white rounded-lg p-2 shadow-sm border border-yellow-100">
                  <div className="text-xs md:text-sm font-bold text-yellow-500">HUYỀN THOẠI</div>
                  <p className="text-xs text-gray-600">Legend of PMHR</p>
                </div>
                <div className="hidden md:block bg-white rounded-lg p-2 shadow-sm border border-amber-100">
                  <div className="text-xs md:text-sm font-bold text-amber-500">BỀN BỈ</div>
                  <p className="text-xs text-gray-600">Kiên trì luyện tập</p>
                </div>
                <div className="hidden md:block bg-white rounded-lg p-2 shadow-sm border border-amber-100">
                  <div className="text-xs md:text-sm font-bold text-blue-500">XUẤT SẮC</div>
                  <p className="text-xs text-gray-600">Thành tích ấn tượng</p>
                </div>
              </div>
            </div>

            {/* Signatures and Date */}
            <div className="border-t border-gray-200 pt-3 md:pt-6">
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 pb-1 mb-1 mx-3 md:mx-6">
                    <span className="text-xs md:text-sm font-elegant text-gray-800">PHÚ MỸ HƯNG RUNNERS</span>
                  </div>
                  <p className="text-xs text-gray-600">Ban Tổ Chức</p>
                </div>
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 pb-1 mb-1 mx-3 md:mx-6">
                    <span className="text-xs md:text-sm font-elegant text-gray-800">12 tháng 8, 2025</span>
                  </div>
                  <p className="text-xs text-gray-600">Ngày Cấp Chứng Nhận</p>
                </div>
              </div>
            </div>

            {/* Certificate ID */}
            <div className="text-center mt-3 md:mt-6">
              <p className="text-xs text-gray-500">
                Mã Chứng Nhận: PMHR-LOP2025-{runner.stt.toString().padStart(4, '0')}
              </p>
            </div>
          </div>

          {/* Decorative Border */}
          <div className="h-1 md:h-3 bg-gradient-to-r from-yellow-300 via-amber-300 to-blue-300"></div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={checkPasswordAndExport}
            disabled={isExporting}
            className="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg"
          >
            {isExporting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Đang tải...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Tải Chứng Nhận
              </>
            )}
          </button>
          <button 
            onClick={shareToFacebook}
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Chia Sẻ Chứng Nhận
          </button>
        </div>

        {/* Achievement Summary */}
        <div className="mt-3 md:mt-6 bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border border-yellow-100">
          <h3 className="text-base md:text-lg font-bold text-center text-gray-800 mb-2 md:mb-3">
            📊 Thống Kê Cá Nhân
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 text-center">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white rounded-lg p-2 md:p-3">
              <div className="text-sm md:text-xl font-bold">{runner.distance}</div>
              <div className="text-xs opacity-90">KM Tích Lũy</div>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg p-2 md:p-3">
              <div className="text-sm md:text-xl font-bold">#{rank}</div>
              <div className="text-xs opacity-90">Xếp Hạng Chung</div>
            </div>
            <div className={`bg-gradient-to-br ${runner.gender === "Nữ" ? "from-pink-400 to-pink-500" : "from-blue-400 to-blue-500"} text-white rounded-lg p-2 md:p-3`}>
              <div className="text-sm md:text-xl font-bold">
                #{lop2025Runners.filter(r => r.gender === runner.gender).findIndex(r => r.stt === runner.stt) + 1}
              </div>
              <div className="text-xs opacity-90">Xếp Hạng {runner.gender}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-lg p-2 md:p-3">
              <div className="text-sm md:text-xl font-bold">2025</div>
              <div className="text-xs opacity-90">Năm Thi Đấu</div>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-3 md:mt-6 text-center bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg p-3 md:p-4 border border-yellow-300">
          <h4 className="text-sm md:text-base font-bold text-gray-800 mb-1 md:mb-2">
            🎉 Chúc Mừng Vận Động Viên Huyền Thoại! 🎉
          </h4>
          <p className="text-xs md:text-sm text-gray-600">
            Thành tích của bạn trong LOP 2025 là minh chứng cho sự kiên trì, nỗ lực và tinh thần thể thao cao cả. 
            Hãy tiếp tục duy trì phong độ và chinh phục những thử thách mới!
          </p>
        </div>

      </div>
    </div>
  );
}