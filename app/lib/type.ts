export interface HeroImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  role: string;
  link: string;
  image: HeroImage;
}

export interface ProjectMeta {
  id: string;

  title: string;
  subtitle: string;

  stack: string[];

  status: string;

  heroImages: HeroImage[];

  links?: {
    demo?: string;
    github?: string;
  };

  content: string;
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