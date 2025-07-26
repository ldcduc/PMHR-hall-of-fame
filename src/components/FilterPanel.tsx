interface FilterPanelProps {
  onFilterChange: (filters: {
    eliteOnly: boolean;
    distance: 'all' | 'half' | 'full';
    sortBy: 'name' | 'halfPR' | 'fullPR' | 'achievements';
  }) => void;
}

export default function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const handleFilterChange = (key: string, value: any) => {
    // This would typically use state management
    console.log('Filter changed:', key, value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      
      <div className="space-y-6">
        {/* Elite Filter */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              onChange={(e) => handleFilterChange('eliteOnly', e.target.checked)}
            />
            <span className="ml-2 text-sm text-gray-700">Elite runners only</span>
          </label>
        </div>

        {/* Distance Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Best Distance
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => handleFilterChange('distance', e.target.value)}
          >
            <option value="all">All Distances</option>
            <option value="half">Half Marathon</option>
            <option value="full">Full Marathon</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          >
            <option value="name">Name</option>
            <option value="halfPR">Half Marathon PR</option>
            <option value="fullPR">Full Marathon PR</option>
            <option value="achievements">Total Achievements</option>
          </select>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => handleFilterChange('clear', true)}
          className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-150"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}