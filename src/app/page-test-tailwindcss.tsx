export default function Home() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Tailwind CSS v4 is Working! 🎉
        </h1>
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-red-500 rounded"></div>
          <div className="w-16 h-16 bg-green-500 rounded"></div>
          <div className="w-16 h-16 bg-purple-500 rounded"></div>
        </div>
      </div>
    </div>
  );
}