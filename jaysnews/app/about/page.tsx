export default function About() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Jay's News
          </h1>
          
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Jay's News is a modern news aggregation platform designed to cut through the noise 
              and deliver clean, factual news without the clickbait and spin.
            </p>
            
            <p>
              We curate headlines from trusted sources like Reuters, AP News, NPR, and BBC, 
              providing brief summaries and linking directly to the original reporting.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p>
              To provide Mason County and beyond with accessible, trustworthy news that respects 
              your time and intelligence. No ads cluttering the experience. No endless scrolling. 
              Just the facts.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
            <p>
              Have feedback or want to advertise? Email us at{' '}
              <a href="mailto:contact@jaysnews.com" className="text-purple-700 hover:text-purple-900">
                contact@jaysnews.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}