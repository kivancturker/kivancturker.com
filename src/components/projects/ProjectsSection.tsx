'use client';

import React from 'react';
import ProjectCard from './ProjectCard';

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
].slice(0, 6); // Show only first 6 projects on homepage

export default function ProjectsSection() {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        featured projects
      </h2>
      <p className="mt-2 text-center text-lg text-gray-600">
        a selection of my recent work and side projects
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
