export interface ActivityPhoto {
  url: string;
  caption?: string;
}

export interface CommunityActivity {
  id: string;
  title: string;
  shortTitle: string;
  role: string;
  organization?: string;
  date?: string;
  location?: string;
  focus?: string;
  description: string;
  coverImage: string;
  images: ActivityPhoto[];
  gridSpan: string; // Tailwind grid span for desktop layout
  aspectRatio: string;
}

export const communityActivities: CommunityActivity[] = [
  {
    id: "pixel-pioneers",
    title: "Pixel Pioneers Game Jam V1.0",
    shortTitle: "PIXEL PIONEERS",
    role: "Secretary Team Lead",
    organization: "Sabaragamuwa University of Sri Lanka",
    date: "2025",
    description: "Led the Secretary Team, contributing to event coordination, communication and teamwork.",
    coverImage: "/images/experiences/pixel-pioneers/1.jpg",
    images: [
      { url: "/images/experiences/pixel-pioneers/1.jpg", caption: "Pixel Pioneers Game Jam V1.0 — Event Coordination & Kickoff" },
      { url: "/images/experiences/pixel-pioneers/2.jpg", caption: "Secretary Team Briefings & Documentation" },
      { url: "/images/experiences/pixel-pioneers/3.jpg", caption: "Participant Support & Registration Desk" },
      { url: "/images/experiences/pixel-pioneers/4.jpg", caption: "Game Jam Presentations & Team Milestone" }
    ],
    gridSpan: "lg:col-span-7",
    aspectRatio: "aspect-[16/10] sm:aspect-[16/9]"
  },
  {
    id: "aurelia-2",
    title: "AURELIA 2.0 – IEEE WIE Day 2026",
    shortTitle: "AURELIA 2.0",
    role: "Organizing Committee Member",
    organization: "IEEE WIE Student Branch Affinity Group of SUSL",
    date: "2026",
    description: "Contributed as an Organizing Committee member, gaining experience in teamwork, coordination and event responsibility.",
    coverImage: "/images/experiences/aurelia-2/1.jpg",
    images: [
      { url: "/images/experiences/aurelia-2/1.jpg", caption: "AURELIA 2.0 – IEEE WIE Day 2026 Celebration" },
      { url: "/images/experiences/aurelia-2/2.jpg", caption: "Organizing Committee Team Moments" },
      { url: "/images/experiences/aurelia-2/3.jpg", caption: "Session Flow & Stage Management" },
      { url: "/images/experiences/aurelia-2/4.jpg", caption: "Candid Working & Logistics Coordination" },
      { url: "/images/experiences/aurelia-2/5.jpg", caption: "Commemorative Group Photograph" }
    ],
    gridSpan: "lg:col-span-5",
    aspectRatio: "aspect-[16/10] sm:aspect-[4/3]"
  },
  {
    id: "hope-2",
    title: "HOPE 2.0 – Canva Design Mastery Workshop",
    shortTitle: "HOPE 2.0",
    role: "Knowledge Team Member",
    organization: "Student Development Initiative",
    date: "2025",
    description: "Contributed as a Knowledge Team member to a creative and hands-on learning session.",
    coverImage: "/images/experiences/hope-2/1.jpg",
    images: [
      { url: "/images/experiences/hope-2/1.jpg", caption: "HOPE 2.0 – Canva Design Mastery Workshop" },
      { url: "/images/experiences/hope-2/2.jpg", caption: "Hands-on Design Exercises & Learning" },
      { url: "/images/experiences/hope-2/3.jpg", caption: "Knowledge Team Coordination & Mentoring" },
      { url: "/images/experiences/hope-2/4.jpg", caption: "Creative Sessions & Participant Showcase" }
    ],
    gridSpan: "lg:col-span-6",
    aspectRatio: "aspect-[16/10] sm:aspect-[16/10]"
  },
  {
    id: "nenasa-stem",
    title: "Nenasa STEM Education Workshop 2025",
    shortTitle: "NENASA STEM",
    role: "Volunteer",
    organization: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
    date: "31 July 2025",
    location: "FOC Mini Auditorium, Sabaragamuwa University of Sri Lanka",
    description: "Volunteered at a STEM education workshop supporting hands-on learning and engagement among young students.",
    coverImage: "/images/experiences/nenasa-stem/1.jpg",
    images: [
      { url: "/images/experiences/nenasa-stem/1.jpg", caption: "Nenasa STEM Workshop — Hands-on Student Engagement" },
      { url: "/images/experiences/nenasa-stem/2.jpg", caption: "Computational Thinking & Practical STEM Activities" },
      { url: "/images/experiences/nenasa-stem/3.jpg", caption: "FOC Mini Auditorium Interactive Workshop Session" },
      { url: "/images/experiences/nenasa-stem/4.jpg", caption: "Volunteer Team Supporting School Students" },
      { url: "/images/experiences/nenasa-stem/5.jpg", caption: "Closing Group Moment & Certificates" }
    ],
    gridSpan: "lg:col-span-6",
    aspectRatio: "aspect-[16/10] sm:aspect-[16/10]"
  },
  {
    id: "aqua-alert",
    title: "Aqua Alert – Life Below Water",
    shortTitle: "AQUA ALERT",
    role: "Secretary",
    organization: "Rotaract Club of Sabaragamuwa University of Sri Lanka",
    focus: "SDG 14 – Life Below Water",
    date: "2025",
    description: "Served as Secretary for an initiative focused on marine conservation, sustainability and community awareness.",
    coverImage: "/images/experiences/aqua-alert/1.jpg",
    images: [
      { url: "/images/experiences/aqua-alert/1.jpg", caption: "Aqua Alert – SDG 14 Marine Conservation Initiative" },
      { url: "/images/experiences/aqua-alert/2.jpg", caption: "Secretarial Coordination, Documentation & Reporting" },
      { url: "/images/experiences/aqua-alert/3.jpg", caption: "Community Awareness & Sustainability Outreach" },
      { url: "/images/experiences/aqua-alert/4.jpg", caption: "Rotaract Club of SUSL Volunteer Team" },
      { url: "/images/experiences/aqua-alert/5.jpg", caption: "Project Milestone & Action Day Review" }
    ],
    gridSpan: "lg:col-span-12",
    aspectRatio: "aspect-[16/9] sm:aspect-[21/9]"
  }
];

export const getPlaceholderSvg = (title: string, role: string, index: number, total: number) => {
  const cleanTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const cleanRole = role.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14080e"/>
        <stop offset="45%" stop-color="#2c0c19"/>
        <stop offset="100%" stop-color="#0a0407"/>
      </linearGradient>
      <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#b62e51" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#5c0d1b" stop-opacity="0.3"/>
      </linearGradient>
      <radialGradient id="ambient" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#800020" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(182, 46, 81, 0.08)" stroke-width="1"/>
      </pattern>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#bgGrad)"/>
    <rect width="100%" height="100%" fill="url(#grid)"/>
    <circle cx="600" cy="360" r="320" fill="url(#ambient)"/>
    
    <rect x="24" y="24" width="1152" height="752" rx="28" fill="none" stroke="url(#borderGrad)" stroke-width="1.5"/>
    
    <!-- Camera Icon badge -->
    <g transform="translate(600, 290)">
      <circle cx="0" cy="0" r="54" fill="#420914" stroke="#800020" stroke-width="2"/>
      <g transform="translate(-24, -24)" stroke="#e3778f" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M43 37a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V17a4 4 0 0 1 4-4h7l3-5h12l3 5h7a4 4 0 0 1 4 4z"/>
        <circle cx="24" cy="27" r="8"/>
      </g>
    </g>
    
    <!-- Text Information -->
    <text x="600" y="405" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="34" fill="#fff5f7">${cleanTitle}</text>
    <text x="600" y="445" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="600" font-size="20" fill="#e3778f">${cleanRole}</text>
    
    <!-- Photo counter pill -->
    <g transform="translate(600, 485)">
      <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#5c0d1b" stroke="#800020" stroke-width="1.5"/>
      <text x="0" y="6" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="600" fill="#fce7ec">Photo ${index} of ${total}</text>
    </g>
    
    <!-- Footer Note -->
    <text x="600" y="730" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="14" fill="#d48b9b" opacity="0.65">Ready for photo • /images/experiences/...</text>
  </svg>`;
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};
