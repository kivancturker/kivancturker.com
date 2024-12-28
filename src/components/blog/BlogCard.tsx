'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateSlug } from '@/utils/content';

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

export default function BlogCard({ post }: BlogCardProps) {
  const router = useRouter();
  const slug = generateSlug(post.title);
  const [formattedDate, setFormattedDate] = useState<string>(post.date);

  useEffect(() => {
    try {
      setFormattedDate(
        new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      );
    } catch (error) {
      console.error('Error formatting date:', error);
    }
  }, [post.date]);

  return (
    <div
      onClick={() => router.push(`/blog/${slug}`)}
      className="cursor-pointer overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
    >
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{formattedDate}</span>
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
