export type ProjectDetail = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  challenge: string;
  solution: string;
  features: string[];
  outcome: string;
};

export const digitalProjects: ProjectDetail[] = [
  {
    slug: "university-event-registration-platform",
    title: "University Event Registration Platform",
    category: "Website",
    summary:
      "Designed and developed a responsive event website with online registration, speaker profiles, schedule management, and mobile-first performance optimization.",
    image: "/eventpage.jpg",
    challenge:
      "The organizers needed one platform for announcements, registrations, and event schedules that worked reliably on mobile devices.",
    solution:
      "We built a performance-focused website with a clean information architecture and a registration flow optimized for speed and conversion.",
    features: [
      "Mobile-first responsive layout",
      "Online registration workflow",
      "Speaker profile and agenda sections",
      "SEO and performance optimization",
    ],
    outcome:
      "The team was able to manage signups and event communication from one place with a smoother participant experience.",
  },
  {
    slug: "content-and-media-management-portal",
    title: "Content and Media Management Portal",
    category: "Web App",
    summary:
      "Built a centralized web app for content teams to upload media, publish announcements, organize categories, and monitor audience engagement in one dashboard.",
    image: "/eventPageBg.png",
    challenge:
      "Content operations were fragmented across multiple tools, creating delays in publishing and poor visibility for teams.",
    solution:
      "We developed a unified internal portal that streamlined content publishing, media organization, and reporting.",
    features: [
      "Role-based content management",
      "Media library with category organization",
      "Announcement publishing workflow",
      "Engagement tracking dashboard",
    ],
    outcome:
      "The organization reduced manual coordination and improved publishing turnaround time across teams.",
  },
  {
    slug: "online-ticketing-and-analytics-dashboard",
    title: "Online Ticketing and Analytics Dashboard",
    category: "Dashboard",
    summary:
      "Created an operations dashboard to track ticket sales in real time, monitor campaign results, and prepare event-day check-ins with actionable insights.",
    image: "/section1.png",
    challenge:
      "The event operations team needed real-time visibility into ticket sales and campaign performance before event day.",
    solution:
      "We delivered a monitoring dashboard with clear visual metrics and check-in readiness tracking for operations staff.",
    features: [
      "Live sales and revenue visibility",
      "Campaign channel performance tracking",
      "Check-in readiness indicators",
      "Actionable reporting cards",
    ],
    outcome:
      "Teams gained faster decision-making with accurate metrics and better event-day planning confidence.",
  },
  {
    slug: "campus-club-web-portal",
    title: "Campus Club Web Portal",
    category: "Portal",
    summary:
      "Developed a modern portal for student organizations to publish updates, showcase events, manage member inquiries, and streamline communication workflows.",
    image: "/webdevelopment.png",
    challenge:
      "Student organizations needed a simple digital hub to communicate updates and manage event-related interactions.",
    solution:
      "We created a modern web portal that supports content publishing, event storytelling, and member communication in one place.",
    features: [
      "Announcement and news publishing",
      "Event showcase sections",
      "Inquiry management flow",
      "Admin-friendly content updates",
    ],
    outcome:
      "The club improved engagement and reduced communication overhead by centralizing updates and inquiries.",
  },
  {
    slug: "moraspirit-360-corporate-website",
    title: "MoraSpirit 360 Corporate Website",
    category: "Marketing Website",
    summary:
      "Designed and developed a modern, mobile-first website to showcase services, campaigns, and event storytelling with fast load times and clear conversion paths.",
    image: "/webdevelopment.png",
    challenge:
      "The team needed one polished digital front door to present services clearly, build trust quickly, and drive inbound requests from different audience segments.",
    solution:
      "We delivered a structured multi-page experience with service-focused navigation, strong visual hierarchy, and reusable components that support future content growth.",
    features: [
      "Responsive page architecture across desktop and mobile",
      "Service-focused navigation and conversion CTAs",
      "Reusable section components for rapid content updates",
      "Performance-conscious media and layout handling",
    ],
    outcome:
      "MoraSpirit 360 now has a scalable public-facing platform that communicates value faster and supports consistent lead generation.",
  },
  {
    slug: "moraspirit-member-and-recruitment-admin-portal",
    title: "Member and Recruitment Admin Portal",
    category: "Operations Web App",
    summary:
      "Built a role-aware internal web app to manage recruitment, members, roles, pillars, forms, and flyers from a unified administrative interface.",
    image: "/eventPageBg.png",
    challenge:
      "Operational work was spread across manual processes, making it hard to coordinate recruitment, member records, and cross-pillar responsibilities at scale.",
    solution:
      "We implemented a centralized admin portal with protected routes, permission-based access, and workflow-focused modules tailored to organizational operations.",
    features: [
      "Recruitment pipeline with application review workflows",
      "Member and profile management modules",
      "Role, permission, and pillar administration",
      "Custom forms and flyer management capabilities",
    ],
    outcome:
      "The team reduced admin overhead and improved operational consistency by moving key processes into one secure platform.",
  },
  {
    slug: "iam-and-permission-management-service",
    title: "IAM and Permission Management Service",
    category: "Backend Service",
    summary:
      "Engineered a dedicated identity and access layer with JWT authentication, role-based access control, permission overrides, and secure account lifecycle flows.",
    image: "/section1.png",
    challenge:
      "A growing organization needed strong access governance so the right people could manage the right functions without introducing security or process risks.",
    solution:
      "We built an IAM service that centralizes authentication, roles, permissions, and member lifecycle controls, then integrated it with frontend route protection.",
    features: [
      "JWT access and refresh token authentication",
      "Role-based access control with granular permissions",
      "User-specific permission override handling",
      "Secure password reset and account management flows",
    ],
    outcome:
      "The platform now enforces clear authorization boundaries, improving both security posture and day-to-day operational control.",
  },
  {
    slug: "api-gateway-and-modular-core-services",
    title: "API Gateway and Modular Core Services",
    category: "Platform Engineering",
    summary:
      "Implemented a service-oriented backend architecture with an API gateway and domain-based core services for forms, members, tasks, complaints, and flyers.",
    image: "/marketingHero.png",
    challenge:
      "As platform capabilities expanded, the team needed clean service boundaries, consistent security controls, and easier scaling across multiple backend domains.",
    solution:
      "We introduced an API gateway with proxy-based routing, rate limiting, and permission checks, backed by focused services for core organizational workflows.",
    features: [
      "Gateway-level routing for IAM, core, and CMS services",
      "Centralized middleware for security and rate limiting",
      "Permission-aware request forwarding",
      "Modular services for tasks, forms, complaints, and member flows",
    ],
    outcome:
      "The engineering stack became more maintainable, secure, and ready for future feature expansion across the MoraSpirit ecosystem.",
  },
];
