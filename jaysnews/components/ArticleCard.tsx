'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Article {
  id: string;
  title: string;
  summary: string;
  source_name: string;
  source_url: string;
  category: string;
  published_at: string;
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Your original smooth animations
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95]);
  
  // New 3D rotation effect (20 degrees)
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  
  // Glass reflection gradient position
  const gradientPosition = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <motion.article
      ref={cardRef}
      style={{
        y,
        opacity,
        scale,
        rotateX,
        transformPerspective: 1200,
      }}
      className="relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-colors group"
    >
      <a href={article.source_url} target="_blank" rel="noopener noreferrer" className="block h-[500px] flex flex-col">
        
        {/* Logo watermark */}
        <div 
          className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
          style={{
            backgroundImage: 'url(https://i.imgur.com/mgFP1sl.png)',
            backgroundSize: '60%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/75 pointer-events-none z-0" />

        {/* Glass reflection effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-30 z-0"
          style={{
            background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 100%)`,
            backgroundSize: '200% 200%',
            backgroundPosition: gradientPosition,
          }}
        />

        {/* Content container */}
        <div className="relative z-10 p-6 flex flex-col h-full">
          
          {/* Category and date - fixed at top */}
          <div className="mb-3 flex-shrink-0">
            <span className="text-xs text-purple-400 font-semibold uppercase tracking-wide">
              {article.category.replace('-', ' ')}
            </span>
            <span className="text-xs text-gray-500 ml-2">
              {new Date(article.published_at).toLocaleDateString()}
            </span>
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent">
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-300 text-sm whitespace-pre-line">
              {article.summary}
            </p>
          </div>

          {/* Footer - fixed at bottom */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 flex-shrink-0">
            <span className="text-xs text-gray-500">{article.source_name}</span>
            <span className="inline-flex items-center text-sm text-purple-400 group-hover:text-purple-300 font-semibold transition-colors">
              Read More
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>

        </div>
      </a>
    </motion.article>
  );
}

