// src/data/lop2025Runners.ts

export interface LOP2025Runner {
  stt: number;
  name: string;
  distance: string;
  gender: "Nam" | "Nữ";
  stravaUrl?: string;
  persistent?: boolean; // New field for 45-day challenge completers
}

export const lop2025Runners: LOP2025Runner[] = [
  { stt: 1, name: "Hanh Nguyen", distance: "1030.95", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/76132131", persistent: true },
  { stt: 2, name: "Tran Thanh Cuong", distance: "1023.46", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/37960101", persistent: true },
  { stt: 3, name: "Vu Tien Dung", distance: "909.00", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/66808305", persistent: true },
  { stt: 4, name: "Thanh Dũng Lâm", distance: "733.21", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/119092717", persistent: true },
  { stt: 5, name: "Như Đoàn Thái", distance: "712.64", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/110940248" },
  { stt: 6, name: "Đậu Danh", distance: "670.93", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/50444350" },
  { stt: 7, name: "Khanh Dao 🇻🇳", distance: "620.94", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/52668774" },
  { stt: 8, name: "Nguyễn Việt", distance: "595.94", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/132915541" },
  { stt: 9, name: "Tran Van Thiem", distance: "551.34", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/114678604" },
  { stt: 10, name: "Kenny Buj", distance: "508.69", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/133584617" },
  { stt: 11, name: "Nguyễn Đình Lãm", distance: "462.53", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/44950261" },
  { stt: 12, name: "Ngân Nông", distance: "455.37", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/114337287" },
  { stt: 13, name: "Phan Thi Ngoc Sanh", distance: "446.53", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/102302473", persistent: true },
  { stt: 14, name: "Đạt Lê", distance: "438.15", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/103031084" },
  { stt: 15, name: "Quang-Chau Nguyen", distance: "437.77", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/20235578" },
  { stt: 16, name: "Dương Nguyễn (Nhuận Quang)", distance: "424.21", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/133453642" },
  { stt: 17, name: "THU THUY DO", distance: "423.02", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/44392679" },
  { stt: 18, name: "Hung Do Nguyen", distance: "421.30", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/58339561" },
  { stt: 19, name: "Duc Le", distance: "416.37", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/105551690" },
  { stt: 20, name: "Trung Lê Huỳnh Ngọc", distance: "410.30", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/147527369" },
  { stt: 21, name: "wei harn choo", distance: "404.27", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/151888371", persistent: true },
  { stt: 22, name: "Trường Lâm", distance: "395.62", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/107895133" },
  { stt: 23, name: "Bich Nguyen Doan", distance: "387.06", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/86474722" },
  { stt: 24, name: "ALEX", distance: "376.35", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/36221470" },
  { stt: 25, name: "PETER PAN", distance: "370.06", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/120171466" },
  { stt: 26, name: "Hợp Phạm", distance: "367.87", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/63517681" },
  { stt: 27, name: "Đặng Đức", distance: "364.04", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/98655391" },
  { stt: 28, name: "Anh Perdu", distance: "359.35", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/52423815" },
  { stt: 29, name: "Minh Tri Sam", distance: "355.82", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/84065098" },
  { stt: 30, name: "Vu Nguyen", distance: "350.23", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/49909223" },
  { stt: 31, name: "Tran Van Tuoi", distance: "341.82", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/65135475" },
  { stt: 32, name: "Tú Lê Minh", distance: "338.72", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/118111657" },
  { stt: 33, name: "Phong Vũ Steel", distance: "336.55", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/96420301" },
  { stt: 34, name: "Hoa Phạm", distance: "336.09", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/143951399", persistent: true },
  { stt: 35, name: "To Lucie Khanh", distance: "334.92", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/141338762" },
  { stt: 36, name: "Nguyễn Đức", distance: "332.18", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/137028444" },
  { stt: 37, name: "Nhi Mỹ Phan", distance: "331.71", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/60283006" },
  { stt: 38, name: "Le Manh Hung", distance: "325.52", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/37128977" },
  { stt: 39, name: "Hoang Tran", distance: "324.22", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/52200458" },
  { stt: 40, name: "diem lam", distance: "321.14", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/43665056" },
  { stt: 41, name: "Nhi Dop", distance: "315.12", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/153037085" },
  { stt: 42, name: "Thụy NguyễnH", distance: "312.41", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/116858980" },
  { stt: 43, name: "Tram Nguyen Dong Phuong", distance: "311.37", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/28858627" },
  { stt: 44, name: "Thao Nguyen", distance: "310.56", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/72493847" },
  { stt: 45, name: "Thai Nguyen", distance: "306.43", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/34875792" },
  { stt: 46, name: "Ân Võ Thiện", distance: "300.33", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/65474333" },
  { stt: 47, name: "Cuong [UPS Italy]", distance: "297.25", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/78612508" },
  { stt: 48, name: "Nguyen Ngu", distance: "296.71", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/113571450", persistent: true },
  { stt: 49, name: "Hoàng Văn Vũ", distance: "296.24", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/152141632" },
  { stt: 50, name: "CAO LAN", distance: "292.46", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/152066739", persistent: true },
  { stt: 51, name: "Tien Tran", distance: "292.40", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/117473335" },
  { stt: 52, name: "Robert Nguyễn", distance: "291.72", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/39222022" },
  { stt: 53, name: "Chau Nguyen", distance: "291.40", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/83553025" },
  { stt: 54, name: "Khánh Nguyễn Sơn Kim", distance: "291.03", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/145234017", persistent: true },
  { stt: 55, name: "Minh Sunrise", distance: "285.60", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/71482379" },
  { stt: 56, name: "Le Tuan Duong", distance: "285.11", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/114677553", persistent: true },
  { stt: 57, name: "Hằng Trần Thị", distance: "284.67", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/110755759" },
  { stt: 58, name: "Trung .nc_00003", distance: "284.42", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/66492671", persistent: true },
  { stt: 59, name: "Thuan Than", distance: "283.90", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/115094912" },
  { stt: 60, name: "TH. Hương_g", distance: "281.57", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/153357702" },
  { stt: 61, name: "Chú Pé Bán Khô", distance: "280.61", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/23496542" },
  { stt: 62, name: "Mattsyan Nguyen", distance: "280.24", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/74325676", persistent: true },
  { stt: 63, name: "Sarah Ho", distance: "280.12", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/69659705", persistent: true },
  { stt: 64, name: "Tu Do", distance: "276.99", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/174228115" },
  { stt: 65, name: "Nga Hà", distance: "276.58", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/146452677" },
  { stt: 66, name: "Thư Thư", distance: "276.40", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/139884534" },
  { stt: 67, name: "Ngọc Đoàn", distance: "276.17", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/121864496", persistent: true },
  { stt: 68, name: "Ashutosh Mohapatra", distance: "275.94", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/101257128" },
  { stt: 69, name: "Mai nhật Hoà", distance: "275.57", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/73680619" },
  { stt: 70, name: "Nhon Le", distance: "272.37", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/14531569" },
  { stt: 71, name: "Tan Bui", distance: "271.70", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/82706969" },
  { stt: 72, name: "Mai Hoang Nam", distance: "269.97", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/40077774" },
  { stt: 73, name: "Thao Nguyen", distance: "269.80", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/118760206" },
  { stt: 74, name: "Raul luu (PMER)", distance: "269.74", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/74022873" },
  { stt: 75, name: "Giang Minh", distance: "267.54", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/80591898" },
  { stt: 76, name: "Hieu Nguyen", distance: "267.44", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/73510851" },
  { stt: 77, name: "Lâm Nguyễn", distance: "266.92", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/55320616" },
  { stt: 78, name: "Tran Minh Phuong", distance: "265.41", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/48710692" },
  { stt: 79, name: "Uyên Le", distance: "263.87", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/132073496" },
  { stt: 80, name: "nghia tonduy", distance: "262.95", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/83592069" },
  { stt: 81, name: "PHI ĐANG", distance: "262.12", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/101244889" },
  { stt: 82, name: "QUỲNH LẠI", distance: "260.71", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/165198371" },
  { stt: 83, name: "Tran Bang", distance: "259.92", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/42913534" },
  { stt: 84, name: "Nhat Anh Nguyen", distance: "259.43", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/33446590" },
  { stt: 85, name: "Sang Nguyen", distance: "258.80", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/32012600" },
  { stt: 86, name: "Lê Nguyễn", distance: "257.75", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/22696937" },
  { stt: 87, name: "Nguyễn Chánh Thi", distance: "256.45", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/40450493" },
  { stt: 88, name: "Tran Mai", distance: "252.32", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/36322926" },
  { stt: 89, name: "Anh Tran", distance: "251.87", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/100298769" },
  { stt: 90, name: "Ha Ngoc Mi", distance: "250.53", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/115253035" },
  { stt: 91, name: "Hằng Dương", distance: "249.98", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/124985413" },
  { stt: 92, name: "Nam Nguyen", distance: "248.89", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/20451895" },
  { stt: 93, name: "Do Thi Hai Trang", distance: "243.77", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/103249864" },
  { stt: 94, name: "Robert Hồ Mậu Lực", distance: "241.62", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/108547436" },
  { stt: 95, name: "Jennifer Trần", distance: "241.36", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/156777823" },
  { stt: 96, name: "Thao Do", distance: "238.35", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/40428342" },
  { stt: 97, name: "Duy Hoang Vo", distance: "236.83", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/72271846" },
  { stt: 98, name: "Luong Van Hai", distance: "235.00", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/103504357" },
  { stt: 99, name: "Huỳnh Xuân Viêt", distance: "231.40", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/10219228" },
  { stt: 100, name: "Cat Nguyen", distance: "230.66", gender: "Nữ", stravaUrl: "https://www.strava.com/athletes/52200049" }
];

// Helper functions for statistics (KEEPING ALL ORIGINAL FUNCTIONS)
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

// Additional helper functions for Strava integration (KEEPING ALL ORIGINAL FUNCTIONS)
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

// NEW FUNCTIONS for persistent runners only
export const getPersistentRunners = () => 
  lop2025Runners.filter(runner => runner.persistent === true);

export const getNonPersistentRunners = () => 
  lop2025Runners.filter(runner => !runner.persistent);

export const getPersistentRunnersCount = () => 
  lop2025Runners.filter(runner => runner.persistent === true).length;