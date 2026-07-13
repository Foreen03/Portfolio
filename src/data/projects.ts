export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  githubUrl?: string;
  demoUrl?: string;
  technologies: string[];
  features: string[];
  role?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "BlueStep Connect",
    description:
      "A cross-platform motion controller framework that transforms Android smartphones into wireless controllers for PC games.",
    longDescription:
      "BlueStep Connect is a software framework that enables Android smartphones to act as motion-based controllers for PC games through Bluetooth Low Energy. The system consists of an Android controller application, a PC bridge server, and a cross-engine SDK that allows developers to integrate motion controls into games. It supports real-time sensor streaming, Xbox controller emulation through ViGEm, customizable controller layouts, and game engine integration.",
    category: "Final Year Project",
    image: "src/assets/images/bluestep.png",
    images: [
      "/src/assets/images/bluestep.png",
      "/src/assets/images/bluestep-2.png",
      "/src/assets/images/bluestep-3.jpg",
      "/src/assets/images/bluestep-4.jpg",
      "/src/assets/images/bluestep-5.png",
      "/src/assets/images/bluestep-6.png"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://youtu.be/najeYP0hx6o",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "C#",
      ".NET",
      "TypeScript",
      "React",
      "BLE",
      "WebSocket",
      "Unity",
      "Godot",
      "Cocos Creator"
    ],
    features: [
      "Android smartphone motion controller using BLE",
      "Real-time sensor data transmission and processing",
      "Xbox 360 controller emulation using ViGEm",
      "Cross-engine SDK integration",
      "Customizable gamepad layout editor",
      "Automatic reconnection and heartbeat monitoring"
    ],
  },
  {
    id: "2",
    title: "Portfolio",
    description: "A premium, interactive developer portfolio website.",
    longDescription:
      "A modern developer portfolio built to showcase projects and experience. It features a custom Three.js animated background, Framer Motion transitions, and a fully responsive layout with dark mode support.",
    category: "Personal Project",
    image: "src/assets/images/portfolio.png",
    githubUrl: "https://github.com",
    technologies: ["React", "TypeScript", "Three.js", "TailwindCSS", "shadcn/ui", "EmailJS", "Vite"],
    features: [
      "Animated Three.js particle background and floating 3D icons",
      "Custom dark and light mode integration",
      "Smooth Framer Motion scroll reveals and page transitions",
      "Accessible components using shadcn/ui",
    ],
  },
  {
    id: "3",
    title: "Campus Equity Hub",
    description:
      "A campus marketplace platform that enables students to exchange and share items.",
    longDescription:
      "Campus Equity Hub is a web-based marketplace platform designed for students to exchange items within the campus community. The platform provides item listing, verification, special status approval, and swap management workflows.",
    role:
      "Implemented frontend and backend features including special status application, item verification, special status verification, and swap acceptance workflows.",
    category: "Team Project",
    image: "src/assets/images/campus-equity-hub.png",
    githubUrl: "https://github.com/TheINSANE333/Campus-Equity-Hub",
    technologies: [
      "Flask",
      "Python",
      "SQLAlchemy",
      "Bootstrap"
    ],
    features: [
      "Item listing and swapping workflow",
      "Item verification system",
      "Special status application and approval",
      "Swap acceptance management",
      "Software design pattern implementation"
    ],
  }
];
