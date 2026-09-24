import type { ExperienceItem, EducationItem } from '../types';

export const volunteeringExperiences: ExperienceItem[] = [
  {
    id: "aurelia-2026",
    title: "AURELIA 2.0 – IEEE WIE Day 2026",
    organization: "IEEE Women in Engineering (WIE) Student Branch Affinity Group of SUSL",
    role: "Organizing Committee Member",
    period: "2026",
    category: "IEEE",
    description: "Contributed as an Organizing Committee member for AURELIA 2.0, a premier flagship initiative by IEEE WIE SUSL celebrating women in technology, leadership, and engineering empowerment.",
    highlights: [
      "Collaborated on event coordination, participant logistics, and scheduling workflows.",
      "Facilitated session delivery and speaker engagement for technology empowerment tracks.",
      "Engaged with student delegates across computing faculties."
    ],
    tags: ["IEEE WIE", "Event Organizing", "Leadership", "Empowerment"],
    imageFolder: "/images/experiences/aurelia"
  },
  {
    id: "ieee-wie-susl-sec",
    title: "IEEE WIE Student Branch Affinity Group of SUSL",
    organization: "Sabaragamuwa University of Sri Lanka",
    role: "Secretary Team Member",
    period: "2025 - 2026",
    category: "IEEE",
    description: "Active involvement in the Secretary Team of IEEE WIE SUSL, assisting in administrative communications, documentation, meeting minutes, and event execution.",
    highlights: [
      "Drafted official documentation, meeting records, and administrative reports.",
      "Assisted in coordinating internal team meetings and project task distributions.",
      "Supported IEEE WIE community outreach and student engagement initiatives."
    ],
    tags: ["Documentation", "Administration", "Team Coordination", "IEEE"],
    imageFolder: "/images/experiences/ieee"
  },
  {
    id: "pixel-pioneers-2025",
    title: "Pixel Pioneers Game Jam V1.0",
    organization: "Sabaragamuwa University of Sri Lanka",
    role: "Organizing Committee / Secretary Team",
    period: "2025",
    category: "Event / Hackathon",
    description: "Served on the Organizing Committee and Secretary Team for Pixel Pioneers Game Jam V1.0, fostering student creativity in game development and interactive software.",
    highlights: [
      "Managed registration registries, participant communications, and team briefing packets.",
      "Supported timeline tracking, judging session schedules, and submission management.",
      "Facilitated smooth communication between mentors, organizers, and competitors."
    ],
    tags: ["Game Jam", "Hackathon Logistics", "Secretarial Coordination", "Student Tech"],
    imageFolder: "/images/experiences/pixel-pioneers"
  },
  {
    id: "nenasa-stem-2025",
    title: "Nenasa STEM Education Workshop 2025",
    organization: "Community Outreach & Education Initiative",
    role: "Volunteer",
    period: "2025",
    category: "Volunteering",
    description: "Volunteered for the Nenasa STEM workshop initiative, dedicated to introducing school students to foundational Science, Technology, Engineering, and Mathematics concepts.",
    highlights: [
      "Assisted in conducting interactive sessions and practical problem-solving demonstrations.",
      "Mentored young students through computational thinking activities.",
      "Encouraged school students to explore careers in information technology and sciences."
    ],
    tags: ["STEM Education", "Community Volunteering", "Youth Mentorship", "Social Impact"],
    imageFolder: "/images/experiences/nenasa"
  },
  {
    id: "rotaract-aqua-alert",
    title: "Aqua Alert – SDG 14 Initiative",
    organization: "Rotaract Club of Sabaragamuwa University of Sri Lanka",
    role: "Secretary",
    period: "2025",
    category: "Rotaract",
    description: "Served as Secretary for the Aqua Alert initiative under United Nations Sustainable Development Goal 14 (Life Below Water), advocating marine ecosystem conservation and clean water awareness.",
    highlights: [
      "Maintained comprehensive project records, official communications, and progress reports.",
      "Coordinated awareness campaigns and environmental community outreach activities.",
      "Liaised with club executive board members and volunteers to ensure timely milestones."
    ],
    tags: ["Rotaract Secretary", "UN SDG 14", "Environmental Awareness", "Project Governance"],
    imageFolder: "/images/experiences/rotaract"
  }
];

export const educationDetails: EducationItem = {
  degree: "BSc (Hons) in Information Systems",
  institution: "Sabaragamuwa University of Sri Lanka",
  faculty: "Faculty of Computing",
  department: "Department of Computing and Information Systems",
  batch: "Batch 2022/2023",
  status: "Undergraduate (Reading for Degree)",
  location: "Belihuloya, Sri Lanka",
  courses: [
    "Software Engineering & Quality Assurance",
    "Database Management Systems (MySQL)",
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java / Python)",
    "Web Application Development",
    "Data Mining & Business Intelligence",
    "Computer Networks & Security",
    "Enterprise Information Systems"
  ]
};
