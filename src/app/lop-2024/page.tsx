import Image from 'next/image';

export default function LOP2024() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              LEGEND OF PMH RUNNERS
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">2024</h2>
          <p className="text-lg text-gray-600 mb-8">16/11 - 31/12</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Banners Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Main Group Banner */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div className="aspect-w-16 aspect-h-10 md:aspect-h-9">
              <Image
                src="/lop24banner.jpg"
                alt="Legend of PMH Runners 2024 - Main Group Photo"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                Legend of PMH Runners 2024
              </h3>
              <p className="text-lg text-white/90 drop-shadow-md">
                Our amazing community of dedicated runners
              </p>
            </div>
          </div>

          {/* Secondary Group Banner */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div className="aspect-w-16 aspect-h-10 md:aspect-h-9">
              <Image
                src="/lop24group.jpg"
                alt="PMH Runners Club Group Photo 2024"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                Together We Run Strong
              </h3>
              <p className="text-lg text-white/90 drop-shadow-md">
                Building friendships through every mile
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Highlights</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📅</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Event Period</h3>
                    <p className="text-gray-600">November 16 - December 31, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏃‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Community</h3>
                    <p className="text-gray-600">PHU MY HUNG RUNNERS CLUB</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Achievement</h3>
                    <p className="text-gray-600">Legend Status Earned</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Spirit</h3>
                    <p className="text-gray-600">Unity Through Running</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legend Runners Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Legend Runners 2024</h2>
            <p className="text-lg text-gray-600">All 90 legendary runners who achieved LOP status</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Rank</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Runner Name</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Distance (KM)</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Gender</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { rank: 1, name: "Hạnh Nguyễn", distance: "774.79", gender: "Nam" },
                    { rank: 2, name: "Thanh Dũng Lâm", distance: "773.43", gender: "Nam" },
                    { rank: 3, name: "Quách Tĩnh", distance: "683.84", gender: "Nam" },
                    { rank: 4, name: "Phương Phạm", distance: "650.74", gender: "Nam" },
                    { rank: 5, name: "Vũ Dương", distance: "610.32", gender: "Nam" },
                    { rank: 6, name: "Hà Phong", distance: "608.07", gender: "Nam" },
                    { rank: 7, name: "Toan Nguyen", distance: "600.67", gender: "Nam" },
                    { rank: 8, name: "Đậu Danh", distance: "588.69", gender: "Nam" },
                    { rank: 9, name: "Minh Canh", distance: "554.77", gender: "Nam" },
                    { rank: 10, name: "Robert Nguyen", distance: "546.53", gender: "Nam" },
                    { rank: 11, name: "Phương Khanh Tôn Nữ", distance: "536.46", gender: "Nữ" },
                    { rank: 12, name: "Toan Lê", distance: "485.76", gender: "Nữ" },
                    { rank: 13, name: "Lan Trang", distance: "460.31", gender: "Nữ" },
                    { rank: 14, name: "Lê Hữu Thuận", distance: "459.03", gender: "Nam" },
                    { rank: 15, name: "Anh Thoại Võ", distance: "447.60", gender: "Nam" },
                    { rank: 16, name: "Ngân Nông", distance: "434.74", gender: "Nữ" },
                    { rank: 17, name: "Thảo Võ", distance: "434.10", gender: "Nam" },
                    { rank: 18, name: "Tram Nguyen Dong Phuong", distance: "433.21", gender: "Nam" },
                    { rank: 19, name: "Dương Nguyễn (Nhuận Quang)", distance: "409.08", gender: "Nam" },
                    { rank: 20, name: "Đào Hoàng Hải", distance: "406.74", gender: "Nam" },
                    { rank: 21, name: "Bảo Quốc", distance: "400.24", gender: "Nam" },
                    { rank: 22, name: "Aidt Aron", distance: "398.99", gender: "Nam" },
                    { rank: 23, name: "Hào Vũ Văn", distance: "392.10", gender: "Nam" },
                    { rank: 24, name: "Đức Lê", distance: "391.08", gender: "Nam" },
                    { rank: 25, name: "Robert Hồ Mậu Lực", distance: "386.06", gender: "Nam" },
                    { rank: 26, name: "Vũ Toàn", distance: "374.80", gender: "Nam" },
                    { rank: 27, name: "Tam. (Cathy.V.)", distance: "368.55", gender: "Nữ" },
                    { rank: 28, name: "Tú Fun Run", distance: "367.09", gender: "Nam" },
                    { rank: 29, name: "Hằng Trần Thị", distance: "361.20", gender: "Nữ" },
                    { rank: 30, name: "Hung Do Nguyen", distance: "353.26", gender: "Nam" },
                    { rank: 31, name: "QUYÊN TRẦN", distance: "351.79", gender: "Nữ" },
                    { rank: 32, name: "Tien Tran", distance: "351.60", gender: "Nam" },
                    { rank: 33, name: "Nguyen Ha", distance: "349.25", gender: "Nữ" },
                    { rank: 34, name: "Trần Văn Tươi", distance: "349.04", gender: "Nam" },
                    { rank: 35, name: "nghĩa tonduv", distance: "348.52", gender: "Nam" },
                    { rank: 36, name: "Hồng Hải", distance: "345.92", gender: "Nam" },
                    { rank: 37, name: "An Tiet Duc", distance: "345.65", gender: "Nam" },
                    { rank: 38, name: "Hoa Phạm", distance: "345.14", gender: "Nữ" },
                    { rank: 39, name: "Cap Cường", distance: "339.04", gender: "Nam" },
                    { rank: 40, name: "Tùng Lê Văn", distance: "336.20", gender: "Nam" },
                    { rank: 41, name: "Đạt Lê", distance: "332.21", gender: "Nam" },
                    { rank: 42, name: "Minh Trí Sầm", distance: "331.67", gender: "Nam" },
                    { rank: 43, name: "Tsubasa Captain", distance: "328.08", gender: "Nam" },
                    { rank: 44, name: "Nhật Anh Nguyễn", distance: "327.94", gender: "Nam" },
                    { rank: 45, name: "Kevin Trần", distance: "327.04", gender: "Nam" },
                    { rank: 46, name: "Khuất Linh", distance: "325.93", gender: "Nữ" },
                    { rank: 47, name: "Phong Vũ Steel", distance: "325.17", gender: "Nam" },
                    { rank: 48, name: "Thảo Nguyễn", distance: "324.06", gender: "Nữ" },
                    { rank: 49, name: "Thái Bình.", distance: "317.35", gender: "Nam" },
                    { rank: 50, name: "Thái Phạm", distance: "313.66", gender: "Nam" },
                    { rank: 51, name: "Thúy Mỡ", distance: "311.71", gender: "Nữ" },
                    { rank: 52, name: "THẢO NGUYỄN THỊ DA", distance: "308.76", gender: "Nữ" },
                    { rank: 53, name: "Duong Nguyen", distance: "307.99", gender: "Nữ" },
                    { rank: 54, name: "Lê Tuấn Dương", distance: "300.63", gender: "Nam" },
                    { rank: 55, name: "Hạnh Nguyễn Thị Ngọc", distance: "300.60", gender: "Nữ" },
                    { rank: 56, name: "Nguyen Cuong", distance: "297.71", gender: "Nam" },
                    { rank: 57, name: "Thiên Định Nguyễn", distance: "290.63", gender: "Nam" },
                    { rank: 58, name: "Ha Dung", distance: "290.00", gender: "Nữ" },
                    { rank: 59, name: "dan duc", distance: "289.45", gender: "Nam" },
                    { rank: 60, name: "Thư Thư", distance: "289.21", gender: "Nữ" },
                    { rank: 61, name: "Nhan Dang TB", distance: "282.99", gender: "Nữ" },
                    { rank: 62, name: "Tem Tem", distance: "281.41", gender: "Nữ" },
                    { rank: 63, name: "Dungkieu Lê", distance: "281.23", gender: "Nữ" },
                    { rank: 64, name: "Diem Lam", distance: "279.37", gender: "Nữ" },
                    { rank: 65, name: "Phạm Ngọc Thanh", distance: "279.27", gender: "Nam" },
                    { rank: 66, name: "Hoàng Văn Vũ", distance: "273.87", gender: "Nam" },
                    { rank: 67, name: "Lê Minh Hòa", distance: "271.33", gender: "Nam" },
                    { rank: 68, name: "Dang Hoang PHi", distance: "269.05", gender: "Nam" },
                    { rank: 69, name: "Nguyễn Thị Quỳnh Hoa", distance: "267.95", gender: "Nữ" },
                    { rank: 70, name: "Tue Trinh", distance: "264.99", gender: "Nữ" },
                    { rank: 71, name: "Tran Vân", distance: "264.62", gender: "Nữ" },
                    { rank: 72, name: "Tony Ngô", distance: "263.23", gender: "Nam" },
                    { rank: 73, name: "Thuận Hoàng", distance: "261.37", gender: "Nam" },
                    { rank: 74, name: "Ân Võ Thiện", distance: "261.35", gender: "Nam" },
                    { rank: 75, name: "Ken Nguyễn", distance: "260.35", gender: "Nam" },
                    { rank: 76, name: "Uyên Phạm", distance: "255.33", gender: "Nữ" },
                    { rank: 77, name: "Xuân Trúc Huỳnh", distance: "255.14", gender: "Nữ" },
                    { rank: 78, name: "Võ Minh Luân", distance: "254.97", gender: "Nam" },
                    { rank: 79, name: "Ngọc Beo", distance: "253.80", gender: "Nam" },
                    { rank: 80, name: "Nguyễn Thị Ánh Nguyệt", distance: "253.04", gender: "Nữ" },
                    { rank: 81, name: "Lương Văn Hải", distance: "252.52", gender: "Nam" },
                    { rank: 82, name: "Khôi Đỗ", distance: "251.63", gender: "Nam" },
                    { rank: 83, name: "Khoa Roman", distance: "251.32", gender: "Nam" },
                    { rank: 84, name: "CAO LAN", distance: "249.25", gender: "Nữ" },
                    { rank: 85, name: "Khánh Nguyễn Sơn Kim", distance: "247.00", gender: "Nữ" },
                    { rank: 86, name: "Hoa San Cương", distance: "246.94", gender: "Nam" },
                    { rank: 87, name: "Ngô Việt Hòa", distance: "245.47", gender: "Nam" },
                    { rank: 88, name: "Ngọc Đoàn", distance: "244.96", gender: "Nữ" },
                    { rank: 89, name: "MINH NGUYÊN", distance: "241.93", gender: "Nam" },
                    { rank: 90, name: "Tini Lê", distance: "235.28", gender: "Nữ" }
                  ].map((runner, index) => (
                    <tr key={runner.rank} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {runner.rank}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                        {runner.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono text-blue-600 font-semibold">
                        {runner.distance}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          runner.gender === 'Nam' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-pink-100 text-pink-800'
                        }`}>
                          {runner.gender}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Table Statistics */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">90</div>
              <div className="text-gray-600">Total Legend Runners</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">61</div>
              <div className="text-gray-600">Male Runners</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">29</div>
              <div className="text-gray-600">Female Runners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Be Part of Our Legend
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the PHU MY HUNG RUNNERS CLUB and create your own legendary moments with us.
          </p>
          <a
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join the Club
          </a>
        </div>
      </section>
    </div>
  );
}