import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Paper Airplane Machine",
    description: "An IB2 Industrial Engineering project. Designed and built a fully functional machine capable of folding paper airplanes automatically.",
    tags: ["Mechanism Design", "Prototyping", "Engineering"],
    image: "/images/paper-airplane.jpeg",
    gallery: [
      "/images/paper-airplane.jpeg",
      "/images/paper-airplane1.jpg",
      "/images/paper-airplane2.jpg"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Stock Management App",
    description: "A React-based application for managing inventory with a database backend. Deployed using Docker containers.",
    tags: ["React", "Database", "Docker", "JavaScript"],
    image: "/images/stock-management.png",
    gallery: [
      "/images/stock-management.png"
    ],
    link: "#"
  },
  {
    id: 3,
    title: "Engineering experience 1",
    description: "Complex IB1 Industrial Engineering projects involving detailed electrical circuit calculations and structural bridge design/analysis.",
    tags: ["Circuit Design", "Structural Analysis", "Physics"],
    image: "/images/circuit-design.jpg",
    gallery: [
      "/images/circuit-design.jpg",
      "/images/20250516_181922.jpg",
      "/images/IMG_6843.jpg"
    ],
    link: "#"
  },
  {
    id: 4,
    title: "Oxfam HDC Design",
    description: "Served as a Graphic Designer for Oxfam HDC, creating visual identity assets and communication materials.",
    tags: ["Graphic Design", "Communication", "Creative"],
    image: "/images/oxfam-design.png",
    gallery: [
      "/images/oxfam-design.png"
    ],
    link: "#"
  },
  {
    id: 5,
    title: "DIY Car",
    description: "A personal project involving the design and assembly of a small, functional car using 3D printing and electronic components.",
    tags: ["Electronics", "3D Design", "Engineering", "Lasercutting"],
    image: "",
    gallery: [
    ],
    link: "#"
  },
  {
    id: 6,
    title: "Mechanical DIY gun",
    description: "A personal project involving the design and assembly of a small, functional mechanical gun using 3D printing and electronic components.",
    tags: ["Electronics", "3D Design", "Engineering", "3D Printing"],
    image: "",
    gallery: [
    ],
    link: "#"
  },
  {
    id: 7
    title: "Maakleekplek TV-collage"
    description: "A TV collage created for HTL(high tech lab) showcasing events and activities."
    tags: ["Graphic Design", "Communication", "Creative"],
    image: "/images/maakleekplek-tv-collage.png",
    gallery: [
      "/images/maakleekplek-tv-collage.png"
    ],
    link: "#"
  }
];
