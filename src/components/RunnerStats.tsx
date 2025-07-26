import { Runner } from '../types/runner';

interface RunnerStatsProps {
  runner: Runner;
}

interface ParsedAchievement {
  eventName: string;
  position: number;
  totalParticipants: number;
  positionRatio: string;
  percentile: number;
}

export default function RunnerStats({ runner }: RunnerStatsProps) {
  // Parse achievements from the string array within the runner object
  const parseAchievement = (achievementStr: string): ParsedAchievement | null => {
    // Format: "Event Name YYYY - position/total"
    const parts = achievementStr.split(' - ');
    if (parts.length < 2) return null;
    
    const eventName = parts[0].trim();
    const positionData = parts[1].trim();
    const positionMatch = positionData.match(/(\d+)\/(\d+)/);
    
    if (!positionMatch) return null;
    
    const position = parseInt(positionMatch[1]);
    const totalParticipants = parseInt(positionMatch[2]);
    const percentile = (position / totalParticipants) * 100;
    
    return {
      eventName,
      position,
      totalParticipants,
      positionRatio: `${position}/${totalParticipants}`,
      percentile
    };
  };

  // Parse all achievements for this runner
  const parsedAchievements = (runner.achievements || [])
    .map(parseAchievement)
    .filter((achievement): achievement is ParsedAchievement => achievement !== null);

  // Calculate statistics
  const totalRaces = parsedAchievements.length;
  
  const avgPosition = totalRaces > 0 
    ? Math.round(parsedAchievements.reduce((sum, a) => sum + a.position, 0) / totalRaces)
    : 0;

  const bestPosition = totalRaces > 0
    ? Math.min(...parsedAchievements.map(a => a.position))
    : 0;

  const bestPercentile = totalRaces > 0
    ? Math.min(...parsedAchievements.map(a => a.percentile))
    : 0;

  // Estimate race distances based on achievement names and positions
  const estimateRaceDistance = (achievement: ParsedAchievement): string => {
    const name = achievement.eventName.toLowerCase();
    
    // Check for explicit distance mentions
    if (name.includes('half') || name.includes('21k') || name.includes('21.1')) {
      return 'half';
    }
    if (name.includes('marathon') && !name.includes('half')) {
      return 'full';
    }
    if (name.includes('10k') || name.includes('10km')) {
      return '10k';
    }
    if (name.includes('5k') || name.includes('5km')) {
      return '5k';
    }
    
    // Estimate based on participant count (rough heuristic)
    if (achievement.totalParticipants > 3000) {
      return 'full'; // Large events are usually marathons
    } else if (achievement.totalParticipants > 1000) {
      return 'half'; // Medium events are often half marathons
    } else {
      return '10k'; // Smaller events are often 10k
    }
  };

  const racesByDistance = parsedAchievements.reduce((acc, achievement) => {
    const distance = estimateRaceDistance(achievement);
    acc[distance] = (acc[distance] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Runner Statistics</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {totalRaces}
          </div>
          <div className="text-sm text-gray-600">Total Races</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {avgPosition > 0 ? avgPosition.toLocaleString() : 'N/A'}
          </div>
          <div className="text-sm text-gray-600">Avg Position</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {bestPosition > 0 ? bestPosition.toLocaleString() : 'N/A'}
          </div>
          <div className="text-sm text-gray-600">Best Position</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600 mb-1">
            {bestPercentile > 0 ? `${bestPercentile.toFixed(1)}%` : 'N/A'}
          </div>
          <div className="text-sm text-gray-600">Best Percentile</div>
        </div>
      </div>

      {/* Personal Records */}
      <div className="mt-8">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Personal Records</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Half Marathon PR</div>
            <div className={`text-lg font-mono font-semibold ${
              runner.halfMarathonPR && runner.halfMarathonPR !== 'N/A' ? 'text-blue-600' : 'text-gray-400'
            }`}>
              {runner.halfMarathonPR || 'N/A'}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Full Marathon PR</div>
            <div className={`text-lg font-mono font-semibold ${
              runner.fullMarathonPR && runner.fullMarathonPR !== 'N/A' ? 'text-red-600' : 'text-gray-400'
            }`}>
              {runner.fullMarathonPR || 'N/A'}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      {totalRaces > 0 && (
        <div className="mt-8">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Performance Insights</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-blue-600 mb-1">Top 10% Finishes</div>
              <div className="text-lg font-bold text-blue-700">
                {parsedAchievements.filter(a => a.percentile <= 10).length}
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm text-green-600 mb-1">Top 25% Finishes</div>
              <div className="text-lg font-bold text-green-700">
                {parsedAchievements.filter(a => a.percentile <= 25).length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Race Distribution */}
      {Object.keys(racesByDistance).length > 0 && (
        <div className="mt-8">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Race Distribution</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.entries(racesByDistance).map(([distance, count]) => (
              <div key={distance} className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-lg font-bold text-gray-900">{count}</div>
                <div className="text-xs text-gray-600 capitalize">
                  {distance === 'full' ? 'Marathon' : 
                   distance === 'half' ? 'Half Marathon' : 
                   distance === '10k' ? '10K' :
                   distance === '5k' ? '5K' :
                   distance.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Achievements */}
      {parsedAchievements.length > 0 && (
        <div className="mt-8">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Recent Achievements</h4>
          <div className="space-y-3">
            {parsedAchievements.slice(0, 3).map((achievement, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 truncate">
                    {achievement.eventName}
                  </div>
                  <div className="text-xs text-gray-500">
                    Position {achievement.positionRatio} ({achievement.percentile.toFixed(1)}%)
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  achievement.percentile <= 10 ? 'bg-yellow-100 text-yellow-800' :
                  achievement.percentile <= 25 ? 'bg-green-100 text-green-800' :
                  achievement.percentile <= 50 ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {achievement.percentile <= 10 ? 'Top 10%' :
                   achievement.percentile <= 25 ? 'Top 25%' :
                   achievement.percentile <= 50 ? 'Top 50%' : 'Finisher'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No data state */}
      {totalRaces === 0 && (
        <div className="mt-8 text-center py-8">
          <div className="text-gray-400 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="text-gray-500">No race achievements recorded yet</div>
        </div>
      )}
    </div>
  );
}