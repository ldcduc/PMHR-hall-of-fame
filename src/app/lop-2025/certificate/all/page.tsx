'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { lop2025Runners } from '../../../../data/lop2025Runners';
import { toPng, toJpeg } from 'html-to-image';

export default function BulkCertificateExport() {
  const [isExporting, setIsExporting] = useState<boolean>(false);
  // eslint-disable-next-line
  const [currentRunner, setCurrentRunner] = useState<any>(null);
  const [exportProgress, setExportProgress] = useState<{
    current: number;
    total: number;
    currentRunner: string;
  }>({ current: 0, total: 0, currentRunner: '' });
  
  const certificateRef = useRef<HTMLDivElement>(null);

  // Certificate Component - matches your original design
  // eslint-disable-next-line
  const CertificateComponent = ({ runnerData, rank }: { runnerData: any; rank: number }) => {
    const getMedalEmoji = (rank: number) => {
      if (rank === 1) return '🥇';
      if (rank === 2) return '🥈';
      if (rank === 3) return '🥉';
      return '🏆';
    };

    return (
      <div 
        className="bg-white rounded-lg md:rounded-xl shadow-2xl overflow-hidden border-3 md:border-6 border-yellow-300"
        style={{ 
          width: '100%',
          maxWidth: '800px',
          minHeight: '600px',
          position: 'relative',
          isolation: 'isolate'
        }}
      >
        {/* Certificate Header */}
        <div className="bg-gradient-to-r from-yellow-200 via-amber-300 to-blue-400 text-white py-6 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-amber-300 to-blue-300"></div>

          {/* Coolmate Logo - Top Left */}
          <div className="absolute top-4 left-4 z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/coolmate.png" 
              alt="Coolmate Logo" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
              width={96}
              height={96}
              crossOrigin="anonymous"
              onLoad={() => console.log('Coolmate logo loaded successfully')}
              onError={(e) => console.error('Coolmate logo failed to load:', e)}
            />
          </div>
          
          <div className="relative">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-yellow-200">
                <span className="text-xl md:text-2xl">{getMedalEmoji(rank)}</span>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-blue-900">CHỨNG NHẬN HOÀN THÀNH</h1>
            <p className="text-base md:text-lg opacity-90 text-blue-800">Legend of PMHR 2025</p>
            <div className="mt-3 inline-block bg-blue-600/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-1 border border-yellow-200">
              <span className="font-semibold text-blue-900 text-xs md:text-sm">PHÚ MỸ HƯNG RUNNERS</span>
            </div>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="p-4 md:p-6 lg:p-8 relative bg-gray-100" style={{ minHeight: '400px' }}>
          {/* Achievement Statement */}
          <div className="text-center mb-4 md:mb-6">
            <p className="text-lg md:text-xl text-gray-700 mb-3 md:mb-4 leading-relaxed">
              Chứng nhận rằng
            </p>
            
            {/* Runner Name */}
            <div className="mb-3 md:mb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-500 bg-clip-text text-transparent mb-2 md:mb-3 break-words leading-tight">
                {runnerData.name}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
              đã hoàn thành xuất sắc 45 ngày{runnerData.persistent ? " liên tiếp" : ""}<br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
                Legend of PMHR 2025
              </span>
            </p>
          </div>

          {/* Achievement Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Left Column - Logo */}
            <div className="flex items-center justify-center">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/logo.png" 
                  alt="PMH Runners Logo" 
                  className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 md:mb-4 rounded-full shadow-lg object-cover"
                  width={112}
                  height={112}
                  crossOrigin="anonymous"
                  onLoad={() => console.log('PMH logo loaded successfully')}
                  onError={(e) => console.error('PMH logo failed to load:', e)}
                  style={{
                    border: '4px solid #fbbf24',
                    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3), 0 2px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
            </div>

            {/* Right Column - Achievement Records */}
            <div className="flex items-center">
              <div className="grid grid-cols-1 gap-3 w-full">
                {/* Total Distance Achievement */}
                <div
                  className={`bg-gradient-to-r ${
                    runnerData.gender === "Nữ"
                      ? "from-yellow-100 to-pink-100 border-l-4 border-yellow-500"
                      : "from-yellow-100 to-blue-100 border-l-4 border-yellow-500"
                  } rounded-lg p-3 md:p-4`}
                >
                  <div className="text-center">
                    <div className="text-xs md:text-sm text-gray-600 mb-1">
                      Tổng Quãng Đường Tích Lũy
                    </div>
                    <div
                      className={`text-2xl md:text-3xl font-bold font-mono ${
                        runnerData.gender === "Nữ" ? "text-pink-600" : "text-blue-600"
                      }`}
                    >
                      {runnerData.distance} KM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 rounded-lg p-3 md:p-4 mb-4 md:mb-6 border border-yellow-200">
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
          <div className="border-t border-gray-200 pt-4 md:pt-6">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
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
          <div className="text-center mt-4 md:mt-6">
            <p className="text-xs text-gray-500">
              Mã Chứng Nhận: PMHR-LOP2025-{runnerData.stt.toString().padStart(4, '0')}
            </p>
          </div>
        </div>

        {/* Decorative Border */}
        <div className="h-2 md:h-3 bg-gradient-to-r from-yellow-300 via-amber-300 to-blue-300"></div>
      </div>
    );
  };

  // Export single certificate
  // eslint-disable-next-line
  const exportCertificate = async (runnerData: any, rank: number) => {
    if (!certificateRef.current) return false;

    try {
      // Wait for images and fonts to load
      await document.fonts.ready;
      
      // Wait for images
      const images = certificateRef.current.querySelectorAll('img');
      await Promise.all(Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
        });
      }));

      // Additional wait for rendering
      await new Promise(resolve => setTimeout(resolve, 500));

      // Capture certificate
      const dataUrl = await toPng(certificateRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        width: certificateRef.current.offsetWidth,
        height: certificateRef.current.offsetHeight,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        },
        filter: (node) => {
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

      // Download
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `PMHR-LOP2025-Certificate-${String(runnerData.stt).padStart(3, '0')}-${runnerData.name.replace(/\s+/g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return true;
    } catch (error) {
      console.error('Export failed for:', runnerData.name, error);
      
      // Try JPEG fallback
      try {
        const jpegDataUrl = await toJpeg(certificateRef.current!, {
          quality: 0.9,
          pixelRatio: 1.5,
          backgroundColor: '#ffffff',
        });

        const link = document.createElement('a');
        link.href = jpegDataUrl;
        link.download = `PMHR-LOP2025-Certificate-${String(runnerData.stt).padStart(3, '0')}-${runnerData.name.replace(/\s+/g, '-')}-JPEG.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        return true;
      } catch (fallbackError) {
        console.error('JPEG fallback failed for:', runnerData.name, fallbackError);
        return false;
      }
    }
  };

  // Export sample certificate
  const exportSampleCertificate = async () => {
    if (!lop2025Runners || lop2025Runners.length === 0) {
      alert('❌ Không tìm thấy dữ liệu runner để xuất chứng nhận mẫu.');
      return;
    }

    setIsExporting(true);
    const sampleRunner = lop2025Runners[0];
    setCurrentRunner(sampleRunner);

    try {
      // Wait for component to render
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const success = await exportCertificate(sampleRunner, 1);
      
      if (success) {
        alert('✅ Chứng nhận mẫu đã được tải xuống thành công!');
      } else {
        alert('❌ Có lỗi khi xuất chứng nhận mẫu. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Sample export error:', error);
      alert(`❌ Lỗi khi xuất chứng nhận mẫu: ${(error as Error).message}`);
    } finally {
      setIsExporting(false);
      setCurrentRunner(null);
    }
  };

  // Export all certificates
  const exportAllCertificates = async () => {
    if (!lop2025Runners || lop2025Runners.length === 0) {
      alert('❌ Không tìm thấy dữ liệu runner để xuất chứng nhận.');
      return;
    }

    const shouldProceed = confirm(
      `🔄 Sẽ xuất ${lop2025Runners.length} chứng nhận cho tất cả runners.\n\n` +
      '⚠️ Quá trình này có thể mất vài phút và sẽ tạo ra nhiều file tải xuống.\n\n' +
      'Bạn có muốn tiếp tục không?'
    );

    if (!shouldProceed) return;

    setIsExporting(true);
    setExportProgress({ current: 0, total: lop2025Runners.length, currentRunner: '' });
    
    let successCount = 0;
    let failureCount = 0;
    const failures: string[] = [];

    try {
      // Preload images before starting export
      console.log('Preloading images...');
      
      // Preload images to ensure they're cached
      const imageUrls = ['/coolmate.png', '/logo.png'];
      const preloadPromises = imageUrls.map(url => {
        return new Promise<void>((resolve) => {
          const img = document.createElement('img');
          img.onload = () => {
            console.log(`Preloaded: ${url}`);
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to preload: ${url}`);
            resolve();
          };
          img.src = url;
        });
      });
      
      await Promise.all(preloadPromises);
      console.log('All images preloaded successfully');
      
      for (let i = 0; i < lop2025Runners.length; i++) {
        const runner = lop2025Runners[i];
        const rank = i + 1;
        
        setExportProgress({ 
          current: i + 1, 
          total: lop2025Runners.length, 
          currentRunner: runner.name 
        });
        
        console.log(`\n=== Processing certificate ${i + 1}/${lop2025Runners.length} for ${runner.name} ===`);
        
        // Update current runner to trigger re-render
        setCurrentRunner(runner);
        
        // Wait for component to render with new data
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Export certificate
        const success = await exportCertificate(runner, rank);
        
        if (success) {
          successCount++;
          console.log(`✅ Success: ${runner.name}`);
        } else {
          failureCount++;
          failures.push(runner.name);
          console.log(`❌ Failed: ${runner.name}`);
        }
        
        // Small delay between exports
        if (i < lop2025Runners.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      // Show completion message
      if (failureCount === 0) {
        alert(`✅ Thành công! Đã xuất ${successCount} chứng nhận cho tất cả runners. 🎉\n\nCác file đã được tải xuống vào thư mục Downloads của bạn.`);
      } else {
        alert(`⚠️ Hoàn thành với một số lỗi:\n\n✅ Thành công: ${successCount}\n❌ Thất bại: ${failureCount}\n\nCác runner bị lỗi: ${failures.join(', ')}`);
      }

    } catch (error) {
      console.error('Bulk export failed:', error);
      alert(`❌ Lỗi khi xuất chứng nhận hàng loạt: ${(error as Error).message}`);
    } finally {
      setIsExporting(false);
      setExportProgress({ current: 0, total: 0, currentRunner: '' });
      setCurrentRunner(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-blue-50 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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

        {/* Header */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-2xl overflow-hidden border-3 md:border-6 border-yellow-300 mb-6">
          <div className="bg-gradient-to-r from-yellow-200 via-amber-300 to-blue-400 text-white py-6 px-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-yellow-300 via-amber-300 to-blue-300"></div>

            {/* Coolmate Logo - Top Left */}
            <div className="absolute top-4 left-4 z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/coolmate.png" 
                alt="Coolmate Logo" 
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
                width={96}
                height={96}
                crossOrigin="anonymous"
                onLoad={() => console.log('Header Coolmate logo loaded successfully')}
                onError={(e) => console.error('Header Coolmate logo failed to load:', e)}
              />
            </div>
            
            <div className="relative">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-yellow-200">
                  <span className="text-2xl">📁</span>
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">XUẤT CHỨNG NHẬN HÀNG LOẠT</h1>
              <p className="text-lg opacity-90 text-blue-800">Legend of PMHR 2025 - Bulk Certificate Export</p>
              <div className="mt-3 inline-block bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-1 border border-yellow-200">
                <span className="font-semibold text-blue-900 text-sm">PHÚ MỸ HƯNG RUNNERS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-yellow-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{lop2025Runners?.length || 0}</div>
              <div className="text-gray-600">Tổng số runners</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border border-yellow-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                {lop2025Runners?.filter(r => r.persistent).length || 0}
              </div>
              <div className="text-gray-600">Liên tiếp 45 ngày</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border border-yellow-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {Math.round((lop2025Runners?.reduce((sum, r) => sum + (Number(r.distance) || 0), 0) || 0) / (lop2025Runners?.length || 1))}
              </div>
              <div className="text-gray-600">Trung bình KM</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {isExporting && exportProgress.total > 0 && (
          <div className="bg-white rounded-lg p-6 mb-6 shadow-lg border border-yellow-100">
            <h3 className="text-lg font-semibold mb-4">Tiến trình xuất chứng nhận</h3>
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Đang xử lý: {exportProgress.currentRunner}</span>
                <span>{exportProgress.current}/{exportProgress.total}</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${(exportProgress.current / exportProgress.total) * 100}%` }}
              ></div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {Math.round((exportProgress.current / exportProgress.total) * 100)}% hoàn thành
            </div>
          </div>
        )}

        {/* Certificate Preview - Hidden during export except current */}
        {currentRunner && (
          <div className="mb-6 flex justify-center overflow-hidden">
            <div 
              ref={certificateRef}
              style={{ 
                filter: 'drop-shadow(0 20px 25px rgb(0 0 0 / 0.15))',
                width: '100%',
                maxWidth: '800px',
              }}
            >
              <CertificateComponent 
                runnerData={currentRunner} 
                rank={lop2025Runners?.findIndex(r => r.stt === currentRunner.stt) + 1 || 1} 
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="bg-white rounded-lg p-6 shadow-lg border border-yellow-100">
          <h3 className="text-lg font-semibold mb-4">Chọn hành động</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Sample Certificate Button */}
            <button 
              onClick={exportSampleCertificate}
              disabled={isExporting}
              className="inline-flex items-center justify-center px-6 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Xem chứng nhận mẫu
            </button>

            {/* Bulk Export Button */}
            <button 
              onClick={exportAllCertificates}
              disabled={isExporting}
              className="inline-flex items-center justify-center px-6 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg"
            >
              {isExporting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Đang xuất tất cả...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Xuất tất cả {lop2025Runners?.length || 0} chứng nhận
                </>
              )}
            </button>
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">📋 Hướng dẫn sử dụng:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• <strong>Xem chứng nhận mẫu:</strong> Tải xuống 1 chứng nhận để kiểm tra định dạng</li>
              <li>• <strong>Xuất tất cả:</strong> Tải xuống {lop2025Runners?.length || 0} chứng nhận cho tất cả runners</li>
              <li>• <strong>Thời gian:</strong> Quá trình xuất tất cả có thể mất 3-5 phút</li>
              <li>• <strong>File format:</strong> PNG chất lượng cao, kích thước tối ưu cho in ấn</li>
              <li>• <strong>Tên file:</strong> PMHR-LOP2025-Certificate-[STT]-[Tên-Runner].png</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg p-4 border border-yellow-300">
          <h4 className="text-base font-bold text-gray-800 mb-2">
            🎉 Legend of PMHR 2025 - Bulk Certificate Generator 🎉
          </h4>
          <p className="text-sm text-gray-600">
            Hệ thống xuất chứng nhận hàng loạt cho tất cả vận động viên hoàn thành Legend of PMHR 2025.
            Tất cả chứng nhận sẽ được tải xuống vào thư mục Downloads của bạn.
          </p>
        </div>

      </div>
    </div>
  );
}