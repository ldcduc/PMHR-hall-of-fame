import Image from 'next/image';
import { Runner } from '../types/runner';

interface RunnerCardProps {
  runner: Runner;
}

export default function RunnerCard({ runner }: RunnerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="relative">
        <Image
          className="w-full h-48 object-cover"
          src={runner.profileImage || ''}
          width={0}
          height={0}
          sizes="100vw"
          alt={runner.name}
          onError={(e) => {
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(runner.name)}&background=3b82f6&color=fff&size=400`;
          }}
        />
        {runner.isElite && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full shadow-lg">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              ELITE
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">{runner.name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Half Marathon PR:</span>
            <span className={`font-mono text-sm font-semibold ${
              runner.halfMarathonPR !== 'N/A' ? 'text-blue-600' : 'text-gray-400'
            }`}>
              {runner.halfMarathonPR}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Full Marathon PR:</span>
            <span className="font-mono text-sm font-semibold text-gray-900">
              {runner.fullMarathonPR}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Latest Achievement:</p>
          <p className="text-sm text-gray-700 line-clamp-2">{runner.latestAchievement}</p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {runner.totalAchievements} achievements
          </span>
          <a
            href={`/runners/${runner.id}`}
            className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700 transition-colors duration-150"
          >
            View Profile
            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}