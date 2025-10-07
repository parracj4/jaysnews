export interface Article {
  id: string
  title: string
  summary: string
  source_name: string
  source_url: string
  image_url: string | null
  category: string
  published_at: string
  created_at: string
}

export type ArticleCategory = 'us-trending' | 'mason-county' | 'nuclear' | 'legal' | 'sports' | 'destinations'