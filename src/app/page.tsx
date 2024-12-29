import React from 'react';
import PageTransition from '@/components/shared/PageTransition';
import ProjectsSection from '@/components/projects/ProjectsSection';
import BlogSection from '@/components/blog/BlogSection';
import { getHomepageContent } from '@/utils/content';

export default async function Home() {
  console.log(typeof window);
  const homepageContent = await getHomepageContent();

  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="mb-8 text-6xl font-bold tracking-tight text-gray-900">
                {homepageContent.hero.title}
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                {homepageContent.hero.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={`mailto:${homepageContent.hero.contactEmail}`}
                  className="inline-flex items-center rounded-lg bg-sky-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-sky-600"
                >
                  Contact Me
                </a>
                <a
                  href={homepageContent.hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <ProjectsSection />
          </div>
        </section>

        {/* Blog Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <BlogSection />
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
