'use client';

import React from 'react';
import PageTransition from '@/components/shared/PageTransition';
import ProjectCard from '@/components/projects/ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern portfolio website built with Next.js and TailwindCSS',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    image: 'https://placehold.co/800x400/e2e8f0/1e293b?text=Portfolio+Website',
  },
  {
    title: 'Task Management Application',
    description:
      'A full-stack task management application with real-time updates',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    image:
      'https://placehold.co/800x400/e2e8f0/1e293b?text=Task+Management+App',
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced features',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    image:
      'https://placehold.co/800x400/e2e8f0/1e293b?text=E-commerce+Platform',
  },
];

export default function Projects() {
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

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
