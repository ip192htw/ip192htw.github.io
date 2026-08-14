export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  role: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  type: string;
  stack: string[];
  status: string;
  heroImageSrc: string;
  heroImageAlt: string;
  overview: string;
  technicalDecisions: string;
  logs: { time: string; text: string; highlight?: boolean }[];
  outcome: string;
  demoUrl: string;
  githubUrl: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

export const PROFILE_DATA = {
  name: "Kevin Chang",
  title: "Full-Stack Engineer & Product Builder",
  location: "Taipei",
  bio: "I build web products from idea to production.",
  status: "Student · Product Builder · Developer",
  portraitSrc:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  portraitAlt: "Portrait photo of Kevin Chang",
  about:
    "I am a technical product builder deeply interested in the intersection of systems engineering and human-computer interaction. Currently focused on crafting high-performance web applications and robust distributed systems. My approach centers on extreme ownership—taking technical concepts from mere ideas to fully deployed, scalable production environments.",
  contact: {
    email: "email@kevinchang.dev",
    github: "github.com/kevinchang",
    linkedin: "linkedin.com/in/kevinchang",
  },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "nexus-telemetry",
    number: "01",
    title: "Nexus Telemetry",
    category: "Enterprise Tool",
    description:
      "A high-throughput distributed tracing and observability platform designed for microservices architectures.",
    tags: ["Go", "React", "Kafka"],
    role: "Lead Engineer",
    link: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nexus Telemetry Dashboard Interface",
  },
  {
    id: "aether-sync",
    number: "02",
    title: "Aether Sync",
    category: "Open Source",
    description:
      "Real-time conflict-free replicated data type (CRDT) engine for seamless offline-first web applications.",
    tags: ["Rust", "WebAssembly", "TypeScript"],
    role: "Creator",
    link: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Aether Sync Network Topology Visualization",
  },
  {
    id: "cuesync",
    number: "03",
    title: "CueSync",
    category: "Product Engineering",
    description:
      "Campus Event Management Platform streamlining scheduling, ticketing, and real-time venue synchronization.",
    tags: ["Next.js", "Supabase", "Vercel"],
    role: "Product Engineer",
    link: "/projects/cuesync",
    imageSrc:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    imageAlt: "CueSync Event Management Dashboard",
  },
];

export const CUESYNC_CASE_STUDY: CaseStudy = {
  id: "cuesync",
  title: "CueSync",
  subtitle: "Campus Event Management Platform",
  role: "Product Engineer",
  type: "Product Engineering",
  stack: ["Next.js", "Supabase", "Vercel"],
  status: "Production",
  heroImageSrc:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  heroImageAlt: "CueSync Event Management Dashboard Interface",
  overview:
    "CueSync was developed to solve the logistical nightmare of coordinating multi-venue events across a large university campus. By centralizing scheduling, ticketing, and real-time communication into a single responsive application, it reduced organizational overhead by roughly 40% for the pilot semester.",
  technicalDecisions:
    "Next.js was selected for its robust server-side rendering capabilities, crucial for SEO on public event pages. Supabase provided a rapidly deployable Postgres database with built-in row-level security, allowing granular access control between event organizers, attendees, and admin staff without writing complex middleware.",
  logs: [
    {
      time: "14:02:45",
      text: "INFO [WebSocket] Connection established. Channel: events_142",
    },
    {
      time: "14:03:12",
      text: "EVENT [Supabase Realtime] Payload received: UPDATE table=schedule",
    },
    {
      time: "14:03:12",
      text: "EXEC [State] Hydrating UI components...",
      highlight: true,
    },
  ],
  outcome:
    "Successfully handled 15,000+ concurrent users during the Spring Festival. Reduced incident response time by 60% due to centralized alert mechanisms. Currently maintained by a team of 4 open-source contributors.",
  demoUrl: "#",
  githubUrl: "#",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: "2026 - Present",
    role: "Product Engineer",
    company: "Project",
    bullets: [
      "Led development of core infrastructure, improving API response times by 40%.",
      "Designed and implemented a scalable microservices architecture using Go and gRPC.",
    ],
  },
  {
    period: "2024 - 2025",
    role: "Student Developer",
    company: "Open Source",
    bullets: [
      "Contributed to open-source projects and built full-stack applications.",
    ],
  },
];

export const RESUME_PROJECTS_DATA = [
  {
    period: "2025",
    title: "Developer Portfolio System",
    description: "A semantic, highly dense portfolio template for engineers.",
  },
  {
    period: "2024",
    title: "Data Pipeline Automation",
    description: "Automated ETL pipelines using Python and Docker.",
  },
];

export const SKILLS_DATA = {
  languages: ["TypeScript", "Go", "Python", "Rust"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "Express"],
  tools: ["Docker", "Git", "AWS", "Vercel"],
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: "2020 - 2024",
    degree: "B.S. Computer Science",
    institution: "University of Technology",
  },
];
