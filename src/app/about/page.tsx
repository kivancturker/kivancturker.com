import React from 'react';
import PageTransition from '@/components/shared/PageTransition';
import {
  getEducationData,
  getExperienceData,
  getHomepageContent,
} from '@/utils/content';

export default async function About() {
  const homepageContent = await getHomepageContent();
  const educationData = await getEducationData();
  const experienceData = await getExperienceData();

  return (
    <PageTransition>
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              {homepageContent.hero.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {homepageContent.hero.description}
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
