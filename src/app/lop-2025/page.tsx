// src/app/lop-2025/page.tsx

import Image from 'next/image';
import { 
  lop2025Runners, 
  getTotalRunners, 
  getHighestDistance, 
  getLowestDistance, 
  getLeadingRunner 
} from '../../data/lop2025Runners';

export default function LOP2025() {
  const totalRunners = getTotalRunners();
  const highestDistance = getHighestDistance();
  const lowestDistance = getLowestDistance();
  const leadingRunner = getLeadingRunner();

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
          <p className="text-base text-gray-500 mb-8">(Tính đến hết ngày 27/07)</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Legend Runners Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Legend Runners 2025</h2>
            <p className="text-lg text-gray-600">
              Current standings - {totalRunners} runners as of July 27, 2025
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Tên Strava</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Tổng KM</th>
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
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">{highestDistance}</div>
              <div className="text-gray-600">Highest Distance (KM)</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{lowestDistance}</div>
              <div className="text-gray-600">Minimum LOP Distance (KM)</div>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Progress</h3>
                    <p className="text-gray-600">{totalRunners} Runners Qualified</p>
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
    </div>
  );
}