import React from 'react';
import PageTransition from '@/components/shared/PageTransition';

interface Education {
  school: string;
  degree: string;
  duration: string;
  description: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const educationData: Education[] = [
  {
    school: 'Istanbul Technical University',
    degree: 'Bachelor of Science in Computer Engineering',
    duration: '2019 - 2023',
    description:
      'Focused on software development, algorithms, and computer science fundamentals.',
  },
];

const experienceData: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Turkcell',
    duration: '2023 - Present',
    description:
      'Working on enterprise-level applications using .NET, React, and cloud technologies.',
  },
  {
    role: 'Software Developer Intern',
    company: 'Tech Company',
    duration: 'Summer 2022',
    description:
      'Developed and maintained web applications using modern JavaScript frameworks.',
  },
];

export default function About() {
  return (
    <PageTransition>
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Hi, I am Kıvanç Türker
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              I am a passionate full-stack developer with expertise in React,
              Next.js, and .NET. I love building scalable applications and
              solving complex problems with elegant solutions.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Education
            </h2>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {edu.school}
                  </h3>
                  <p className="mb-2 text-sky-600">{edu.degree}</p>
                  <p className="mb-4 text-sm text-gray-500">{edu.duration}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-sky-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
