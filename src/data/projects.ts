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
      "A cross-platform Bluetooth framework turning Android phones into motion game controllers for PC.",
    longDescription:
      "BlueStep Connect is a software framework that enables Android smartphones to act as motion-based controllers for PC games through Bluetooth Low Energy. The system consists of an Android controller application, a PC bridge server, and a cross-engine SDK that allows developers to integrate motion controls into games. It supports real-time sensor streaming, Xbox controller emulation through ViGEm, customizable controller layouts, and game engine integration.",
    category: "Final Year Project",
    image: "/assets/images/bluestep.png",
    images: [
      "/assets/images/bluestep.png",
      "/assets/images/bluestep-2.png",
      "/assets/images/bluestep-3.jpg",
      "/assets/images/bluestep-4.jpg",
      "/assets/images/bluestep-5.png",
      "/assets/images/bluestep-6.png"
    ],
    githubUrl: "https://github.com/Foreen03/PCServer",
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
    image: "/assets/images/portfolio.png",
    githubUrl: "https://github.com/Foreen03/Portfolio",
    demoUrl: "https://hyyeoh.vercel.app/",
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
      "Campus Equity Hub is a web-based marketplace platform designed for students to exchange items within the campus community. The platform provides item listing, verification, special status approval and swap management workflows.",
    role:
      "Implemented frontend and backend features including special status application, item verification, special status verification and swap acceptance workflows.",
    category: "Team Project",
    image: "/assets/images/campus-equity-hub.png",
    githubUrl: "https://github.com/TheINSANE333/Campus-Equity-Hub",
    demoUrl: "https://simple-login-4ndj.onrender.com/",
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
    ]
  },
  {
    id: "4",
    title: "Kindergarten Payment Management System",
    description:
      "A web-based system that streamlines kindergarten fee tracking and financial record management.",
    longDescription:
      "Kindergarten Payment Management System is a web application developed to simplify the management of student payments, invoices and financial records. The system provides a centralized platform for administrators to manage student information, track payment history, generate payment records and maintain accurate financial data. The backend architecture was designed using Flask and SQLAlchemy with database-driven operations and secure user access control.",
    role:
      "Designed and developed the backend architecture, database integration, authentication and authorization modules.",
    category:
      "Team Project",
    image: "/assets/images/kindergarten-payment.png",
    githubUrl:
      "https://github.com/Foreen03/PaymentSystem",
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "Bootstrap"
    ],
    features: [
      "Student information management",
      "Payment tracking and record management",
      "Database integration using SQLAlchemy ORM",
      "User authentication and authorization",
      "CRUD operations for financial records",
      "Responsive web interface"
    ],
  },
  {
    id: "5",
    title: "Kwazam Chess",
    description:
      "A Java-based chess game implementing object-oriented design principles, MVC and design patterns.",
    longDescription:
      "Kwazam Chess is a desktop chess application developed in Java that implements complete chess gameplay mechanics including piece movement validation, turn management and game state handling. The project applies object-oriented programming principles, MVC architecture and software design patterns to improve code organization, maintainability and scalability.",
    role:
      "Designed and implemented the game logic, object-oriented architecture and user interaction components.",
    category:
      "Team Project",
    image: "/assets/images/kwazam-chess.png",
    githubUrl:
      "https://github.com/Foreen03/Kwazam-Chess",
    technologies: [
      "Java",
      "Java Swing",
      "Object-Oriented Programming",
      "MVC Architecture",
      "Design Patterns"
    ],
    features: [
      "Complete chess gameplay implementation",
      "Legal move validation for chess pieces",
      "Save & load game features",
      "Object-oriented class hierarchy design",
      "MVC architecture for separation of concerns",
      "Design pattern implementation for maintainability"
    ],
  }
];
