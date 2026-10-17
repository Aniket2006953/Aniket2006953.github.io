import type { PortfolioData } from '../types/portfolio';

/**
 * =============================================================================
 * PORTFOLIO CONTENT CONFIGURATION
 * =============================================================================
 * This is the SINGLE SOURCE OF TRUTH for all your portfolio website content.
 * You can edit any text, links, experiences, projects, and skills right here
 * without modifying any React components.
 * 
 * Instructions:
 * - Replace any [TODO] placeholders below with your personal information.
 * - Place your resume at: /public/resume.pdf
 * - Place your profile photo at: /public/profile.jpg (or use the default avatar)
 * =============================================================================
 */

export const portfolioContent: PortfolioData = {
  personal: {
    // TODO: Enter your full name
    fullName: "Alex Chen",
    preferredName: "Alex",
    
    // TODO: Enter your professional title
    title: "Senior Software Engineer",
    
    // TODO: Enter your concise tagline (1 sentence)
    tagline: "I build scalable distributed systems and resilient web products that millions of people rely on daily.",
    
    // TODO: Enter a short bio (2-3 sentences)
    shortBio: "Senior Software Engineer specializing in high-throughput cloud infrastructure and modern web architectures. Passionate about engineering velocity, human-centered developer tools, and sub-100ms user experiences. Previously built and scaled mission-critical services across high-growth tech platforms.",
    
    fullBio: [
      "Over the past 6+ years, I have architected and delivered enterprise-scale distributed platforms, cloud-native backend microservices, and reactive web applications that serve global user bases.",
      "My core engineering philosophy centers on simplicity, high availability (99.99%), zero-downtime deployments, and obsessive attention to accessibility and frontend performance metrics.",
      "When I am not writing production code, I mentor aspiring software engineers, contribute to open-source developer tooling, and write technical deep-dives on systems design."
    ],
    
    // TODO: Enter your current location
    location: "San Francisco, CA (Open to Remote)",
    
    // TODO: Enter your contact email
    email: "alex.chen.dev@example.com",
    
    // TODO: Enter your public profile URLs
    linkedIn: "https://www.linkedin.com/in/alexchen-dev",
    github: "https://github.com/alexchen-dev",
    
    // Path relative to public directory
    resumeUrl: "./resume.pdf",
    avatarUrl: "./profile.svg",
    
    status: {
      available: true,
      text: "Available for Senior / Staff Engineer roles"
    }
  },

  // TODO: Update key highlight metrics (use real numbers)
  stats: [
    {
      value: "6+",
      label: "Years of Experience",
      detail: "Building cloud & web products"
    },
    {
      value: "14+",
      label: "Production Systems",
      detail: "Shipped from 0 to 1"
    },
    {
      value: "99.99%",
      label: "System Uptime",
      detail: "Maintained at enterprise scale"
    },
    {
      value: "10M+",
      label: "Active Users Served",
      detail: "Across distributed systems"
    }
  ],

  // TODO: Add your work experience in reverse chronological order
  experiences: [
    {
      id: "exp-1",
      role: "Staff / Senior Software Engineer",
      company: "Apex Cloud Technologies",
      companyUrl: "https://example.com",
      location: "San Francisco, CA",
      period: "2023 - Present",
      startDate: "2023-01",
      endDate: "Present",
      description: "Technical lead for the core platform team responsible for distributed control plane and API gateway serving 4.5B monthly requests.",
      highlights: [
        "Architected an event-driven ingestion pipeline handling 120k requests/sec, reducing p99 latency from 340ms to 42ms.",
        "Spearheaded the migration of monolithic microservices to Kubernetes & Go services, decreasing annual cloud infrastructure spend by 32% ($420k/yr).",
        "Mentored a team of 9 engineers across two time zones, establishing CI/CD quality gates that dropped deployment rollback rates from 6.8% to under 0.4%."
      ],
      technologies: ["TypeScript", "Go", "React", "Kubernetes", "AWS", "Kafka", "PostgreSQL", "Docker"]
    },
    {
      id: "exp-2",
      role: "Full Stack Engineer",
      company: "Nexus Systems Inc.",
      companyUrl: "https://example.com",
      location: "Seattle, WA",
      period: "2020 - 2023",
      startDate: "2020-03",
      endDate: "2023-01",
      description: "Designed and engineered customer-facing real-time analytics dashboards and asynchronous telemetry workflows.",
      highlights: [
        "Engineered a real-time collaborative workspace utilizing WebSockets and CRDT algorithms, adopted by 85,000+ enterprise teams.",
        "Overhauled the client bundle bundling strategy with Vite and code splitting, cutting initial bundle size by 58% and raising Google Lighthouse Performance score from 64 to 98.",
        "Implemented end-to-end telemetry and observability with OpenTelemetry and Datadog, decreasing Mean Time to Resolution (MTTR) by 45%."
      ],
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS", "Redis", "Docker", "Jest"]
    },
    {
      id: "exp-3",
      role: "Software Engineer",
      company: "Vanguard Labs",
      companyUrl: "https://example.com",
      location: "San Jose, CA",
      period: "2018 - 2020",
      startDate: "2018-06",
      endDate: "2020-03",
      description: "Contributed to front-end design systems and RESTful backend microservices for B2B financial compliance software.",
      highlights: [
        "Built a reusable, WCAG 2.1 AA accessible React component library utilized across 6 core enterprise internal products.",
        "Developed automated data reconciliation pipelines processing over $12M in daily transaction volume with 0% balance discrepancies.",
        "Automated cross-browser UI regression suites via Playwright, cutting QA turnaround cycles by 70%."
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Python", "Flask", "PostgreSQL", "Tailwind CSS"]
    }
  ],

  // Filter categories for the projects section
  projectCategories: [
    "All",
    "Full Stack",
    "Cloud & Systems",
    "AI & Data",
    "Frontend"
  ],

  // TODO: Add your top projects (include real GitHub & Live links)
  projects: [
    {
      id: "proj-1",
      title: "PulseFlow Realtime Telemetry",
      tagline: "High-throughput telemetry ingestion & interactive performance dashboard.",
      description: "A distributed monitoring and real-time trace visualizer capable of processing over 50,000 streaming events per second with sub-50ms query latency, built with WebSockets, TimescaleDB, and React.",
      category: "Full Stack",
      technologies: ["TypeScript", "React", "Go", "PostgreSQL", "Tailwind CSS", "Docker", "WebSockets"],
      liveUrl: "https://pulseflow-demo.example.com",
      githubUrl: "https://github.com/alexchen-dev/pulseflow",
      featured: true,
      imageAlt: "PulseFlow telemetry dashboard preview showing real-time graphs and latency metrics"
    },
    {
      id: "proj-2",
      title: "KubeShield Policy Engine",
      tagline: "Automated security compliance and anomaly detection for multi-cluster Kubernetes.",
      description: "Open-source admission controller and audit CLI that scans manifests against CIS Benchmarks, mitigating security misconfigurations across production clusters with zero runtime overhead.",
      category: "Cloud & Systems",
      technologies: ["Go", "Kubernetes", "Docker", "eBPF", "GitHub Actions", "Prometheus"],
      liveUrl: "https://kubeshield-docs.example.com",
      githubUrl: "https://github.com/alexchen-dev/kubeshield",
      featured: true,
      imageAlt: "KubeShield terminal CLI and audit reporting interface"
    },
    {
      id: "proj-3",
      title: "Synthetix AI Copilot",
      tagline: "Contextual RAG-powered coding assistant for large monorepos.",
      description: "Retrieval-Augmented Generation agent with AST indexing that parses monorepo dependencies, enabling instant code explanations, schema lookups, and test generation with local vector embeddings.",
      category: "AI & Data",
      technologies: ["Python", "TypeScript", "LangChain", "FastAPI", "React", "Qdrant", "Tailwind CSS"],
      liveUrl: "https://synthetix-ai.example.com",
      githubUrl: "https://github.com/alexchen-dev/synthetix-copilot",
      featured: true,
      imageAlt: "Synthetix AI copilot interface showing context-aware code generation"
    },
    {
      id: "proj-4",
      title: "Aura UI Design System",
      tagline: "Ultra-accessible, keyboard-first component system built for enterprise web apps.",
      description: "Accessible design system with 40+ primitives, strictly tested against WCAG 2.2 AAA guidelines with automated axe-core accessibility tests and zero runtime CSS overhead.",
      category: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Framer Motion", "Vite"],
      liveUrl: "https://aura-ui.example.com",
      githubUrl: "https://github.com/alexchen-dev/aura-ui",
      featured: false,
      imageAlt: "Aura UI component documentation and interactive playground"
    },
    {
      id: "proj-5",
      title: "CacheMesh Distributed KV",
      tagline: "Lightweight in-memory cache with Raft consensus and peer discovery.",
      description: "Zero-dependency key-value cache engine with masterless node discovery and configurable eviction policies, delivering 90,000 read ops/sec with deterministic memory guarantees.",
      category: "Cloud & Systems",
      technologies: ["Go", "gRPC", "Raft", "Distributed Systems", "Benchmark Testing"],
      liveUrl: "https://cachemesh.example.com",
      githubUrl: "https://github.com/alexchen-dev/cachemesh",
      featured: false,
      imageAlt: "CacheMesh performance benchmark graph and cluster node diagram"
    },
    {
      id: "proj-6",
      title: "DataLens Visual Query Builder",
      tagline: "Drag-and-drop SQL query generator with instant schema inference.",
      description: "Interactive visual data explorer that transforms visual relational entity diagrams into optimized PostgreSQL and Snowflake queries with real-time cost estimation.",
      category: "Full Stack",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      liveUrl: "https://datalens.example.com",
      githubUrl: "https://github.com/alexchen-dev/datalens",
      featured: false,
      imageAlt: "DataLens visual schema diagram and SQL code preview"
    }
  ],

  // TODO: Add your grouped technical skills
  skills: [
    {
      title: "Languages",
      icon: "Code2",
      skills: ["TypeScript", "JavaScript (ESNext)", "Go", "Python", "SQL", "HTML5 & Modern CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "Layers",
      skills: ["React 19", "Next.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion", "GraphQL", "FastAPI"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: "Cloud",
      skills: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Docker", "Kubernetes", "Terraform", "CI/CD & GitHub Actions"]
    },
    {
      title: "Databases & Architecture",
      icon: "Database",
      skills: ["PostgreSQL", "Redis", "TimescaleDB", "MongoDB", "Kafka", "Microservices", "REST & gRPC APIs", "System Design"]
    },
    {
      title: "Quality & Developer Tooling",
      icon: "ShieldCheck",
      skills: ["Vite", "Jest / Vitest", "Playwright", "Git & GitHub CLI", "OpenTelemetry", "Datadog", "Web Accessibility (WCAG AA)", "Lighthouse 95+"]
    },
    {
      title: "Professional & Leadership",
      icon: "Users",
      skills: ["Technical Mentorship", "Cross-Functional Architecture", "Agile / Scrum Delivery", "Sprint Planning", "Technical Documentation", "Engineering Culture"]
    }
  ],

  // TODO: Add your formal education
  education: [
    {
      id: "edu-1",
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2014 - 2018",
      details: "Focus on Distributed Systems, Computer Architecture, and Algorithms.",
      honors: "Dean's Honors List | Magna Cum Laude"
    }
  ],

  // TODO: Add your certifications and honors
  certificationsAndAwards: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      year: "2024",
      description: "Advanced validation of multi-tier resilient cloud architecture and enterprise migration strategies."
    },
    {
      id: "cert-2",
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      year: "2023",
      description: "Demonstrated competence in Kubernetes cluster architecture, networking, security, and troubleshooting."
    },
    {
      id: "cert-3",
      title: "Excellence in Engineering Award",
      issuer: "Apex Cloud Technologies",
      year: "2023",
      description: "Awarded for designing the high-throughput platform migration saving $420k in annual infrastructure costs."
    }
  ]
};
