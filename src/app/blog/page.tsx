'use client';

import React from 'react';
import PageTransition from '@/components/shared/PageTransition';
import BlogCard, { BlogPost } from '@/components/blog/BlogCard';

const blogPosts: BlogPost[] = [
  {
    title: 'Understanding Clean Architecture in Modern Web Development',
    excerpt:
      'A deep dive into implementing clean architecture principles in web applications...',
    date: '2023-12-20',
    readTime: '5 min read',
    tags: ['Architecture', 'Web Development', 'Best Practices'],
  },
  {
    title: 'The Power of TypeScript in Large Scale Applications',
    excerpt:
      'How TypeScript improves developer experience and code quality in large projects...',
    date: '2023-12-15',
    readTime: '4 min read',
    tags: ['TypeScript', 'JavaScript', 'Development'],
  },
  {
    title: 'Microservices vs Monolith: Making the Right Choice',
    excerpt:
      'Analyzing when to choose microservices over monolithic architecture...',
    date: '2023-12-10',
    readTime: '6 min read',
    tags: ['Microservices', 'Architecture', 'System Design'],
  },
  {
    title: 'Getting Started with Next.js 13',
    excerpt:
      'A comprehensive guide to building modern web applications with Next.js 13...',
    date: '2023-12-05',
    readTime: '7 min read',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt:
      'Exploring upcoming trends and technologies that will shape web development...',
    date: '2023-12-01',
    readTime: '8 min read',
    tags: ['Web Development', 'Trends', 'Technology'],
  },
  {
    title: 'Building Scalable APIs with .NET Core',
    excerpt:
      'Best practices and patterns for creating robust and scalable APIs using .NET Core...',
    date: '2023-11-28',
    readTime: '6 min read',
    tags: ['.NET Core', 'API', 'Backend'],
  },
];

// Sort posts by date (most recent first)
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function Blog() {
  return (
    <PageTransition>
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Thoughts, learnings, and insights from my journey in software
              development
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {sortedPosts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
