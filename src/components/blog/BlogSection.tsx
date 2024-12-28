import React from 'react';
import BlogCard from './BlogCard';
import { getBlogPosts } from '@/utils/content';

export default async function BlogSection() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        latest blog posts
      </h2>
      <p className="mt-2 text-center text-lg text-gray-600">
        thoughts, learnings, and insights from my journey
      </p>
      {posts.length > 0 ? (
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              post={{
                title: post.frontmatter.title,
                excerpt: post.frontmatter.excerpt,
                date: post.frontmatter.date,
                readTime: post.frontmatter.readTime,
                tags: post.frontmatter.tags,
              }}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
            />
          </svg>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            No blog posts
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Blog posts will appear here once they are created.
          </p>
        </div>
      )}
    </div>
  );
}
