import { Achievement } from '../types/runner';

interface AchievementsListProps {
  achievements: Achievement[];
}

export default function AchievementsList({ achievements }: AchievementsListProps) {
  const getDistanceBadgeColor = (distance: string) => {
    switch (distance) {
      case 'full': return 'bg-red-100 text-red-800';
      case 'half': return 'bg-blue-100 text-blue-800';
      case '10k': return 'bg-green-100 text-green-800';
      case '5k': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPositionPercentile = (position: number, total: number) => {
    return ((position / total) * 100).toFixed(1);
  };

  return (
    <div className="space-y-4">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">
              {achievement.eventName}
            </h4>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ml-2 ${getDistanceBadgeColor(achievement.distance)}`}>
              {achievement.distance === 'full' ? 'Marathon' : 
               achievement.distance === 'half' ? 'Half Marathon' : 
               achievement.distance.toUpperCase()}
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-500 block">Position</span>
              <span className="font-semibold text-gray-900">
                {achievement.position}/{achievement.totalParticipants.toLocaleString()}
              </span>
            </div>
            
            <div>
              <span className="text-gray-500 block">Percentile</span>
              <span className="font-semibold text-gray-900">
                {getPositionPercentile(parseInt(achievement.position), achievement.totalParticipants)}%
              </span>
            </div>
            
            <div>
              <span className="text-gray-500 block">Date</span>
              <span className="font-semibold text-gray-900">
                {new Date(achievement.date).toLocaleDateString()}
              </span>
            </div>
            
            {achievement.time && (
              <div>
                <span className="text-gray-500 block">Time</span>
                <span className="font-mono font-semibold text-gray-900">
                  {achievement.time}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}