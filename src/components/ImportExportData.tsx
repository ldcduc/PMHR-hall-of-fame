'use client';

import { useState } from 'react';
import { runners } from '../data/runners';

export default function ImportExportData() {
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);

  const exportData = async () => {
    setIsExporting(true);
    try {
      const data = {
        runners,
        exportDate: new Date().toISOString(),
        version: '1.0',
        totalRunners: runners.length,
        totalAchievements: runners.reduce((sum, runner) => sum + (runner.achievements?.length || 0), 0)
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `pmh-runners-data-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      // Show success message
      alert(`Successfully exported data for ${runners.length} runners!`);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        
        // Validate the imported data
        if (!data.runners || !Array.isArray(data.runners)) {
          throw new Error('Invalid data format: missing runners array');
        }

        // Basic validation of runner structure
        const invalidRunners = data.runners.filter((runner: any) => 
          !runner.id || !runner.name
        );

        if (invalidRunners.length > 0) {
          throw new Error('Invalid runner data: some runners are missing required fields (id, name)');
        }

        console.log('Imported data:', data);
        console.log(`Found ${data.runners.length} runners in the import file`);
        
        // Show preview of what would be imported
        const runnerNames = data.runners.slice(0, 5).map((r: any) => r.name).join(', ');
        const moreText = data.runners.length > 5 ? ` and ${data.runners.length - 5} more...` : '';
        
        const confirmMessage = `Ready to import ${data.runners.length} runners:\n${runnerNames}${moreText}\n\nNote: This is a preview only. Actual import functionality needs to be implemented.`;
        
        if (confirm(confirmMessage)) {
          // Here you would update your data store
          // For now, just log the success
          console.log('Import confirmed - data would be saved here');
          alert('Import preview completed! Actual import functionality needs backend implementation.');
        }
      } catch (error) {
        console.error('Import failed:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        alert(`Failed to import data: ${errorMessage}`);
      } finally {
        setIsImporting(false);
        // Clear the file input
        event.target.value = '';
      }
    };
    
    reader.readAsText(file);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
      
      <div className="space-y-6">
        {/* Export Section */}
        <div className="border-b border-gray-200 pb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Export Data</h4>
          <p className="text-sm text-gray-500 mb-3">
            Download all runner data as a JSON file. Includes {runners.length} runners and their achievements.
          </p>
          <button
            onClick={exportData}
            disabled={isExporting}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors duration-150"
          >
            {isExporting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Exporting...
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Data ({runners.length} runners)
              </>
            )}
          </button>
        </div>

        {/* Import Section */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Import Data</h4>
          <p className="text-sm text-gray-500 mb-3">
            Upload a JSON file to preview runner data. The file should contain a "runners" array with runner objects.
          </p>
          
          {/* File format info */}
          <div className="bg-gray-50 rounded-md p-3 mb-3">
            <h5 className="text-xs font-medium text-gray-700 mb-1">Expected JSON format:</h5>
            <code className="text-xs text-gray-600 block">
              {`{
  "runners": [
    {
      "id": "1",
      "name": "Runner Name",
      "halfMarathonPR": "1:30:00",
      "fullMarathonPR": "3:15:00",
      "achievements": ["Race 1 - 100/500"],
      "bio": "Runner bio...",
      "joinDate": "2023-01-01"
    }
  ]
}`}
            </code>
          </div>

          <div className="relative">
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              disabled={isImporting}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 disabled:opacity-50 transition-colors"
            />
            {isImporting && (
              <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-md">
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Processing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Warning note */}
          <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-md p-3">
            <div className="flex">
              <svg className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h5 className="text-sm font-medium text-yellow-800">Preview Only</h5>
                <p className="text-sm text-yellow-700">
                  This import feature currently shows a preview of the data. To actually import data, backend integration is required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}