'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Article {
  id: string;
  title: string;
  summary: string;
  source_name: string;
  source_url: string;
  image_url: string | null;
  category: string;
  published_at: string;
  created_at: string;
}

export default function ArticlesList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      
      setArticles(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load articles');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="max-w-6xl mx-auto px-4 py-12"><div className="text-center text-purple-400">Loading articles...</div></div>;
  }

  if (error) {
    return <div className="max-w-6xl mx-auto px-4 py-12"><div className="text-center text-red-400">Error: {error}</div></div>;
  }

  if (articles.length === 0) {
    return <div className="max-w-6xl mx-auto px-4 py-12"><div className="text-center text-gray-400">No articles yet. Check back soon!</div></div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <div className="mb-3">
              <span className="text-xs text-purple-400 font-semibold uppercase tracking-wide">{article.category}</span>
              <span className="text-xs text-gray-500 ml-2">{new Date(article.published_at).toLocaleDateString()}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
            <div className="text-gray-300 text-sm mb-4 whitespace-pre-line">{article.summary}</div>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs text-gray-500">{article.source_name}</span>
              <a href={article.source_url} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-400 hover:text-purple-300 font-semibold">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
