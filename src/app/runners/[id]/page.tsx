'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { runners } from '../../../data/runners';
import { useState, use } from 'react';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function RunnerProfile({ params }: PageProps) {
  const [imageError] = useState(false);
  const { id } = use(params);
  const runner = runners.find(r => r.id === id);
  
  if (!runner) {
    notFound();
  }

  // Parse achievements from the string array
  const parseAchievement = (achievementStr: string) => {
    // Format: "Event Name YYYY - position/total"
    const parts = achievementStr.split(' - ');
    if (parts.length < 2) return null;
    
    const eventName = parts[0];
    const positionData = parts[1];
    const positionMatch = positionData.match(/(\d+)\/(\d+)/);
    
    if (!positionMatch) return null;
    
    return {
      eventName,
      position: parseInt(positionMatch[1]),
      totalParticipants: parseInt(positionMatch[2]),
      positionRatio: `${positionMatch[1]}/${positionMatch[2]}`
    };
  };

  const parsedAchievements = runner.achievements
    ?.map(parseAchievement)
    .filter(Boolean) || [];

  // Calculate statistics
  const totalRaces = parsedAchievements.length;
  const avgPosition = totalRaces > 0 
    ? Math.round(parsedAchievements.reduce((sum, a) => sum + a!.position, 0) / totalRaces)
    : 0;
  const bestPosition = totalRaces > 0 
    ? Math.min(...parsedAchievements.map(a => a!.position))
    : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Runner Header */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Profile Image */}
            <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={imageError ? '/default-avatar.jpg' : (runner.profileImage || '/default-avatar.jpg')}
                alt={runner.name}
                fill
                className="object-cover"
              />
              {/* Elite Status Badge - check if sub 1:45 HM or sub 4:00 FM */}
              {((runner.halfMarathonPR && runner.halfMarathonPR < '1:45:00') || 
                (runner.fullMarathonPR && runner.fullMarathonPR < '4:00:00')) && (
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
                  <p className="text-2xl font-mono text-blue-600 font-semibold">
                    {runner.halfMarathonPR || 'N/A'}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Full Marathon PR</h3>
                  <p className="text-2xl font-mono text-red-600 font-semibold">
                    {runner.fullMarathonPR || 'N/A'}
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-blue-600">{totalRaces}</div>
                  <div className="text-gray-600">Total Races</div>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-green-600">
                    {avgPosition > 0 ? avgPosition.toLocaleString() : 'N/A'}
                  </div>
                  <div className="text-gray-600">Avg Position</div>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-purple-600">
                    {bestPosition > 0 ? bestPosition.toLocaleString() : 'N/A'}
                  </div>
                  <div className="text-gray-600">Best Position</div>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-orange-600">
                    {runner.joinDate ? new Date(runner.joinDate).getFullYear() : 'N/A'}
                  </div>
                  <div className="text-gray-600">Member Since</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      {runner.bio && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">About</h2>
            <p className="text-gray-600 leading-relaxed">{runner.bio}</p>
          </div>
        </div>
      )}

      {/* Achievements Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Race Achievements</h2>
          <p className="text-sm text-gray-600 mt-1">
            {totalRaces} race{totalRaces !== 1 ? 's' : ''} completed
          </p>
        </div>
        
        {parsedAchievements.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {parsedAchievements.map((achievement, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {achievement!.eventName}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-600 font-medium">Position:</span>
                        <span className="ml-2 font-bold text-gray-800">
                          {achievement!.positionRatio}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 font-medium">Percentile:</span>
                        <span className="ml-2 font-bold text-gray-800">
                          {((achievement!.position / achievement!.totalParticipants) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 font-medium">Field Size:</span>
                        <span className="ml-2 font-bold text-gray-800">
                          {achievement!.totalParticipants.toLocaleString()} runners
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance Badge */}
                  <div className="ml-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      (achievement!.position / achievement!.totalParticipants) <= 0.1
                        ? 'bg-yellow-100 text-yellow-800' // Top 10%
                        : (achievement!.position / achievement!.totalParticipants) <= 0.25
                        ? 'bg-green-100 text-green-800'   // Top 25%
                        : (achievement!.position / achievement!.totalParticipants) <= 0.5
                        ? 'bg-blue-100 text-blue-800'     // Top 50%
                        : 'bg-gray-100 text-gray-800'     // Bottom 50%
                    }`}>
                      {(achievement!.position / achievement!.totalParticipants) <= 0.1 ? 'Top 10%' :
                       (achievement!.position / achievement!.totalParticipants) <= 0.25 ? 'Top 25%' :
                       (achievement!.position / achievement!.totalParticipants) <= 0.5 ? 'Top 50%' : 'Finisher'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            <p>No race achievements recorded yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}