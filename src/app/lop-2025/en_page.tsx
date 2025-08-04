// src/app/lop-2025/page.tsx

'use client';

import { useState } from 'react';
import { 
  lop2025Runners, 
  getTotalRunners, 
  getHighestDistance, 
  getLowestDistance, 
  getLeadingRunner 
} from '../../data/lop2025Runners';

export default function LOP2025() {
  const [isHighestModalOpen, setIsHighestModalOpen] = useState(false);
  const [isLowestModalOpen, setIsLowestModalOpen] = useState(false);
  const [isTotalModalOpen, setIsTotalModalOpen] = useState(false);
  const [isGenderModalOpen, setIsGenderModalOpen] = useState(false);
  
  const totalRunners = getTotalRunners();
  const highestDistance = getHighestDistance();
  const lowestDistance = getLowestDistance();
  const leadingRunner = getLeadingRunner();
  
  const lowestRunner = lop2025Runners[lop2025Runners.length - 1];
  const top10Runners = lop2025Runners.slice(0, 10);
  const bottom10Runners = lop2025Runners.slice(-10).reverse();

  // Gender statistics
  const femaleRunners = lop2025Runners.filter(r => r.gender === "Nữ");
  const maleRunners = lop2025Runners.filter(r => r.gender === "Nam");
  const femaleCount = femaleRunners.length;
  const maleCount = maleRunners.length;
  const femalePercentage = ((femaleCount / totalRunners) * 100).toFixed(1);
  const malePercentage = ((maleCount / totalRunners) * 100).toFixed(1);

  // Top female runner
  const topFemaleRunner = femaleRunners[0];
  const topMaleRunner = maleRunners[0];

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
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">2025</h2>
          <p className="text-lg text-gray-600 mb-4">Kết quả LOP 2025</p>
          <p className="text-base text-gray-500 mb-8">(Tính đến hết ngày 03/08)</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Legend Runners Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Legend Runners 2025</h2>
            <p className="text-lg text-gray-600">
              Current standings - {totalRunners} runners as of August 03, 2025
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Table Statistics */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsTotalModalOpen(true)}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalRunners}</div>
              <div className="text-gray-600">Total Legend Runners</div>
              <div className="text-xs text-blue-500 mt-1">Click to view details</div>
            </div>
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsHighestModalOpen(true)}
            >
              <div className="text-3xl font-bold text-yellow-500 mb-2">{highestDistance}</div>
              <div className="text-gray-600">Highest Distance (KM)</div>
              <div className="text-xs text-yellow-500 mt-1">Click to view leader</div>
            </div>
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsLowestModalOpen(true)}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">{lowestDistance}</div>
              <div className="text-gray-600">Minimum LOP Distance (KM)</div>
              <div className="text-xs text-orange-500 mt-1">Click to view details</div>
            </div>
            <div 
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsGenderModalOpen(true)}
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">{femaleCount}</div>
              <div className="text-gray-600">Female Runners</div>
              <div className="text-xs text-purple-500 mt-1">Click to view stats</div>
            </div>
          </div>

          <br></br>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Tên Strava</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Tổng KM</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Giới tính</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {lop2025Runners.map((runner, index) => (
                    <tr key={runner.stt} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {runner.stt}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                        {runner.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-mono text-blue-600 font-semibold">
                        {runner.distance}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          runner.gender === "Nữ" 
                            ? "bg-pink-100 text-pink-800" 
                            : "bg-blue-100 text-blue-800"
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
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">LOP 2025 Progress</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📅</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Current Status</h3>
                    <p className="text-gray-600">As of July 27, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏃‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Leading Runner</h3>
                    <p className="text-gray-600">{leadingRunner.name} - {leadingRunner.distance} KM</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">👩‍🏃‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Gender Distribution</h3>
                    <p className="text-gray-600">{femaleCount} Female, {maleCount} Male</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Competition</h3>
                    <p className="text-gray-600">Still Ongoing - Join Now!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join the 2025 Legend
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The competition is still ongoing! Join the PHU MY HUNG RUNNERS CLUB and compete for Legend status.
          </p>
          <a
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join the Club
          </a>
        </div>
      </section>

      {/* Gender Statistics Modal */}
      {isGenderModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsGenderModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⚥</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Gender Distribution</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{maleCount}</div>
                  <div className="text-gray-600">Nam ({malePercentage}%)</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">{femaleCount}</div>
                  <div className="text-gray-600">Nữ ({femalePercentage}%)</div>
                </div>
              </div>

              {topFemaleRunner && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Top Male Runner</h4>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{topMaleRunner.name}</span>
                      <span className="text-blue-600 font-bold">{topMaleRunner.distance} KM</span>
                    </div>
                    <div className="text-sm text-gray-500">Position #{topMaleRunner.stt}</div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Top Female Runner</h4>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{topFemaleRunner.name}</span>
                      <span className="text-pink-600 font-bold">{topFemaleRunner.distance} KM</span>
                    </div>
                    <div className="text-sm text-gray-500">Position #{topFemaleRunner.stt}</div>
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Top 10 Female Runners</h4>
                <div className="space-y-2">
                  {femaleRunners.slice(0, 10).map((runner, index) => (
                    <div key={runner.stt} className="flex justify-between items-center text-sm">
                      <span className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center mr-2">
                          {index + 1}
                        </span>
                        {runner.name}
                      </span>
                      <span className="text-pink-600 font-bold">{runner.distance} KM</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Top 10 Male Runners</h4>
                <div className="space-y-2">
                  {maleRunners.slice(0, 10).map((runner, index) => (
                    <div key={runner.stt} className="flex justify-between items-center text-sm">
                      <span className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center mr-2">
                          {index + 1}
                        </span>
                        {runner.name}
                      </span>
                      <span className="text-blue-600 font-bold">{runner.distance} KM</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Total Runners Modal */}
      {isTotalModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsTotalModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">👥</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">LOP 2025 Community</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mb-4"></div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{totalRunners}</div>
                <div className="text-gray-600">Total Legend Runners</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Top 10 Performers</h4>
                <div className="space-y-2">
                  {top10Runners.map((runner, index) => (
                    <div key={runner.stt} className="flex justify-between items-center text-sm">
                      <span className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-yellow-500 text-white text-xs flex items-center justify-center mr-2">
                          {index + 1}
                        </span>
                        {runner.name}
                      </span>
                      <span className="text-blue-600 font-bold">{runner.distance} KM</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-600">{lop2025Runners.filter(r => parseFloat(r.distance) > 300).length}</div>
                  <div className="text-xs text-gray-600">Above 300 KM</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-600">{lop2025Runners.filter(r => parseFloat(r.distance) > 200).length}</div>
                  <div className="text-xs text-gray-600">Above 200 KM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Current Leader</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{leadingRunner.name}</h4>
                <div className="text-4xl font-bold text-yellow-500 mb-2">{leadingRunner.distance} KM</div>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-sm text-gray-500">Position #{leadingRunner.stt}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    leadingRunner.gender === "Nữ" 
                      ? "bg-pink-100 text-pink-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {leadingRunner.gender}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">
                🎉 Leading the pack in LOP 2025! Competition is still ongoing.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lowest Distance Modal */}
      {isLowestModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsLowestModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Qualification Threshold</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-4"></div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 mb-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">{lowestDistance} KM</div>
                <div className="text-gray-600">Minimum Distance to Qualify</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Qualifying Runner</h4>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lowestRunner.name}</span>
                  <span className="text-orange-600 font-bold">{lowestRunner.distance} KM</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500">Position #{lowestRunner.stt}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    lowestRunner.gender === "Nữ" 
                      ? "bg-pink-100 text-pink-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {lowestRunner.gender}
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Bottom 10 Qualifiers</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {bottom10Runners.map((runner, index) => (
                    <div key={runner.stt} className="flex justify-between items-center text-sm">
                      <span className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center mr-2">
                          {totalRunners - index}
                        </span>
                        <span className="flex items-center gap-1">
                          {runner.name}
                          <span className={`inline-flex items-center px-1 py-0.5 rounded text-xs font-medium ${
                            runner.gender === "Nữ" 
                              ? "bg-pink-100 text-pink-700" 
                              : "bg-blue-100 text-blue-700"
                          }`}>
                            {runner.gender}
                          </span>
                        </span>
                      </span>
                      <span className="text-orange-600 font-bold">{runner.distance} KM</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm text-center">
                🌟 The minimum distance required to achieve Legend status in LOP 2025.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}