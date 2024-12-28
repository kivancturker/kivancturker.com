import React from 'react';
import ProjectContent from '@/components/projects/ProjectContent';
import { getProject, getProjects } from '@/utils/content';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectContent
      project={{
        title: project.frontmatter.title,
        description: project.frontmatter.description,
        technologies: project.frontmatter.technologies,
        image: project.frontmatter.image,
        content: project.content,
      }}
    />
  );
}
