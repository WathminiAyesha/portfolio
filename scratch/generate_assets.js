import fs from 'fs';
import path from 'path';

const dirs = [
  'public/images/profile',
  'public/images/projects/vmas',
  'public/images/experiences/aurelia',
  'public/images/experiences/pixel-pioneers',
  'public/images/experiences/nenasa',
  'public/images/experiences/rotaract',
  'public/images/experiences/ieee',
  'public/images/experiences/university',
  'public/documents'
];

dirs.forEach(d => {
  fs.mkdirSync(d, { recursive: true });
});

// Create an SVG-based placeholder for profile photo
const profileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38050e"/>
      <stop offset="50%" stop-color="#5c0d1b"/>
      <stop offset="100%" stop-color="#18050e"/>
    </linearGradient>
    <linearGradient id="maroonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#cf4869" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#800020" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5d5dc"/>
      <stop offset="100%" stop-color="#d48b9b"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="700" fill="url(#bg)"/>
  
  <!-- Subtle decorative rings -->
  <circle cx="300" cy="320" r="230" fill="none" stroke="#cf4869" stroke-opacity="0.15" stroke-width="1.5" stroke-dasharray="8 6"/>
  <circle cx="300" cy="320" r="180" fill="none" stroke="#f0a8b7" stroke-opacity="0.2" stroke-width="2"/>

  <!-- Stylized Elegant Portrait Silhouette -->
  <g filter="url(#shadow)">
    <!-- Shoulders / Blazer with Maroon Lapel -->
    <path d="M140 680 C140 520, 200 460, 300 460 C400 460, 460 520, 460 680 Z" fill="#20070c"/>
    <path d="M190 680 L270 480 L300 560 L330 480 L410 680 Z" fill="#5c0d1b" stroke="#cf4869" stroke-width="1.5"/>
    <path d="M265 520 L300 580 L335 520 Z" fill="#fdf2f4"/>
    
    <!-- Neck -->
    <rect x="275" y="380" width="50" height="90" rx="10" fill="#e8c2b5"/>
    
    <!-- Face -->
    <ellipse cx="300" cy="330" rx="85" ry="105" fill="#f0cebf"/>
    
    <!-- Hair -->
    <path d="M200 320 C195 210, 240 170, 300 170 C360 170, 405 210, 400 320 C405 380, 415 470, 380 500 C370 470, 375 390, 365 350 C340 310, 260 310, 235 350 C225 390, 230 470, 220 500 C185 470, 195 380, 200 320 Z" fill="#1b0a0e"/>
    <path d="M215 260 C230 200, 280 180, 300 185 C340 180, 380 210, 385 270 C360 230, 320 220, 300 230 C270 220, 235 235, 215 260 Z" fill="#321219"/>
  </g>

  <!-- Overlay Badge -->
  <rect x="130" y="600" width="340" height="54" rx="27" fill="#140609" fill-opacity="0.9" stroke="#e3778f" stroke-width="1.5" filter="url(#shadow)"/>
  <text x="300" y="633" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" fill="#fdf2f4" text-anchor="middle" letter-spacing="1.5">
    WATHMINI AYESHA
  </text>
</svg>`;

fs.writeFileSync('public/images/profile/profile.jpg', profileSvg);
fs.writeFileSync('public/images/profile/profile.svg', profileSvg);

// Create screenshot generator
const createScreenshotSvg = (title, subtitle, iconType) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
    <defs>
      <linearGradient id="scBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14060a"/>
        <stop offset="50%" stop-color="#230a13"/>
        <stop offset="100%" stop-color="#0e0407"/>
      </linearGradient>
      <linearGradient id="topBar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#5c0d1b"/>
        <stop offset="100%" stop-color="#800020"/>
      </linearGradient>
    </defs>
    <!-- Window Frame -->
    <rect width="1200" height="750" rx="16" fill="url(#scBg)" stroke="#5c0d1b" stroke-width="2"/>
    
    <!-- App Header Bar -->
    <rect width="1200" height="60" rx="16" fill="#1c0910"/>
    <circle cx="35" cy="30" r="7" fill="#cf4869"/>
    <circle cx="60" cy="30" r="7" fill="#b62e51"/>
    <circle cx="85" cy="30" r="7" fill="#5c0d1b"/>
    <rect x="300" y="15" width="600" height="30" rx="6" fill="#2d101c" stroke="#5c0d1b" stroke-width="1"/>
    <text x="600" y="35" font-family="'JetBrains Mono', monospace" font-size="13" fill="#e3778f" text-anchor="middle">vmas.app/dashboard • ${title}</text>
    
    <!-- Sidebar Preview -->
    <rect x="25" y="85" width="220" height="635" rx="12" fill="#1a070e" stroke="#3b1224" stroke-width="1"/>
    <rect x="45" y="110" width="180" height="40" rx="8" fill="url(#topBar)"/>
    <text x="135" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">V-MAS SYSTEM</text>
    
    <rect x="45" y="175" width="180" height="32" rx="6" fill="#2d101c"/>
    <rect x="45" y="220" width="180" height="32" rx="6" fill="#240c16"/>
    <rect x="45" y="265" width="180" height="32" rx="6" fill="#240c16"/>
    <rect x="45" y="310" width="180" height="32" rx="6" fill="#240c16"/>
    
    <!-- Main Content Area -->
    <rect x="270" y="85" width="905" height="635" rx="12" fill="#120509" stroke="#3b1224" stroke-width="1"/>
    
    <!-- Header banner in app -->
    <rect x="300" y="115" width="845" height="120" rx="12" fill="url(#topBar)" fill-opacity="0.3" stroke="#800020" stroke-width="1"/>
    <text x="330" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="700" fill="#fdf2f4">${title}</text>
    <text x="330" y="195" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" fill="#f0a8b7">${subtitle}</text>

    <!-- Content Mock Cards -->
    <rect x="300" y="260" width="265" height="150" rx="10" fill="#1c0a12" stroke="#5c0d1b" stroke-width="1"/>
    <text x="325" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#e3778f">ACTIVE STATUS</text>
    <text x="325" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="800" fill="#fdf2f4">100%</text>
    <text x="325" y="375" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#d48b9b">Compliance verified</text>

    <rect x="590" y="260" width="265" height="150" rx="10" fill="#1c0a12" stroke="#5c0d1b" stroke-width="1"/>
    <text x="615" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#e3778f">SERVICE INTERVAL</text>
    <text x="615" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="800" fill="#fdf2f4">5,000 km</text>
    <text x="615" y="375" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#d48b9b">Next schedule logged</text>

    <rect x="880" y="260" width="265" height="150" rx="10" fill="#1c0a12" stroke="#5c0d1b" stroke-width="1"/>
    <text x="905" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#e3778f">SECURITY LEVEL</text>
    <text x="905" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="800" fill="#fdf2f4">JWT RBAC</text>
    <text x="905" y="375" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#d48b9b">Role-based clearance</text>

    <!-- Data Table / Mock View -->
    <rect x="300" y="435" width="845" height="255" rx="10" fill="#18070f" stroke="#380e1a" stroke-width="1"/>
    <rect x="300" y="435" width="845" height="42" rx="10" fill="#250b16"/>
    <text x="330" y="462" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#f7ced6">RECORD ID</text>
    <text x="500" y="462" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#f7ced6">TELEMETRY / METRIC</text>
    <text x="750" y="462" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#f7ced6">EXPIRY / SCHEDULE</text>
    <text x="1020" y="462" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#f7ced6">STATE</text>

    <line x1="300" y1="520" x2="1145" y2="520" stroke="#3b1224" stroke-width="1"/>
    <text x="330" y="505" font-family="'JetBrains Mono', monospace" font-size="13" fill="#f9f5f0">VM-2026-089</text>
    <text x="500" y="505" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#f9f5f0">Primary Maintenance Cycle</text>
    <text x="750" y="505" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#f0a8b7">Valid (30 Days Remaining)</text>
    <rect x="1015" y="490" width="75" height="24" rx="12" fill="#5c0d1b"/>
    <text x="1052" y="506" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#fdf2f4" text-anchor="middle">ACTIVE</text>

    <line x1="300" y1="565" x2="1145" y2="565" stroke="#3b1224" stroke-width="1"/>
    <text x="330" y="550" font-family="'JetBrains Mono', monospace" font-size="13" fill="#f9f5f0">DOC-INS-442</text>
    <text x="500" y="550" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#f9f5f0">Comprehensive Insurance Policy</text>
    <text x="750" y="550" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#f0a8b7">Renewed & Uploaded</text>
    <rect x="1015" y="535" width="75" height="24" rx="12" fill="#5c0d1b"/>
    <text x="1052" y="551" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#fdf2f4" text-anchor="middle">VERIFIED</text>

    <text x="722" y="650" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#cf4869" text-anchor="middle">
      * Add V-Mas Screenshot: Replace with your actual application screenshot in public/images/projects/vmas/
    </text>
  </svg>`;
};

const vmasScreenshots = [
  { file: 'dashboard.png', title: 'Fleet Overview & Analytics', subtitle: 'Centralized vehicle KPIs, alert triggers and maintenance summaries' },
  { file: 'vehicle-registration.png', title: 'Vehicle Registration Form', subtitle: 'Onboarding workflow with chassis specs and validation' },
  { file: 'service-history.png', title: 'Service & Maintenance Records', subtitle: 'Log of garage services, part replacements and audit logs' },
  { file: 'fuel-management.png', title: 'Fuel Records & Efficiency', subtitle: 'Fuel fill-up entries and automatic km/L cost tracking' },
  { file: 'documents.png', title: 'Document Expiry & Compliance', subtitle: 'Insurance, revenue license and emission test management' },
  { file: 'profile.png', title: 'User Account & Security Settings', subtitle: 'Role-based access permissions and profile configuration' },
];

vmasScreenshots.forEach(s => {
  const content = createScreenshotSvg(s.title, s.subtitle, s.file);
  fs.writeFileSync(`public/images/projects/vmas/${s.file}`, content);
});

// Create CV placeholder note file
const cvContent = `%PDF-1.4
% Wathmini Ayesha Curriculum Vitae Placeholder
% Replace this file with your actual PDF: public/documents/Wathmini-Ayesha-CV.pdf
1 0 obj
<< /Title (Wathmini Ayesha - Curriculum Vitae)
   /Author (Wathmini Ayesha)
>>
endobj
`;
fs.writeFileSync('public/documents/Wathmini-Ayesha-CV.pdf', cvContent);

console.log('Successfully generated asset structure and placeholder images!');
