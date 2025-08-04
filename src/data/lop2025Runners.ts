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
  { stt: 17, name: "An Lăng Thùy", distance: "317.29", gender: "Nữ" },
  { stt: 18, name: "Đạt Lê", distance: "315.89", gender: "Nam" },
  { stt: 19, name: "THU THUY DO", distance: "312.31", gender: "Nữ" },
  { stt: 20, name: "Duc Le", distance: "311.08", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/105551690" },
  { stt: 21, name: "Hợp Phạm", distance: "307.43", gender: "Nam", stravaUrl: "https://www.strava.com/athletes/63517681" },
  { stt: 22, name: "Phan Thi Ngoc Sanh", distance: "303.15", gender: "Nữ" },
  { stt: 23, name: "Hung Do Nguyen", distance: "296.77", gender: "Nam" },
  { stt: 24, name: "Hợp Phạm", distance: "289.02", gender: "Nam" },
  { stt: 25, name: "Duc Le", distance: "285.07", gender: "Nam" },
  { stt: 26, name: "Trung Lê Huỳnh Ngọc", distance: "279.64", gender: "Nam" },
  { stt: 27, name: "Trường Lâm", distance: "278.90", gender: "Nam" },
  { stt: 28, name: "Thanh Dũng Lâm", distance: "278.69", gender: "Nam" },
  { stt: 29, name: "PETER PAN", distance: "270.74", gender: "Nam" },
  { stt: 30, name: "wei harn choo", distance: "264.48", gender: "Nam" },
  { stt: 31, name: "Nhi Mỹ Phan", distance: "254.80", gender: "Nữ" },
  { stt: 32, name: "Đặng Đức", distance: "254.31", gender: "Nam" },
  { stt: 33, name: "Vu Nguyen", distance: "253.65", gender: "Nam" },
  { stt: 34, name: "Dương Nguyễn (Nhuận Quang)", distance: "252.28", gender: "Nam" },
  { stt: 35, name: "ALEX", distance: "251.27", gender: "Nam" },
  { stt: 36, name: "Minh Tri Sam", distance: "246.72", gender: "Nam" },
  { stt: 37, name: "Hoa Phạm", distance: "242.15", gender: "Nữ" },
  { stt: 38, name: "Anh Perdu", distance: "239.23", gender: "Nam" },
  { stt: 39, name: "Thụy NguyễnH", distance: "236.86", gender: "Nữ" },
  { stt: 40, name: "To Lucie Khanh", distance: "236.19", gender: "Nữ" },
  { stt: 41, name: "Hoang Tran", distance: "234.80", gender: "Nam" },
  { stt: 42, name: "Nguyen Huu Duc", distance: "232.60", gender: "Nam" },
  { stt: 43, name: "Bình Khứu", distance: "232.28", gender: "Nam" },
  { stt: 44, name: "Tran Van Tuoi", distance: "231.31", gender: "Nam" },
  { stt: 45, name: "Bich Nguyen Doan", distance: "230.12", gender: "Nữ" },
  { stt: 46, name: "Tú Lê Minh", distance: "227.33", gender: "Nam" },
  { stt: 47, name: "Thao Nguyen", distance: "226.15", gender: "Nữ" },
  { stt: 48, name: "Thao Vo", distance: "223.93", gender: "Nữ" },
  { stt: 49, name: "Thai Nguyen", distance: "221.07", gender: "Nam" },
  { stt: 50, name: "Tram Nguyen Dong Phuong", distance: "220.82", gender: "Nam" },
  { stt: 51, name: "Nguyen Dang Khoa", distance: "220.26", gender: "Nam" },
  { stt: 52, name: "thaibao nguyen", distance: "219.65", gender: "Nam" },
  { stt: 53, name: "Nhi Dop", distance: "216.06", gender: "Nữ" },
  { stt: 54, name: "diem lam", distance: "216.05", gender: "Nữ" },
  { stt: 55, name: "Tien Tran", distance: "215.88", gender: "Nữ" },
  { stt: 56, name: "Nguyen Ngu", distance: "214.64", gender: "Nam" },
  { stt: 57, name: "Le Manh Hung", distance: "212.88", gender: "Nam" },
  { stt: 58, name: "Trung .nc_00003", distance: "212.56", gender: "Nam" },
  { stt: 59, name: "Phong Vũ Steel", distance: "212.38", gender: "Nam" },
  { stt: 60, name: "CAO LAN", distance: "211.92", gender: "Nam" },
  { stt: 61, name: "Nguyễn Đức", distance: "211.78", gender: "Nam" },
  { stt: 62, name: "Robert Nguyễn", distance: "210.50", gender: "Nam" },
  { stt: 63, name: "Ngọc Đoàn", distance: "207.85", gender: "Nam" },
  { stt: 64, name: "Chú Pé Bán Khô", distance: "207.23", gender: "Nam" },
  { stt: 65, name: "Khánh Nguyễn Sơn Kim", distance: "206.69", gender: "Nam" },
  { stt: 66, name: "Hoàng Văn Vũ", distance: "204.64", gender: "Nam" },
  { stt: 67, name: "Hằng Trần Thị", distance: "203.56", gender: "Nữ" },
  { stt: 68, name: "Nhon Le", distance: "203.10", gender: "Nam" },
  { stt: 69, name: "Thư Thư", distance: "201.93", gender: "Nữ" },
  { stt: 70, name: "Le Tuan Duong", distance: "201.62", gender: "Nam" },
  { stt: 71, name: "Raul luu (PMER)", distance: "199.16", gender: "Nam" },
  { stt: 72, name: "Mattsyan Nguyen", distance: "197.22", gender: "Nam" },
  { stt: 73, name: "Mai Hoang Nam", distance: "197.16", gender: "Nam" },
  { stt: 74, name: "Ashutosh Mohapatra", distance: "196.13", gender: "Nam" },
  { stt: 75, name: "Sarah Ho", distance: "195.54", gender: "Nữ" },
  { stt: 76, name: "Sang Nguyen", distance: "193.88", gender: "Nam" },
  { stt: 77, name: "Thuan Than", distance: "193.60", gender: "Nam" },
  { stt: 78, name: "PHI ĐANG", distance: "193.31", gender: "Nam" },
  { stt: 79, name: "Nga Hà", distance: "193.03", gender: "Nữ" },
  { stt: 80, name: "Lâm Nguyễn", distance: "192.43", gender: "Nam" },
  { stt: 81, name: "Hieu Nguyen", distance: "191.98", gender: "Nam" },
  { stt: 82, name: "Tran Mai", distance: "191.62", gender: "Nữ" },
  { stt: 83, name: "QUỲNH LẠI", distance: "190.73", gender: "Nữ" },
  { stt: 84, name: "Tu Do", distance: "189.65", gender: "Nam" },
  { stt: 85, name: "Lê Nguyễn", distance: "184.57", gender: "Nam" },
  { stt: 86, name: "Ân Võ Thiện", distance: "184.47", gender: "Nam" },
  { stt: 87, name: "Vân Phạm", distance: "184.41", gender: "Nữ" },
  { stt: 88, name: "Uyên Le", distance: "184.34", gender: "Nữ" },
  { stt: 89, name: "Tran Bang", distance: "184.28", gender: "Nam" },
  { stt: 90, name: "Hằng Dương", distance: "183.89", gender: "Nữ" },
  { stt: 91, name: "Nguyễn Chánh Thi", distance: "183.87", gender: "Nam" },
  { stt: 92, name: "Anh Tran", distance: "183.53", gender: "Nữ" },
  { stt: 93, name: "Minh Sunrise", distance: "183.32", gender: "Nam" },
  { stt: 94, name: "nghia tonduy", distance: "183.25", gender: "Nam" },
  { stt: 95, name: "Mai nhật Hoà", distance: "182.59", gender: "Nam" },
  { stt: 96, name: "Cuong [UPS Italy]", distance: "182.47", gender: "Nam" },
  { stt: 97, name: "Chau Nguyen", distance: "181.78", gender: "Nam" },
  { stt: 98, name: "Nhat Anh Nguyen", distance: "181.72", gender: "Nam" },
  { stt: 99, name: "Giang Minh", distance: "181.67", gender: "Nam" },
  { stt: 100, name: "Nam Nguyen", distance: "181.29", gender: "Nam" },
  { stt: 101, name: "TH. Hương_g", distance: "180.89", gender: "Nữ" },
  { stt: 102, name: "Tan Bui", distance: "180.81", gender: "Nam" },
  { stt: 103, name: "Do Thi Hai Trang", distance: "177.13", gender: "Nữ" },
  { stt: 104, name: "Thao Nguyen", distance: "174.37", gender: "Nữ" },
  { stt: 105, name: "Tran Minh Phuong", distance: "173.34", gender: "Nữ" },
  { stt: 106, name: "Annie Ho", distance: "173.15", gender: "Nữ" },
  { stt: 107, name: "Ha Ngoc Mi", distance: "171.42", gender: "Nữ" },
  // Note: Continuing with original data for remaining runners not in the update
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