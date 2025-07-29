import { useState } from 'react';
// eslint-disable-next-line
import { Runner, addComputedFields, isEliteRunner } from '../types/runner';
import { safeCompare, safeTimeCompare, safeStringCompare, safeAchievementCompare, SortDirection } from '../utils/safeCompare';
import Image from 'next/image';

interface RunnersTableProps {
  runners: Runner[];
  onEdit?: (runner: Runner) => void;
  onDelete?: (runnerId: string) => void; // Changed from number to string
}

export default function RunnersTable({ runners, onEdit, onDelete }: RunnersTableProps) {
  // Changed default sort field from 'name' to 'fullMarathonPR'
  const [sortField, setSortField] = useState<keyof Runner>('fullMarathonPR');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (field: keyof Runner) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedRunners = [...runners].sort((a, b) => {
    const aVal = a[sortField];
    const bVal = b[sortField];

    // Use appropriate comparison function based on field type
    switch (sortField) {
      case 'halfMarathonPR':
      case 'fullMarathonPR':
        return safeTimeCompare(aVal, bVal, sortDirection);
      
      case 'name':
      case 'bio':
      case 'joinDate':
        return safeStringCompare(aVal, bVal, sortDirection, false);
      
      case 'achievements':
        return safeAchievementCompare(aVal, bVal, sortDirection);
      
      case 'id':
        // Handle string IDs
        return safeStringCompare(aVal, bVal, sortDirection, false);
        
      default:
        return safeCompare(aVal, bVal, sortDirection);
    }
  });

  const SortIcon = ({ field }: { field: keyof Runner }) => {
    if (sortField !== field) {
      return <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>;
    }
    
    return sortDirection === 'asc' ? (
      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center space-x-1">
                  <span>Runner</span>
                  <SortIcon field="name" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('halfMarathonPR')}
              >
                <div className="flex items-center space-x-1">
                  <span>Half Marathon PR</span>
                  <SortIcon field="halfMarathonPR" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('fullMarathonPR')}
              >
                <div className="flex items-center space-x-1">
                  <span>Full Marathon PR</span>
                  <SortIcon field="fullMarathonPR" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Achievements
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Latest Achievement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedRunners.map((runner) => {
              // Add computed fields for each runner
              const runnerWithComputed = addComputedFields(runner);
              
              return (
                <tr key={runner.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image 
                          className="h-10 w-10 rounded-full object-cover border-2 border-gray-200" 
                          src={runner.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(runner.name)}&background=3b82f6&color=fff`}
                          width={40}
                          height={40}
                          alt={runner.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                          {runner.name}
                          {runnerWithComputed.isElite && (
                            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full shadow-sm">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              ELITE
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`font-mono text-sm font-medium ${
                      runner.halfMarathonPR && runner.halfMarathonPR !== 'N/A' ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      {runner.halfMarathonPR || 'N/A'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`font-mono text-sm font-medium ${
                      runner.fullMarathonPR && runner.fullMarathonPR !== 'N/A' ? 'text-red-600' : 'text-gray-400'
                    }`}>
                      {runner.fullMarathonPR || 'N/A'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      {runnerWithComputed.totalAchievements}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                      {runnerWithComputed.latestAchievement}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <a
                        href={`/runners/${runner.id}`}
                        className="text-blue-600 hover:text-blue-900 transition-colors duration-150"
                      >
                        View
                      </a>
                      {onEdit && (
                        <button
                          onClick={() => onEdit(runner)}
                          className="text-green-600 hover:text-green-900 transition-colors duration-150"
                        >
                          Edit
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(runner.id)}
                          className="text-red-600 hover:text-red-900 transition-colors duration-150"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {runners.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">No runners found</div>
        </div>
      )}
    </div>
  );
}