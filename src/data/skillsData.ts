import type { SkillItem } from '../types';

export const skillsList: SkillItem[] = [
  // Programming
  { name: "Python", level: "Practical Experience", category: "Programming" },
  { name: "Java", level: "Practical Experience", category: "Programming" },
  { name: "JavaScript", level: "Familiar", category: "Programming" },
  { name: "HTML5", level: "Practical Experience", category: "Programming" },
  { name: "CSS3", level: "Practical Experience", category: "Programming" },

  // QA
  { name: "Manual Testing", level: "Practical Experience", category: "QA" },
  { name: "Test Case Design", level: "Practical Experience", category: "QA" },
  { name: "Functional Testing", level: "Practical Experience", category: "QA" },
  { name: "API Testing", level: "Practical Experience", category: "QA" },
  { name: "Postman", level: "Practical Experience", category: "QA" },
  { name: "Regression Testing", level: "Developing", category: "QA" },
  { name: "Bug Reporting", level: "Practical Experience", category: "QA" },

  // Machine Learning & Data
  { name: "Python (Data/ML)", level: "Practical Experience", category: "Machine Learning & Data" },
  { name: "Pandas", level: "Familiar", category: "Machine Learning & Data" },
  { name: "Data Preprocessing", level: "Developing", category: "Machine Learning & Data" },
  { name: "Data Mining", level: "Developing", category: "Machine Learning & Data" },
  { name: "Regression Models", level: "Familiar", category: "Machine Learning & Data" },
  { name: "Classification", level: "Familiar", category: "Machine Learning & Data" },
  { name: "Supervised Learning", level: "Familiar", category: "Machine Learning & Data" },

  // Development
  { name: "React", level: "Practical Experience", category: "Development" },
  { name: "Spring Boot", level: "Practical Experience", category: "Development" },
  { name: "REST APIs", level: "Practical Experience", category: "Development" },
  { name: "Vite", level: "Practical Experience", category: "Development" },

  // Database
  { name: "MySQL", level: "Practical Experience", category: "Database" },

  // Tools
  { name: "Git", level: "Practical Experience", category: "Tools" },
  { name: "GitHub", level: "Practical Experience", category: "Tools" },
  { name: "GitLab", level: "Familiar", category: "Tools" },
  { name: "Postman", level: "Practical Experience", category: "Tools" },
  { name: "Figma", level: "Familiar", category: "Tools" },
  { name: "VS Code", level: "Practical Experience", category: "Tools" },
  { name: "IntelliJ IDEA", level: "Practical Experience", category: "Tools" },
  { name: "draw.io", level: "Familiar", category: "Tools" },
];

export const skillCategories = [
  "All",
  "QA",
  "Machine Learning & Data",
  "Programming",
  "Development",
  "Database",
  "Tools"
] as const;

export const levelColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  "Practical Experience": {
    bg: "bg-maroon-900/40 text-maroon-200 border-maroon-700/60",
    text: "text-rose-soft",
    border: "border-maroon-600/50",
    dot: "bg-rose-dusty"
  },
  "Developing": {
    bg: "bg-wine/30 text-rose-blush border-wine/50",
    text: "text-rose-blush",
    border: "border-wine/40",
    dot: "bg-maroon-400"
  },
  "Familiar": {
    bg: "bg-charcoal-700/60 text-warm-200 border-charcoal-600/60",
    text: "text-warm-200",
    border: "border-charcoal-600/40",
    dot: "bg-warm-400"
  },
  "Learning": {
    bg: "bg-plum-dark/50 text-rose-pale border-plum/40",
    text: "text-rose-pale",
    border: "border-plum/30",
    dot: "bg-plum"
  }
};
