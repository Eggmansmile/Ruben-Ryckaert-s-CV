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
    title: "Maakleerplek Stock System",
    description: "Stock and checkout system for the Maakleerplek makerspace, built and maintained as a volunteer for 1.5 years. A React + TypeScript web app on top of InvenTree handles inventory, purchase orders, analytics and laser-cutter sessions. A self-service kiosk (Raspberry Pi with a touch screen and barcode scanner, Rust + Slint) lets members scan items and pay with a QR code, while a TV shows live sales and stock. Everything runs in Docker with automatic deploys.",
    tags: ["React", "TypeScript", "InvenTree", "Rust", "Raspberry Pi", "Docker"],
    image: "/images/maakleerplek-kiosk.jpg",
    gallery: [
      "/images/maakleerplek-kiosk.jpg",
      "/images/maakleerplek-tv.jpg",
      "/images/maakleerplek-pi.jpg",
      "/images/stock-management.png"
    ],
    link: "https://github.com/maakleerplek/Stock-management-frontend"
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
    title: "RC Car",
    description: "A 3D-printed RC car designed from scratch: ESP32 controller, TB6612 motor driver, two rear motors with a 9:1 gear in the rim, servo steering and a 2S battery. The CAD (build123d) and the KiCad schematic and PCB are generated from Python scripts, and the custom PCB was manufactured by PCBWay.",
    tags: ["Electronics", "PCB Design", "3D Design", "ESP32", "Python"],
    image: "/images/rc-car-render.jpg",
    gallery: [
      "/images/rc-car-render.jpg",
      "/images/rc-car-pcb-3d.jpg",
      "/images/rc-car-pcb-top.jpg",
      "/images/rc-car-drawing.jpg"
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
    id: 7,
    title: "Maakleekplek TV-collage",
    description: "A TV collage created for HTL(high tech lab) showcasing events and activities.",
    tags: ["Graphic Design", "Communication", "Creative"],
    image: "/images/maakleekplek-tv-collage.png",
    gallery: [
      "/images/maakleekplek-tv-collage.png"
    ],
    link: "#"
  }
];
