import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🏃‍♂️</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Runner Not Found</h1>
        <p className="text-gray-600 mb-8">
          The runner you're looking for doesn't exist in our records.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-colors"
        >
          Back to Hall of Fame
        </Link>
      </div>
    </div>
  );
}