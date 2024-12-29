import axios from 'axios';
import matter from 'gray-matter';
import { cache } from 'react';
import { readCache, writeCache } from './cache';

const GITHUB_API_BASE_URL =
  'https://api.github.com/repos/kivancturker/resources.kivancturker.com/contents';

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

async function fetchMarkdownFiles<
  T extends BlogFrontmatter | ProjectFrontmatter,
>(folder: string): Promise<ContentItem<T>[]> {
  const cache = readCache<ContentItem<T>[]>(folder);
  if (cache) {
    return cache;
  }

  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/${folder}`);

    const files = response.data.filter((file: { name: string }) =>
      file.name.endsWith('.md')
    );

    const contentPromises = files.map(
      async (file: { download_url: string }) => {
        const fileContentResponse = await axios.get(file.download_url);
        const { data: frontmatter, content } = matter(fileContentResponse.data);

        // Ensure date is formatted as a string
        if ('date' in frontmatter && frontmatter.date) {
          frontmatter.date = formatDate(frontmatter.date);
        }

        return {
          slug: generateSlug((frontmatter as T).title),
          frontmatter: frontmatter as T,
          content,
        };
      }
    );

    const content = await Promise.all(contentPromises);

    // Store fetched content in the file cache
    writeCache(folder, content);
    return content;
  } catch (error) {
    console.error(`Error fetching ${folder} files:`, error);
    return [];
  }
}

export async function getBlogPosts(): Promise<ContentItem<BlogFrontmatter>[]> {
  return fetchMarkdownFiles<BlogFrontmatter>('blogs');
}

export async function getProjects(): Promise<
  ContentItem<ProjectFrontmatter>[]
> {
  return fetchMarkdownFiles<ProjectFrontmatter>('projects');
}

export const getBlogPost = cache(
  async (slug: string): Promise<ContentItem<BlogFrontmatter> | undefined> => {
    try {
      const blogPosts = await getBlogPosts();
      return blogPosts.find((post) => post.slug === slug);
    } catch (error) {
      console.error(`Error fetching blog post: ${slug}`, error);
      return undefined;
    }
  }
);

export const getProject = cache(
  async (
    slug: string
  ): Promise<ContentItem<ProjectFrontmatter> | undefined> => {
    try {
      const projects = await getProjects();
      return projects.find((project) => project.slug === slug);
    } catch (error) {
      console.error(`Error fetching project: ${slug}`, error);
      return undefined;
    }
  }
);

async function fetchJsonFile<T>(filePath: string): Promise<T> {
  const cache = readCache<T>(filePath);
  if (cache) {
    return cache;
  }

  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/${filePath}`);
    const fileContent = Buffer.from(response.data.content, 'base64').toString(
      'utf-8'
    );
    const parsedContent = JSON.parse(fileContent);

    // Store parsed content in the file cache
    writeCache(filePath, parsedContent);
    return parsedContent as T;
  } catch (error) {
    console.error(`Error fetching JSON file at ${filePath}:`, error);
    throw error;
  }
}

export async function getHomepageContent() {
  return fetchJsonFile<{
    hero: {
      title: string;
      description: string;
      contactEmail: string;
      github: string;
    };
  }>('homepage.json');
}

export async function getEducationData() {
  return fetchJsonFile<
    { school: string; degree: string; duration: string; description: string }[]
  >('education.json');
}

export async function getExperienceData() {
  return fetchJsonFile<
    { role: string; company: string; duration: string; description: string }[]
  >('experience.json');
}

function formatDate(date: string | Date): string {
  return new Date(date).toISOString().split('T')[0];
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
