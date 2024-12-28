import React from 'react';
import BlogPostContent from '@/components/blog/BlogPostContent';
import type { BlogPost } from '@/components/blog/BlogCard';

// This would typically come from a CMS or API
const blogPosts: Record<string, BlogPost & { content: string }> = {
  'understanding-clean-architecture': {
    title: 'Understanding Clean Architecture in Modern Web Development',
    excerpt:
      'A deep dive into implementing clean architecture principles in web applications...',
    date: '2023-12-20',
    readTime: '5 min read',
    tags: ['Architecture', 'Web Development', 'Best Practices'],
    content: `# Understanding Clean Architecture in Modern Web Development

*Published on December 20, 2023 · 5 min read*

Clean Architecture has become increasingly important in modern web development as applications grow in complexity. In this post, we'll explore the core principles of Clean Architecture and how to implement them effectively in your web applications.

## What is Clean Architecture?

Clean Architecture, introduced by Robert C. Martin, is a software design philosophy that separates concerns into distinct layers. The main goal is to create systems that are:

- Independent of frameworks
- Testable
- Independent of the UI
- Independent of the database
- Independent of any external agency

## Core Principles

### 1. Dependency Rule

The most important rule in Clean Architecture is the **Dependency Rule**. This rule states that source code dependencies can only point inwards. Nothing in an inner circle can know anything about something in an outer circle.

### 2. Layers

Clean Architecture typically consists of four main layers:

1. **Entities**: Contains enterprise business rules
2. **Use Cases**: Contains application business rules
3. **Interface Adapters**: Converts data between use cases and external formats
4. **Frameworks & Drivers**: Contains frameworks and tools like the database or the Web

## Benefits of Clean Architecture

1. **Maintainability**: The code is easier to maintain and modify because concerns are separated.
2. **Testability**: Business logic can be tested independently of external dependencies.
3. **Flexibility**: The system is flexible and can adapt to changes in technology.

## Conclusion

Clean Architecture is a powerful approach to building maintainable and scalable web applications. While it requires more initial setup and thinking, the benefits become clear as your application grows in complexity.

Remember that Clean Architecture is a guideline, not a strict set of rules. Adapt it to your specific needs while keeping the core principles in mind.`,
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return <BlogPostContent post={post} />;
}
