'use client';

import { useState } from 'react';
import RunnerCard from '../components/RunnerCard';
import RunnersTable from '../components/RunnersTable';
import { runners } from '../data/runners';
import Logo from '../components/Logo';

export default function Home() {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 text-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center">
            <Logo size="lg" className="mr-3" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PMH Runners Club
          </h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Hall of Fame
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Celebrating our elite runners with sub 1:45 HM or sub 4:00 FM times
          </p>

          {/* View mode toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full shadow-sm inline-flex p-1 border border-gray-200">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  viewMode === 'cards'
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  viewMode === 'table'
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Runner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {runners.map((runner) => (
              <RunnerCard key={runner.id} runner={runner} />
            ))}
          </div>
        ) : (
          <div className="mb-16">
            <RunnersTable runners={runners} />
          </div>
        )}
      </div>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Club Statistics</h3>
            <p className="text-gray-600">Our runners&apos; achievements at a glance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{runners.length}</div>
              <div className="text-gray-600">Total Runners</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                {runners.filter(r => r.isElite).length}
              </div>
              <div className="text-gray-600">Elite Athletes</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {runners.reduce((sum, r) => sum + (r.totalAchievements || 0), 0)}
              </div>
              <div className="text-gray-600">Total Achievements</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}