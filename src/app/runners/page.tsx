import RunnerCard from '@/src/components/RunnerCard';
import { runners } from '@/src/data/runners';

export default function AllRunners() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 text-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-xl font-bold text-white">PMH</span>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 gradient-text">
            All Runners
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Meet all members of the PMH Runners Club
          </p>
        </div>
      </section>

      {/* Runners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {runners.map((runner) => (
            <RunnerCard key={runner.id} runner={runner} />
          ))}
        </div>
      </div>
    </>
  );
}