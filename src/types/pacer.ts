export interface Pacer {
  id: string;
  name: string;
  profileImage: string;
  group: 'sub3h30' | 'sub4h00' | 'sub4h30' | 'newbie';
  isCaptain?: boolean;
  role?: string;
  PR: string
}