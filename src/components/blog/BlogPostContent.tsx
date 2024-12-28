'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTransition from '@/components/shared/PageTransition';
import type { BlogPost } from './BlogCard';

interface BlogPostContentProps {
  post: BlogPost & { content: string };
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    // Format date on client-side only to avoid hydration mismatch
    setFormattedDate(
      new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, [post.date]);

  return (
    <PageTransition>
      <article className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between text-sm text-gray-500">
            <time dateTime={post.date}>{formattedDate}</time>
            <span>{post.readTime}</span>
          </div>

          <div className="prose prose-lg mx-auto">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
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
      </article>
    </PageTransition>
  );
}
