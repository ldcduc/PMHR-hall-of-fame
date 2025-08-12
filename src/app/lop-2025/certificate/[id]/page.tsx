// src/app/lop-2025/certificate/[id]/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { lop2025Runners } from '../../../../data/lop2025Runners';

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

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
      const foundRunner = lop2025Runners.find(r => r.stt.toString() === resolvedParams.id);
      setRunner(foundRunner);
    };
    getParams();
  }, [params]);

  // Method 1: HTML2Canvas - Best for precise element capture
  const downloadCertificateHTML2Canvas = async () => {
    if (!certificateRef.current || !runner) return;

    try {
      alert('Đang chuẩn bị tải chứng chỉ...');
      
      // Dynamically import html2canvas
      const html2canvas = await import('html2canvas');
      
      // Scroll to certificate and wait
      certificateRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Capture only the certificate element with correct options
      const canvas = await html2canvas.default(certificateRef.current, {
        allowTaint: true,
        background: '#ffffff', // Fixed: was backgroundColor
        // scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        width: certificateRef.current.offsetWidth,
        height: certificateRef.current.offsetHeight,
        // scrollX: 0,
        // scrollY: 0,
        // x: 0,
        // y: 0
      });

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `LOP2025-Certificate-${runner.name.replace(/\s+/g, '-')}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          alert('✅ Chứng chỉ đã được tải xuống thành công!\n\nFile chỉ chứa phần chứng chỉ, không có nền trang web. 🎉');
        }
      }, 'image/png', 1.0);

    } catch (error) {
      console.error('Error with HTML2Canvas:', error);
      alert('❌ Có lỗi xảy ra với chức năng tự động.\n\nVui lòng thử:\n1. Tải lại trang\n2. Sử dụng chức năng "Chụp Có Hướng Dẫn"\n3. Hoặc chụp thủ công');
    }
  };

  // Method 2: Screen Capture with highlighting
  const downloadCertificateScreenshot = async () => {
    if (!certificateRef.current || !runner) return;

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        alert('❌ Trình duyệt không hỗ trợ chụp màn hình tự động.\n\nVui lòng sử dụng:\n• Chức năng "Tải Tự Động" (HTML2Canvas)\n• Hoặc "Hướng Dẫn Chụp"');
        return;
      }

      // Scroll and highlight
      certificateRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Add highlight border
      const originalBorder = certificateRef.current.style.border;
      const originalShadow = certificateRef.current.style.boxShadow;
      
      certificateRef.current.style.border = '6px solid #ff4444';
      certificateRef.current.style.boxShadow = '0 0 30px rgba(255, 68, 68, 0.6), inset 0 0 20px rgba(255, 68, 68, 0.2)';

      const confirmed = confirm(`🖥️ CHỤP MÀN HÌNH CÓ HƯỚNG DẪN

Các bước thực hiện:

1️⃣ Nhấn "OK" để bắt đầu
2️⃣ Chọn tab hiện tại khi được hỏi chia sẻ màn hình  
3️⃣ Chứng chỉ được đánh dấu bằng VIỀN ĐỎ
4️⃣ Sau khi chụp xong, crop ảnh theo viền đỏ

⚠️ Lưu ý: Bạn sẽ cần tự crop ảnh sau khi tải xuống

Tiếp tục?`);
      
      if (!confirmed) {
        certificateRef.current.style.border = originalBorder;
        certificateRef.current.style.boxShadow = originalShadow;
        return;
      }

      // Screen capture process
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          // mediaSource: 'screen',
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      });

      const video = document.createElement('video');
      video.srcObject = stream;
      video.muted = true;
      
      await new Promise<void>((resolve) => { // Fixed: added void type
        video.onloadedmetadata = () => {
          video.play();
          resolve();
        };
      });

      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      stream.getTracks().forEach(track => track.stop());
      
      // Restore styles
      certificateRef.current.style.border = originalBorder;
      certificateRef.current.style.boxShadow = originalShadow;
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `LOP2025-Certificate-${runner.name.replace(/\s+/g, '-')}-crop-needed.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          alert(`✅ Ảnh đã tải xuống thành công!

📝 BƯỚC TIẾP THEO:
• Mở ảnh vừa tải xuống
• Crop/cắt ảnh để chỉ giữ phần chứng chỉ (có viền đỏ)
• Lưu file mới

💡 TIP: Dùng Paint, Photoshop, hoặc ứng dụng chỉnh ảnh để crop`);
        }
      }, 'image/png', 1.0);

    } catch (error) {
      console.error('Error with screenshot:', error);
      
      if (certificateRef.current) {
        certificateRef.current.style.border = '';
        certificateRef.current.style.boxShadow = '';
      }
      
      if ((error as Error).name === 'NotAllowedError') { // Fixed: proper error typing
        alert('❌ Bạn đã từ chối chia sẻ màn hình.\n\nVui lòng thử:\n• Chức năng "Tải Tự Động"\n• Hoặc "Hướng Dẫn Thủ Công"');
      } else {
        alert('❌ Có lỗi xảy ra với chụp màn hình.\n\nVui lòng thử chức năng khác.');
      }
    }
  };

  // Method 3: Visual guide for manual screenshot
  const downloadCertificateAuto = async () => {
    if (!certificateRef.current || !runner) return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    try {
      // Scroll to certificate
      certificateRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Get bounds for visual guide
      const rect = certificateRef.current.getBoundingClientRect();
      
      // Create overlay with precise crop guide
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        z-index: 9999;
        font-family: Arial, sans-serif;
      `;

      // Crop guide box
      const cropGuide = document.createElement('div');
      cropGuide.style.cssText = `
        position: absolute;
        top: ${Math.max(0, rect.top - 10)}px;
        left: ${Math.max(0, rect.left - 10)}px;
        width: ${Math.min(window.innerWidth - rect.left + 10, rect.width + 20)}px;
        height: ${Math.min(window.innerHeight - rect.top + 10, rect.height + 20)}px;
        border: 4px dashed #00ff00;
        background: rgba(0, 255, 0, 0.1);
        pointer-events: none;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
      `;

      // Instruction panel
      const instructions = document.createElement('div');
      instructions.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        color: black;
        padding: 20px;
        border-radius: 15px;
        text-align: center;
        max-width: ${isMobile ? '320px' : '420px'};
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        border: 3px solid #00ff00;
      `;

      let countdown = 12;
      instructions.innerHTML = `
        <h3 style="margin: 0 0 15px 0; color: #00aa00; font-size: ${isMobile ? '18px' : '20px'};">
          📱 HƯỚNG DẪN CHỤP CHÍNH XÁC
        </h3>
        <p style="margin: 0 0 15px 0; font-size: ${isMobile ? '14px' : '16px'}; line-height: 1.4;">
          Chụp màn hình và crop theo <strong style="color: #00aa00;">VÙNG XANH</strong> bên dưới:
        </p>
        <div style="background: #f8f8f8; padding: 15px; border-radius: 8px; margin: 15px 0; font-size: ${isMobile ? '13px' : '14px'}; text-align: left; border-left: 4px solid #00aa00;">
          ${isMobile ? `
            <div style="margin-bottom: 8px;"><strong>📱 ANDROID:</strong></div>
            <div style="margin-bottom: 12px; padding-left: 10px;">• Power + Volume Down cùng lúc</div>
            
            <div style="margin-bottom: 8px;"><strong>📱 iPHONE:</strong></div>
            <div style="margin-bottom: 12px; padding-left: 10px;">• Side Button + Volume Up</div>
            
            <div style="margin-bottom: 8px;"><strong>💡 QUAN TRỌNG:</strong></div>
            <div style="padding-left: 10px;">• Crop ảnh theo vùng xanh sau khi chụp</div>
          ` : `
            <div style="margin-bottom: 8px;"><strong>💻 WINDOWS:</strong></div>
            <div style="margin-bottom: 12px; padding-left: 10px;">• Windows + Shift + S (Snipping Tool)</div>
            
            <div style="margin-bottom: 8px;"><strong>💻 MAC:</strong></div>
            <div style="margin-bottom: 12px; padding-left: 10px;">• Cmd + Shift + 4 (kéo chọn vùng)</div>
            
            <div style="margin-bottom: 8px;"><strong>🔧 CÁCH KHÁC:</strong></div>
            <div style="padding-left: 10px;">• Dùng Snipping Tool hoặc Screenshot app</div>
          `}
        </div>
        <div style="background: #e8f5e8; padding: 10px; border-radius: 5px; margin: 15px 0; font-size: ${isMobile ? '12px' : '13px'};">
          <strong style="color: #00aa00;">🎯 MỤC TIÊU:</strong> Chụp chỉ phần trong khung xanh = Chứng chỉ hoàn hảo!
        </div>
        <p style="color: #00aa00; font-size: ${isMobile ? '16px' : '18px'}; margin: 15px 0; font-weight: bold;">
          Tự động đóng: <span id="countdown">${countdown}</span>s
        </p>
        <button id="closeOverlay" style="
          background: #00aa00; 
          color: white; 
          border: none; 
          padding: 12px 24px; 
          border-radius: 8px; 
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        ">✅ Đã hiểu, đóng ngay</button>
      `;

      overlay.appendChild(cropGuide);
      overlay.appendChild(instructions);
      document.body.appendChild(overlay);

      // Countdown and events
      const countdownEl = instructions.querySelector('#countdown');
      const closeBtn = instructions.querySelector('#closeOverlay');
      
      const timer = setInterval(() => {
        countdown--;
        if (countdownEl) countdownEl.textContent = countdown.toString();
        
        if (countdown <= 0) {
          clearInterval(timer);
          cleanup();
        }
      }, 1000);

      closeBtn?.addEventListener('click', () => {
        clearInterval(timer);
        cleanup();
      });

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          clearInterval(timer);
          cleanup();
        }
      };
      document.addEventListener('keydown', handleEscape);

      const cleanup = () => {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
        document.removeEventListener('keydown', handleEscape);
      };

    } catch (error) {
      console.error('Error:', error);
      alert('❌ Có lỗi xảy ra. Vui lòng thử lại hoặc chụp thủ công.');
    }
  };

  const showDownloadInstructions = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const instructions = isMobile ? `📱 HƯỚNG DẪN CHỤP CHỨNG CHỈ - MOBILE

🤖 ANDROID:
• Bước 1: Nhấn giữ nút Power + Volume Down cùng lúc
• Bước 2: Hoặc vuốt xuống từ trên màn hình → chọn "Screenshot"  
• Bước 3: Mở ảnh vừa chụp trong Gallery
• Bước 4: Nhấn "Edit" → "Crop" → Cắt chỉ giữ phần chứng chỉ
• Bước 5: Lưu ảnh đã cắt

📱 iPHONE/iPAD:
• Bước 1: iPhone X+: Nhấn Side Button + Volume Up
• Bước 2: iPhone 8-: Nhấn Home + Power Button  
• Bước 3: iPad: Nhấn Top Button + Home/Volume Up
• Bước 4: Nhấn vào ảnh thumbnail ở góc màn hình
• Bước 5: Nhấn "Crop" → Cắt theo khung chứng chỉ
• Bước 6: Nhấn "Done" để lưu

💡 MẸO HAY:
- Xoay ngang điện thoại để chứng chỉ hiển thị lớn hơn
- Zoom out (thu nhỏ) để thấy toàn bộ chứng chỉ
- Dùng 2 ngón tay để pinch-to-zoom trước khi chụp
- Chụp ở nơi có ánh sáng tốt để ảnh rõ nét
    ` : `💻 HƯỚNG DẪN CHỤP CHỨNG CHỈ - DESKTOP

🖥️ WINDOWS:
• Cách 1 (Khuyên dùng): 
  - Nhấn Windows + Shift + S
  - Kéo chuột chọn vùng chứng chỉ
  - Ảnh tự động copy vào clipboard
  - Mở Paint → Ctrl+V → Save

• Cách 2: Snipping Tool
  - Mở Start Menu → tìm "Snipping Tool"
  - Chọn "New" → kéo chọn vùng chứng chỉ
  - File → Save As

• Cách 3: Print Screen
  - Nhấn PrtSc (toàn màn hình)
  - Mở Paint → Ctrl+V → Crop → Save

💻 MAC:
• Cách 1 (Khuyên dùng):
  - Nhấn Cmd + Shift + 4
  - Kéo chuột chọn vùng chứng chỉ
  - File tự động lưu trên Desktop

• Cách 2: Screenshot toàn màn hình
  - Cmd + Shift + 3 (toàn màn hình)
  - Mở ảnh → dùng Preview để crop

🔧 CÁCH KHÁC (Tất cả hệ điều hành):
• Nhấn F12 → Developer Tools
• Nhấn chuột phải vào chứng chỉ → "Inspect"
• Tìm div chứa chứng chỉ → chuột phải
• Chọn "Capture node screenshot"

⚡ CHROME EXTENSION:
• Cài "Awesome Screenshot" hoặc "FireShot"
• Chụp vùng được chọn trực tiếp
    `;
    
    alert(instructions);
  };

  if (!runner) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-blue-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Đang tải chứng chỉ...</p>
        </div>
      </div>
    );
  }

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

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'from-yellow-300 to-yellow-400';
    if (rank === 2) return 'from-gray-200 to-gray-400';
    if (rank === 3) return 'from-amber-300 to-amber-500';
    return 'from-blue-400 to-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-blue-50 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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
        <div 
          ref={certificateRef} 
          className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border-4 md:border-8 border-yellow-300"
          style={{ 
            position: 'relative',
            isolation: 'isolate'
          }}
        >
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-yellow-200 via-amber-300 to-blue-400 text-white py-4 md:py-8 px-4 md:px-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-yellow-300 via-amber-300 to-blue-300"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-2 md:mb-4">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-yellow-200">
                  <span className="text-xl md:text-3xl">{getMedalEmoji(rank)}</span>
                </div>
              </div>
              <h1 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-blue-900">CHỨNG CHỈ HOÀN THÀNH</h1>
              <p className="text-sm md:text-xl opacity-90 text-blue-800">Legend of PMHR 2025</p>
              <div className="mt-2 md:mt-4 inline-block bg-blue-600/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-1 md:py-2 border border-yellow-200">
                <span className="font-semibold text-blue-900 text-xs md:text-base">PHÚ MỸ HƯNG RUNNERS</span>
              </div>
            </div>
          </div>

          {/* Certificate Body */}
          <div className="p-4 md:p-8 lg:p-12 relative">
            {/* Logo in top left of body */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4">
              <Image 
                src="/logo.png" 
                alt="PMH Runners Logo" 
                className="w-12 h-12 md:w-20 md:h-20 opacity-70"
                width={80}
                height={80}
              />
            </div>

            {/* Achievement Statement */}
            <div className="text-center mb-4 md:mb-8">
              <p className="text-lg md:text-2xl text-gray-700 mb-3 md:mb-6 leading-relaxed">
                Chứng nhận rằng
              </p>
              
              {/* Runner Name */}
              <div className="mb-3 md:mb-6">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-500 bg-clip-text text-transparent mb-2 md:mb-4 break-words">
                  {runner.name}
                </h2>
              </div>

              <p className="text-lg md:text-2xl text-gray-700 mb-4 md:mb-8 leading-relaxed">
                đã hoàn thành xuất sắc<br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
                  Legend of PMHR 2025
                </span>
              </p>
            </div>

            {/* Achievement Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
              {/* Left Column - Rank and Stats */}
              <div className="text-center">
                <div className={`relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-3 md:mb-6 rounded-full flex items-center justify-center border-4 md:border-8 bg-gradient-to-r ${getRankColor(rank)} shadow-xl text-white`}>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl mb-1 md:mb-2">{getMedalEmoji(rank)}</div>
                    <div className="text-lg md:text-2xl font-bold">#{rank}</div>
                    <div className="text-xs md:text-sm opacity-90">Xếp hạng</div>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 md:p-4 border border-yellow-200">
                  <h3 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Thông Tin Vận Động Viên</h3>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
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
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-6 text-center">
                  Thành Tích LOP 2025
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {/* Total Distance Achievement */}
                  <div className={`bg-gradient-to-r ${runner.gender === "Nữ" ? "from-yellow-100 to-pink-100 border-l-4 border-yellow-500" : "from-yellow-100 to-blue-100 border-l-4 border-yellow-500"} rounded-lg p-3 md:p-6`}>
                    <div className="text-center">
                      <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">Tổng Quãng Đường Tích Lũy</div>
                      <div className={`text-2xl md:text-4xl font-bold font-mono ${runner.gender === "Nữ" ? "text-pink-600" : "text-blue-600"}`}>
                        {runner.distance} KM
                      </div>
                    </div>
                  </div>

                  {/* Rank Achievement */}
                  <div className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-lg p-3 md:p-4 border-l-4 border-yellow-400">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 text-xs md:text-sm">Xếp hạng cuối cùng</span>
                      <span className="text-lg md:text-2xl font-bold text-yellow-500">
                        #{rank}/{lop2025Runners.length}
                      </span>
                    </div>
                  </div>

                  {/* Gender Rank */}
                  <div className={`bg-gradient-to-r ${runner.gender === "Nữ" ? "from-yellow-50 to-pink-50 border-l-4 border-yellow-400" : "from-yellow-50 to-blue-50 border-l-4 border-blue-400"} rounded-lg p-3 md:p-4`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 text-xs md:text-sm">Xếp hạng {runner.gender.toLowerCase()}</span>
                      <span className={`text-lg md:text-2xl font-bold ${runner.gender === "Nữ" ? "text-pink-600" : "text-blue-600"}`}>
                        #{lop2025Runners.filter(r => r.gender === runner.gender).findIndex(r => r.stt === runner.stt) + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 rounded-lg p-4 md:p-6 mb-4 md:mb-8 border border-yellow-200">
              <h3 className="text-base md:text-lg font-bold text-center text-gray-800 mb-3 md:mb-4">
                🌟 Danh Hiệu Đạt Được 🌟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-center">
                <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm border border-yellow-100">
                  <div className="text-sm md:text-lg font-bold text-yellow-500">HUYỀN THOẠI</div>
                  <p className="text-xs text-gray-600">Legend of PMHR</p>
                </div>
                <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm border border-amber-100">
                  <div className="text-sm md:text-lg font-bold text-amber-500">BỀN BỈ</div>
                  <p className="text-xs text-gray-600">Kiên trì luyện tập</p>
                </div>
                <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm border border-blue-100">
                  <div className="text-sm md:text-lg font-bold text-blue-500">XUẤT SẮC</div>
                  <p className="text-xs text-gray-600">Thành tích ấn tượng</p>
                </div>
              </div>
            </div>

            {/* Competition Period */}
            <div className="bg-yellow-50 rounded-lg p-3 md:p-4 mb-4 md:mb-8 border border-yellow-300">
              <div className="text-center">
                <h4 className="font-semibold text-yellow-800 mb-1 md:mb-2 text-sm md:text-base">Thời Gian Thi Đấu</h4>
                <p className="text-yellow-700 text-xs md:text-base">Tính đến hết ngày 04 tháng 8, 2025</p>
                <p className="text-xs md:text-sm text-yellow-600 mt-1">Cuộc thi vẫn đang diễn ra đến ngày 12/08/2025</p>
              </div>
            </div>

            {/* Signatures and Date */}
            <div className="border-t border-gray-200 pt-4 md:pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 pb-1 md:pb-2 mb-1 md:mb-2 mx-4 md:mx-8">
                    <span className="text-sm md:text-lg font-elegant">PHÚ MỸ HƯNG RUNNERS</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Ban Tổ Chức</p>
                </div>
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 pb-1 md:pb-2 mb-1 md:mb-2 mx-4 md:mx-8">
                    <span className="text-sm md:text-lg font-elegant">{currentDate}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Ngày Cấp Chứng Chỉ</p>
                </div>
              </div>
            </div>

            {/* Certificate ID */}
            <div className="text-center mt-4 md:mt-8">
              <p className="text-xs text-gray-500">
                Mã Chứng Chỉ: LOP2025-{runner.stt.toString().padStart(4, '0')}
              </p>
            </div>
          </div>

          {/* Decorative Border */}
          <div className="h-2 md:h-4 bg-gradient-to-r from-yellow-300 via-amber-300 to-blue-300"></div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 md:mt-8 text-center space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
          <button 
            onClick={downloadCertificateHTML2Canvas}
            className="inline-flex items-center justify-center px-4 md:px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-lg text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            🎯 Tải Tự Động (Khuyên dùng)
          </button>
          <button 
            onClick={downloadCertificateScreenshot}
            className="inline-flex items-center justify-center px-4 md:px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            📱 Chụp Có Hướng Dẫn
          </button>
          <button 
            onClick={downloadCertificateAuto}
            className="inline-flex items-center justify-center px-4 md:px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-200 shadow-lg text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
            </svg>
            🎯 Hướng Dẫn Chính Xác
          </button>
          <button 
            onClick={showDownloadInstructions}
            className="inline-flex items-center justify-center px-4 md:px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-200 shadow-lg text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            📋 Hướng Dẫn Chi Tiết
          </button>
        </div>

        {/* Method Comparison Guide */}
        <div className="mt-4 md:mt-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-blue-100">
          <h3 className="text-lg md:text-xl font-bold text-center text-gray-800 mb-3 md:mb-4">
            🔧 So Sánh Các Phương Pháp
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-sm">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="font-bold text-green-600 mb-2">🎯 Tải Tự Động</div>
              <div className="text-green-700 text-xs">
                ✅ Chỉ chứng chỉ, không có nền<br/>
                ✅ Chất lượng cao<br/>
                ✅ Không cần crop<br/>
                ⚠️ Cần cài thư viện
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="font-bold text-blue-600 mb-2">📱 Chụp Có Hướng Dẫn</div>
              <div className="text-blue-700 text-xs">
                ✅ Hoạt động mọi trình duyệt<br/>
                ✅ Có viền đỏ định hướng<br/>
                ⚠️ Cần crop sau khi chụp<br/>
                ⚠️ Chất lượng tùy màn hình
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="font-bold text-yellow-600 mb-2">🎯 Hướng Dẫn Chính Xác</div>
              <div className="text-yellow-700 text-xs">
                ✅ Khung xanh chính xác<br/>
                ✅ Hướng dẫn từng bước<br/>
                ✅ Phù hợp mọi thiết bị<br/>
                ⚠️ Cần chụp thủ công
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="font-bold text-gray-600 mb-2">📋 Hướng Dẫn Chi Tiết</div>
              <div className="text-gray-700 text-xs">
                ✅ Hướng dẫn đầy đủ<br/>
                ✅ Nhiều cách thực hiện<br/>
                ✅ Phù hợp người mới<br/>
                ⚠️ Cần đọc kỹ hướng dẫn
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-4 md:mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-yellow-100">
          <h3 className="text-lg md:text-xl font-bold text-center text-gray-800 mb-3 md:mb-4">
            📊 Thống Kê Cá Nhân
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white rounded-lg p-3 md:p-4">
              <div className="text-lg md:text-2xl font-bold">{runner.distance}</div>
              <div className="text-xs md:text-sm opacity-90">KM Tích Lũy</div>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg p-3 md:p-4">
              <div className="text-lg md:text-2xl font-bold">#{rank}</div>
              <div className="text-xs md:text-sm opacity-90">Xếp Hạng Chung</div>
            </div>
            <div className={`bg-gradient-to-br ${runner.gender === "Nữ" ? "from-pink-400 to-pink-500" : "from-blue-400 to-blue-500"} text-white rounded-lg p-3 md:p-4`}>
              <div className="text-lg md:text-2xl font-bold">
                #{lop2025Runners.filter(r => r.gender === runner.gender).findIndex(r => r.stt === runner.stt) + 1}
              </div>
              <div className="text-xs md:text-sm opacity-90">Xếp Hạng {runner.gender}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-lg p-3 md:p-4">
              <div className="text-lg md:text-2xl font-bold">2025</div>
              <div className="text-xs md:text-sm opacity-90">Năm Thi Đấu</div>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-4 md:mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl p-4 md:p-6 border border-yellow-300">
          <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">
            🎉 Chúc Mừng Vận Động Viên Huyền Thoại! 🎉
          </h4>
          <p className="text-sm md:text-base text-gray-600">
            Thành tích của bạn trong LOP 2025 là minh chứng cho sự kiên trì, nỗ lực và tinh thần thể thao cao cả. 
            Hãy tiếp tục duy trì phong độ và chinh phục những thử thách mới!
          </p>
        </div>

        {/* Installation Instructions */}
        <div className="mt-4 md:mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 md:p-6">
          <h4 className="text-base md:text-lg font-bold text-blue-800 mb-2">
            ⚙️ Lưu ý cho Developers
          </h4>
          <p className="text-sm text-blue-700 mb-2">
            Để sử dụng chức năng &quot;Tải Tự Động&quot;, cần cài đặt thư viện html2canvas:
          </p>
          <div className="bg-blue-100 p-3 rounded-lg font-mono text-sm">
            npm install html2canvas@^1.4.1
          </div>
          <p className="text-xs text-blue-600 mt-2">
            Chức năng này sẽ tự động crop chỉ phần chứng chỉ với chất lượng cao nhất.
          </p>
        </div>
      </div>
    </div>
  );
}