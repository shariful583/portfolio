export const profile = {
  name: "Shariful Islam",
  role: "Software Developer",
  tagline: "I build clean, reliable web applications.",
  bio: "I'm a software developer who enjoys turning ideas into fast, maintainable products. I care about readable code, good UX, and shipping things that work.",
  email: "your.email@example.com",
  location: "Bangladesh",
  socials: {
    github: "https://github.com/shariful583",
    linkedin: "https://www.linkedin.com/in/shariful-islam-242802180/",
    twitter: "https://twitter.com/your-username",
  },
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "SQL",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of this project — what it does and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
    link: "#",
    repo: "#",
  },
  {
    title: "Project Two",
    description:
      "A short description of this project — what it does and the problem it solves.",
    tags: ["React", "Node.js"],
    link: "#",
    repo: "#",
  },
  {
    title: "Project Three",
    description:
      "A short description of this project — what it does and the problem it solves.",
    tags: ["TypeScript", "Tailwind CSS"],
    link: "#",
    repo: "#",
  },
];
