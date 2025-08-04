import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 text-center bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-md">
              <Image src="/logo.png" alt="PMH Runners Club Logo" className="w-full h-full object-contain" width={64} height={64} />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
            Về PMH Runners Club
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Xây dựng cộng đồng chạy bộ tại Nam Sài Gòn từ năm 2017
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Achievements & Activities */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Hoạt Động & Thành Tựu</h2> */}
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Trong thời gian qua PMH Runners Club đã tổ chức thành công rất nhiều hoạt động liên quan 
              chạy bộ và các sự kiện xã hội khác hết sức ý nghĩa.
            </p>
            
            {/* First Image Space */}
                        <div className="my-8 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <Image 
                  src="/cover.jpg" 
                  alt="PMH Runners Club cover image" 
                  width={800} 
                  height={400} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-gray-50 px-4 py-2 text-center">
                <p className="text-gray-600 text-sm italic"> Các buổi tập luyện chung hàng tuần vào sáng các ngày thứ 4, 7 và chủ nhật cũng là dịp giao lưu, rèn luyện thu hút rất nhiều thành viên tham gia.  </p>
              </div>
            </div>
            
            {/* Second Image Space */}
            <div className="my-8 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <Image 
                  src="/amigorun.jpg" 
                  alt="Amigo Run Sunday morning activity" 
                  width={800} 
                  height={400} 
                  className="w-full h-auto rounded-t-lg"
                />
              </div>
              <div className="bg-gray-50 px-4 py-2 text-center">
                <p className="text-gray-600 text-sm italic">Hoạt động Amigo Run sáng Chủ Nhật hằng tuần</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Ban Điều Hành dự kiến sẽ tổ chức rất nhiều sự kiện tuyệt vời, phục vụ tốt nhất lợi ích 
              của các thành viên trong năm 2025 và các năm tiếp theo.
            </p>
          </div>
        </div>

        
        {/* Welcome Message */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Thông Báo Chính Thức</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Các bạn thân mến, chúng tôi, Ban Điều Hành và các thành viên tích cực của PMH Runners Club, 
              xin thông báo từ hôm nay (ngày 07 tháng 01 năm 2021) đây là trang group chính thức của 
              PMH Runners Club (Câu Lạc Bộ Chạy Bộ Phú Mỹ Hưng).
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 font-medium text-lg">#PHUMYHUNGRUNNERSCLUB</p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vì một số lý do kỹ thuật về quản trị, chúng tôi sẽ không thể tiếp tục đăng nhập vào và duy trì 
              cũng như cập nhật trang facebook PMHR cũ được thành lập 2017 nữa.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Do đó, các thông tin, cập nhật (nếu có) trên các trang page và group cũ này không còn đại diện 
              cho quan điểm của Ban Điều Hành Câu Lạc Bộ.
            </p>
          </div>
        </div>

        {/* Official Links */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kênh Chính Thức</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Group chính thức và duy nhất</h3>
              <p className="text-gray-600 mb-4">Tham gia thảo luận cộng đồng</p>
              <a 
                href="https://www.facebook.com/groups/190545806036762/?ref=share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Tham Gia Group
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fanpage chính thức và duy nhất</h3>
              <p className="text-gray-600 mb-4">Theo dõi thông tin mới nhất</p>
              <a 
                href="https://www.facebook.com/PHUMYHUNGRUNNERSCLUB/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Theo Dõi Page
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Training Schedule & Location */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Lịch Tập & Địa Điểm</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-blue-800 font-medium mb-2">📢 Thông tin quan trọng:</p>
            <p className="text-blue-700">
              Ngoài sự thay đổi về page và group thì các thông tin khác về địa điểm, 
              thời gian tập luyện của Câu Lạc Bộ không thay đổi.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Lịch Tập Hàng Tuần</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">Thứ 3, 5, 7, Chủ nhật hàng tuần</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">Thời gian: 5h00 - 6h30 sáng</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Địa Điểm Tập Trung</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700 font-medium">PHU MY HUNG RUNNERS CLUB</p>
                <p className="text-gray-600">107 Tôn Dật Tiên, Tân Phú, Quận 7</p>
                <p className="text-gray-600">Thành phố Hồ Chí Minh</p>
                <p className="text-gray-600 text-sm">(gần Chứng khoán Phú Hưng)</p>
              </div>
              <a 
                href="https://goo.gl/maps/nNiU66dHYf5weiw86" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors"
              >
                Xem Trên Bản Đồ
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sứ Mệnh & Giá Trị</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              PMH Runners Club là một câu lạc bộ có sứ mệnh phát triển cộng đồng chạy bộ trên địa bàn 
              Nam Sài Gòn và các khu vực lân cận cũng như tăng cường giao lưu, kết nối giữa các thành viên.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Phi Lợi Nhuận</h3>
                <p className="text-gray-600 text-sm">Hoạt động trên nguyên tắc phi lợi nhuận, các thành viên tham gia hoàn toàn tự nguyện</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bình Đẳng</h3>
                <p className="text-gray-600 text-sm">Được đối xử bình đẳng, được tôn trọng</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Tự Do Bày Tỏ</h3>
                <p className="text-gray-600 text-sm">Được tự do bày tỏ quan điểm để xây dựng, phát triển câu lạc bộ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Ban Điều Hành</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">NH</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Nguyễn Phúc Hậu</h3>
                <p className="text-gray-600">Chủ nhiệm Câu Lạc Bộ</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              T/M Ban Điều Hành Câu Lạc Bộ
            </p>
          </div>
        </div>

        {/* Thank You & Call to Action */}
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Cảm Ơn & Lời Chúc</h2>
          <div className="text-yellow-100 mb-6 max-w-2xl mx-auto text-left space-y-4">
            <p>
              Chúng tôi mong sẽ tiếp tục nhận được sự đồng hành của các bạn trong các buổi tập và 
              gặp gỡ, kết nối với các bạn trong các sự kiện trong năm 2021 của Câu Lạc Bộ.
            </p>
            <p>
              Chúng tôi xin trân trọng cảm ơn các bạn đã theo dõi, tham gia và hỗ trợ câu lạc bộ 
              trong những năm vừa qua.
            </p>
            <p>
              Nhân dịp năm mới, chúng tôi xin chúc các bạn và gia đình sức khỏe, hạnh phúc và 
              đạt được những thành tích tốt trong chạy bộ, rèn luyện sức khỏe.
            </p>
          </div>
          <p className="text-yellow-100 mb-6 font-semibold">
            Hẹn sớm gặp lại các bạn. ❤️
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Tham Gia Câu Lạc Bộ
            </Link>
            <Link 
              href="/runners"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-yellow-600 transition-colors"
            >
              Gặp Gỡ Các Runner
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}