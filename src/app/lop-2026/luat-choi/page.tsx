export default function LuatChoiPage() {
  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <header className="bg-white border-b border-gray-200 py-10 text-center px-4">
        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Legends of PMHR 2026 · LOP26
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-1">
          📖 Luật chơi
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Quy định và thể lệ của LOP26
        </p>
      </header>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <a
          href="/lop-2026"
          className="inline-flex items-center gap-1.5 mb-6 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
        >
          ← Quay lại
        </a>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <p className="text-center text-gray-400 text-sm">
            Nội dung đang được cập nhật...
          </p>
        </div>
      </section>
    </div>
  );
}
