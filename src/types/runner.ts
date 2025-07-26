export interface Runner {
  id: number;
  name: string;
  profileImage?: string;
  halfMarathonPR: string;
  fullMarathonPR: string;
  isElite: boolean;
  latestAchievement: string;
  totalAchievements: number;
}

export interface Achievement {
  id: number;
  runnerId: number;
  eventName: string;
  position: string;
  totalParticipants: number;
  date: string;
  time?: string;
  distance: 'half' | 'full' | '10k' | '5k';
}