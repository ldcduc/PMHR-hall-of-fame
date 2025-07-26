import { useState } from 'react';

export default function RunnerTimeConverter() {
  const [time, setTime] = useState('');
  const [distance, setDistance] = useState<'5k' | '10k' | 'half' | 'full'>('half');

  const timeToSeconds = (timeStr: string): number => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 2) {
      return parts[0] * 3600 + parts[1] * 60;
    } else if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    return 0;
  };

  const secondsToTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getPaceFromTime = (timeStr: string, dist: string): string => {
    const totalSeconds = timeToSeconds(timeStr);
    if (totalSeconds === 0) return '';

    const distances = {
      '5k': 5,
      '10k': 10,
      'half': 21.0975,
      'full': 42.195
    };

    const distanceKm = distances[dist as keyof typeof distances];
    const paceSeconds = totalSeconds / distanceKm;
    
    const minutes = Math.floor(paceSeconds / 60);
    const seconds = Math.round(paceSeconds % 60);
    
    return `${minutes}:${seconds.toString().padStart(2, '0')} /km`;
  };

  const predictTimes = (timeStr: string, currentDist: string) => {
    const totalSeconds = timeToSeconds(timeStr);
    if (totalSeconds === 0) return {};

    // Jack Daniels' VDOT-based prediction factors
    const factors = {
      '5k': { half: 2.19, full: 4.66 },
      '10k': { half: 2.06, full: 4.37 },
      'half': { '5k': 0.456, '10k': 0.485, full: 2.12 },
      'full': { '5k': 0.215, '10k': 0.229, half: 0.471 }
    };

    const predictions: Record<string, string> = {};
    const currentFactors = factors[currentDist as keyof typeof factors];

    if (currentFactors) {
      Object.entries(currentFactors).forEach(([dist, factor]) => {
        const predictedSeconds = Math.round(totalSeconds * factor);
        predictions[dist] = secondsToTime(predictedSeconds);
      });
    }

    return predictions;
  };

  const predictions = time ? predictTimes(time, distance) : {};
  const pace = time ? getPaceFromTime(time, distance) : '';

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Race Time Predictor</h3>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Time
            </label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="1:30:00 or 90:00"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Distance
            </label>
            <select
              value={distance}
              onChange={(e) => setDistance(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="5k">5K</option>
              <option value="10k">10K</option>
              <option value="half">Half Marathon</option>
              <option value="full">Full Marathon</option>
            </select>
          </div>
        </div>

        {pace && (
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-sm font-medium text-blue-900 mb-1">Average Pace</div>
            <div className="text-xl font-mono font-bold text-blue-700">{pace}</div>
          </div>
        )}

        {Object.keys(predictions).length > 0 && (
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">Predicted Times</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(predictions).map(([dist, predictedTime]) => (
                <div key={dist} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1 capitalize">
                    {dist === 'full' ? 'Marathon' : 
                     dist === 'half' ? 'Half Marathon' : 
                     dist.toUpperCase()}
                  </div>
                  <div className="text-lg font-mono font-semibold text-gray-900">
                    {predictedTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-xs text-gray-500">
          <p>* Predictions are based on Jack Daniels' VDOT formula and assume similar fitness levels across distances.</p>
          <p>* Time format: Hours:Minutes:Seconds or Minutes:Seconds</p>
        </div>
      </div>
    </div>
  );
}