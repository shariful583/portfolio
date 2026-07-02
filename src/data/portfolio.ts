export const profile = {
  name: "Shariful Islam",
  role: "Software Developer",
  tagline: "I build clean, reliable web applications.",
  bio: "I'm a backend-focused software engineer with 5 years of experience building fast, reliable systems. I care deeply about clean, maintainable code and designing services that scale and hold up in production.",
  email: "me@sharifulisalm.dev",
  location: "Bangladesh",
  socials: {
    github: "https://github.com/shariful583",
    linkedin: "https://www.linkedin.com/in/shariful-islam-242802180/",
    twitter: "https://twitter.com/your-username",
  },
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Go"] },
  { category: "Backend", items: ["Node.js"] },
  { category: "Frontend", items: ["React", "Next.js", "Angular"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "Redis"] },
  { category: "Messaging", items: ["Kafka", "RabbitMQ"] },
  { category: "Cloud", items: ["AWS", "Google Cloud"] },
  { category: "Tools", items: ["Git"] },
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
