export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter' | 'resume';
  label: string;
  url: string;
  iconName: string;
}

export interface MetricStat {
  value: string;
  label: string;
  detail?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack' | 'Cloud & Systems' | 'AI & Data' | 'Frontend' | 'Mobile';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  imageAlt: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
  honors?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  credentialUrl?: string;
}

export interface PortfolioData {
  personal: {
    fullName: string;
    preferredName: string;
    title: string;
    tagline: string;
    shortBio: string;
    fullBio: string[];
    location: string;
    email: string;
    linkedIn: string;
    github: string;
    resumeUrl: string;
    avatarUrl: string;
    status: {
      available: boolean;
      text: string;
    };
  };
  stats: MetricStat[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  projectCategories: string[];
  skills: SkillCategory[];
  education: EducationItem[];
  certificationsAndAwards: AwardItem[];
}
