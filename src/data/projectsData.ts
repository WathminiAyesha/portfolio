export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: 'Capstone Project' | 'Ongoing' | 'Group Project';
  badgeStyle: string;
  iconName: string;
  bullets: string[];
  technologies: string[];
  githubUrl?: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: 'vmas',
    title: 'V-MAS',
    subtitle: 'Smart Vehicle Service & Fleet Management System',
    badge: 'Capstone Project',
    badgeStyle: 'bg-maroon-900/80 text-rose-soft border-maroon-700/80',
    iconName: 'Car',
    bullets: [
      'Contributed to the development of a web-based vehicle service and fleet management system, collaborating with a multidisciplinary team throughout the project lifecycle.',
      'Responsible for reporting and analytics, fuel analysis, service management logic, documentation, and coordination of project tasks.',
    ],
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'Git', 'AWS'],
    githubUrl: 'https://github.com/WathminiAyesha/portfolio',
  },
  {
    id: 'glamaura',
    title: 'Glamaura',
    subtitle: 'E-Commerce Platform',
    badge: 'Ongoing',
    badgeStyle: 'bg-amber-950/70 text-amber-200 border-amber-800/60',
    iconName: 'ShoppingBag',
    bullets: [
      'Developing an e-commerce web application using MongoDB, Express.js, React.js, and Node.js.',
      'Working with product management, user authentication, REST APIs, and database operations.',
      'Testing application features and API functionality while identifying and fixing basic issues.',
      'Using Git and GitHub for version control and collaborative development.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/WathminiAyesha',
  },
  {
    id: 'healthsync',
    title: 'HealthSync',
    subtitle: 'Healthcare Management Platform',
    badge: 'Group Project',
    badgeStyle: 'bg-rose-950/70 text-rose-200 border-rose-800/60',
    iconName: 'HeartPulse',
    bullets: [
      'Contributed to the development of a web-based healthcare management platform, collaborating with a team throughout the project.',
      'Worked on frontend components, user interfaces, and platform features.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/WathminiAyesha',
  },
];
