// src/data/runners.ts
import { Runner } from '../types/runner';

export const runners: Runner[] = [
  {
    id: '1',
    name: 'TRẦN THANH CƯƠNG',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/TRAN%20THANH%20CUONG.jpg',
    halfMarathonPR: '1:20:32',
    fullMarathonPR: '3:07:10',
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
    id: '2',
    name: 'VÕ TẤN ĐỨC',
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/VO%20TAN%20DUC.jpg',
    halfMarathonPR: '1:29:01',
    fullMarathonPR: '3:12:31',
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
    profileImage: 'https://bestmarathon.vn/wp-content/themes/flatsome-child/avatar/QUACH%20THE%20KY.jpg', // Assuming similar pattern
    halfMarathonPR: '1:33:37',
    fullMarathonPR: '3:16:59',
    achievements: [
      'VNEXPRESS MARATHON HAI PHONG 17/12/2023 - 1048/6491', // Full Marathon
      'VNEXPRESS MARATHON HAI PHONG 17/12/2023 - 1818/5601', // Half Marathon
      'VMHP171223 - 597/3466',
      'TCBHCMCIM2022 - 352/1537',
      'MDIM2019 - 82/145',
      'TPM2018 - 51/63',
      'HCMCR2017 - 32/32',
      'TCBHCMCIM8.12.24 - 1337/4012',
      'TCBHCMCIM23 - 679/1673'
    ],
    bio: 'Member of PMHR team. Age group: M. Experienced marathoner with strong performances in both half and full marathon distances. Has competed in multiple VnExpress Marathon events.',
    joinDate: '2017-01-01', // Based on earliest race record
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
  }
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