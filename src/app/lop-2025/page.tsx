export default function LOP2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
              LEGEND OF PMH RUNNERS
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">2025</h2>
          <p className="text-lg text-gray-600 mb-4">Kết quả LOP 2025</p>
          <p className="text-base text-gray-500 mb-8">(Tính đến hết ngày 27/07)</p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Legend Runners Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Legend Runners 2025</h2>
            <p className="text-lg text-gray-600">Current standings - 104 runners as of July 27, 2025</p>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-600 to-blue-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Tên Strava</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Tổng KM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { stt: 1, name: "Tran Thanh Cuong", distance: "610.01" },
                    { stt: 2, name: "Hanh Nguyen", distance: "599.89" },
                    { stt: 3, name: "Vu Tien Dung", distance: "580.85" },
                    { stt: 4, name: "Khanh Dao 🇻🇳", distance: "417.6" },
                    { stt: 5, name: "Như Đoàn Thái", distance: "385.9" },
                    { stt: 6, name: "Nguyễn Việt", distance: "380.24" },
                    { stt: 7, name: "Đậu Danh", distance: "366.02" },
                    { stt: 8, name: "Tran Van Thiem", distance: "362.64" },
                    { stt: 9, name: "Kenny Buj", distance: "315.95" },
                    { stt: 10, name: "An Lăng Thùy", distance: "299.49" },
                    { stt: 11, name: "Đạt Lê", distance: "291.57" },
                    { stt: 12, name: "Nguyễn Đình Lãm", distance: "290.22" },
                    { stt: 13, name: "Ngân Nông", distance: "283.95" },
                    { stt: 14, name: "Hung Do Nguyen", distance: "281.18" },
                    { stt: 15, name: "THU THUY DO", distance: "279.08" },
                    { stt: 16, name: "Thanh Dũng Lâm", distance: "278.69" },
                    { stt: 17, name: "Quang-Chau Nguyen", distance: "278.22" },
                    { stt: 18, name: "Phan Thi Ngoc Sanh", distance: "276.79" },
                    { stt: 19, name: "Hợp Phạm", distance: "269.57" },
                    { stt: 20, name: "Duc Le", distance: "264.76" },
                    { stt: 21, name: "wei harn choo", distance: "264.48" },
                    { stt: 22, name: "Trung Lê Huỳnh Ngọc", distance: "258.9" },
                    { stt: 23, name: "Trường Lâm", distance: "253.75" },
                    { stt: 24, name: "Đặng Đức", distance: "244.16" },
                    { stt: 25, name: "PETER PAN", distance: "242.35" },
                    { stt: 26, name: "ALEX", distance: "241.25" },
                    { stt: 27, name: "Anh Perdu", distance: "239.23" },
                    { stt: 28, name: "Dương Nguyễn (Nhuận Quang)", distance: "238.13" },
                    { stt: 29, name: "Nguyen Huu Duc", distance: "232.28" },
                    { stt: 30, name: "Bình Khứu", distance: "231.31" },
                    { stt: 31, name: "Tran Van Tuoi", distance: "231.02" },
                    { stt: 32, name: "Vu Nguyen", distance: "230.15" },
                    { stt: 33, name: "Nhi Mỹ Phan", distance: "230.12" },
                    { stt: 34, name: "Bich Nguyen Doan", distance: "226.9" },
                    { stt: 35, name: "Minh Tri Sam", distance: "226.02" },
                    { stt: 36, name: "To Lucie Khanh", distance: "223.49" },
                    { stt: 37, name: "Hoa Phạm", distance: "217.48" },
                    { stt: 38, name: "Hoang Tran", distance: "216.05" },
                    { stt: 39, name: "diem lam", distance: "214.09" },
                    { stt: 40, name: "Thụy NguyễnH", distance: "212.38" },
                    { stt: 41, name: "Phong Vũ Steel", distance: "211.78" },
                    { stt: 42, name: "Nguyễn Đức", distance: "210.7" },
                    { stt: 43, name: "Tú Lê Minh", distance: "205.7" },
                    { stt: 44, name: "Thao Vo", distance: "203.96" },
                    { stt: 45, name: "Thao Nguyen", distance: "198.79" },
                    { stt: 46, name: "Nhi Dop", distance: "197.13" },
                    { stt: 47, name: "Nguyen Ngu", distance: "196.04" },
                    { stt: 48, name: "Le Manh Hung", distance: "195.73" },
                    { stt: 49, name: "Trung .nc_00003", distance: "194.97" },
                    { stt: 50, name: "CAO LAN", distance: "194.02" },
                    { stt: 51, name: "Nguyen Dang Khoa", distance: "192.51" },
                    { stt: 52, name: "thaibao nguyen", distance: "192.38" },
                    { stt: 53, name: "Thai Nguyen", distance: "191" },
                    { stt: 54, name: "Ngọc Đoàn", distance: "189.32" },
                    { stt: 55, name: "Tram Nguyen Dong Phuong", distance: "188.29" },
                    { stt: 56, name: "Robert Nguyễn", distance: "188.29" },
                    { stt: 57, name: "Hoàng Văn Vũ", distance: "188.08" },
                    { stt: 58, name: "Thuan Than", distance: "185.32" },
                    { stt: 59, name: "Tien Tran", distance: "185.25" },
                    { stt: 60, name: "Mattsyan Nguyen", distance: "183.32" },
                    { stt: 61, name: "Chú Pé Bán Khô", distance: "182.59" },
                    { stt: 62, name: "Minh Sunrise", distance: "182.47" },
                    { stt: 63, name: "Mai nhật Hoà", distance: "181.78" },
                    { stt: 64, name: "Cuong [UPS Italy]", distance: "181.67" },
                    { stt: 65, name: "Chau Nguyen", distance: "180.94" },
                    { stt: 66, name: "Giang Minh", distance: "180.81" },
                    { stt: 67, name: "TH. Hương_g", distance: "180.79" },
                    { stt: 68, name: "Tan Bui", distance: "180.39" },
                    { stt: 69, name: "Thư Thư", distance: "180.38" },
                    { stt: 70, name: "Ashutosh Mohapatra", distance: "179.88" },
                    { stt: 71, name: "Nhon Le", distance: "179.85" },
                    { stt: 72, name: "Mai Hoang Nam", distance: "179.52" },
                    { stt: 73, name: "Hằng Trần Thị", distance: "179.04" },
                    { stt: 74, name: "Khánh Nguyễn Sơn Kim", distance: "178.74" },
                    { stt: 75, name: "Raul luu (PMER)", distance: "178.12" },
                    { stt: 76, name: "Sang Nguyen", distance: "177.3" },
                    { stt: 77, name: "Sarah Ho", distance: "177.28" },
                    { stt: 78, name: "Lâm Nguyễn", distance: "176.07" },
                    { stt: 79, name: "Nga Hà", distance: "174.52" },
                    { stt: 80, name: "Le Tuan Duong", distance: "174.44" },
                    { stt: 81, name: "VĂN QUỲNH LẠI", distance: "172.14" },
                    { stt: 82, name: "Ân Võ Thiện", distance: "171.04" },
                    { stt: 83, name: "Vân Phạm", distance: "170.91" },
                    { stt: 84, name: "PHI ĐANG", distance: "169.48" },
                    { stt: 85, name: "Tran Mai", distance: "168.86" },
                    { stt: 86, name: "Hieu Nguyen", distance: "168.83" },
                    { stt: 87, name: "Lê Nguyễn", distance: "168.27" },
                    { stt: 88, name: "Nguyễn Chánh Thi", distance: "168.25" },
                    { stt: 89, name: "Tran Bang", distance: "164.22" },
                    { stt: 90, name: "Anh Tran", distance: "164.21" },
                    { stt: 91, name: "Tran Minh Phuong", distance: "164.04" },
                    { stt: 92, name: "Nhat Anh Nguyen", distance: "162.77" },
                    { stt: 93, name: "Thao Nguyen", distance: "162.64" },
                    { stt: 94, name: "Uyên Le", distance: "161.28" },
                    { stt: 95, name: "Hằng Dương", distance: "161.26" },
                    { stt: 96, name: "nghia tonduy", distance: "161.09" },
                    { stt: 97, name: "Do Thi Hai Trang", distance: "156.34" },
                    { stt: 98, name: "Tu Do", distance: "154.43" },
                    { stt: 99, name: "Nam Nguyen", distance: "151.53" },
                    { stt: 100, name: "Ha Ngoc Mi", distance: "150.46" },
                    { stt: 101, name: "Robert Hồ Mậu Lực", distance: "150" },
                    { stt: 102, name: "Annie Ho", distance: "149.72" },
                    { stt: 103, name: "Duy Hoang Vo", distance: "147.29" },
                    { stt: 104, name: "Luong Van Hai", distance: "141.81" },
                    { stt: 105, name: "Cat Nguyen", distance: "141.81" },
                    { stt: 106, name: "Thao Do", distance: "141.81" },
                    { stt: 107, name: "Jennifer Trần", distance: "141.81" }
                  ].map((runner, index) => (
                    <tr key={runner.stt} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {runner.stt}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                        {runner.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono text-green-600 font-semibold">
                        {runner.distance}
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
              <div className="text-3xl font-bold text-green-600 mb-2">107</div>
              <div className="text-gray-600">Total Legend Runners</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">610.01</div>
              <div className="text-gray-600">Highest Distance (KM)</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">141.81</div>
              <div className="text-gray-600">Minimum LOP Distance (KM)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">LOP 2025 Progress</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📅</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Current Status</h3>
                    <p className="text-gray-600">As of July 27, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏃‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Leading Runner</h3>
                    <p className="text-gray-600">Trần Thanh Cương - 610.01 KM</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Progress</h3>
                    <p className="text-gray-600">107 Runners Qualified</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Competition</h3>
                    <p className="text-gray-600">Still Ongoing - Join Now!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join the 2025 Legend
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The competition is still ongoing! Join the PHU MY HUNG RUNNERS CLUB and compete for Legend status.
          </p>
          <a
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join the Club
          </a>
        </div>
      </section>
    </div>
  );
}