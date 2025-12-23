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
      "/images/paper-airplane1.jpeg",
      "/images/paper-airplane2.jpeg"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Stock Management App",
    description: "A React-based application for managing inventory with a database backend. Deployed using Docker containers.",
    tags: ["React", "Database", "Docker", "JavaScript"],
    image: "/images/stock-app.png",
    gallery: [
      "/images/stock-app.png",
      "/images/stock-app1.png",
      "/images/stock-app2.png"
    ],
    link: "#"
  },
  {
    id: 3,
    title: "Bridge & Circuit Design",
    description: "Complex IB1 Industrial Engineering projects involving detailed electrical circuit calculations and structural bridge design/analysis.",
    tags: ["Circuit Design", "Structural Analysis", "Physics"],
    image: "/images/circuit-design.jpg",
    gallery: [
      "/images/circuit-design.jpg",
      "/images/circuit-design1.jpg",
      "/images/circuit-design2.jpg"
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
      "/images/oxfam-design.png",
      "/images/oxfam-design1.png",
      "/images/oxfam-design2.png"
    ],
    link: "#"
  },
  {
    id: 5,
    title: "DIY Car",
    description: "A personal project involving the design and assembly of a small, functional car using 3D printing and electronic components.",
    tags: ["Electronics", "3D Design", "Engineering", "Lasercutting"],
    image: "/images/diy-car.png",
    gallery: [
      "/images/diy-car.png",
      "/images/diy-car1.png",
      "/images/diy-car2.png"
    ],
    link: "#"
  },
  {
    id: 6,
    title: "Mechanical DIY gun",
    description: "A personal project involving the design and assembly of a small, functional mechanical gun using 3D printing and electronic components.",
    tags: ["Electronics", "3D Design", "Engineering", "3D Printing"],
    image: "/images/diy-gun.png",
    gallery: [
      "/images/diy-gun.png",
      "/images/diy-gun1.png",
      "/images/diy-gun2.png"
    ],
    link: "#"
  }
];