import { Runner } from '../types/runner';
import { achievements } from '../data/runners';

interface RunnerStatsProps {
  runner: Runner;
}

export default function RunnerStats({ runner }: RunnerStatsProps) {
  const runnerAchievements = achievements.filter(a => a.runnerId === runner.id);
  
  const avgPosition = runnerAchievements.length > 0 
    ? Math.round(runnerAchievements.reduce((sum, a) => sum + parseInt(a.position), 0) / runnerAchievements.length)
    : 0;

  const bestPosition = runnerAchievements.length > 0
    ? Math.min(...runnerAchievements.map(a => parseInt(a.position)))
    : 0;

  const bestPercentile = runnerAchievements.length > 0
    ? Math.min(...runnerAchievements.map(a => (parseInt(a.position) / a.totalParticipants) * 100))
    : 0;

  const racesByDistance = runnerAchievements.reduce((acc, achievement) => {
    acc[achievement.distance] = (acc[achievement.distance] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Runner Statistics</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {runnerAchievements.length}
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
              runner.halfMarathonPR !== 'N/A' ? 'text-blue-600' : 'text-gray-400'
            }`}>
              {runner.halfMarathonPR}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Full Marathon PR</div>
            <div className="text-lg font-mono font-semibold text-gray-900">
              {runner.fullMarathonPR}
            </div>
          </div>
        </div>
      </div>

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
                   distance.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}