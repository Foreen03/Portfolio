export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceList: Experience[] = [
  {
    id: "1",
    company: "GlobeOSS",
    position: "Software Engineering Intern",
    duration: "Jul 2025 - Oct 2025",
    responsibilities: [
      "Developed and maintained full-stack features for enterprise web applications using React, Next.js, Express.js, and T-SQL.",
      "Implemented reusable frontend components and custom API hooks to improve code maintainability and development efficiency.",
      "Integrated Azure Maps for geospatial visualization and developed interactive dashboards with dynamic charts and data visualization.",
      "Collaborated with senior developers to enhance system performance, fix bugs, and deliver new features in an Agile development environment."
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Express.js",
      "T-SQL",
      "Azure Maps",
      "Tailwind CSS",
      "Shadcn UI",
      "Git"
    ]
  },
  {
    id: "2",
    company: "QDOS Flexcircuits Sdn Bhd",
    position: "QA Technician",
    duration: "Jul 2021 - Apr 2022",
    responsibilities: [
      "Perform daily inspection activities.",
      "Data collection and complete IQA Inspection Report.",
      "To undertake any additional job and responsibilities from supervisor from time to time.",
    ],
    technologies: ["Quality Assurance", "Quality Control", "Microsoft Excel"],
  }
];
