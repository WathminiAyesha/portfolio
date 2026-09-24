import type { ProjectData } from '../types';

export const vmasProject: ProjectData = {
  id: "vmas",
  title: "V-Mas",
  tagline: "Smart Vehicle Service Management System",
  subtitle: "University Capstone Project • Centralized Maintenance, Document & Fuel Intelligence",
  description: "V-Mas is a smart web-based vehicle service management system developed as a university capstone project to simplify vehicle management, maintenance tracking, document monitoring, fuel records and service-related notifications.",
  category: "Full Stack Web Application • Capstone Project",
  status: "Completed Capstone System",
  roles: [
    "Admin / System Controller (System configuration, user roles, fleet governance)",
    "Controller (Service scheduling, document compliance, approval workflows)",
    "Driver (Fuel logging, trip updates, maintenance issue requests)"
  ],
  techStack: [
    { name: "React", category: "Frontend", description: "Modular component architecture with responsive dashboard interfaces" },
    { name: "Spring Boot", category: "Backend", description: "Enterprise-grade Java REST API services and domain controllers" },
    { name: "Java", category: "Backend", description: "Core backend business logic, validation models and services" },
    { name: "MySQL", category: "Database", description: "Relational schema for vehicle telemetry, documents, fuel and audit logs" },
    { name: "REST APIs", category: "API", description: "Stateless JSON endpoints connecting React clients with Spring backend" },
    { name: "JWT", category: "Authentication", description: "Secure token-based authentication and role-based access control (RBAC)" },
    { name: "Postman", category: "Testing", description: "Comprehensive test collections, assertions and endpoint status verification" },
    { name: "Git & GitHub", category: "Development", description: "Branch management, peer pull requests and collaborative code reviews" },
  ],
  problemStory: {
    problem: "In traditional fleet and individual vehicle operations, critical details such as service intervals, insurance renewals, emission test validity, license expirations, and fuel expenditure are scattered across paper logs and manual spreadsheets. This leads to missed service dates, costly compliance penalties, unoptimized fuel consumption, and vehicle downtime.",
    solution: "V-Mas provides a unified, centralized web platform engineered with role-based access control. It automates vehicle registration, logs maintenance milestones, tracks fuel efficiency, digitizes compliance documents, and delivers proactive automated alerts before documents or services expire.",
    impact: "Provides full transparency across fleet status, prevents document expiration lapses, calculates operational cost-per-kilometer, and streamlines maintenance scheduling between drivers, controllers, and administrators."
  },
  myContributions: [
    {
      area: "Vehicle Registration & Master Data",
      description: "Implemented vehicle onboarding workflows and data structure validation.",
      details: [
        "Created vehicle registration interface with input validation (VIN, plate, model, manufacturing year).",
        "Configured vehicle status transitions (Active, Under Maintenance, Decommissioned).",
        "Integrated backend endpoints for creating and updating vehicle records."
      ]
    },
    {
      area: "Document Management & Upload Subsystems",
      description: "Engineered secure document upload handling and compliance tracking.",
      details: [
        "Built interfaces for insurance, revenue license, and emission certificate uploads.",
        "Structured expiry date calculations and proactive status flags for impending expirations.",
        "Implemented document preview dialogs and validation for file types/sizes."
      ]
    },
    {
      area: "Profile & System Settings",
      description: "Designed responsive user account settings and role management interfaces.",
      details: [
        "Implemented user profile updates, password modification, and credential validations.",
        "Configured role-dependent view permissions and avatar preference settings."
      ]
    },
    {
      area: "Alerts & Notifications Architecture",
      description: "Structured notification delivery for maintenance schedules and document expiries.",
      details: [
        "Designed notification badges, drop-down activity feeds, and read/unread status handlers.",
        "Connected notification triggers to impending service mileages and compliance deadlines."
      ]
    },
    {
      area: "Dashboard & Analytic Views",
      description: "Developed dashboard components summarizing fleet health and recent activities.",
      details: [
        "Created KPI summary widgets (Total Vehicles, Active Services, Expiring Documents).",
        "Built responsive data tables with filtering, sorting, and search capabilities."
      ]
    },
    {
      area: "API Verification, Testing & Integration",
      description: "Conducted endpoint validation and frontend-to-backend integration debugging.",
      details: [
        "Designed Postman test suites validating HTTP response codes (200, 201, 400, 401, 403, 404).",
        "Verified JWT token propagation in Authorization headers across protected routes.",
        "Identified edge cases in payload serialization, error handling, and form validations."
      ]
    },
    {
      area: "Git Workflow & Team Collaboration",
      description: "Contributed using structured branch-based version control in team environment.",
      details: [
        "Maintained feature branches, submitted PRs with clear change descriptions.",
        "Resolved merge conflicts and performed code reviews with teammates."
      ]
    }
  ],
  keyFeatures: [
    {
      category: "Vehicle & Fleet Operations",
      items: [
        "Vehicle registration & profile management",
        "Real-time vehicle status indicators (Active, In Service, Inactive)",
        "Comprehensive service history logs & odometer auditing",
        "Scheduled maintenance interval tracking & preventive maintenance alerts"
      ]
    },
    {
      category: "Document Compliance & Expiry",
      items: [
        "Insurance policy document monitoring & upload",
        "Revenue license document tracking & renewal dates",
        "Emission test certificate archiving & validity checks",
        "Automated expiry notifications to prevent compliance penalties"
      ]
    },
    {
      category: "Fuel Analytics & Cost Monitoring",
      items: [
        "Fuel fill-up logging (liters, cost, meter reading, station)",
        "Automated fuel efficiency (km/L) computation across intervals",
        "Cost-per-kilometer tracking and fleet expenditure reports",
        "Visual trend charts for operational budgeting"
      ]
    },
    {
      category: "Security & Governance",
      items: [
        "Role-Based Access Control (Admin, Controller, Driver permissions)",
        "JWT-secured REST endpoints with token expiration safety",
        "Encrypted credential storage and audit logging",
        "Responsive cross-device interface built with React & Vite"
      ]
    }
  ],
  screenshots: [
    {
      id: "vmas-dashboard",
      title: "System Dashboard",
      caption: "Fleet overview showing vehicle statuses, service alerts, quick statistics and pending maintenance actions.",
      category: "Dashboard & Analytics",
      imagePath: "/images/projects/vmas/dashboard.png",
      featured: true
    },
    {
      id: "vmas-registration",
      title: "Vehicle Registration",
      caption: "Streamlined vehicle onboarding form with VIN verification, model specs, and initial odometer setup.",
      category: "Fleet Management",
      imagePath: "/images/projects/vmas/vehicle-registration.png"
    },
    {
      id: "vmas-service-history",
      title: "Service & Maintenance History",
      caption: "Detailed record of past services, replaced components, servicing garage notes, and cost breakdowns.",
      category: "Maintenance",
      imagePath: "/images/projects/vmas/service-history.png"
    },
    {
      id: "vmas-fuel",
      title: "Fuel Logging & Analytics",
      caption: "Interactive fuel record table with automatic mileage efficiency (km/L) and cost trend calculations.",
      category: "Fuel Intelligence",
      imagePath: "/images/projects/vmas/fuel-management.png"
    },
    {
      id: "vmas-documents",
      title: "Document Expiry & Compliance",
      caption: "Centralized archive for insurance, emission, and revenue license documents with proactive expiry alerts.",
      category: "Compliance",
      imagePath: "/images/projects/vmas/documents.png"
    },
    {
      id: "vmas-profile",
      title: "User Profile & Security Settings",
      caption: "User account management, role privileges overview, and password change security dialogs.",
      category: "Account & Settings",
      imagePath: "/images/projects/vmas/profile.png"
    }
  ]
};

// Ready for future projects without altering the layout architecture
export const allProjects: ProjectData[] = [
  vmasProject
  // Future projects (ML, Data Science, QA Automation) will be appended here
];
