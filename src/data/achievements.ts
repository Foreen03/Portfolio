export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export const achievementList: Achievement[] = [
  {
    id: "1",
    title: "1st Runner-Up – Best Project Award",
    organization: "Multimedia University (MMU)",
    date: "July 2026",
    description:
      "BlueStep Connect is awarded 1st Runner-Up in the Best Project Award (Software Engineering Specialization) for demonstrating innovation, technical excellence, and practical application.",
  },
  {
    id: "2",
    title: "Dean's List",
    organization: "Multimedia University (MMU)",
    date: "2023 - 2026",
    description:
      "Recognized for outstanding academic performance by consistently achieving excellent results throughout the Bachelor of Computer Science (Hons.) programme.",
  },
  {
    id: "3",
    title: "Merit Scholarship",
    organization: "Multimedia University (MMU)",
    date: "2022",
    description:
      "Awarded a scholarship in recognition of strong academic achievement upon admission to the Foundation in Information Technology programme.",
  }
]