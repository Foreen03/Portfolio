export interface Education {
  id: string;
  school: string;
  degree: string;
  duration: string;
  description: string;
  cgpa?: string;
}

export const educationList: Education[] = [
  {
    id: "1",
    school: "Multimedia University (MMU)",
    degree: "Foundation in Information Technology",
    duration: "May 2022 - May 2023",
    description:
      "Built a strong foundation in programming, mathematics, computer systems, and information technology, preparing for further studies in software engineering.",
    cgpa: "3.90 / 4.00",
  },
  {
    id: "2",
    school: "Multimedia University (MMU)",
    degree: "Bachelor of Computer Science (Hons.) (Software Engineering)",
    duration: "Aug 2023 - Aug 2026",
    description:
      "Focused on software engineering principles, full-stack application development, software architecture, database systems, and software testing. Completed various academic and team-based projects while strengthening problem-solving and collaborative development skills.",
    cgpa: "3.90 / 4.00",
  }
]
