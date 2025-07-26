  // src/types/runner.ts
export interface Runner {
  id: string;                    // Changed from number to string
  name: string;
  profileImage?: string;
  halfMarathonPR?: string;       // Made optional since some runners might not have HM times
  fullMarathonPR?: string;       // Made optional since some runners might not have FM times
  achievements?: string[];       // Added - array of achievement strings
  bio?: string;                  // Added - runner biography
  joinDate?: string;             // Added - when they joined the team
  
  // Computed properties (can be calculated from other data)
  isElite?: boolean;             // Made optional - can be computed from PR times
  latestAchievement?: string;    // Made optional - can be computed from achievements array
  totalAchievements?: number;    // Made optional - can be computed from achievements.length
}

export interface Achievement {
  id: number;
  runnerId: string;              // Changed from number to string to match Runner.id
  eventName: string;
  position: string;
  totalParticipants: number;
  date: string;
  time?: string;
  distance: 'half' | 'full' | '10k' | '5k';
}

// Helper function to determine if a runner is elite based on times
export function isEliteRunner(runner: Runner): boolean {
  const isEliteHM = runner.halfMarathonPR && isCompetitiveHM(runner.halfMarathonPR);
  const isEliteFM = runner.fullMarathonPR && isCompetitiveFM(runner.fullMarathonPR);
  return !!(isEliteHM || isEliteFM);
}

// Helper function to get latest achievement
export function getLatestAchievement(runner: Runner): string {
  if (!runner.achievements || runner.achievements.length === 0) {
    return 'No achievements yet';
  }
  return runner.achievements[0]; // Assuming first achievement is the latest
}

// Helper function to get total achievements count
export function getTotalAchievements(runner: Runner): number {
  return runner.achievements?.length || 0;
}

// Helper functions for competitive times (moved from data file)
export function isCompetitiveHM(time: string): boolean {
  if (!time || time === 'N/A') return false;
  const [hours, minutes] = time.split(':').map(Number);
  return hours < 1 || (hours === 1 && minutes < 45);
}

export function isCompetitiveFM(time: string): boolean {
  if (!time || time === 'N/A') return false;
  const [hours, minutes] = time.split(':').map(Number);
  return hours < 4;
}

// Extended Runner interface with computed properties
export interface RunnerWithComputedFields extends Runner {
  isElite: boolean;
  latestAchievement: string;
  totalAchievements: number;
}

// Function to convert Runner to RunnerWithComputedFields
export function addComputedFields(runner: Runner): RunnerWithComputedFields {
  return {
    ...runner,
    isElite: isEliteRunner(runner),
    latestAchievement: getLatestAchievement(runner),
    totalAchievements: getTotalAchievements(runner),
  };
}