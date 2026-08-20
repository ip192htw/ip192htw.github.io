import { ExperienceItem, EducationItem } from "./type";

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