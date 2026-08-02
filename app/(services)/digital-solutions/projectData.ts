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
    slug: "epilogue-quiz",
    title: "Epilogue Quiz",
    category: "Interactive Quiz Platform",
    summary:
      "Epilogue Quiz is an interactive digital quiz experience created for the Epilogue event, designed to engage participants with questions, scoring, and a polished event-friendly experience.",
    image: "/digital_solution/epilogue-quiz.avif",
    challenge:
      "Epilogue Quiz is an interactive digital quiz experience created for the Epilogue event, designed to engage participants with questions, scoring, and a polished event-friendly experience.",
    solution:
      "Epilogue Quiz is an interactive digital quiz experience created for the Epilogue event, designed to engage participants with questions, scoring, and a polished event-friendly experience.",
    features: [
      "Interactive digital quiz experience",
      "Event-friendly participant flow",
      "Scoring and result display",
      "Polished responsive experience",
    ],
    outcome:
      "Epilogue Quiz is an interactive digital quiz experience created for the Epilogue event, designed to engage participants with questions, scoring, and a polished event-friendly experience.",
  },
  {
    slug: "epilogue-ctf-where-curiosity-meets-cybersecurity",
    title: "Epilogue CTF: Where Curiosity Meets Cybersecurity",
    category: "Interactive Cybersecurity Challenge",
    summary:
      "An immersive Capture The Flag experience that challenged participants to think beyond the obvious.",
    image: "/digital_solution/epilogue-ctf.avif",
    challenge:
      "Cybersecurity, more than writing code or running security tools; it is about observation, critical thinking, and solving problems creatively.",
    solution:
      "Epilogue CTF was designed around this philosophy, transforming a traditional Capture The Flag challenge into an immersive digital experience inspired by the atmosphere of the Epilogue '26 concert.",
    features: [
      "Cyberpunk-inspired interface",
      "Problem-solving focused challenge design",
      "Modern web technologies",
    ],
    outcome:
      "The platform encouraged careful exploration, question assumptions, and uncover hidden clues through thoughtful interaction.",
  },
  {
    slug: "engineering-an-immersive-web-experience-for-epilogue-26",
    title: "Engineering an Immersive Web Experience for Epilogue '26",
    category: "Interactive Event Portal",
    summary:
      "A React-based event experience that blends cinematic animation, interactive sections, and a modern portal for Epilogue '26.",
    image: "/digital_solution/epilogue-immersive-web-experience.avif",
    challenge:
      "The goal was to create a web experience that felt immersive from the first interaction while still remaining easy to navigate and responsive.",
    solution:
      "We built a screen-based interface with animated transitions, modular React components, and a visual system tailored to the Epilogue '26 identity.",
    features: [
      "Interactive landing experience",
      "Screen-based event portal",
      "Animation-driven user experience",
    ],
    outcome:
      "The result was a memorable digital journey that balanced storytelling, interaction, and performance.",
  },
  {
    slug: "simplifying-student-submissions-with-google-apps-script",
    title: "Simplifying Student Submissions with Google Apps Script",
    category: "Cloud-Based Submission Platform",
    summary:
      "Building an automated, cloud-based submission platform for efficient file collection and management.",
    image: "/digital_solution/simplifying-student-submissions-with-google-apps-script.avif",
    challenge:
      "Student submissions were scattered across manual processes, making file collection, organization, and tracking difficult to manage.",
    solution:
      "We built an automated submission workflow using Google Apps Script and Google Workspace services to streamline collection and record management.",
    features: [
      "Automated submission handling",
      "Google Workspace integration",
      "Cloud-based file collection",
    ],
    outcome:
      "The platform reduced administrative overhead and made student file submissions easier to manage.",
  },
  {
    slug: "university-event-registration-platform",
    title: "University Event Registration Platform",
    category: "Website",
    summary:
      "Designed and developed a responsive event website with online registration, speaker profiles, schedule management, and mobile-first performance optimization.",
    image: "/digital_solution/university-event-registration-platform.avif",
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
    image: "/digital_solution/content-and-media-management-portal.avif",
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
    image: "/digital_solution/online-ticketing-and-analytics-dashboard.avif",
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
    slug: "moraspirit-360-corporate-website",
    title: "MoraSpirit 360 Corporate Website",
    category: "Marketing Website",
    summary:
      "Designed and developed a modern, mobile-first website to showcase services, campaigns, and event storytelling with fast load times and clear conversion paths.",
    image: "/digital_solution/moraspirit-360-corporate-website.avif",
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
    image: "/digital_solution/moraspirit-member-and-recruitment-admin-portal.avif",
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
    image: "/digital_solution/IAM-and-Permission-Management-Service.avif",
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
    image: "/digital_solution/API-Gateway-and-Modular-Core-Services.avif",
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
  {
    slug: "spirit-of-hope-2025-charity-platform",
    title: "Spirit of Hope 2025 Charity Platform",
    category: "Full-Stack Platform",
    summary:
      "Built a charity campaign platform with a Next.js frontend and Express + MySQL backend to support sponsorship communication and donor contact workflows.",
    image: "/digital_solution/spirit-of-hope-2025-charity-platform.avif",
    challenge:
      "The campaign needed a clear digital presence to communicate impact, explain sponsorship options, and collect structured supporter inquiries.",
    solution:
      "We developed a full-stack website with purpose-led sections, sponsorship tiers, donation guidance, and a backend contact capture API.",
    features: [
      "Next.js campaign website with modern responsive UI",
      "Express API with MySQL-backed contact form storage",
      "Structured sections for sponsorship and donation flows",
      "Deploy-ready project split into client and server services",
    ],
    outcome:
      "The team gained a reliable campaign platform that improves outreach clarity and streamlines inquiry handling for humanitarian work.",
  },
  {
    slug: "spiritx-2025-hackathon-website",
    title: "SpiritX 2025 Hackathon Website",
    category: "Event Website",
    summary:
      "Developed the official hackathon website for SpiritX 2025 with event storytelling, timelines, awards, FAQs, and registration-focused structure.",
    image: "/digital_solution/spiritx.avif",
    challenge:
      "A large hackathon needed a high-impact event site that could present details clearly and drive participant action quickly.",
    solution:
      "We built a fast, SEO-aware Next.js site with modular sections for agenda, challenge context, materials, contact points, and event metadata.",
    features: [
      "Single-page event journey with key sections and CTAs",
      "Structured metadata and discoverability enhancements",
      "Interactive UI components for timeline and FAQs",
      "Scalable component-driven architecture for future events",
    ],
    outcome:
      "SpiritX received a polished event web presence that improved information access and strengthened participant experience.",
  },
  {
    slug: "interuni-live-scores-broadcasting-platform",
    title: "InterUni Live Scores Broadcasting Platform",
    category: "Sports Platform",
    summary:
      "Delivered a university sports portal for score updates, points tables, draws, and event summaries across inter-university competitions.",
    image: "/digital_solution/interuni-live-scores-broadcasting-platform.avif",
    challenge:
      "Sports followers needed one place for real-time match context and standings during high-volume inter-university events.",
    solution:
      "We built a web platform that combines live updates, summary panels, and ranking views backed by a database-driven update workflow.",
    features: [
      "Live score and summary display views",
      "Points table and event draw modules",
      "Database-backed update pipeline",
      "Tournament-focused multi-page information architecture",
    ],
    outcome:
      "The platform improved visibility of competition progress and gave teams and supporters a centralized source of match intelligence.",
  },
  {
    slug: "moraspirit-mobile-app-android",
    title: "MoraSpirit Mobile App (Android)",
    category: "Mobile Application",
    summary:
      "Built and maintained the native Android MoraSpirit app covering articles, events, match updates, points tables, timetables, and live content access.",
    image: "/digital_solution/moraspirit-mobile-app-android.avif",
    challenge:
      "Users needed on-the-go access to MoraSpirit sports content in a unified app rather than fragmented web-only touchpoints.",
    solution:
      "We implemented a native Android app architecture with dedicated modules for media, events, points, schedules, and API-driven updates.",
    features: [
      "Native Android modules for sports data and content feeds",
      "Articles, events, matches, and timetable experiences",
      "Points and ranking views for inter-university campaigns",
      "Firebase messaging support and API integration",
    ],
    outcome:
      "MoraSpirit strengthened mobile engagement and made sports information more accessible to users throughout active campaigns.",
  },

  {
    slug: "payload-cms-content-service",
    title: "Payload CMS Content Service",
    category: "CMS Backend",
    summary:
      "Engineered a Payload CMS backend for structured content operations, including posts, projects, categories, tags, media, and role-aware access policies.",
    image: "/marketing.avif",
    challenge:
      "Content teams needed a maintainable CMS with cleaner permission control and extensible collection architecture.",
    solution:
      "We implemented a Payload-based service with custom collection definitions, permission bit logic, and content lifecycle controls.",
    features: [
      "Collection architecture for posts, projects, and media",
      "Role and permission-bit based access control",
      "Draft and publish workflow enforcement",
      "Headless-ready content service structure",
    ],
    outcome:
      "The organization gained a flexible content platform that improves governance and supports future publishing scale.",
  },
];
