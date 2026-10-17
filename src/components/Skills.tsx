import React from 'react';
import { Code2, Layers, Cloud, Database, ShieldCheck, Users, Check } from 'lucide-react';
import { portfolioContent } from '../data/content';

// Map icon string names to actual Lucide components
const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Cloud,
  Database,
  ShieldCheck,
  Users
};

export const Skills: React.FC = () => {
  const { skills } = portfolioContent;

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Core Competencies
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Skills & Technical Expertise
          </p>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            A comprehensive overview of programming languages, architectures, cloud tools, and delivery methods I use daily in production.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => {
            const IconComponent = ICON_MAP[category.icon] || Code2;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60 hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors"
                    >
                      <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
