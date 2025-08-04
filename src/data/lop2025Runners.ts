// src/data/lop2025Runners.ts

// src/data/lop2025Runners.ts

export interface LOP2025Runner {
  stt: number;
  name: string;
  distance: string;
  gender: "Nam" | "Nữ";
  stravaUrl?: string;
}

export const lop2025Runners: LOP2025Runner[] = [
  { stt: 1, name: "Hanh Nguyen", distance: "792.76", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/76132131" },
  { stt: 2, name: "Tran Thanh Cuong", distance: "780.55", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/37960101" },
  { stt: 3, name: "Vu Tien Dung", distance: "736.13", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/66808305" },
  { stt: 4, name: "Khanh Dao 🇻🇳", distance: "508.23", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/52668774" },
  { stt: 5, name: "Nguyễn Việt", distance: "480.86", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/132915541" },
  { stt: 6, name: "Như Đoàn Thái", distance: "475.31", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/110940248" },
  { stt: 7, name: "Đậu Danh", distance: "466.20", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/50444350" },
  { stt: 8, name: "Tran Van Thiem", distance: "447.64", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/114678604" },
  { stt: 9, name: "Kenny Buj", distance: "384.52", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/133584617" },
  { stt: 10, name: "Đạt Lê", distance: "364.93", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/103031084" },
  { stt: 11, name: "Nguyễn Đình Lãm", distance: "362.67", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/44950261" },
  { stt: 12, name: "Quang-Chau Nguyen", distance: "354.69", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/20235578" },
  { stt: 13, name: "Phan Thi Ngoc Sanh", distance: "349.64", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/102302473" },
  { stt: 14, name: "Hung Do Nguyen", distance: "347.39", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/58339561" },
  { stt: 15, name: "Ngân Nông", distance: "342.50", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/114337287" },
  { stt: 16, name: "THU THUY DO", distance: "338.65", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/44392679" },
  { stt: 17, name: "Duc Le", distance: "326.50", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/105551690" },
  { stt: 18, name: "Trung Lê Huỳnh Ngọc", distance: "321.25", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/147527369" },
  { stt: 19, name: "Trường Lâm", distance: "317.69", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/107895133" },
  { stt: 20, name: "Hợp Phạm", distance: "307.43", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/63517681" },
  { stt: 21, name: "PETER PAN", distance: "297.78", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/120171466" },
  { stt: 22, name: "Đặng Đức", distance: "295.13", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/98655391" },
  { stt: 23, name: "Dương Nguyễn (Nhuận Quang)", distance: "288.08", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/133453642" },
  { stt: 24, name: "Minh Tri Sam", distance: "284.47", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/84065098" },
  { stt: 25, name: "Vu Nguyen", distance: "281.68", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/49909223" },
  { stt: 26, name: "Thanh Dũng Lâm", distance: "278.69", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/119092717" },
  { stt: 27, name: "ALEX", distance: "277.71", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/36221470" },
  { stt: 28, name: "Nhi Mỹ Phan", distance: "275.98", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/60283006" },
  { stt: 29, name: "Hoa Phạm", distance: "274.75", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/143951399" },
  { stt: 30, name: "Thao Vo", distance: "269.30", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/26631932" },
  { stt: 31, name: "To Lucie Khanh", distance: "267.34", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/141338762" },
  { stt: 32, name: "wei harn choo", distance: "264.48", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/151888371" },
  { stt: 33, name: "Hoang Tran", distance: "258.73", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/52200458" },
  { stt: 34, name: "Thụy NguyễnH", distance: "256.16", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/116858980" },
  { stt: 35, name: "Tram Nguyen Dong Phuong", distance: "255.67", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/28858627" },
  { stt: 36, name: "Nguyen Dang Khoa", distance: "253.58", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/164990988" },
  { stt: 37, name: "Thao Nguyen", distance: "253.05", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/72493847" },
  { stt: 38, name: "Thai Nguyen", distance: "243.85", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/34875792" },
  { stt: 39, name: "Tien Tran", distance: "242.49", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/117473335" },
  { stt: 40, name: "Nhi Dop", distance: "240.78", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/153037085" },
  { stt: 41, name: "Khánh Nguyễn Sơn Kim", distance: "239.28", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/145234017" },
  { stt: 42, name: "Anh Perdu", distance: "239.23", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/52423815" },
  { stt: 43, name: "CAO LAN", distance: "238.27", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/152066739" },
  { stt: 44, name: "Trung .nc_00003", distance: "236.22", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/66492671" },
  { stt: 45, name: "Robert Nguyễn", distance: "235.95", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/39222022" },
  { stt: 46, name: "Nguyen Ngu", distance: "235.89", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/113571450" },
  { stt: 47, name: "Ân Võ Thiện", distance: "235.79", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/65474333" },
  { stt: 48, name: "Le Manh Hung", distance: "234.03", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/37128977" },
  { stt: 49, name: "Ngọc Đoàn", distance: "234.01", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/121864496" },
  { stt: 50, name: "Cuong [UPS Italy]", distance: "234.00", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/78612508" },
  { stt: 51, name: "Thư Thư", distance: "233.51", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/139884534" },
  { stt: 52, name: "Chau Nguyen", distance: "232.91", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/83553025" },
  { stt: 53, name: "Bình Khứu", distance: "232.28", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/123361982" },
  { stt: 54, name: "Chú Pé Bán Khô", distance: "232.26", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/23496542" },
  { stt: 55, name: "Mai nhật Hoà", distance: "231.91", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/73680619" },
  { stt: 56, name: "Thuan Than", distance: "231.65", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/115094912" },
  { stt: 57, name: "Tran Van Tuoi", distance: "231.31", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/65135475" },
  { stt: 58, name: "Bich Nguyen Doan", distance: "230.12", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/86474722" },
  { stt: 59, name: "Minh Sunrise", distance: "229.95", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/71482379" },
  { stt: 60, name: "Le Tuan Duong", distance: "229.17", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/114677553" },
  { stt: 61, name: "Hoàng Văn Vũ", distance: "229.06", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/152141632" },
  { stt: 62, name: "Nga Hà", distance: "227.48", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/146452677" },
  { stt: 63, name: "Nhon Le", distance: "225.28", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/14531569" },
  { stt: 64, name: "Raul luu (PMER)", distance: "224.40", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/74022873" },
  { stt: 65, name: "Sarah Ho", distance: "223.18", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/69659705" },
  { stt: 66, name: "TH. Hương_g", distance: "221.73", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/153357702" },
  { stt: 67, name: "Tan Bui", distance: "219.00", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/82706969" },
  { stt: 68, name: "Sang Nguyen", distance: "218.44", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/32012600" },
  { stt: 69, name: "Ashutosh Mohapatra", distance: "217.85", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/101257128" },
  { stt: 70, name: "Mattsyan Nguyen", distance: "217.78", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/74325676" },
  { stt: 71, name: "Mai Hoang Nam", distance: "217.74", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/40077774" },
  { stt: 72, name: "Lâm Nguyễn", distance: "216.62", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/55320616" },
  { stt: 73, name: "diem lam", distance: "216.05", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/43665056" },
  { stt: 74, name: "Uyên Le", distance: "214.71", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/132073496" },
  { stt: 75, name: "Hằng Trần Thị", distance: "213.63", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/110755759" },
  { stt: 76, name: "QUỲNH LẠI", distance: "213.12", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/165198371" },
  { stt: 77, name: "Phong Vũ Steel", distance: "212.38", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/96420301" },
  { stt: 78, name: "Nguyễn Đức", distance: "211.78", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/137028444" },
  { stt: 79, name: "Tran Minh Phuong", distance: "211.39", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/48710692" },
  { stt: 80, name: "PHI ĐANG", distance: "209.48", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/101244889" },
  { stt: 81, name: "Nhat Anh Nguyen", distance: "209.11", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/33446590" },
  { stt: 82, name: "Hieu Nguyen", distance: "207.96", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/73510851" },
  { stt: 83, name: "Nguyễn Chánh Thi", distance: "207.89", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/40450493" },
  { stt: 84, name: "Tran Bang", distance: "207.25", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/42913534" },
  { stt: 85, name: "Tu Do", distance: "207.20", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/174228115" },
  { stt: 86, name: "Tran Mai", distance: "206.84", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/36322926" },
  { stt: 87, name: "nghia tonduy", distance: "206.34", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/83592069" },
  { stt: 88, name: "Lê Nguyễn", distance: "204.85", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/22696937" },
  { stt: 89, name: "Anh Tran", distance: "204.12", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/100298769" },
  { stt: 90, name: "Do Thi Hai Trang", distance: "197.69", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/103249864" },
  { stt: 91, name: "Robert Hồ Mậu Lực", distance: "196.55", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/108547436" },
  { stt: 92, name: "Ha Ngoc Mi", distance: "195.22", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/115253035" },
  { stt: 93, name: "Thao Do", distance: "193.18", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/40428342" },
  { stt: 94, name: "Duy Hoang Vo", distance: "190.55", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/72271846" },
  { stt: 95, name: "Luong Van Hai", distance: "190.00", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/103504357" },
  { stt: 96, name: "Jennifer Trần", distance: "185.42", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/156777823" },
  { stt: 97, name: "Cat Nguyen", distance: "184.97", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/52200049" },
  { stt: 98, name: "Huỳnh Xuân Việt", distance: "184.92", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/10219228" },
  { stt: 99, name: "Vân Phạm", distance: "184.41", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/113794102" },
  { stt: 100, name: "Giang Minh", distance: "181.67", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/80591898" },
  { stt: 101, name: "Nam Nguyen", distance: "181.29", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/20451895" },
];

// Helper functions for statistics
export const getTotalRunners = () => lop2025Runners.length;

export const getHighestDistance = () => {
  const highest = lop2025Runners.reduce((max, runner) => 
    parseFloat(runner.distance) > parseFloat(max.distance) ? runner : max
  );
  return highest.distance;
};

export const getLowestDistance = () => {
  const lowest = lop2025Runners.reduce((min, runner) => 
    parseFloat(runner.distance) < parseFloat(min.distance) ? runner : min
  );
  return lowest.distance;
};

export const getLeadingRunner = () => lop2025Runners[0];

// Additional helper functions for Strava integration
export const getRunnersWithStrava = () => 
  lop2025Runners.filter(runner => runner.stravaUrl);

export const getRunnerByName = (name: string) => 
  lop2025Runners.find(runner => 
    runner.name.toLowerCase().includes(name.toLowerCase())
  );

export const getTopRunners = (count: number = 10) => 
  lop2025Runners.slice(0, count);

export const getRunnersByGender = (gender: "Nam" | "Nữ") => 
  lop2025Runners.filter(runner => runner.gender === gender);