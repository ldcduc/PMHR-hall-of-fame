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
  { stt: 1, name: "Hanh Nguyen", stravaUrl: "https://www.strava.com/athletes/76132131", distance: "1030.95", gender: "Nữ" },
  { stt: 2, name: "Tran Thanh Cuong", stravaUrl: "https://www.strava.com/athletes/37960101", distance: "1023.46", gender: "Nam" },
  { stt: 3, name: "Vu Tien Dung", stravaUrl: "https://www.strava.com/athletes/66808305", distance: "909.00", gender: "Nam" },
  { stt: 4, name: "Thanh Dũng Lâm", stravaUrl: "https://www.strava.com/athletes/119092717", distance: "733.21", gender: "Nam" },
  { stt: 5, name: "Như Đoàn Thái", stravaUrl: "https://www.strava.com/athletes/110940248", distance: "712.64", gender: "Nam" },
  { stt: 6, name: "Đậu Danh", stravaUrl: "https://www.strava.com/athletes/50444350", distance: "670.93", gender: "Nam" },
  { stt: 7, name: "Khanh Dao 🇻🇳", stravaUrl: "https://www.strava.com/athletes/52668774", distance: "620.94", gender: "Nam" },
  { stt: 8, name: "Nguyễn Việt", stravaUrl: "https://www.strava.com/athletes/132915541", distance: "595.94", gender: "Nam" },
  { stt: 9, name: "Tran Van Thiem", stravaUrl: "https://www.strava.com/athletes/114678604", distance: "551.34", gender: "Nam" },
  { stt: 10, name: "Kenny Buj", stravaUrl: "https://www.strava.com/athletes/133584617", distance: "508.69", gender: "Nam" },
  { stt: 11, name: "Nguyễn Đình Lãm", stravaUrl: "https://www.strava.com/athletes/44950261", distance: "462.53", gender: "Nam" },
  { stt: 12, name: "Ngân Nông", stravaUrl: "https://www.strava.com/athletes/114337287", distance: "455.37", gender: "Nữ" },
  { stt: 13, name: "Phan Thi Ngoc Sanh", stravaUrl: "https://www.strava.com/athletes/102302473", distance: "446.53", gender: "Nữ" },
  { stt: 14, name: "Đạt Lê", stravaUrl: "https://www.strava.com/athletes/103031084", distance: "438.15", gender: "Nam" },
  { stt: 15, name: "Quang-Chau Nguyen", stravaUrl: "https://www.strava.com/athletes/20235578", distance: "437.77", gender: "Nam" },
  { stt: 16, name: "Dương Nguyễn (Nhuận Quang)", stravaUrl: "https://www.strava.com/athletes/133453642", distance: "424.21", gender: "Nam" },
  { stt: 17, name: "THU THUY DO", stravaUrl: "https://www.strava.com/athletes/44392679", distance: "423.02", gender: "Nữ" },
  { stt: 18, name: "Hung Do Nguyen", stravaUrl: "https://www.strava.com/athletes/58339561", distance: "421.30", gender: "Nam" },
  { stt: 19, name: "Duc Le", stravaUrl: "https://www.strava.com/athletes/105551690", distance: "416.37", gender: "Nam" },
  { stt: 20, name: "Trung Lê Huỳnh Ngọc", stravaUrl: "https://www.strava.com/athletes/147527369", distance: "410.30", gender: "Nam" },
  { stt: 21, name: "wei harn choo", stravaUrl: "https://www.strava.com/athletes/151888371", distance: "404.27", gender: "Nam" },
  { stt: 22, name: "Trường Lâm", stravaUrl: "https://www.strava.com/athletes/107895133", distance: "395.62", gender: "Nam" },
  { stt: 23, name: "Bich Nguyen Doan", stravaUrl: "https://www.strava.com/athletes/86474722", distance: "387.06", gender: "Nữ" },
  { stt: 24, name: "ALEX", stravaUrl: "https://www.strava.com/athletes/36221470", distance: "376.35", gender: "Nam" },
  { stt: 25, name: "PETER PAN", stravaUrl: "https://www.strava.com/athletes/120171466", distance: "370.06", gender: "Nam" },
  { stt: 26, name: "Hợp Phạm", stravaUrl: "https://www.strava.com/athletes/63517681", distance: "367.87", gender: "Nam" },
  { stt: 27, name: "Đặng Đức", stravaUrl: "https://www.strava.com/athletes/98655391", distance: "364.04", gender: "Nam" },
  { stt: 28, name: "Anh Perdu", stravaUrl: "https://www.strava.com/athletes/52423815", distance: "359.35", gender: "Nam" },
  { stt: 29, name: "Minh Tri Sam", stravaUrl: "https://www.strava.com/athletes/84065098", distance: "355.82", gender: "Nam" },
  { stt: 30, name: "Vu Nguyen", stravaUrl: "https://www.strava.com/athletes/49909223", distance: "350.23", gender: "Nam" },
  { stt: 31, name: "Tran Van Tuoi", stravaUrl: "https://www.strava.com/athletes/65135475", distance: "341.82", gender: "Nam" },
  { stt: 32, name: "Tú Lê Minh", stravaUrl: "https://www.strava.com/athletes/118111657", distance: "338.72", gender: "Nam" },
  { stt: 33, name: "Phong Vũ Steel", stravaUrl: "https://www.strava.com/athletes/96420301", distance: "336.55", gender: "Nam" },
  { stt: 34, name: "Hoa Phạm", stravaUrl: "https://www.strava.com/athletes/143951399", distance: "336.09", gender: "Nữ" },
  { stt: 35, name: "To Lucie Khanh", stravaUrl: "https://www.strava.com/athletes/141338762", distance: "334.92", gender: "Nữ" },
  { stt: 36, name: "Nguyễn Đức", stravaUrl: "https://www.strava.com/athletes/137028444", distance: "332.18", gender: "Nam" },
  { stt: 37, name: "Nhi Mỹ Phan", stravaUrl: "https://www.strava.com/athletes/60283006", distance: "331.71", gender: "Nữ" },
  { stt: 38, name: "Le Manh Hung", stravaUrl: "https://www.strava.com/athletes/37128977", distance: "325.52", gender: "Nam" },
  { stt: 39, name: "Hoang Tran", stravaUrl: "https://www.strava.com/athletes/52200458", distance: "324.22", gender: "Nam" },
  { stt: 40, name: "diem lam", stravaUrl: "https://www.strava.com/athletes/43665056", distance: "321.14", gender: "Nữ" },
  { stt: 41, name: "Nhi Dop", stravaUrl: "https://www.strava.com/athletes/153037085", distance: "315.12", gender: "Nữ" },
  { stt: 42, name: "Thụy NguyễnH", stravaUrl: "https://www.strava.com/athletes/116858980", distance: "312.41", gender: "Nam" },
  { stt: 43, name: "Tram Nguyen Dong Phuong", stravaUrl: "https://www.strava.com/athletes/28858627", distance: "311.37", gender: "Nữ" },
  { stt: 44, name: "Thao Nguyen", stravaUrl: "https://www.strava.com/athletes/72493847", distance: "310.56", gender: "Nữ" },
  { stt: 45, name: "Thai Nguyen", stravaUrl: "https://www.strava.com/athletes/34875792", distance: "306.43", gender: "Nam" },
  { stt: 46, name: "Ân Võ Thiện", stravaUrl: "https://www.strava.com/athletes/65474333", distance: "300.33", gender: "Nam" },
  { stt: 47, name: "Cuong [UPS Italy]", stravaUrl: "https://www.strava.com/athletes/78612508", distance: "297.25", gender: "Nam" },
  { stt: 48, name: "Nguyen Ngu", stravaUrl: "https://www.strava.com/athletes/113571450", distance: "296.71", gender: "Nam" },
  { stt: 49, name: "Hoàng Văn Vũ", stravaUrl: "https://www.strava.com/athletes/152141632", distance: "296.24", gender: "Nam" },
  { stt: 50, name: "CAO LAN", stravaUrl: "https://www.strava.com/athletes/152066739", distance: "292.46", gender: "Nữ" },
  { stt: 51, name: "Tien Tran", stravaUrl: "https://www.strava.com/athletes/117473335", distance: "292.40", gender: "Nam" },
  { stt: 52, name: "Robert Nguyễn", stravaUrl: "https://www.strava.com/athletes/39222022", distance: "291.72", gender: "Nam" },
  { stt: 53, name: "Chau Nguyen", stravaUrl: "https://www.strava.com/athletes/83553025", distance: "291.40", gender: "Nữ" },
  { stt: 54, name: "Khánh Nguyễn Sơn Kim", stravaUrl: "https://www.strava.com/athletes/145234017", distance: "291.03", gender: "Nam" },
  { stt: 55, name: "Minh Sunrise", stravaUrl: "https://www.strava.com/athletes/71482379", distance: "285.60", gender: "Nam" },
  { stt: 56, name: "Le Tuan Duong", stravaUrl: "https://www.strava.com/athletes/114677553", distance: "285.11", gender: "Nam" },
  { stt: 57, name: "Hằng Trần Thị", stravaUrl: "https://www.strava.com/athletes/110755759", distance: "284.67", gender: "Nữ" },
  { stt: 58, name: "Trung .nc_00003", stravaUrl: "https://www.strava.com/athletes/66492671", distance: "284.42", gender: "Nam" },
  { stt: 59, name: "Thuan Than", stravaUrl: "https://www.strava.com/athletes/115094912", distance: "283.90", gender: "Nam" },
  { stt: 60, name: "TH. Hương_g", stravaUrl: "https://www.strava.com/athletes/153357702", distance: "281.57", gender: "Nữ" },
  { stt: 61, name: "Chú Pé Bán Khô", stravaUrl: "https://www.strava.com/athletes/23496542", distance: "280.61", gender: "Nam" },
  { stt: 62, name: "Mattsyan Nguyen", stravaUrl: "https://www.strava.com/athletes/74325676", distance: "280.24", gender: "Nam" },
  { stt: 63, name: "Sarah Ho", stravaUrl: "https://www.strava.com/athletes/69659705", distance: "280.12", gender: "Nữ" },
  { stt: 64, name: "Tu Do", stravaUrl: "https://www.strava.com/athletes/174228115", distance: "276.99", gender: "Nam" },
  { stt: 65, name: "Nga Hà", stravaUrl: "https://www.strava.com/athletes/146452677", distance: "276.58", gender: "Nữ" },
  { stt: 66, name: "Thư Thư", stravaUrl: "https://www.strava.com/athletes/139884534", distance: "276.40", gender: "Nữ" },
  { stt: 67, name: "Ngọc Đoàn", stravaUrl: "https://www.strava.com/athletes/121864496", distance: "276.17", gender: "Nữ" },
  { stt: 68, name: "Ashutosh Mohapatra", stravaUrl: "https://www.strava.com/athletes/101257128", distance: "275.94", gender: "Nam" },
  { stt: 69, name: "Mai nhật Hoà", stravaUrl: "https://www.strava.com/athletes/73680619", distance: "275.57", gender: "Nam" },
  { stt: 70, name: "Nhon Le", stravaUrl: "https://www.strava.com/athletes/14531569", distance: "272.37", gender: "Nam" },
  { stt: 71, name: "Tan Bui", stravaUrl: "https://www.strava.com/athletes/82706969", distance: "271.70", gender: "Nam" },
  { stt: 72, name: "Mai Hoang Nam", stravaUrl: "https://www.strava.com/athletes/40077774", distance: "269.97", gender: "Nam" },
  { stt: 73, name: "Thao Nguyen", stravaUrl: "https://www.strava.com/athletes/118760206", distance: "269.80", gender: "Nữ" },
  { stt: 74, name: "Raul luu (PMER)", stravaUrl: "https://www.strava.com/athletes/74022873", distance: "269.74", gender: "Nam" },
  { stt: 75, name: "Giang Minh", stravaUrl: "https://www.strava.com/athletes/80591898", distance: "267.54", gender: "Nam" },
  { stt: 76, name: "Hieu Nguyen", stravaUrl: "https://www.strava.com/athletes/73510851", distance: "267.44", gender: "Nam" },
  { stt: 77, name: "Lâm Nguyễn", stravaUrl: "https://www.strava.com/athletes/55320616", distance: "266.92", gender: "Nam" },
  { stt: 78, name: "Tran Minh Phuong", stravaUrl: "https://www.strava.com/athletes/48710692", distance: "265.41", gender: "Nam" },
  { stt: 79, name: "Uyên Le", stravaUrl: "https://www.strava.com/athletes/132073496", distance: "263.87", gender: "Nữ" },
  { stt: 80, name: "nghia tonduy", stravaUrl: "https://www.strava.com/athletes/83592069", distance: "262.95", gender: "Nam" },
  { stt: 81, name: "PHI ĐANG", stravaUrl: "https://www.strava.com/athletes/101244889", distance: "262.12", gender: "Nam" },
  { stt: 82, name: "QUỲNH LẠI", stravaUrl: "https://www.strava.com/athletes/165198371", distance: "260.71", gender: "Nữ" },
  { stt: 83, name: "Tran Bang", stravaUrl: "https://www.strava.com/athletes/42913534", distance: "259.92", gender: "Nam" },
  { stt: 84, name: "Nhat Anh Nguyen", stravaUrl: "https://www.strava.com/athletes/33446590", distance: "259.43", gender: "Nam" },
  { stt: 85, name: "Sang Nguyen", stravaUrl: "https://www.strava.com/athletes/32012600", distance: "258.80", gender: "Nam" },
  { stt: 86, name: "Lê Nguyễn", stravaUrl: "https://www.strava.com/athletes/22696937", distance: "257.75", gender: "Nam" },
  { stt: 87, name: "Nguyễn Chánh Thi", stravaUrl: "https://www.strava.com/athletes/40450493", distance: "256.45", gender: "Nam" },
  { stt: 88, name: "Tran Mai", stravaUrl: "https://www.strava.com/athletes/36322926", distance: "252.32", gender: "Nữ" },
  { stt: 89, name: "Anh Tran", stravaUrl: "https://www.strava.com/athletes/100298769", distance: "251.87", gender: "Nam" },
  { stt: 90, name: "Ha Ngoc Mi", stravaUrl: "https://www.strava.com/athletes/115253035", distance: "250.53", gender: "Nữ" },
  { stt: 91, name: "Hằng Dương", stravaUrl: "https://www.strava.com/athletes/124985413", distance: "249.98", gender: "Nữ" },
  { stt: 92, name: "Nam Nguyen", stravaUrl: "https://www.strava.com/athletes/20451895", distance: "248.89", gender: "Nam" },
  { stt: 93, name: "Do Thi Hai Trang", stravaUrl: "https://www.strava.com/athletes/103249864", distance: "243.77", gender: "Nữ" },
  { stt: 94, name: "Robert Hồ Mậu Lực", stravaUrl: "https://www.strava.com/athletes/108547436", distance: "241.62", gender: "Nam" },
  { stt: 95, name: "Jennifer Trần", stravaUrl: "https://www.strava.com/athletes/156777823", distance: "241.36", gender: "Nữ" },
  { stt: 96, name: "Thao Do", stravaUrl: "https://www.strava.com/athletes/40428342", distance: "238.35", gender: "Nữ" },
  { stt: 97, name: "Duy Hoang Vo", stravaUrl: "https://www.strava.com/athletes/72271846", distance: "236.83", gender: "Nam" },
  { stt: 98, name: "Luong Van Hai", stravaUrl: "https://www.strava.com/athletes/103504357", distance: "235.00", gender: "Nam" },
  { stt: 99, name: "Huỳnh Xuân Viêt", stravaUrl: "https://www.strava.com/athletes/10219228", distance: "231.40", gender: "Nam" },
  { stt: 100, name: "Cat Nguyen", stravaUrl: "https://www.strava.com/athletes/52200049", distance: "230.66", gender: "Nữ" }
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