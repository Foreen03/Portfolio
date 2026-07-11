export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms.",
    longDescription:
      "This modern e-commerce dashboard provides detailed analytics, order management, and user tracking. Built with React and Recharts, it handles large datasets efficiently and features a beautiful dark mode UI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com",
    technologies: ["React", "TypeScript", "TailwindCSS", "Recharts"],
    features: [
      "Real-time analytics and data visualization",
      "Order processing and inventory management",
      "Role-based access control (RBAC)",
      "Dark and light mode support",
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
    title: "Task Management App",
    description: "A collaborative tool for managing team tasks and projects.",
    longDescription:
      "A Kanban-style task management board inspired by Linear and Trello. It supports drag-and-drop, real-time updates via WebSockets, and complex filtering capabilities to help teams stay organized and productive.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2069&auto=format&fit=crop",
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    features: [
      "Drag-and-drop Kanban boards",
      "Real-time collaboration and updates",
      "Customizable labels and priorities",
      "Advanced task filtering and search",
    ],
  }
];
