import React from 'react';
import PageTransition from '@/components/shared/PageTransition';
import ProjectsSection from '@/components/projects/ProjectsSection';
import BlogSection from '@/components/blog/BlogSection';

export default async function Home() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="mb-8 text-6xl font-bold tracking-tight text-gray-900">
                Hi, I&apos;m Kıvanç Türker
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                I&apos;m a passionate software developer with expertise in web
                development, cloud computing, and building scalable
                applications. I love creating elegant solutions to complex
                problems.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:kivanc.software@gmail.com"
                  className="inline-flex items-center rounded-lg bg-sky-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-sky-600"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/kivancturker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
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
