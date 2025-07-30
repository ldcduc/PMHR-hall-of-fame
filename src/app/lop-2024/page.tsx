// src/app/lop-2024/page.tsx

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { 
  lop2024Runners, 
  getTotalRunners, 
  getMaleRunners, 
  getFemaleRunners, 
  getHighestDistance, 
  getLowestDistance, 
  getChampion 
} from '../../data/lop2024Runners';

export default function LOP2024() {
  const [isHighestModalOpen, setIsHighestModalOpen] = useState(false);
  const [isLowestModalOpen, setIsLowestModalOpen] = useState(false);
  
  const totalRunners = getTotalRunners();
  const maleRunners = getMaleRunners();
  const femaleRunners = getFemaleRunners();
  const highestDistance = getHighestDistance();
  const lowestDistance = getLowestDistance();
  const champion = getChampion();
  
  const lowestRunner = lop2024Runners[lop2024Runners.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              LEGEND OF PMH RUNNERS
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">2024</h2>
          <p className="text-lg text-gray-600 mb-8">16/11 - 31/12</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Banners Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Main Group Banner */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div className="aspect-w-16 aspect-h-10 md:aspect-h-9">
              <Image
                src="/lop24banner.jpg"
                alt="Legend of PMH Runners 2024 - Main Group Photo"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                Legend of PMH Runners 2024
              </h3>
              <p className="text-lg text-white/90 drop-shadow-md">
                Our amazing community of dedicated runners
              </p>
            </div>
          </div>

          {/* Secondary Group Banner */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div className="aspect-w-16 aspect-h-10 md:aspect-h-9">
              <Image
                src="/lop24group.jpg"
                alt="PMH Runners Club Group Photo 2024"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                Together We Run Strong
              </h3>
              <p className="text-lg text-white/90 drop-shadow-md">
                Building friendships through every mile
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Highlights</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📅</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Event Period</h3>
                    <p className="text-gray-600">November 16 - December 31, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏃‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Champion</h3>
                    <p className="text-gray-600">{champion.name} - {champion.distance} KM</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Achievement</h3>
                    <p className="text-gray-600">{totalRunners} Legend Status Earned</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Spirit</h3>
                    <p className="text-gray-600">Unity Through Running</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legend Runners Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Legend Runners 2024</h2>
            <p className="text-lg text-gray-600">All {totalRunners} legendary runners who achieved LOP status</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Rank</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Runner Name</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Distance (KM)</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Gender</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {lop2024Runners.map((runner, index) => (
                    <tr key={runner.rank} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {runner.rank}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                        {runner.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono text-blue-600 font-semibold">
                        {runner.distance}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          runner.gender === 'Nam' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-pink-100 text-pink-800'
                        }`}>
                          {runner.gender}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Table Statistics */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalRunners}</div>
              <div className="text-gray-600">Total Legend Runners</div>
            </div>
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsHighestModalOpen(true)}
            >
              <div className="text-3xl font-bold text-yellow-500 mb-2">{highestDistance}</div>
              <div className="text-gray-600">Highest Distance (KM)</div>
              <div className="text-xs text-blue-500 mt-1">Click to view</div>
            </div>
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsLowestModalOpen(true)}
            >
              <div className="text-3xl font-bold text-yellow-500 mb-2">{lowestDistance}</div>
              <div className="text-gray-600">Lowest Distance (KM)</div>
              <div className="text-xs text-blue-500 mt-1">Click to view</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Be Part of Our Legend
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the PHU MY HUNG RUNNERS CLUB and create your own legendary moments with us.
          </p>
          <a
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join the Club
          </a>
        </div>
      </section>

      {/* Highest Distance Modal */}
      {isHighestModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsHighestModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🏆</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Highest Distance Champion</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{champion.name}</h4>
                <div className="text-4xl font-bold text-yellow-500 mb-2">{champion.distance} KM</div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  champion.gender === 'Nam' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-pink-100 text-pink-800'
                }`}>
                  {champion.gender}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm">
                🎉 Congratulations to our champion with the highest distance in LOP 2024!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lowest Distance Modal */}
      {isLowestModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsLowestModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Minimum Legend Distance</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
              
              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{lowestRunner.name}</h4>
                <div className="text-4xl font-bold text-blue-500 mb-2">{lowestRunner.distance} KM</div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  lowestRunner.gender === 'Nam' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-pink-100 text-pink-800'
                }`}>
                  {lowestRunner.gender}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm">
                🌟 The minimum distance required to achieve Legend status in LOP 2024.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}