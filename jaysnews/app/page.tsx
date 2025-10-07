import { getArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import AdCard from '@/components/AdCard'
import Hero from '@/components/Hero'

export const revalidate = 300 // Revalidate every 5 minutes

export default async function Home() {
  const articles = await getArticles('us-trending', 20)

  return (
    <main className="min-h-screen">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <>
              <ArticleCard key={article.id} article={article} index={index} />
              
              {/* Insert ad every 6 articles */}
              {(index + 1) % 6 === 0 && (
                <AdCard key={`ad-${index}`} />
              )}
            </>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No articles yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  )
}