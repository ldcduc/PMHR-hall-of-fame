// src/components/LOP2025RunnerCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface Runner {
  id: string;
  name: string;
  profileImage: string;
  halfMarathonPR?: string;
  fullMarathonPR?: string;
  achievements: string[];
  bio: string;
  joinDate: string;
}

interface LOP2025RunnerCardProps {
  runner: Runner;
  rank?: number;
}

export default function LOP2025RunnerCard({ runner, rank }: LOP2025RunnerCardProps) {
  return (
    <Link 
      href={`/lop-2025/certificate/${runner.id}`}
      className="group block relative"
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-2 border-transparent hover:border-yellow-400 relative">
        {/* Rank Badge */}
        {rank && rank <= 3 && (
          <div className="absolute top-3 left-3 z-10">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
              rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
              rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
              'bg-gradient-to-r from-amber-600 to-amber-800'
            }`}>
              {rank}
            </div>
          </div>
        )}

        {/* Completion Badge */}
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold py-1.5 px-3 rounded-full shadow-lg">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>FINISHER</span>
          </div>
        </div>

        {/* Runner Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={runner.profileImage}
            alt={runner.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-purple-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <div className="bg-white/95 backdrop-blur-sm text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              🏆 View Certificate
            </div>
          </div>

          {/* Runner Name Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-lg drop-shadow-lg">
              {runner.name}
            </h3>
          </div>
        </div>

        {/* Runner Stats */}
        <div className="p-5">
          {/* Personal Records */}
          <div className="space-y-3 mb-4">
            {runner.halfMarathonPR && (
              <div className="flex justify-between items-center bg-blue-50 rounded-lg p-2">
                <span className="text-sm font-medium text-gray-600">Half Marathon PR</span>
                <span className="text-sm font-bold text-blue-600 font-mono">
                  {runner.halfMarathonPR}
                </span>
              </div>
            )}
            {runner.fullMarathonPR && (
              <div className="flex justify-between items-center bg-purple-50 rounded-lg p-2">
                <span className="text-sm font-medium text-gray-600">Full Marathon PR</span>
                <span className="text-sm font-bold text-purple-600 font-mono">
                  {runner.fullMarathonPR}
                </span>
              </div>
            )}
          </div>

          {/* Achievement Summary */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">Total Achievements</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-indigo-600">
                  {runner.achievements?.length || 0}
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            {runner.achievements && runner.achievements.length > 0 && (
              <div className="mt-2 text-xs text-gray-500 truncate">
                Latest: {runner.achievements[0]}
              </div>
            )}
          </div>

          {/* Click Indicator */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center text-sm text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-200">
              <span>Click to view certificate</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
        </div>
      </div>
    </Link>
  );
}