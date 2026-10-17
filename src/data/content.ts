import type { PortfolioData } from '../types/portfolio';

/**
 * =============================================================================
 * PORTFOLIO CONTENT CONFIGURATION - ANIKET BHUKTE
 * =============================================================================
 * Single source of truth containing verified personal and technical information.
 * =============================================================================
 */

export const portfolioContent: PortfolioData = {
  personal: {
    fullName: "Aniket Bhukte",
    preferredName: "Aniket",
    title: "Java Developer & Full-Stack AI Engineer",
    tagline: "Building reliable, scalable software and intelligent web applications that solve real-world problems.",
    shortBio: "Motivated Computer Science Engineering student and software developer with proven experience building AI-driven web platforms and full-stack distributed applications. Passionate about Java, Python, and modern web architectures with a strong foundation in Data Structures, Algorithms, and System Design.",
    fullBio: [
      "Currently pursuing my B.Tech in Computer Science Engineering at Prof. Ram Meghe Institute of Technology and Research (CGPA: 8.51/10.0).",
      "I specialize in Java, Python, React, and Django, having engineered production-grade solutions like AgriSmart AI (empowering 500+ local farmers) and Skill Swap (a high-performance collaborative learning platform).",
      "Active participant in competitive hackathons including the Google Developers Group Hack2Skill Hackathon 2026 and Esperenza Project Competitions."
    ],
    location: "Nagpur, Maharashtra, India",
    email: "aniketbhukte4@gmail.com",
    phone: "+91 9373175227",
    linkedIn: "https://www.linkedin.com/in/aniketbhukte/",
    github: "https://github.com/Aniket2006953",
    resumeUrl: "./resume.pdf",
    avatarUrl: "./profile.svg",
    status: {
      available: true,
      text: "Seeking Java Developer & Software Engineer Roles"
    }
  },

  // Key stats directly from verified resume metrics
  stats: [
    {
      value: "8.51",
      label: "B.Tech CGPA",
      detail: "Computer Science Engineering"
    },
    {
      value: "500+",
      label: "Farmers Impacted",
      detail: "Via AgriSmart AI Platform"
    },
    {
      value: "99.9%",
      label: "Deployment Uptime",
      detail: "Achieved on Vercel & Render"
    },
    {
      value: "20%",
      label: "API Latency Reduction",
      detail: "Optimized Django & MongoDB"
    }
  ],

  // Experience / Activities
  experiences: [
    {
      id: "exp-1",
      role: "Hack2Skill Hackathon Participant",
      company: "Google Developers Group",
      companyUrl: "https://developers.google.com",
      location: "Nagpur, India",
      period: "2026",
      startDate: "2026-01",
      endDate: "2026-03",
      description: "Collaborated in an intensive hackathon environment organized by Google Developers Group to solve complex real-world engineering problems.",
      highlights: [
        "Rapidly prototyped and demonstrated scalable software architectures under strict hackathon deadlines.",
        "Applied core computer science algorithms and full-stack best practices to deliver functional proofs of concept.",
        "Engaged with industry mentors and developers from Google Developers Group."
      ],
      technologies: ["Java", "Python", "React", "REST APIs", "Git"]
    },
    {
      id: "exp-2",
      role: "Project Competitor & Innovator",
      company: "Esperenza Project Competition",
      location: "Maharashtra, India",
      period: "2025 & 2026",
      startDate: "2025-01",
      endDate: "2026-02",
      description: "Designed, presented, and defended software engineering projects before technical evaluation panels across multiple competition editions.",
      highlights: [
        "Presented AgriSmart AI, demonstrating image symptom diagnostics and live market price integration.",
        "Received commendations for practical application of machine learning for agricultural yield optimization.",
        "Enhanced accessibility with multilingual localization for rural users."
      ],
      technologies: ["Python", "AI / Deep Learning", "Django", "MySQL", "REST APIs"]
    }
  ],

  projectCategories: [
    "All",
    "AI & Data",
    "Full Stack"
  ],

  projects: [
    {
      id: "proj-1",
      title: "AgriSmart AI",
      tagline: "AI crop disease diagnosis & live agricultural market price platform.",
      description: "Engineered an intelligent agricultural assistant that processes crop symptom images to deliver real-time disease identification and localized treatments. Integrated live market price REST APIs and multilingual support, empowering over 500 local farmers with a 15% increase in crop yield planning accuracy.",
      category: "AI & Data",
      technologies: ["Python", "Artificial Intelligence", "Deep Learning", "REST APIs", "React", "Django"],
      liveUrl: "https://github.com/Aniket2006953",
      githubUrl: "https://github.com/Aniket2006953",
      featured: true,
      imageAlt: "AgriSmart AI crop diagnosis and market prices interface"
    },
    {
      id: "proj-2",
      title: "Skill Swap",
      tagline: "Peer-to-peer real-time collaborative knowledge exchange platform.",
      description: "Architected a full-stack peer-to-peer learning network facilitating real-time knowledge sharing. Implemented an optimized MongoDB and Django architecture that decreased API response times by 20%, deploying across Vercel and Render with continuous CI/CD pipelines and 99.9% availability.",
      category: "Full Stack",
      technologies: ["React", "Django", "MongoDB", "JavaScript", "Vercel", "Render", "CI/CD"],
      liveUrl: "https://github.com/Aniket2006953",
      githubUrl: "https://github.com/Aniket2006953",
      featured: true,
      imageAlt: "Skill Swap peer-to-peer collaborative learning platform dashboard"
    }
  ],

  skills: [
    {
      title: "Programming Languages",
      icon: "Code2",
      skills: ["Java", "Python", "JavaScript (ES6+)", "SQL"]
    },
    {
      title: "Web Technologies & Frameworks",
      icon: "Layers",
      skills: ["React", "Django", "HTML5", "CSS3", "RESTful APIs"]
    },
    {
      title: "Databases & Storage",
      icon: "Database",
      skills: ["MySQL", "MongoDB", "Database Management Systems (DBMS)"]
    },
    {
      title: "Development Tools & IDEs",
      icon: "ShieldCheck",
      skills: ["IntelliJ IDEA", "VS Code", "Eclipse", "Git", "GitHub", "Vercel", "Render"]
    },
    {
      title: "Core CS Concepts",
      icon: "Cloud",
      skills: ["Data Structures", "Algorithms Analysis", "Artificial Intelligence", "Operating Systems", "Object-Oriented Programming (OOP)"]
    },
    {
      title: "Spoken Languages",
      icon: "Users",
      skills: ["English (Professional)", "Hindi (Fluent)", "Marathi (Native)"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science Engineering",
      institution: "Prof. Ram Meghe Institute of Technology and Research (Autonomous)",
      location: "Amravati, Maharashtra",
      period: "2023 – 2027",
      details: "Comprehensive coursework in Data Structures, Algorithms, DBMS, Operating Systems, and Artificial Intelligence.",
      honors: "CGPA: 8.51 / 10.0"
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "Banarsidas Ruiya Junior College",
      location: "Katol, Maharashtra",
      period: "2023",
      honors: "Score: 74.50%"
    },
    {
      id: "edu-3",
      degree: "Secondary School Certificate (10th Grade)",
      institution: "Nagar Parishad High School",
      location: "Narkhed, Maharashtra",
      period: "2021",
      honors: "Score: 87.00%"
    }
  ],

  certificationsAndAwards: [
    {
      id: "cert-1",
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA Deep Learning Institute",
      year: "2025",
      description: "Hands-on training in neural network architecture, computer vision, and training deep learning models."
    },
    {
      id: "cert-2",
      title: "Python for Data Science",
      issuer: "NPTEL",
      year: "2025",
      description: "Advanced certification covering data structures, numerical computing, algorithms, and analytical libraries in Python."
    },
    {
      id: "cert-3",
      title: "AIML Virtual Internship",
      issuer: "AICTE",
      year: "2025",
      description: "Practical industry-oriented internship covering practical AI/ML model deployment and data engineering workflows."
    },
    {
      id: "cert-4",
      title: "Java Programming",
      issuer: "IIT Bombay Spoken Tutorial",
      year: "2024",
      description: "Rigorous certification covering core Java, Object-Oriented Design, multithreading, and collections framework."
    }
  ]
};
