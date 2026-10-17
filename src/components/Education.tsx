import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Education: React.FC = () => {
  const { education, certificationsAndAwards } = portfolioContent;

  return (
    <section
      id="education"
      aria-label="Education and Certifications"
      className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#12141a]/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Credentials
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Education & Certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                Formal Education
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:shadow-sm transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {item.degree}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    <span>{item.institution}</span>
                    <span className="text-neutral-300 dark:text-neutral-700">•</span>
                    <span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 font-normal">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  {item.details && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                      {item.details}
                    </p>
                  )}

                  {item.honors && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300">
                      {item.honors}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                Certifications & Honors
              </h3>
            </div>

            <div className="space-y-4">
              {certificationsAndAwards.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:shadow-sm transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400">
                      {item.year}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {item.issuer}
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
