import Image from 'next/image';
import { notFound } from 'next/navigation';
import { runners, achievements } from '../../data/runners';

interface PageProps {
  params: {
    id: string;
  };
}

export default function RunnerProfile({ params }: PageProps) {
  const runner = runners.find(r => r.id === parseInt(params.id));
  
  if (!runner) {
    notFound();
  }

  const runnerAchievements = achievements.filter(a => a.runnerId === runner.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Runner Header */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Profile Image */}
            <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={runner.image}
                alt={runner.name}
                fill
                className="object-cover"
              />
              {runner.isElite && (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold py-0.5 px-2 rounded-full">
                  <span className="text-yellow-200">★</span>
                  <span>ELITE</span>
                </div>
              )}
            </div>

            {/* Runner Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{runner.name}</h1>
              
              {/* Personal Records */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Half Marathon PR</h3>
                  <p className="text-2xl font-mono elite-time">{runner.halfMarathonPR}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Full Marathon PR</h3>
                  <p className="text-2xl font-mono text-gray-700">{runner.fullMarathonPR}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div>
                  <span className="font-medium text-gray-800">{runner.totalAchievements}</span> Total Achievements
                </div>
                <div>
                  <span className="font-medium text-gray-800">Elite</span> Status
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Race Achievements</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {runnerAchievements.map((achievement) => (
            <div key={achievement.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {achievement.eventName}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Position:</span>
                      <span className="ml-2 font-medium text-gray-800">
                        {achievement.position}/{achievement.totalParticipants}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Date:</span>
                      <span className="ml-2 font-medium text-gray-800">
                        {new Date(achievement.date).toLocaleDateString()}
                      </span>
                    </div>
                    {achievement.time && (
                      <div>
                        <span className="text-gray-600">Time:</span>
                        <span className="ml-2 font-mono font-medium text-gray-800">
                          {achievement.time}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="ml-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    achievement.distance === 'full' 
                      ? 'bg-primary-100 text-primary-800'
                      : achievement.distance === 'half'
                      ? 'bg-secondary-100 text-secondary-800'
                      : 'bg-accent-100 text-accent-800'
                  }`}>
                    {achievement.distance === 'full' ? 'Full Marathon' : 
                     achievement.distance === 'half' ? 'Half Marathon' :
                     achievement.distance.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}