import { cache } from 'react';
import matter from 'gray-matter';

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

export interface ContentItem<T> {
  slug: string;
  frontmatter: T;
  content: string;
}

// Helper function to generate consistent slugs
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Helper function to format dates consistently
function formatDate(date: string): string {
  return new Date(date).toISOString().split('T')[0];
}

export const getBlogPosts = cache(
  async (): Promise<ContentItem<BlogFrontmatter>[]> => {
    const blogFiles = {
      'understanding-clean-architecture': await import(
        '@/content/blogs/understanding-clean-architecture.md'
      ),
      'typescript-in-large-applications': await import(
        '@/content/blogs/typescript-in-large-applications.md'
      ),
    };

    const posts = await Promise.all(
      Object.values(blogFiles).map(async (fileModule) => {
        const { data, content } = matter(fileModule.default);
        const slug = generateSlug(data.title);
        return {
          slug,
          frontmatter: {
            ...data,
            date: formatDate(data.date),
          } as BlogFrontmatter,
          content,
        };
      })
    );

    return posts.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
  }
);

export const getProjects = cache(
  async (): Promise<ContentItem<ProjectFrontmatter>[]> => {
    const projectFiles = {
      'portfolio-website': await import(
        '@/content/projects/portfolio-website.md'
      ),
      'task-management-application': await import(
        '@/content/projects/task-management-app.md'
      ),
    };

    return Promise.all(
      Object.values(projectFiles).map(async (fileModule) => {
        const { data, content } = matter(fileModule.default);
        const slug = generateSlug(data.title);
        return {
          slug,
          frontmatter: data as ProjectFrontmatter,
          content,
        };
      })
    );
  }
);

export const getBlogPost = cache(
  async (slug: string): Promise<ContentItem<BlogFrontmatter> | undefined> => {
    try {
      const blogFiles = {
        'understanding-clean-architecture-in-modern-web-development':
          await import('@/content/blogs/understanding-clean-architecture.md'),
        'the-power-of-typescript-in-large-scale-applications': await import(
          '@/content/blogs/typescript-in-large-applications.md'
        ),
      };

      const fileModule = blogFiles[slug as keyof typeof blogFiles];
      if (!fileModule) return undefined;

      const { data, content } = matter(fileModule.default);
      return {
        slug,
        frontmatter: {
          ...data,
          date: formatDate(data.date),
        } as BlogFrontmatter,
        content,
      };
    } catch {
      return undefined;
    }
  }
);

export const getProject = cache(
  async (
    slug: string
  ): Promise<ContentItem<ProjectFrontmatter> | undefined> => {
    try {
      const projectFiles = {
        'portfolio-website': await import(
          '@/content/projects/portfolio-website.md'
        ),
        'task-management-application': await import(
          '@/content/projects/task-management-app.md'
        ),
      };

      const fileModule = projectFiles[slug as keyof typeof projectFiles];
      if (!fileModule) return undefined;

      const { data, content } = matter(fileModule.default);
      return {
        slug,
        frontmatter: data as ProjectFrontmatter,
        content,
      };
    } catch {
      return undefined;
    }
  }
);
