import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Experience: React.FC = () => {
  const { experiences } = portfolioContent;

  return (
    <section
      id="experience"
      aria-label="Work Experience"
      className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Career Timeline
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Work Experience & Proven Impact
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0f1115] border-4 border-blue-600 dark:border-blue-400 group-hover:scale-125 transition-transform duration-200" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                
                {/* Header row: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${exp.company} website`}
                          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Period & Location badges */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="inline-flex items-center gap-1 font-medium bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  {exp.description}
                </p>

                {/* Accomplishments Bullets */}
                <ul className="space-y-2.5 mb-5" aria-label="Key Achievements">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                      <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
