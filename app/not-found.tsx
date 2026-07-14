import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-900 to-cyan-950 text-white px-6">
      <div className="text-center max-w-lg">
        
        {/* 404 Header */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black tracking-widest text-cyan-600/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Description */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Looks like you're lost
        </h2>
        
        <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL and try again.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 text-sm"
          >
            Back to Home
          </Link>
          
          <Link
            href="/explore"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-gray-300 font-semibold rounded-xl border border-slate-700 transition-all duration-200 text-sm"
          >
            Explore Products
          </Link>
        </div>

      </div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    </main>
  );
}