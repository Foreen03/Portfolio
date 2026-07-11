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
    title: "1st Place - Global Hackathon",
    organization: "Tech Innovators",
    date: "October 2023",
    description: "Led a team of four to build an AI-driven accessibility tool in 48 hours, winning first place among 200+ competing teams.",
  },
  {
    id: "2",
    title: "AWS Certified Solutions Architect – Associate",
    organization: "Amazon Web Services",
    date: "August 2022",
    description: "Demonstrated knowledge of how to architect and deploy secure and robust applications on AWS technologies.",
  },
  {
    id: "3",
    title: "Dean's List of Academic Excellence",
    organization: "State University",
    date: "2019 - 2021",
    description: "Awarded for maintaining a GPA of 3.8+ for four consecutive semesters during undergraduate studies.",
  }
];
