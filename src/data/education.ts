export interface Education {
  id: string;
  school: string;
  degree: string;
  duration: string;
  description: string;
}

export const educationList: Education[] = [
  {
    id: "1",
    school: "University of Technology",
    degree: "Master of Science in Computer Science",
    duration: "2021 - 2023",
    description: "Specialized in Artificial Intelligence and Distributed Systems. Graduated with Honors. Thesis on optimizing neural network architectures for edge devices.",
  },
  {
    id: "2",
    school: "State University",
    degree: "Bachelor of Science in Software Engineering",
    duration: "2017 - 2021",
    description: "Core coursework included Data Structures, Algorithms, Operating Systems, and Web Development. President of the Computer Science Club.",
  },
];
