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
    company: "TechNova Solutions",
    position: "Senior Frontend Engineer",
    duration: "Jan 2023 - Present",
    responsibilities: [
      "Architected and developed the core user interface for the company's flagship SaaS product.",
      "Mentored junior developers and established frontend coding standards and best practices.",
      "Reduced application bundle size by 40% through code splitting and lazy loading.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "TailwindCSS", "Zustand"],
  },
  {
    id: "2",
    company: "Creative Digital Studio",
    position: "Full Stack Developer",
    duration: "Jun 2021 - Dec 2022",
    responsibilities: [
      "Built responsive, interactive web applications for diverse clients in the e-commerce and media sectors.",
      "Integrated third-party APIs and payment gateways (Stripe, PayPal).",
      "Designed and implemented RESTful APIs using Node.js and Express.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "3",
    company: "WebSphere Inc.",
    position: "Frontend Developer Intern",
    duration: "May 2020 - Aug 2020",
    responsibilities: [
      "Assisted in migrating legacy jQuery code to modern React components.",
      "Wrote unit and integration tests using Jest and React Testing Library, increasing test coverage by 20%.",
    ],
    technologies: ["HTML/CSS", "JavaScript", "React", "Jest"],
  }
];
