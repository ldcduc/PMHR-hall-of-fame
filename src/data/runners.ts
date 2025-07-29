// src/data/runners.ts
import { Runner } from '../types/runner';

export const runners: Runner[] = [
  // Runners with Full Marathon records (sorted by FM time, fastest first)
  {
    id: '1',
    name: 'TRẦN THANH CƯƠNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/TRAN%20THANH%20CUONG.jpg',
    halfMarathonPR: '1:20:32',
    fullMarathonPR: '3:07:10', // Fastest FM
    achievements: [
      'HCMC Marathon 2025 - 534/5804',
      'HCMCIM 2020 - 114/321',
      'TCBHCMIM 2024 - 184/4012',
      'VMMNT 2023 - 125/955',
      'VMSQN 2023 - 159/886'
    ],
    bio: 'Member of PMHR team. Competitive marathoner with strong PRs in both half and full marathon distances.',
    joinDate: '2020-01-01',
  },
  {
    id: '36',
    name: 'QUÁCH THỊ BÍCH THÙY', 
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/QUACH%20THI%20BICH%20THUY.jpg',
    halfMarathonPR: '1:32:40',
    fullMarathonPR: '3:11:35', // 2nd fastest FM
    isElite: true,
    achievements: [
      'VNEXPRESS MARATHON HUE 06/04/2025 - 47/548',
      'Top 2 - FM - Nữ - MEKONG DELTA MARATHON 08/11/2020',
      'Top 3 - FM - Nữ - MEKONG DELTA MARATHON HAU GIANG 17/07/2022',
      'Top 3 - FM - Nữ - DAT MUI MARATHON CAMAU 09/10/2022',
      'Top 3 - FM - Nữ - DAK LAK MARATHON 28/04/2024',
      'Top 3 - FM - Nữ - DAK NONG MARATHON 01/06/2025',
      'Top 2 - HM - Nữ - NONG THON VIET HALF MARATHON 05/01/2025',
      'Top 2 - HM - Nữ - RANG HAM MAT RUN ♡ BUOC CHAY YEU THUONG 22/06/2025'
    ],
    bio: 'Elite runner with FPTR / PMHR team. Age group: F (Female). Multiple podium finishes in major Vietnamese marathons. Exceptional performer in both half and full marathon distances.',
    joinDate: '2025-04-06',
  },
  {
    id: '2',
    name: 'VÕ TẤN ĐỨC',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/VO%20TAN%20DUC.jpg',
    halfMarathonPR: '1:29:01',
    fullMarathonPR: '3:12:31', // 3rd fastest FM
    achievements: [
      'VPBANK VNEXPRESS MARATHON HO CHI MINH CITY MIDNIGHT 2025 - 748/5848',
      'HCMCM11.1.25 - 761/5804',
      'VMHCMCM2024 - 1028/3622',
      'TCBHCMCIM23 - 2724/3228',
      'HCMCNRE18.5.25 - 935/5263',
      'BHHM15.3.25 - 1163/4628',
      'RTL9.3.25 - 1735/4611',
      'SKTDCR3.9.23 - 1013/1022'
    ],
    bio: 'PMHR team member. Age group: M30-39. Strong competitor in both half and full marathon distances.',
    joinDate: '2020-01-01',
  },
  {
    id: '3',
    name: 'QUÁCH THẾ KỶ',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/QUACH%20THE%20KY.jpg',
    halfMarathonPR: '1:33:37',
    fullMarathonPR: '3:16:59',
    achievements: [
      'VNEXPRESS MARATHON HAI PHONG 17/12/2023 - 1048/6491',
      'VNEXPRESS MARATHON HAI PHONG 17/12/2023 - 1818/5601',
      'VMHP171223 - 597/3466',
      'TCBHCMCIM2022 - 352/1537',
      'MDIM2019 - 82/145',
      'TPM2018 - 51/63',
      'HCMCR2017 - 32/32',
      'TCBHCMCIM8.12.24 - 1337/4012',
      'TCBHCMCIM23 - 679/1673'
    ],
    bio: 'Member of PMHR team. Age group: M. Experienced marathoner with strong performances in both half and full marathon distances. Has competed in multiple VnExpress Marathon events.',
    joinDate: '2017-01-01',
  },
  {
    id: '8',
    name: 'NGUYỄN QUANG THẮNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/NGUYEN%20QUANG%20THANG%202.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:27:06',
    achievements: [
      'TIEN PHONG MARATHON NATIONAL CHAMPIONSHIP LAN THU 60 - 24/03/2019 - 1848/6491',
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 4599. Full marathon specialist with achievement in TIEN PHONG MARATHON NATIONAL CHAMPIONSHIP.',
    joinDate: '2019-03-24',
  },
  {
    id: '4',
    name: 'TRẦN MẠNH CƯỜNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/TRAN%20MANH%20CUONG.jpg',
    halfMarathonPR: '1:41:13',
    fullMarathonPR: '3:27:46',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 1759/5804',
      'TCBHCMIM8.12.24 - 2023/5557',
      'VMHCMCM2024 - 2303/3622',
      'GCGM2023 - 1444/2139',
      'TDCR1.12.24 - 2709/3755'
    ],
    bio: 'Member of PMHR team. Age group: M. Competitive runner specializing in multiple race distances.',
    joinDate: '2025-01-12',
  },
  {
    id: '5',
    name: 'NGUYỄN SỸ TOÀN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/NGUYEN%20SY%20TOAN.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:28:11',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 1829/5804',
      'VMQN23.6.24 - 2086/4029',
      'TCBHCMCIM23 - 3084/3228'
    ],
    bio: 'Member of PMHR team. Age group: M40-49. Focused on full marathon distances.',
    joinDate: '2025-01-12',
  },
  {
    id: '6',
    name: 'ĐẬU DANH',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/DAU%20DANH.jpg',
    halfMarathonPR: '1:37:11',
    fullMarathonPR: '3:28:18',
    achievements: [
      'VIETNAM GOLD MARATHON - HO CHI MINH 20/07/2025 - 2021/6490',
      'CMM10.11.24 - 2165/4929',
      'VPIM13.10.24 - 2107/4416',
      'PVGAS5.1.25 - 2050/4237'
    ],
    bio: 'Member of PMHR team. Age group: M40-49. Competitive in both half and full marathon events.',
    joinDate: '2025-07-20',
  },
  {
    id: '7',
    name: 'VŨ VĂN HẢO',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/VU%20VAN%20HAO.jpg',
    halfMarathonPR: '1:28:53',
    fullMarathonPR: '3:29:16',
    achievements: [
      'TECHCOMBANK HCMC INTERNATIONAL MARATHON 8/12/2024 - 1881/5557',
      'LBM27.10.24 - 2068/4771',
      'HCMCM2024 - 1701/3565',
      'CTHM031223 - 1520/3111',
      'GCGM2023 - 1781/2139',
      'MDMHG2023 - 1667/1936',
      'BDMM2023 - 1859/1861',
      'RTL9.3.25 - 856/4611',
      'GCGMH8.9.24 - 1052/2908',
      'VMMNT2023 - 633/955'
    ],
    bio: 'Member of PMHR team. Age group: M40-49. Competitive in both half and full marathon events.',
    joinDate: '2024-12-08',
  },
  {
    id: '9',
    name: 'LÊ HOÀI PHƯƠNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/LE%20HOAI%20PHUONG.jpg',
    halfMarathonPR: '1:41:21',
    fullMarathonPR: '3:29:33',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 2236/6491',
      'HCMCM11.1.25 - 2041/5804',
      'HCMCM2024 - 1601/3565',
      'PSRVN19.11.23 - 1130/1493'
    ],
    bio: 'Member of PMHR team. Age group: M40-49. Bib number: 40041. Competitive in both half and full marathon distances with strong performance records.',
    joinDate: '2025-01-12',
  },
  {
    id: '10',
    name: 'TRẦN KHÁNH CHÂN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/TRAN%20KHANH%20CHAN.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:30:31',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 2340/6491',
      'HCMCM11.1.25 - 2135/5804',
      'HCMCM2024 - 2197/3565'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 40102. Full marathon specialist with consistent performance across multiple years.',
    joinDate: '2025-01-12',
  },
  {
    id: '11',
    name: 'TRẦN THÁI TÂM',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/TRAN%20THAI%20TAM.jpg',
    halfMarathonPR: '1:37:54',
    fullMarathonPR: '3:31:41',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 2441/6491',
      'HCMCM11.1.25 - 2220/5804',
      'TCBHCMIM8.12.24 - 2533/5557',
      'HCMCM2024 - 3376/3565',
      'RTL10.3.24 - 1211/2195'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 40632. Strong performer in both half and full marathon distances with consistent race participation.',
    joinDate: '2025-01-12',
  },
  {
    id: '12',
    name: 'TRẦN ĐẠI CHIẾN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/TRAN%20DAI%20CHIEN.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:32:00',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 2461/6491',
      'HCMCM11.1.25 - 2234/5804',
      'GCGMH8.9.24 - 3297/4181'
    ],
    bio: 'Member of G7 PLUS team. Age group: M30-39. Bib number: 40414. Full marathon specialist with consistent performance.',
    joinDate: '2025-01-12',
  },
  {
    id: '37',
    name: 'NGUYỄN THỊ THÚY LOAN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/NGUYEN%20THI%20THUY%20LOAN.jpg',
    halfMarathonPR: '1:39:17',
    fullMarathonPR: '3:35:37',
    achievements: [
      'HCMC MARATHON 14/01/2024 - 178/548',
      'HCMCM2024 - 104/274',
      'VMHCMCM2023 - 82/137',
      'BDNCHM27.4.25 - 99/386',
      'TRMN19.1.25 - 221/352',
      'DLMNR1.6.24 - 199/229'
    ],
    bio: 'Member of PMHR team. Age group: F<=19. Strong performer in both half and full marathon distances with consistent top finishes.',
    joinDate: '2024-01-14',
  },
  {
    id: '38',
    name: 'ĐOÀN THÁI NHƯ',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/DOAN%20THAI%20NHU.jpg',
    halfMarathonPR: '1:44:16',
    fullMarathonPR: '3:39:31',
    achievements: [
      'VNEXPRESS MARATHON HO CHI MINH CITY MIDNIGHT 12/02/2023 - 205/548',
      'VMHCMCM2023 - 64/137',
      'VMMNT2022 - 53/54'
    ],
    bio: 'Member of PMHR team. Age group: F (Female). Bib number: 91081. Strong performer in both half and full marathon distances.',
    joinDate: '2023-02-12',
  },
  {
    id: '13',
    name: 'ĐÀO NGUYỄN BẢO KHÁNH',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/DAO%20NGUYEN%20BAO%20KHANH.jpg',
    halfMarathonPR: '1:38:06',
    fullMarathonPR: '3:40:51',
    achievements: [
      'TECHCOMBANK HO CHI MINH CITY INTERNATIONAL MARATHON 10/12/2023 - 3264/6491',
      'TCBHCMCIM23 - 1592/3228',
      'VMIH2023 - 1349/1839',
      'RTL10.3.24 - 1233/2195'
    ],
    bio: 'Member of Vinhomes Ocean Park Runners / PMHR team. Age group: M30-39. Bib number: 40993. Strong performer in both half and full marathon distances.',
    joinDate: '2023-12-10',
  },
  {
    id: '14',
    name: 'NGUYỄN VĂN HÙNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/NGUYEN%20VAN%20HUNG.jpg',
    halfMarathonPR: '1:43:11',
    fullMarathonPR: '3:42:31',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 3482/6491',
      'HCMCM11.1.25 - 3120/5804',
      'HCMCM2024 - 2574/3565',
      'TCBHCMCIM23 - 2473/3228',
      'DSHM2023 - 2356/2448',
      'HCMCNRE18.5.25 - 4425/5263'
    ],
    bio: 'Member of Van Phuc Runners / PMHR team. Age group: M (Male). Bib number: 40821. Strong performer in both half and full marathon distances.',
    joinDate: '2025-01-12',
  },
  {
    id: '15',
    name: 'LÊ QUANG ĐỨC',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/LE%20QUANG%20DUC.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:43:20',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 3593/6491',
      'HCMCM11.1.25 - 3221/5804',
      'TCBHCMIM8.12.24 - 3517/5557',
      'HCMCM2024 - 2296/3565',
      'HCMCMS2023 - 1227/1581'
    ],
    bio: 'Member of PMHR team. Age group: M50-59. Bib number: 40321. Full marathon specialist with consistent performance.',
    joinDate: '2025-01-12',
  },
  {
    id: '16',
    name: 'VÕ VĂN DÂN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/VO%20VAN%20DAN.jpg',
    halfMarathonPR: '1:39:09',
    fullMarathonPR: '3:46:15',
    achievements: [
      'TECHCOMBANK HO CHI MINH CITY INTERNATIONAL MARATHON 10/12/2023 - 4031/6491',
      'TCBHCMCIM23 - 1972/3228',
      'RTL9.3.25 - 2780/4611'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 40952. Competitive in both half and full marathon distances.',
    joinDate: '2023-12-10',
  },
  {
    id: '39',
    name: 'TRANG THI NGỌC LAN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/TRANG%20THI%20NGOC%20LAN.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:46:24',
    achievements: [
      'VPBANK VNEXPRESS MARATHON HO CHI MINH CITY MIDNIGHT 23/02/2025 - 278/548',
      'VMHCMCM23.2.25 - 248/484',
      'HCMCM2024 - 184/274',
      'LBM291023 - 186/209'
    ],
    bio: 'Member of PMHR team. Age group: F50-59. Bib number: 91336. Full marathon specialist showing strong performance in masters category.',
    joinDate: '2025-02-23',
  },
  {
    id: '17',
    name: 'BÙI VĂN CHIẾN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/BUI%20VAN%20CHIEN.jpg',
    halfMarathonPR: '1:42:55',
    fullMarathonPR: '3:47:22',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 4177/6491',
      'HCMCM11.1.25 - 3722/5804',
      'MDM7.7.24 - 3510/4047',
      'VMHCMCM2024 - 1780/2113'
    ],
    bio: 'Member of PMHR team. Age group: M30-39. Bib number: 40719. Strong performer in both half and full marathon distances.',
    joinDate: '2025-01-12',
  },
  {
    id: '18',
    name: 'DƯƠNG PHÁT QUYỀN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/DUONG%20PHAT%20QUYEN.jpg',
    halfMarathonPR: '1:42:01',
    fullMarathonPR: '3:47:33',
    achievements: [
      'HCMC MARATHON SALONPAS 08/01/2023 - 4196/6491',
      'HCMCMS2023 - 1024/1581',
      'RTL10.3.24 - 1708/2195'
    ],
    bio: 'Member of PMHR team. Age group: M30-39. Bib number: M40064. Strong performer in both half and full marathon distances.',
    joinDate: '2023-01-08',
  },
  {
    id: '19',
    name: 'BÙI TRUNG KIÊN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/BUI%20TRUNG%20KIEN.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:47:40',
    achievements: [
      'VIETNAM GOLD MARATHON - HO CHI MINH 20/07/2025 - 4207/6491',
      'VGMHCM20.7.25 - 4207/6491'
    ],
    bio: 'Member of PMHR team. Age group: M30-39. Bib number: 92236. Full marathon specialist.',
    joinDate: '2025-07-20',
  },
  {
    id: '20',
    name: 'BÙI THÀNH TÙNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/BUI%20THANH%20TUNG.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:48:12',
    achievements: [
      'VPBANK INTERNATIONAL MARATHON 08/10/2023 - 4277/6491',
      'VPIM2023 - 1464/2269'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 91381. Full marathon specialist.',
    joinDate: '2023-10-08',
  },
  {
    id: '21',
    name: 'TRẦN HOÀI VŨ',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/TRAN%20HOAI%20VU.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:50:16',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 4524/6491',
      'HCMCM11.1.25 - 4023/5804',
      'TCBHCMIM8.12.24 - 4163/5557',
      'HCMCM2024 - 2859/3565'
    ],
    bio: 'Member of eBRC - Câu lạc bộ chạy bộ Bến Cát / PMHR team. Age group: M30-39. Bib number: 40076. Full marathon specialist with consistent performance improvement.',
    joinDate: '2025-01-12',
  },
  {
    id: '40',
    name: 'THÁI THỊ PHƯƠNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/THAI%20THI%20PHUONG.jpg',
    halfMarathonPR: '1:41:26',
    fullMarathonPR: '3:50:41',
    achievements: [
      'DẠT SEN HỒNG MARATHON 15/10/2023 - 334/548',
      'DSHM2023 - 134/193',
      'VMHM261123 - 107/144'
    ],
    bio: 'Member of FPTR / PMHR team. Age group: F (Female). Bib number: 40324. Strong performer in both half and full marathon distances.',
    joinDate: '2023-10-15',
  },
  {
    id: '22',
    name: 'NGÔ NGỌC HIỆP',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/NGO%20NGOC%20HIEP.jpg',
    halfMarathonPR: '1:41:44',
    fullMarathonPR: '3:50:49',
    achievements: [
      'BEN TRE MARATHON 26/06/2022 - 4583/6491',
      'BTM2022 - 515/679',
      'HCMCNR14.5.22 - 305/357'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 40439. Strong performer in both half and full marathon distances.',
    joinDate: '2022-06-26',
  },
  {
    id: '23',
    name: 'QUÁCH ĐĂNG GIANG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/QUACH%20DANG%20GIANG.jpg',
    halfMarathonPR: '1:33:01',
    fullMarathonPR: '3:50:59',
    achievements: [
      'TECHCOMBANK HCMC INTERNATIONAL MARATHON 8/12/2024 - 4599/6491',
      'TCBHCMIM8.12.24 - 3896/5557',
      'LBM27.10.24 - 1069/3228',
      'TPMNC31.3.24 - 1363/2291',
      'VMHCMCM2024 - 1574/2113'
    ],
    bio: 'Member of Phu My Hung Runner Club team. Age group: M (Male). Bib number: 324042. Excellent half marathon runner with strong full marathon performance.',
    joinDate: '2024-12-08',
  },
  {
    id: '24',
    name: 'PHẠM HỒNG PHƯƠNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/PHAM%20HONG%20PHUONG.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:51:07',
    achievements: [
      'CAN THO HERITAGE MARATHON 03/12/2022 - 4621/6491',
      'CTHM2022 - 1030/1447'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 47073. Full marathon specialist.',
    joinDate: '2022-12-03',
  },
  {
    id: '25',
    name: 'HOÀNG KHẮC TÙNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/HOANG%20KHAC%20TUNG.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:52:08',
    achievements: [
      'VNEXPRESS MARATHON HO CHI MINH CITY MIDNIGHT 03/03/2024 - 4775/6491',
      'VMHCMCM2024 - 2681/3622'
    ],
    bio: 'Member of SNR / PMHR team. Age group: M30-39. Bib number: 90219. Full marathon specialist.',
    joinDate: '2024-03-03',
  },
  {
    id: '26',
    name: 'PHẠM MINH TÂN',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/PHAM%20MINH%20TAN.jpg',
    halfMarathonPR: '1:44:55',
    fullMarathonPR: '3:53:01',
    achievements: [
      'HCMC MARATHON 14/01/2024 - 4915/6491',
      'HCMCM2024 - 2719/3565',
      'DSHM2023 - 2106/2448',
      'PSRVN19.11.23 - 1491/1493'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 40223. Strong performer in both half and full marathon distances.',
    joinDate: '2024-01-14',
  },
  {
    id: '27',
    name: 'ĐOÀN THẾ PHƯƠNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/DOAN%20THE%20PHUONG.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:54:40',
    achievements: [
      'LONGBIEN MARATHON 29/10/2023 - 5197/6491',
      'LBM291023 - 2254/2849'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 97616. Full marathon specialist.',
    joinDate: '2023-10-29',
  },
  {
    id: '35',
    name: 'LÊ BÁ HOÀNH',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/LE%20BA%20HOANH.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:54:58',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 5245/6491',
      'HCMCM11.1.25 - 4652/5804',
      'TCBHCMIM8.12.24 - 4653/5557'
    ],
    bio: 'Member of Phu My Era Runners team. Age group: M30-39. Bib number: 40339. Full marathon specialist with consistent performance across multiple races.',
    joinDate: '2025-01-12',
  },
  {
    id: '33',
    name: 'ĐỖ TRUNG ÁI',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/DO%20TRUNG%20AI.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:55:13',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 5288/6491',
      'HCMCM11.1.25 - 4696/5804'
    ],
    bio: 'Age group: M40-49. Bib number: 40932. Full marathon specialist with consistent performance.',
    joinDate: '2025-01-12',
  },
  {
    id: '29',
    name: 'LÂM THANH DŨNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/LAM%20THANH%20DUNG.jpg',
    halfMarathonPR: '1:44:03',
    fullMarathonPR: '3:56:45',
    achievements: [
      'TECHCOMBANK HCMC INTERNATIONAL MARATHON 8/12/2024 - 5619/6491',
      'TCBHCMIM8.12.24 - 4782/5557',
      'RTL9.3.25 - 4240/4611'
    ],
    bio: 'Member of PMHR team. Age group: M40-49. Bib number: 400409. Strong performer in both half and full marathon distances.',
    joinDate: '2024-12-08',
  },
  {
    id: '34',
    name: 'TÔN DUY NGHĨA',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/TON%20DUY%20NGHIA.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:56:52',
    achievements: [
      'HCMC MARATHON 12/01/2025 - 5648/6491',
      'HCMCM11.1.25 - 5024/5804'
    ],
    bio: 'Age group: M50-59. Bib number: 41193. Full marathon specialist demonstrating strong endurance for his age group.',
    joinDate: '2025-01-12',
  },
  {
    id: '28',
    name: 'VÕ THÁI VŨ',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/VO%20THAI%20VU.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:56:57',
    achievements: [
      'LONGBIEN MARATHON 29/10/2023 - 5664/6491',
      'LBM291023 - 2473/2849'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 92451. Full marathon specialist.',
    joinDate: '2023-10-29',
  },
  {
    id: '41',
    name: 'ĐỖ THU THỦY',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/DO%20THU%20THUY.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:57:07',
    achievements: [
      'VNEXPRESS MARATHON IMPERIAL HUE 16/04/2023 - 472/548',
      'VMIH2023 - 137/153'
    ],
    bio: 'Member of PMHR team. Age group: F (Female). Bib number: 90680. Full marathon specialist.',
    joinDate: '2023-04-16',
  },
  {
    id: '30',
    name: 'NGUYỄN HỮU TIẾNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/NGUYEN%20HUU%20TIENG.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:58:19',
    achievements: [
      'TECHCOMBANK HCMC INTERNATIONAL MARATHON 8/12/2024 - 6072/6491',
      'TCBHCMIM8.12.24 - 5175/5557'
    ],
    bio: 'Member of PMHR team. Age group: M30-39. Bib number: 400619. Full marathon specialist.',
    joinDate: '2024-12-08',
  },
  {
    id: '42',
    name: 'NGUYỄN THỊ NGỌC NI',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/NGUYEN%20THI%20NGOC%20NI.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:58:47',
    achievements: [
      'VIETNAM GOLD MARATHON - HO CHI MINH 20/07/2025 - 519/548',
      'VGMHCM20.7.25 - 519/548'
    ],
    bio: 'Age group: F (Female). Bib number: 92159. Full marathon specialist.',
    joinDate: '2025-07-20',
  },
  {
    id: '31',
    name: 'NGUYỄN XUÂN KHOA',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/NGUYEN%20XUAN%20KHOA.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:59:11',
    achievements: [
      'HCMC MARATHON 14/01/2024 - 6346/6491',
      'HCMCM2024 - 3452/3565'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 40807. Full marathon specialist.',
    joinDate: '2024-01-14',
  },
  {
    id: '32',
    name: 'NGUYỄN TRƯỜNG LÂM',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/NGUYEN%20TRUONG%20LAM.jpg',
    halfMarathonPR: 'undefined',
    fullMarathonPR: '3:59:42',
    achievements: [
      'HCMC MARATHON 14/01/2024 - 6450/6491',
      'HCMCM2024 - 3535/3565'
    ],
    bio: 'Member of PMHR team. Age group: M (Male). Bib number: 40700. Full marathon specialist.',
    joinDate: '2024-01-14',
  },

  // Runners without Full Marathon records (sorted by Half Marathon time, fastest first)
  {
    id: '43',
    name: 'LÊ HUỲNH NGỌC TRUNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/LE%20HUYNH%20NGOC%20TRUNG.jpg',
    halfMarathonPR: '1:42:12', // Fastest HM among those without FM
    fullMarathonPR: 'undefined',
    achievements: [
      'VIETNAM GOLD MARATHON - HO CHI MINH 20/07/2025 - 4300/5601',
      'VGMHCM20.7.25 - 4299/5601',
      'RTL9.3.25 - 3996/4611'
    ],
    bio: 'Member of PHÚ MỸ HƯNG RUNNERS team. Age group: M30-39. Bib number: 21016. Half marathon specialist with strong performance.',
    joinDate: '2025-07-20',
  },
];

// Helper functions to determine if times are competitive
export function isCompetitiveHM(time: string): boolean {
  const [hours, minutes] = time.split(':').map(Number);
  return hours < 1 || (hours === 1 && minutes < 45);
}

export function isCompetitiveFM(time: string): boolean {
  // eslint-disable-next-line 
  const [hours, minutes] = time.split(':').map(Number);
  return hours < 4;
}