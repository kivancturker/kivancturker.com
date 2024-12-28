import React from 'react';
import PageTransition from '@/components/shared/PageTransition';
import BlogCard from '@/components/blog/BlogCard';
import { getBlogPosts } from '@/utils/content';

export default async function Blog() {
  const posts = await getBlogPosts();

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

          {posts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2">
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
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center">
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
                No blog posts yet
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Check back later for new content!
              </p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
