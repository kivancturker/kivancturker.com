'use client';

import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PageTransition from '@/components/shared/PageTransition';
import type { Project } from './ProjectCard';

interface ProjectContentProps {
  project: Project & { content: string };
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <PageTransition>
      <article className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 800px"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-xl font-medium text-gray-400">
                  {project.title}
                </span>
              </div>
            )}
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
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

          <div className="prose prose-lg mx-auto">
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
