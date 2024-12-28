import React from 'react';
import BlogPostContent from '@/components/blog/BlogPostContent';
import { getBlogPost, getBlogPosts } from '@/utils/content';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogPostContent
      post={{
        title: post.frontmatter.title,
        excerpt: post.frontmatter.excerpt,
        date: post.frontmatter.date,
        readTime: post.frontmatter.readTime,
        tags: post.frontmatter.tags,
        content: post.content,
      }}
    />
  );
}
