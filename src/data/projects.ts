export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  githubUrl: string;
  technologies: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "BlueStep Connect",
    description: "A cross-platform Bluetooth framework turning Android phones into motion game controllers for PC.",
    longDescription:
      "BlueStep Connect is a cross-platform framework that converts standard Android smartphones into low-power motion controllers for PC games via BLE. It features a three-tier client-server architecture — an Android controller app (Jetpack Compose + MVVM), a PC bridge server (Photino.NET + React/Vite), and a cross-engine Game SDK (.NET Standard 2.1). The system achieves sub-10ms end-to-end latency at 60 Hz sensor streaming, supports Xbox 360 controller emulation via ViGEm, and includes a dynamic gamepad layout editor with device transfer. The SDK integrates with Unity, Godot 4, and Cocos Creator, making motion-based fitness game development accessible without specialized hardware.",
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
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "C#",
      ".NET",
      "TypeScript",
      "React",
      "Vite",
      "BLE",
      "WebSocket",
      "ShadcnUI",
      "Unity",
      "Godot",
      "Cocos Creator"
    ],
    features: [
      "Real-time BLE motion data streaming at 60 Hz with sub-10ms latency",
      "Cross-engine SDK supporting Unity, Godot 4, and Cocos Creator",
      "Xbox 360 controller emulation via ViGEm for existing PC games",
      "Dynamic gamepad layout editor with phone-to-PC transfer",
      "Frame-rate independent exponential damping for sensor noise reduction",
      "Auto-pause handling on device interruptions (calls, alarms)",
      "GPX trail simulation and EXIF-tagged screenshot capture",
      "Heartbeat-based connection failure detection with auto-reconnect"
    ],
  },
  {
    id: "2",
    title: "AI Writing Assistant",
    description: "An AI-powered application for generating and editing text.",
    longDescription:
      "Leveraging the OpenAI API, this writing assistant helps users draft emails, essays, and creative stories. The interface is minimal, focusing entirely on the text, and provides real-time suggestions and grammar corrections.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com",
    technologies: ["Next.js", "OpenAI API", "Framer Motion", "shadcn/ui"],
    features: [
      "Context-aware text generation",
      "Tone adjustment and summarization tools",
      "Markdown export functionality",
      "Responsive and accessible design",
    ],
  },
  {
    id: "3",
    title: "Portfolio",
    description: "A premium, interactive developer portfolio website.",
    longDescription:
      "A modern developer portfolio built to showcase projects and experience. It features a custom Three.js animated background, Framer Motion transitions, and a fully responsive layout with dark mode support.",
    image: "src/assets/images/portfolio.png",
    githubUrl: "https://github.com",
    technologies: ["React", "TypeScript", "Three.js", "TailwindCSS", "Framer Motion"],
    features: [
      "Animated Three.js particle background and floating 3D icons",
      "Custom dark and light mode integration",
      "Smooth Framer Motion scroll reveals and page transitions",
      "Accessible components using shadcn/ui",
    ],
  }
];
