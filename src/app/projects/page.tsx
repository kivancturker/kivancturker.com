import React from 'react';
import PageTransition from '@/components/shared/PageTransition';
import ProjectCard from '@/components/projects/ProjectCard';
import { getProjects } from '@/utils/content';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <PageTransition>
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A showcase of my work, side projects, and open source
              contributions
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={{
                    title: project.frontmatter.title,
                    description: project.frontmatter.description,
                    technologies: project.frontmatter.technologies,
                    image: project.frontmatter.image,
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
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                No projects yet
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Projects will be added soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
