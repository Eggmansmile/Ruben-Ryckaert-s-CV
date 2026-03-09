export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: string[];
  link: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  summary: string;
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  color: string; // tailwind text color class
  skills: string[];
}
