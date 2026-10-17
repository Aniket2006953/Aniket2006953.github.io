import React from 'react';
import { Calendar, Rocket, ShieldCheck, Users } from 'lucide-react';
import { portfolioContent } from '../data/content';

const STAT_ICONS = [Calendar, Rocket, ShieldCheck, Users];

export const About: React.FC = () => {
  const { personal, stats } = portfolioContent;

  return (
    <section
      id="about"
      aria-label="About Alex Chen"
      className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#12141a]/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Architecting robust systems with engineering rigor.
          </p>
        </div>

        {/* Bio grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {personal.shortBio}
            </p>
            {personal.fullBio.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const IconComponent = STAT_ICONS[idx % STAT_ICONS.length];
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                    {stat.label}
                  </div>
                  {stat.detail && (
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {stat.detail}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
