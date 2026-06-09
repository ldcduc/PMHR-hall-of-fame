export interface Pacer {
  id: string;
  name: string;
  profileImage: string;
  group: 'sub3h30' | 'sub4h00' | 'sub4h30' | 'newbie' | '500' | '530' | 'newbie2';
  isCaptain?: boolean;
  role?: string;
  PR?: string
}