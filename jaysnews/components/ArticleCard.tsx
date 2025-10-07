'use client'

import { Article } from '@/types/article'
import { getRelativeTime } from '@/lib/articles'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ArticleCardProps {
  article: Article
  index: number
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  // Parallax effect - image moves slower than card
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95])

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
    <a href={article.source_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image with parallax */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50">
          {article.image_url ? (
            <motion.div style={{ y }} className="h-full">
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <span className="text-6xl">📰</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">
              {article.category.replace('-', ' ').toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
            {article.title}
          </h2>

          {/* Summary */}
          <p className="text-gray-700 mb-4 line-clamp-3">
            {article.summary}
          </p>

          {/* Read more button */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center text-purple-700 font-semibold group-hover:text-purple-900 transition-colors">
              Read Full Article

              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">

