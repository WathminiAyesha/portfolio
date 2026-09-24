export type SkillLevel = 'Learning' | 'Familiar' | 'Practical Experience' | 'Developing';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  iconName?: string;
  category: 'Programming' | 'QA' | 'Machine Learning & Data' | 'Development' | 'Database' | 'Tools';
}

export interface JourneyMilestone {
  year: string;
  period?: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  highlight?: boolean;
}

export interface ProjectTech {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'API' | 'Authentication' | 'Testing' | 'Development';
  icon?: string;
  description?: string;
}

export interface ProjectScreenshot {
  id: string;
  title: string;
  caption: string;
  category: string;
  imagePath: string;
  featured?: boolean;
}

export interface ProjectContribution {
  area: string;
  description: string;
  details: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  subtitle: string;
  description: string;
  category: string;
  roles: string[];
  keyFeatures: {
    category: string;
    items: string[];
  }[];
  techStack: ProjectTech[];
  problemStory: {
    problem: string;
    solution: string;
    impact: string;
  };
  myContributions: ProjectContribution[];
  screenshots: ProjectScreenshot[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface TestCaseItem {
  id: string;
  title: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  expectedStatus: number;
  responseTiming: string;
  assertionSnippet: string;
  description: string;
  testType: 'API Testing' | 'Functional Testing' | 'Regression Testing' | 'Validation';
  status: 'Passed' | 'Verified';
}

export interface QAFocusArea {
  title: string;
  description: string;
  iconName: string;
  metricsOrNotes: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  issueDate: string;
  credentialUrl?: string;
  skills: string[];
  badgeColor?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  category: 'IEEE' | 'Rotaract' | 'Event / Hackathon' | 'Volunteering';
  description: string;
  highlights: string[];
  tags: string[];
  imageFolder?: string;
  imageCount?: number;
}

export interface EducationItem {
  degree: string;
  institution: string;
  faculty: string;
  department: string;
  batch: string;
  status: string;
  location: string;
  courses: string[];
}
