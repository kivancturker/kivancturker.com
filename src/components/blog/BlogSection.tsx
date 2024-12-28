'use client';

import React from 'react';
import BlogCard, { BlogPost } from './BlogCard';

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
].slice(0, 6); // Show only first 6 posts on homepage

export default function BlogSection() {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        latest blog posts
      </h2>
      <p className="mt-2 text-center text-lg text-gray-600">
        thoughts, learnings, and insights from my journey
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}
