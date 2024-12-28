'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

// Helper function to generate consistent slugs
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function BlogCard({ post }: BlogCardProps) {
  const router = useRouter();
  const slug = generateSlug(post.title);

  return (
    <div
      onClick={() => router.push(`/blog/${slug}`)}
      className="cursor-pointer overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
    >
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h2>
      <p className="mt-2 text-gray-600">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
