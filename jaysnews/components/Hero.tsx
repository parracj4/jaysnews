export default function Hero() {
  return (
    <div className="relative py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Jay's News
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Modern News, Simply Told
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Clean, curated headlines from trusted sources. No clickbait. No spin. Just the facts.
        </p>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}