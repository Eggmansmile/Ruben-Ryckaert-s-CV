import type { ExperienceEntry, SkillCategory } from './types';

// ─── Personal Info ────────────────────────────────────────────────────────────
export const CONFIG = {
  name: "Ruben Aaron Ryckaert",
  title: "Industrial Engineering Student",

  /** Birth date used to auto-calculate age everywhere on the site */
  birthDate: "2005-02-04",

  /** Short bio shown in the Hero section. Use {age} as a placeholder — it gets replaced at runtime. */
  bio: "I am a <strong class=\"text-slate-900 dark:text-white font-semibold\">{age}-year-old 2nd-year Industrial Engineering</strong> student at KU Leuven, passionate about bridging the gap between hardware and software.",

  /** Academic year label shown as a badge in Hero */
  yearLabel: "2nd Year Bachelor",

  email: "ruben.ryckaert89@gmail.com",
  phone: "+32 468 45 98 66",
  website: "www.linkedin.com/in/ruben-ryckaert",
  location: "Leuven, Belgium",

  social: {
    github: "https://github.com/Eggmansmile",
    linkedin: "https://www.linkedin.com/in/ruben-ryckaert-2b4717297/",
  },

  meta: {
    description: "Portfolio of Ruben Aaron Ryckaert, an Industrial Engineering student and developer.",
  },
};

// ─── Skills ───────────────────────────────────────────────────────────────────
// Each category has a title, a Lucide icon name, a Tailwind color class, and a list of skills.
// To add a skill: just append it to the relevant `skills` array.
// To add a category: add a new object. The icon name must match a Lucide icon imported in Skills.tsx.
export const SKILLS: SkillCategory[] = [
  {
    title: "Engineering",
    icon: "Cpu",
    color: "text-blue-500",
    skills: ["3D Design", "Circuit Design", "Mechanism Design", "Prototyping", "CAD", "Lasercutting"],
  },
  {
    title: "Development",
    icon: "Code",
    color: "text-green-500",
    skills: ["React", "TypeScript", "Node.js", "Python", "Java", "GDScript", "HTML/CSS"],
  },
  {
    title: "Tools",
    icon: "Terminal",
    color: "text-amber-500",
    skills: ["Docker", "Git", "Godot", "VS Code", "Figma", "InvenTree", "Linux"],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    color: "text-purple-500",
    skills: ["Project Management", "Team Leadership", "Problem Solving", "Communication", "Creativity"],
  },
];

// ─── Experience / Timeline ────────────────────────────────────────────────────
// To add an entry: append a new object at the top (most recent first).
// Fields: role, company, type, period, location, summary
export const EXPERIENCES: ExperienceEntry[] = [


  {
    role: "Advisor",
    company: "Student Council HDC",
    type: "Leadership",
    period: "4 Years",
    location: "High School",
    summary: "Handled graphic design and communications for the student council.",
  },
  {
    role: "Graphic Designer",
    company: "Oxfam Wereldwinkel HDC",
    type: "Volunteering",
    period: "2 Years",
    location: "High School",
    summary: "Created promotional material for the student-run Oxfam shop at school.",
  },
  {
    role: "ASO Sciences-Math",
    company: "Middenjury",
    type: "Education",
    period: "Graduated 2024",
    location: "Belgium",
    summary: "Secondary education diploma via Central Jury.",
  },
  {
    role: "Industrial Engineering Student - Electromechanics",
    company: "KU Leuven",
    type: "Education",
    period: "2024 - Present",
    location: "Leuven",
    summary: "Specializing in mechanics and electronics. 2nd Year Bachelor.",
  },
  {
    role: "Volunteer & Inventory Manager",
    company: "Maakleerplek",
    type: "Volunteering",
    period: "2025 - Present",
    location: "Leuven",
    summary: "Managing makerspace inventory and assisting with equipment maintenance.",
  },
];

// ─── Age utility ─────────────────────────────────────────────────────────────
/** Returns the current age calculated from CONFIG.birthDate */
export const getAge = (): number => {
  const birth = new Date(CONFIG.birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  if (!hasHadBirthdayThisYear) age--;
  return age;
};

// ─── Asset URL helper ─────────────────────────────────────────────────────────
export const getAssetUrl = (path: string): string => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (baseUrl === '/') return `/${cleanPath}`;
  if (baseUrl.endsWith('/')) return `${baseUrl}${cleanPath}`;
  return `${baseUrl}/${cleanPath}`;
};
