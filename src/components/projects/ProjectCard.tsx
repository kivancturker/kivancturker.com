'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

// Helper function to generate consistent slugs
export function generateProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const slug = generateProjectSlug(project.title);

  return (
    <div
      onClick={() => router.push(`/projects/${slug}`)}
      className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-lg font-medium text-gray-400">
              {project.title}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
