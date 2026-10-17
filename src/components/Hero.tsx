import { ArrowDown, Mail, FileText, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioContent } from '../data/content';

export const Hero: React.FC = () => {
  const { personal } = portfolioContent;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction and summary"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-28 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Text & Actions */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status pill */}
            {personal.status.available && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs font-medium mb-6 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personal.status.text}</span>
              </div>
            )}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.12]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                {personal.fullName}
              </span>
            </h1>

            {/* Professional Title */}
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
              {personal.title}
            </p>

            {/* Tagline */}
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              {personal.tagline}
            </p>

            {/* Location */}
            <div className="mt-3 flex items-center justify-center lg:justify-start gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
              <MapPin className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
              <span>{personal.location}</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-750 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons row */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-neutral-800 transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-neutral-800 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-neutral-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Aniket_Bhukte_Resume.pdf"
                aria-label="Download Resume"
                className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-neutral-800 transition-colors"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Frame */}
          <div className="relative flex-shrink-0">
            {/* Subtle glow backplate */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-60 dark:opacity-40" />
            
            <div className="relative p-2 rounded-3xl bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200/80 dark:border-neutral-700/80 shadow-md">
              <img
                src={personal.avatarUrl}
                alt={`${personal.fullName} - Professional Profile`}
                width="240"
                height="240"
                className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl object-cover bg-neutral-900"
                loading="eager"
              />

              {/* Verified badge */}
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-[#161922] p-1.5 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-700">
                <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
