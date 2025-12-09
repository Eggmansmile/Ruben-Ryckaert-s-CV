export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: string[];
  link: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}