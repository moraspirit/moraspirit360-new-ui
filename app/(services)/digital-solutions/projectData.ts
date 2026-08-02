export type ArticleBlock =
  | { type: "heading"; level?: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "meta"; rows: { label: string; value: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; variant?: "phone" | "wide" }
  | { type: "video"; title: string; url: string; description?: string };

export type ProjectDetail = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  challenge?: string;
  solution?: string;
  features?: string[];
  outcome?: string;
  article?: ArticleBlock[];
};

export const digitalProjects: ProjectDetail[] = [
  {
    slug: "epilogue-online-ticketing-and-qr-verification",
    title: "Epilogue Online Ticketing & QR Verification System",
    category: "Ticketing Platform",
    summary:
      "How MoraSpirit 360 built a secure end-to-end ticketing pipeline for Epilogue '26 — from online reservation to gate-day QR checks.",
    image: "/digital_solution/epilogue-ticketing.avif",
    article: [
      {
        type: "paragraph",
        text: "Selling thousands of concert tickets is only half the problem. The harder half is making sure every ticket that reaches the gate is authentic, issued correctly, and impossible to forge or reuse. For Epilogue '26, MoraSpirit 360 built a complete online ticketing and QR verification system that covers purchase, payment review, e-ticket delivery, and live event-day scanning.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-ticketing-1.avif",
        alt: "Online ticket reservation form on epilogue.moraspirit.com",
      },
      {
        type: "paragraph",
        text: "Online ticket reservation form on epilogue.moraspirit.com",
      },
      {
        type: "heading",
        text: "At a Glance",
      },
      {
        type: "meta",
        rows: [
          {
            label: "Project",
            value: "Epilogue Online Ticketing & QR Verification",
          },
          {
            label: "Purpose",
            value:
              "Secure ticket sales, e-ticket issuance, and real-time gate/member verification for Epilogue '26.",
          },
          {
            label: "Live Surfaces",
            value:
              "epilogue.moraspirit.com (purchase) · ticket.moraspirit.com (admin, gate & member scanners)",
          },
          {
            label: "Audience",
            value:
              "University of Moratuwa undergraduates, alumni, and event operations staff",
          },
          {
            label: "Ticket Tiers",
            value:
              "Standard (Rs. 1,400) · Premium (Rs. 1,800) · Alumni (Rs. 2,500) · Limited Premium Bundles",
          },
          {
            label: "Technology",
            value:
              "Node.js, Express, SQLite, HMAC-signed QR codes, Sharp, Nodemailer, Google Sheets/Drive, browser QR scanners",
          },
        ],
      },
      {
        type: "heading",
        text: "Project Overview",
      },
      {
        type: "paragraph",
        text: "The Epilogue ticketing system is a purpose-built operations platform for a large campus music festival. Buyers reserve tickets through a guided online form, upload a bank payment slip, and wait for organizer approval. Once approved, the system generates cryptographically signed QR e-tickets and delivers them by email.",
      },
      {
        type: "paragraph",
        text: "On event day, staff use dedicated mobile web portals — Gate Entrance and Member Verification — to scan tickets in real time. Fake, unissued, or already-used tickets are blocked instantly, with security alerts sent to organizers when fraud patterns appear.",
      },
      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "Traditional campus ticket sales often rely on spreadsheets, screenshots of bank transfers, and paper stubs. That approach breaks down when attendance grows into the thousands, when alumni and student tiers need different pricing, and when counterfeit QR images start circulating on social media.",
      },
      {
        type: "paragraph",
        text: "Epilogue needed a system that could:",
      },
      {
        type: "list",
        items: [
          "Accept online reservations with payment-slip uploads.",
          "Support Standard, Premium, Alumni, and limited bundle pricing.",
          "Issue branded e-tickets that are hard to forge.",
          "Verify tickets at the gate within seconds using phones — not dedicated hardware.",
          "Prevent double entry while still allowing multi-ticket purchases.",
          "Give admins a live view of sales, issuance, and scan activity.",
        ],
      },
      {
        type: "heading",
        text: "The Solution",
      },
      {
        type: "paragraph",
        text: "MoraSpirit 360 designed a full pipeline: public reservation on the festival website, a secure backend for approval and issuance, and browser-based scanners for event day. Every issued ticket carries an HMAC-signed token. Scanners verify the signature before trusting any buyer details, so a copied or edited QR cannot pass as valid.",
      },
      {
        type: "heading",
        text: "Buyer Journey",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Online Reservation",
      },
      {
        type: "paragraph",
        text: "From epilogue.moraspirit.com, buyers open the Ticket Reservation modal and enter name, contact number, email, university index number, batch, faculty, and department. Students choose Standard and/or Premium quantities; Alumni buyers are routed to the Alumni ticket tier automatically.",
      },
      {
        type: "paragraph",
        text: "A live calculated total updates as quantities change. Buyers then upload a payment slip (JPEG, PNG, WEBP, or PDF, max 5MB) before submitting. The backend stores the request, syncs details to Google Sheets, and uploads the slip to Google Drive for finance review.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Approval & E-Ticket Issuance",
      },
      {
        type: "paragraph",
        text: "Organizers review pending requests in the Admin Console. After payment confirmation, the system generates a unique ticket ID, creates an HMAC-signed QR token, and renders a branded e-ticket image. Alumni tickets use dedicated Early Bird / Final design templates; general tickets use an SVG template converted to a high-quality image.",
      },
      {
        type: "paragraph",
        text: "Confirmed tickets are emailed to the buyer with the e-ticket attached. Multi-ticket purchases receive individual QR codes (sub-tokens), so each person in a group can be checked in separately.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-ticketing-3.avif",
        alt: "Alumni e-ticket design with QR placement for gate scanning",
      },
      {
        type: "paragraph",
        text: "Alumni e-ticket design with QR placement for gate scanning",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Event-Day Verification",
      },
      {
        type: "paragraph",
        text: "Two scanner portals handle the door:",
      },
      {
        type: "list",
        items: [
          "Gate Entrance Portal — verifies authenticity and shows buyer details. Re-scans are logged but do not block soft re-entry checks at the perimeter.",
          "Member Verification Portal — the strict check-in step. Valid tickets can be marked as entered; duplicate scans are rejected and trigger security alerts.",
        ],
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-ticketing-4.avif",
        alt: "Gate Entrance Portal — mobile QR scanner UI",
        variant: "phone",
      },
      {
        type: "paragraph",
        text: "Gate Entrance Portal — mobile QR scanner UI",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-ticketing-5.avif",
        alt: "Admin Console authentication screen",
      },
      {
        type: "paragraph",
        text: "Admin Console authentication screen",
      },
      {
        type: "heading",
        text: "Key Features",
      },
      {
        type: "heading",
        level: 3,
        text: "Cryptographic QR Tokens",
      },
      {
        type: "paragraph",
        text: "Each ticket token is signed with HMAC-SHA256. Scanners reject any QR whose signature does not match, even if the ticket ID looks plausible. Timing-safe comparison protects against simple timing attacks.",
      },
      {
        type: "heading",
        level: 3,
        text: "Anti-Fraud & Duplicate Protection",
      },
      {
        type: "paragraph",
        text: "Fake tickets, unissued tickets, and already-checked-in sub-tokens return clear statuses to staff. Critical cases — forged QRs and duplicate entry attempts — dispatch real-time security alert emails with scanner name, buyer details, and timestamps.",
      },
      {
        type: "heading",
        level: 3,
        text: "Admin Operations Console",
      },
      {
        type: "paragraph",
        text: "A PIN-protected dashboard lets organizers sync from Google Sheets, trigger backups, test SMTP, monitor ticket counts, and manage issuance. The admin surface is intentionally separated onto ticket.moraspirit.com so public marketing traffic and operations traffic stay cleanly split.",
      },
      {
        type: "heading",
        level: 3,
        text: "Premium Bundle Offers",
      },
      {
        type: "paragraph",
        text: "Limited Premium bundles (5 tickets at a discounted package price, capped inventory) were tracked server-side. Bundle availability and sell-out state could be exposed to the website so marketing components appear and disappear automatically as inventory changes.",
      },
      {
        type: "heading",
        text: "System Architecture",
      },
      {
        type: "paragraph",
        text: "The backend is a Node.js / Express service with SQLite for ticket state, scan logs, and operational ledgers. Supporting services handle QR generation, e-ticket rendering (Sharp), SMTP delivery (Nodemailer), and Google Sheets / Drive sync for finance and backup workflows.",
      },
      {
        type: "paragraph",
        text: "Static festival marketing content is served from epilogue.moraspirit.com. Scanner and admin routes on that host redirect to ticket.moraspirit.com, keeping verification tools on a dedicated operations domain.",
      },
      {
        type: "heading",
        text: "Technology Stack",
      },
      {
        type: "table",
        headers: ["Technology", "Contribution"],
        rows: [
          [
            "Node.js + Express",
            "API server, scanners, admin routes, rate limiting",
          ],
          [
            "SQLite (better-sqlite3)",
            "Tickets, scan logs, bundle stats, operational ledger",
          ],
          ["HMAC-SHA256 QR tokens", "Forge-resistant ticket authentication"],
          ["qr-scanner (browser)", "Camera-based scanning on phones and tablets"],
          [
            "Sharp",
            "E-ticket image composition and Alumni template overlays",
          ],
          ["Nodemailer", "E-ticket delivery and security alerts"],
          [
            "Google Sheets / Drive",
            "Payment review workflow and slip storage",
          ],
          [
            "Multer + Helmet + CORS",
            "Upload handling and baseline API hardening",
          ],
        ],
      },
      {
        type: "heading",
        text: "Technical Highlights",
      },
      {
        type: "list",
        items: [
          "End-to-end flow from payment slip upload to emailed e-ticket",
          "HMAC-signed QR codes with high error-correction for print/phone glare",
          "Separate Gate and Member scanner roles for perimeter vs check-in",
          "Sub-token support for multi-ticket purchases",
          "Real-time fake/duplicate security email alerts",
          "Google Sheets sync and Drive slip archival for finance teams",
          "Domain split between marketing site and operations scanners",
          "Rate-limited scan endpoints for event-day traffic spikes",
        ],
      },
      {
        type: "heading",
        text: "Outcome",
      },
      {
        type: "paragraph",
        text: "The Epilogue ticketing stack gave MoraSpirit 360 a reliable way to sell and verify festival tickets without paper stubs or fragile spreadsheet workflows. Buyers received branded digital tickets; door staff verified authenticity in seconds; and organizers retained a clear audit trail from payment to entry.",
      },
      {
        type: "paragraph",
        text: "Together with the public festival website, the system formed the operational backbone of Epilogue '26 — connecting excitement online to a controlled, trustworthy experience at the gate.",
      },
      {
        type: "heading",
        text: "About MoraSpirit",
      },
      {
        type: "paragraph",
        text: "Founded in 2009 by University of Moratuwa undergraduates, MoraSpirit began as a university sports media platform and has grown into a student-run initiative behind events, campaigns, and digital products across the university — Epilogue among them. MoraSpirit 360 continues that work by engineering the digital systems that make large campus experiences possible.",
      },
    ],
  },
  {
    slug: "epilogue-26-official-website",
    title: "Epilogue '26 Official Website",
    category: "Festival Website",
    summary:
      "A cinematic, conversion-focused festival website for epilogue.moraspirit.com — built to introduce the night, showcase the lineup, and drive ticket sales.",
    image: "/digital_solution/epilogue-official-website.avif",
    article: [
      {
        type: "paragraph",
        text: "Epilogue '26 needed more than an event landing page. It needed a digital stage — a site that could carry the atmosphere of a university music festival, introduce headliners with cinematic motion, and convert visitors into ticket buyers. The result is epilogue.moraspirit.com: a React + Vite experience designed by MoraSpirit 360 as the public face of Epilogue.",
      },
      {
        type: "heading",
        text: "At a Glance",
      },
      {
        type: "meta",
        rows: [
          { label: "Project", value: "Epilogue '26 Official Website" },
          { label: "Live URL", value: "https://epilogue.moraspirit.com" },
          {
            label: "Purpose",
            value:
              "Festival storytelling, lineup reveal, gallery, and online ticket reservation entry point.",
          },
          {
            label: "Organizer",
            value: "MoraSpirit 360 — University of Moratuwa",
          },
          {
            label: "Event",
            value:
              "Epilogue '26 · July 28, 2026 · Venue: Lagaan · 6:00 PM onwards",
          },
          {
            label: "Technology",
            value:
              "React 19, Vite, Tailwind CSS, MUI Icons, react-kino scroll scenes, Three.js / R3F, Lottie",
          },
        ],
      },
      {
        type: "heading",
        text: "Project Overview",
      },
      {
        type: "paragraph",
        text: "The Epilogue website is a single-page festival experience. Visitors land on a dark, neon-accented hero with the Epilogue brand, a short promise of the night, a live countdown, and a full-bleed concert atmosphere. From there, scroll-driven sections reveal the headlining act, artist lineup, photo gallery, festival story, and organizer presence — with Buy Tickets available throughout.",
      },
      {
        type: "paragraph",
        text: "Ticket purchase is not a separate website. A reservation modal opens in place, collecting buyer details and payment slips before handing off to the ticketing backend. That keeps marketing and conversion in one continuous journey.",
      },
      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "Festival sites often fail in one of two ways: they look generic, or they look impressive but are hard to use on a phone in a rush. Epilogue needed both presence and clarity — a first viewport that feels like the event, plus an obvious path to buy tickets.",
      },
      {
        type: "paragraph",
        text: "The build also had to:",
      },
      {
        type: "list",
        items: [
          "Present Epilogue as a brand-first experience, not a generic event template.",
          "Highlight Daddy as the main-stage headliner and tease the wider artist lineup.",
          "Stay fast and readable on mobile devices.",
          "Integrate Koko Pay Later and the online reservation flow without breaking immersion.",
          "Support immersive motion (loader, parallax, scroll scenes) without sacrificing accessibility basics.",
        ],
      },
      {
        type: "heading",
        text: "The Solution",
      },
      {
        type: "paragraph",
        text: "MoraSpirit 360 engineered a cinematic single-page app with a deliberate section sequence: Loader → Hero → Lineup → Gallery → Experience → Organizer → Footer, plus Lightbox and Ticket Form overlays. Motion is used to create hierarchy and arrival — not noise — while ticket CTAs remain persistent in the navigation.",
      },
      {
        type: "heading",
        text: "Website Experience",
      },
      {
        type: "heading",
        level: 3,
        text: "Immersive Opening",
      },
      {
        type: "paragraph",
        text: "A branded loader builds anticipation before the page splits open into the hero. The hero pairs background concert video with a 3D-parallax artist cutout, floating brand mark, short supporting line, and a glass-panel countdown. Event date, venue, and start time sit as secondary logistics — never overpowering the brand.",
      },
      {
        type: "heading",
        level: 3,
        text: "Headlining & Artist Lineup",
      },
      {
        type: "paragraph",
        text: "As visitors scroll, the hero yields to the Headlining section featuring Daddy — complete with portrait treatment, Main Stage badge, and band story. Below, the Artist Lineup section continues the narrative with clue-style cards and copy that keeps curiosity high while the full roster builds excitement for the night.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-official-website-2.avif",
        alt: "Headlining section featuring Daddy and the Artist Lineup reveal",
      },
      {
        type: "paragraph",
        text: "Headlining section featuring Daddy and the Artist Lineup reveal",
      },
      {
        type: "heading",
        level: 3,
        text: "Gallery & Experience",
      },
      {
        type: "paragraph",
        text: "A gallery of festival and MoraSpirit imagery opens in a lightbox for closer viewing. The Experience section answers “What is Epilogue?” through three focused stories — The Festival, The Vibe, and The Community — grounding the spectacle in the University of Moratuwa audience and MoraSpirit 360’s organizing role.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-official-website-3.avif",
        alt: "Experience section — festival story, vibe, and community",
      },
      {
        type: "paragraph",
        text: "Experience section — festival story, vibe, and community",
      },
      {
        type: "heading",
        level: 3,
        text: "Ticket Reservation Modal",
      },
      {
        type: "paragraph",
        text: "Buy Tickets opens a dark-themed reservation form without leaving the page. Buyers enter contact and university details, choose Standard (Rs. 1,400) and Premium (Rs. 1,800) quantities — or Alumni pricing when applicable — see a live calculated total, and upload a payment slip. Koko Pay Later remains available from the nav as an alternate payment path.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-official-website-4.avif",
        alt: "In-page ticket reservation modal with tier selection and live total",
      },
      {
        type: "paragraph",
        text: "In-page ticket reservation modal with tier selection and live total",
      },
      {
        type: "heading",
        text: "Key Features",
      },
      {
        type: "list",
        items: [
          "Brand-led cinematic hero with video atmosphere and artist parallax",
          "Scroll-pinned scene transitions using react-kino",
          "Persistent Buy Tickets CTA and Koko Pay Later entry point",
          "Headlining spotlight for Daddy and clue-driven artist lineup",
          "Lightbox gallery for immersive media browsing",
          "Experience storytelling for festival, vibe, and community",
          "Organizer / social presence for MoraSpirit channels",
          "Responsive layout tuned for desktop spectacle and mobile access",
          "Reveal-on-scroll animations for section arrival",
        ],
      },
      {
        type: "heading",
        text: "Design Direction",
      },
      {
        type: "paragraph",
        text: "The visual language is night-festival: deep charcoal surfaces, neon green accents, glass panels, and high-contrast type. The first viewport is one composition — brand, one supporting line, countdown/CTA energy, and a dominant visual plane — rather than a dashboard of competing promos. Motion reinforces arrival: loader split, floating brand, cursor glow, and parallax depth on fine-pointer devices.",
      },
      {
        type: "heading",
        text: "Technology Stack",
      },
      {
        type: "table",
        headers: ["Technology", "Contribution"],
        rows: [
          ["React 19", "Component-based UI and modal/overlay state"],
          ["Vite", "Fast local development and optimized production builds"],
          [
            "Tailwind CSS",
            "Responsive layout, dark festival theme, utility styling",
          ],
          [
            "react-kino",
            "Pinned scroll scenes and hero progress-driven animation",
          ],
          [
            "Three.js / React Three Fiber",
            "Immersive 3D-capable visual layer where used",
          ],
          ["MUI Icons", "Consistent iconography across experience sections"],
          ["Lottie", "Lightweight motion assets for branded moments"],
          [
            "Static deploy + CDN hosting",
            "Public delivery via epilogue.moraspirit.com",
          ],
        ],
      },
      {
        type: "heading",
        text: "Technical Highlights",
      },
      {
        type: "list",
        items: [
          "Single-page architecture with lazy overlays for lightbox and ticket form",
          "Progress-driven hero animation tied to scroll pin duration",
          "Intersection Observer reveal system for section storytelling",
          "Mobile menu, reduced-motion awareness, and overflow locking for overlays",
          "Build pipeline that publishes frontend assets alongside the ticketing stack",
          "Clear separation: marketing site for storytelling, ticket domain for ops scanners",
        ],
      },
      {
        type: "heading",
        text: "Outcome",
      },
      {
        type: "paragraph",
        text: "epilogue.moraspirit.com became the public front door for Epilogue '26 — a site that sells the night as much as it sells the ticket. Visitors meet the brand first, discover the lineup through cinematic sections, and can start a reservation without breaking the experience.",
      },
      {
        type: "paragraph",
        text: "Paired with the online ticketing and QR verification system, the website completes the digital loop: attract, convert, issue, and verify — all under the MoraSpirit 360 umbrella.",
      },
      {
        type: "heading",
        text: "About MoraSpirit",
      },
      {
        type: "paragraph",
        text: "Founded in 2009 by University of Moratuwa undergraduates, MoraSpirit began as a university sports media platform and has grown into a broader student-run initiative behind events, campaigns, and digital platforms. MoraSpirit 360 builds the product experiences — including Epilogue’s official website — that turn campus moments into lasting digital stories.",
      },
    ],
  },
  {
    slug: "epilogue-runner",
    title: "Epilogue Runner",
    category: "Interactive Browser Game",
    summary:
      "How Moraspirit’s Web & Technology team built a secure endless-runner for Epilogue26 — and crowned three weekly high-score winners",
    image: "/digital_solution/epilogue-runner.avif",
    article: [
      {
        type: "paragraph",
        text: "Moraspirit · Web and Technology Pillar · Epilogue Concert · 28 July",
      },

      {
        type: "paragraph",
        text: "Epilogue Runner — playable in the browser for Epilogue26.",
      },
      {
        type: "heading",
        text: "A game built for Epilogue26",
      },
      {
        type: "paragraph",
        text: "For Epilogue26, Moraspirit’s Web and Technology pillar set out to do more than announce a concert date. We built a full browser game — Epilogue Runner — so university students could compete for concert tickets by climbing a live leaderboard. The brief was simple: make it fun, make it fair, and make sure the highest scores were real.",
      },
      {
        type: "paragraph",
        text: "The result was a 3D endless runner, playable in the browser, backed by a secure Go API and MySQL leaderboard. Players registered with their student index number, ran for coins, and watched the rankings update in real time. Each week until concert day (28 July), the student in first place won a ticket to Epilogue.",
      },
      {
        type: "heading",
        text: "What we built",
      },
      {
        type: "paragraph",
        text: "Epilogue Runner is a Godot HTML5 (WASM) endless runner themed around the Epilogue concert. Players dodge obstacles, collect coins, and push for a personal best on a public leaderboard. The game shipped with:",
      },
      {
        type: "list",
        items: [
          "A polished menu branded for Epilogue — including “Win a Ticket” and ticket purchase links to epilogue.moraspirit.com.",
          "Register / login with student index number, name, and phone (no password friction for students).",
          "Live leaderboard (top 10) and personal rank for logged-in players.",
          "A production Go backend with session signing, server-side map seeds, and replay verification so scores could not be forged from the browser.",
          "Docker-based deployment and a web export hosted for the event audience.",
        ],
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-runner-2.avif",
        alt: "Main menu: EPILOGUE branding, play, leaderboard, and ticket CTA.",
      },
      {
        type: "paragraph",
        text: "Main menu: EPILOGUE branding, play, leaderboard, and ticket CTA.",
      },
      {
        type: "heading",
        text: "How the competition worked",
      },
      {
        type: "paragraph",
        text: "The prize loop was designed for the weeks leading up to the concert:",
      },
      {
        type: "list",
        items: [
          "Students register and play as many runs as they like.",
          "Only verified coin totals count toward best score on the leaderboard.",
          "The student in first place wins a ticket to the Epilogue concert.",
          "A new winner is selected each week until concert day — three weekly winners in total for Epilogue26.",
        ],
      },
      {
        type: "paragraph",
        text: "That weekly reset kept competition fresh: early leaders could be challenged, and new players still had a clear path to the podium before 28 July.",
      },
      {
        type: "heading",
        text: "By the numbers",
      },
      {
        type: "paragraph",
        text: "The campaign performed strongly across the student community:",
      },
      {
        type: "meta",
        rows: [
          { label: "Registered players", value: "500+" },
          { label: "Runs completed", value: "20,000+" },
          {
            label: "Weekly ticket winners",
            value: "3 (one per week until concert day)",
          },
          { label: "Outcome", value: "Successfully delivered for Epilogue26" },
        ],
      },
      {
        type: "paragraph",
        text: "Those numbers reflect real engagement — not anonymous clicks. Every ranked score was tied to a registered account and accepted only after server-side verification.",
      },
      {
        type: "heading",
        text: "Fair play: why winners were trustworthy",
      },
      {
        type: "paragraph",
        text: "Browser games are easy to tamper with if the client is trusted. For a ticket prize, that was not acceptable. Our architecture treated the browser as untrusted and made the server the source of truth:",
      },
      {
        type: "list",
        items: [
          "Players log in with JWT-backed accounts; scores bind to a real student identity.",
          "Each run uses a server-issued seed so coins and obstacles are deterministic.",
          "The client sends a move log (lane changes, jumps, pickups) — not a raw “coins: 999” claim.",
          "The Go backend regenerates the map and replays the log; only verified coins update the leaderboard.",
          "Signed requests (HMAC + session + nonce) block forged submissions.",
        ],
      },
      {
        type: "paragraph",
        text: "In short: the highest score on the board was a score the server could re-prove. That let us announce weekly winners with confidence.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-runner-3.avif",
        alt: "In-browser game view / web export asset",
        variant: "phone",
      },
      {
        type: "paragraph",
        text: "In-browser game view / web export asset used for",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-runner-4.avif",
        alt: "Epilogue Runner gameplay screenshot",
        variant: "phone",
      },
      {
        type: "heading",
        text: "Built by Moraspirit Web & Technology",
      },
      {
        type: "paragraph",
        text: "Epilogue Runner was designed and shipped by the Web and Technology pillar of Moraspirit — The Voice of University Sports in Sri Lanka. The stack combined a Godot 4 web export with a Go API, MySQL persistence, and Docker deployment suited to event traffic.",
      },
      {
        type: "paragraph",
        text: "Beyond the game loop, the project was an end-to-end product: auth UX for students, anti-cheat for fair prizes, leaderboard ops for weekly winners, and concert branding woven through menus and in-world signs.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-runner-5.avif",
        alt: "Epilogue Runner team and event context",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-runner-6.avif",
        alt: "Epilogue Runner additional project visual",
      },
      {
        type: "heading",
        text: "Looking back",
      },
      {
        type: "paragraph",
        text: "Epilogue26 asked for more than a landing page. We delivered a competitive experience that students actually played — over five hundred registered players, more than twenty thousand runs, and three weekly high-score winners heading into the 28 July concert.",
      },
      {
        type: "paragraph",
        text: "If you climbed the board, shared a run with friends, or walked away with a ticket — thank you for playing. See you at Epilogue.",
      },
      {
        type: "paragraph",
        text: "Article draft for moraspirit.com · Epilogue Runner · Epilogue26 Links: moraspirit.com · epilogue.moraspirit.com",
      },
    ],
  },
  {
    slug: "epilogue-quiz",
    title: "Epilogue Quiz: Race the Levels, Claim the Crown",
    category: "Interactive Quiz Platform",
    summary:
      "Transforming Festival Excitement into an Interactive Digital Experience",
    image: "/digital_solution/epilogue-quiz.avif",
    article: [
      {
        type: "paragraph",
        text: "Every great event deserves a memorable beginning. For Epilogue '26, that beginning was Epilogue Quiz—a live, puzzle-based competition that turned excitement into an interactive experience.",
      },
      
      {
        type: "heading",
        text: "At a Glance",
      },
      {
        type: "meta",
        rows: [
          { label: "Project", value: "Epilogue Quiz" },
          {
            label: "Purpose",
            value:
              "A live, puzzle-based competition designed to build excitement before Epilogue '26.",
          },
          {
            label: "Prize",
            value:
              "One free Epilogue '26 ticket for the first participant to complete every level.",
          },
          {
            label: "Audience",
            value:
              "University of Moratuwa undergraduates with a valid university index number.",
          },
          {
            label: "Technology",
            value:
              "Next.js 16, React 19, TypeScript, Tailwind CSS, Prisma, MySQL, Redis, and JWT Authentication.",
          },
          {
            label: "Live Demo",
            value: "epilogue-quiz-game-web-app.vercel.app",
          },
        ],
      },
      {
        type: "heading",
        text: "Project Overview",
      },
      {
        type: "paragraph",
        text: "Epilogue Quiz is a web-based competition designed exclusively for University of Moratuwa undergraduates. Built to enhance engagement before Epilogue '26, the platform challenged participants to solve sequential puzzles while competing against one another in real time.",
      },
      {
        type: "paragraph",
        text: "Unlike conventional online quizzes, progression depended entirely on performance. Each correct answer unlocked the next challenge, encouraging continuous participation and creating anticipation throughout the festival countdown.",
      },
      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "The objective extended beyond distributing free tickets. MoraSpirit wanted to create a meaningful digital experience that would maintain excitement before the festival while encouraging students to interact with the event in a memorable way.",
      },
      {
        type: "paragraph",
        text: "The solution needed to:",
      },
      {
        type: "list",
        items: [
          "Increase engagement before the event.",
          "Encourage repeat participation.",
          "Ensure fairness and transparency.",
          "Support hundreds of simultaneous users.",
          "Provide administrators with complete control over the competition.",
        ],
      },
      {
        type: "heading",
        text: "The Solutions",
      },
      {
        type: "paragraph",
        text: "Epilogue Quiz combined gamification with a modern web application to deliver an engaging user experience.",
      },
      {
        type: "paragraph",
        text: "Participants registered using their university index number before beginning a sequence of puzzle-based questions. Every correct answer unlocked the following level, while incorrect responses required players to continue solving the current challenge before progressing.",
      },
      {
        type: "paragraph",
        text: "The competition rewarded not only knowledge but also consistency, speed, and determination, creating a truly competitive environment.",
      },
      {
        type: "heading",
        text: "Player Experience",
      },
      {
        type: "paragraph",
        text: "The application was designed to be simple, intuitive, and accessible across devices.",
      },
      {
        type: "paragraph",
        text: "Players could:",
      },
      {
        type: "list",
        items: [
          "Register within seconds.",
          "Begin the first challenge immediately.",
          "Progress through sequential levels.",
          "Resume their progress at any time.",
          "Track their final score after completing the competition",
        ],
      },
      {
        type: "heading",
        text: "Key Features",
      },
      {
        type: "heading",
        level: 3,
        text: "Sequential Progression",
      },
      {
        type: "paragraph",
        text: "Questions are unlocked one at a time. Progression is validated on the server, preventing players from bypassing levels or submitting answers out of sequence.",
      },
      {
        type: "heading",
        level: 3,
        text: "Puzzle-Based Answer Interface",
      },
      {
        type: "paragraph",
        text: "Instead of a traditional text field, answers are entered letter by letter using an interactive interface inspired by crossword puzzles, making each challenge more engaging and intuitive.",
      },
      {
        type: "heading",
        level: 3,
        text: "Live Leaderboard",
      },
      {
        type: "paragraph",
        text: "A real-time leaderboard allows participants to monitor the competition while protecting personal information by displaying only the owner's university index number.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-quiz-2.avif",
        alt: "Epilogue Quiz live leaderboard",
      },
      {
        type: "heading",
        level: 3,
        text: "Administrative Dashboard",
      },
      {
        type: "paragraph",
        text: "A dedicated dashboard enables organizers to monitor registrations, manage questions, track participant progress, reorder levels, and oversee the competition in real time.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-quiz-3.avif",
        alt: "Epilogue Quiz administrative dashboard",
      },
      {
        type: "heading",
        text: "Security and Fair Play",
      },
      {
        type: "paragraph",
        text: "Fairness was a fundamental design principle throughout the platform.",
      },
      {
        type: "paragraph",
        text: "Every answer submitted by a participant is verified on the server rather than within the browser, preventing manipulation of the competition. Only the first participant to successfully complete every level is declared the winner, ensuring a transparent and trustworthy competition.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-quiz-4.avif",
        alt: "Epilogue Quiz puzzle challenge interface",
      },
      {
        type: "heading",
        text: "Technology Stack",
      },
      {
        type: "paragraph",
        text: "The application was developed using modern technologies to ensure scalability, reliability, and maintainability.",
      },
      {
        type: "heading",
        level: 3,
        text: "Fronted",
      },
      {
        type: "list",
        items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
      },
      {
        type: "heading",
        level: 3,
        text: "Backend",
      },
      {
        type: "list",
        items: ["Prisma ORM", "MySQL", "Redis"],
      },
      {
        type: "heading",
        level: 3,
        text: "Authentication and Security",
      },
      {
        type: "list",
        items: [
          "JWT Authentication",
          "bcrypt Password Hashing",
          "Password Reset Workflow",
        ],
      },
      {
        type: "heading",
        text: "Outcomes",
      },
      {
        type: "paragraph",
        text: "Epilogue Quiz successfully transformed the anticipation surrounding Epilogue '26 into an engaging digital experience. By combining competition, gamification, and modern web technologies, the platform encouraged students to return, compete with friends, and remain connected with the festival before the main event.",
      },
      {
        type: "paragraph",
        text: "More than a quiz, it demonstrated how thoughtful digital experiences can strengthen community engagement while delivering a secure, scalable, and enjoyable platform.",
      },
      {
        type: "heading",
        text: "Play Now",
      },
      {
        type: "paragraph",
        text: "Epilogue Quiz is live for anyone heading to Epilogue '26. Register and start the first level — and remember, only one player finishes first. Tickets for the night itself are available at epilogue.moraspirit.com.",
      },
      {
        type: "heading",
        text: "About MoraSpirit",
      },
      {
        type: "paragraph",
        text: "Founded in 2009 by a group of University of Moratuwa undergraduates, MoraSpirit began as a platform for university sports media coverage and has since grown into a broader student-run initiative behind events, campaigns, and digital platforms across the university — Epilogue among them.",
      },
    ],
  },
  {
    slug: "epilogue-ctf-where-curiosity-meets-cybersecurity",
    title: "Epilogue CTF: Where Curiosity Meets Cybersecurity",
    category: "Interactive Cybersecurity Challenge",
    summary:
      "An immersive Capture The Flag experience that challenged participants to think beyond the obvious.",
    image: "/digital_solution/epilogue-ctf.avif",
    article: [
      {
        type: "meta",
        rows: [
          { label: "Project", value: "Epilogue CTF – Access Terminal" },
          { label: "Category", value: "Interactive Cybersecurity Challenge" },
          { label: "Industry", value: "Cybersecurity & Web Development" },
          {
            label: "Technology Stack",
            value: "Next.js, React, TypeScript, Tailwind CSS",
          },
          {
            label: "Development Practices",
            value:
              "Component-Based Architecture, Responsive Design, Version Control",
          },
          { label: "Repository", value: "GitHub" },
          { label: "Walkthrough", value: "YouTube Video (Attached Below)" },
        ],
      },
      {
        type: "heading",
        text: "Breaking the Traditional CTF Experience",
      },
      {
        type: "paragraph",
        text: "Cybersecurity is more than writing code or running security tools; it’s about observation, critical thinking, and solving problems creatively. Epilogue CTF was designed around this philosophy, transforming a traditional Capture the Flag challenge into an immersive digital experience inspired by the atmosphere of the Epilogue '26 concert.",
      },
      {
        type: "paragraph",
        text: "Instead of presenting participants with straightforward tasks, the platform encouraged them to investigate every detail, question assumptions, and uncover hidden clues through careful exploration.",
      },

      {
        type: "heading",
        text: "A Cyberpunk-Inspired Interface",
      },
      {
        type: "paragraph",
        text: "From the moment users enter the platform, they are immersed in a futuristic cyberpunk inspired interface. Neon green accents, terminal style typography, animated visual elements, and a carefully crafted layout create the feeling of accessing a restricted system rather than visiting a conventional website.",
      },
      {
        type: "paragraph",
        text: "This distinctive design was intentionally created to strengthen the storytelling aspect of the challenge while making the overall experience memorable and engaging.",
      },
      {
        type: "heading",
        text: "Designed to Challenge, Not to Guide",
      },
      {
        type: "paragraph",
        text: "Unlike conventional learning platforms, Epilogue CTF provides minimal instructions. Participants are encouraged to inspect, analyze and think critically, with each discovery leading naturally to the next stage of the challenge.",
      },
      {
        type: "paragraph",
        text: "The platform rewards curiosity, logical reasoning and attention to detail while discouraging brute-force techniques, reinforcing the core principles of ethical hacking and cybersecurity.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-ctf-2.avif",
        alt: "Epilogue CTF directives and rules screen",
      },
      {
        type: "heading",
        text: "Built with Modern Web Technologies",
      },
      {
        type: "paragraph",
        text: "The platform was engineered using a modern web technology stack that ensures both performance and maintainability.",
      },
      {
        type: "heading",
        level: 3,
        text: "Technology Stack",
      },
      {
        type: "list",
        items: [
          "Next.js – High-performance web framework",
          "React – Interactive component-based interface",
          "TypeScript – Type-safe development",
          "Tailwind CSS – Responsive and modern styling",
          "Git & GitHub – Version control and collaborative development",
        ],
      },
      {
        type: "paragraph",
        text: "Modern software engineering practices such as reusable components, responsive design, and optimized rendering contributed to a seamless user experience across multiple devices.",
      },
      {
        type: "heading",
        text: "More Than a Challenge",
      },
      {
        type: "paragraph",
        text: "Epilogue CTF demonstrates how cybersecurity education can be transformed into an engaging digital experience. By combining immersive storytelling, thoughtful user experience, and modern web technologies, the project creates an environment where participants learn through exploration rather than instruction.",
      },
      {
        type: "paragraph",
        text: "It stands as an example of how creative design and technical excellence can come together to deliver an unforgettable cybersecurity challenge.",
      },
      {
        type: "heading",
        text: "🎥 Watch the Complete Walkthrough",
      },
      {
        type: "video",
        title: "🎬 Video Walkthrough",
        description:
          "For participants who would like to understand the challenge-solving process after attempting the CTF, a complete walkthrough is available below.",
        url: "https://youtu.be/Lf9a3CMNVow",
      },
    ],
  },
  {
    slug: "engineering-an-immersive-web-experience-for-epilogue-26",
    title: "Engineering an Immersive Web Experience for Epilogue '26",
    category: "Interactive Event Portal",
    summary:
      "The Epilogue digital experience consists of two React-based web applications designed to deliver an engaging and visually immersive user journey. Together, these applications introduce visitors to the event through cinematic animations before guiding them into an interactive event portal that centralizes event related experiences.",
    image: "/digital_solution/epilogue-immersive-web-experience.avif",
    article: [
      {
        type: "heading",
        text: "Overview",
      },
      {
        type: "paragraph",
        text: "The Epilogue digital experience consists of two React-based web applications designed to deliver an engaging and visually immersive user journey. Together, these applications introduce visitors to the event through cinematic animations before guiding them into an interactive event portal that centralizes event related experiences.",
      },
      {
        type: "heading",
        text: "Interactive Landing Experience",
      },
      {
        type: "paragraph",
        text: "The first application serves as the introductory experience for Epilogue '26. Rather than presenting static content, it uses animated transitions and 3D visual effects to create an immersive entry point. Key elements include:",
      },
      {
        type: "list",
        items: [
          "Logo reveal animation",
          "Cyber tunnel transition",
          "Floating particle effects",
          '"Games Coming Soon" presentation',
          "Performance-aware rendering for smoother animations",
        ],
      },
      {
        type: "paragraph",
        text: "This approach creates an engaging first impression while maintaining responsive performance across different devices.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-immersive-1.avif",
        alt: "Epilogue interactive landing experience with Games Coming Soon",
      },
      {
        type: "heading",
        text: "Interactive Event Portal",
      },
      {
        type: "paragraph",
        text: "The second application expands the experience through a screen-based interface that guides users across multiple sections of the platform.",
      },
      {
        type: "paragraph",
        text: "The application is organized into dedicated screens, including:",
      },
      {
        type: "list",
        items: [
          "Arrival",
          "Artists",
          "Event Details",
          "Interactive Hub",
          "Creative Showcase",
        ],
      },
      {
        type: "paragraph",
        text: "Animated transitions between screens provide a continuous user experience while maintaining a consistent visual identity throughout the application.",
      },
      {
        type: "image",
        src: "/digital_solution/articles/epilogue-immersive-2.avif",
        alt: "Epilogue interactive event portal screen",
      },
      {
        type: "heading",
        text: "Modern Frontend Development",
      },
      {
        type: "paragraph",
        text: "Both repositories demonstrate a modern frontend development workflow built around reusable React components and modular project organization.",
      },
      {
        type: "paragraph",
        text: "The projects separate functionality into independent UI components, allowing each visual element and screen to be developed and maintained independently while keeping the overall application structure organized.",
      },

      {
        type: "heading",
        text: "Animation Driven User Experience",
      },
      {
        type: "paragraph",
        text: "Animation plays a central role throughout both applications.",
      },
      {
        type: "paragraph",
        text: "The projects utilize motion libraries and custom visual components to create:",
      },
      {
        type: "list",
        items: [
          "Smooth screen transitions",
          "Animated UI elements",
          "Dynamic visual effects",
          "Continuous scene progression",
          "Interactive landing animations",
        ],
      },
      {
        type: "paragraph",
        text: "Rather than functioning as decorative elements, these animations guide users through the digital experience and improve overall engagement.",
      },
      {
        type: "heading",
        text: "Technology Stack",
      },
      {
        type: "table",
        headers: ["Technology", "Contribution"],
        rows: [
          ["React", "Component-based frontend development"],
          ["Vite", "Fast development environment and optimized builds"],
          ["TypeScript", "Type safety in the event portal application"],
          ["Three.js", "3D graphics and immersive visual effects"],
          ["React Three Fiber", "React-based rendering for Three.js scenes"],
          ["Framer Motion / Motion", "UI animations and smooth transitions"],
        ],
      },
      {
        type: "heading",
        text: "Technical Highlights",
      },
      {
        type: "list",
        items: [
          "Modular React component architecture",
          "Screen-based navigation flow",
          "Real-time animated visual effects",
          "Three.js powered 3D scenes",
          "Performance-aware rendering",
          "Interactive landing experience",
          "Animated transition system",
          "Modern frontend development workflow",
        ],
      },
    ],
  },
  {
    slug: "simplifying-student-submissions-with-google-apps-script",
    title: "Simplifying Student Submissions with Google Apps Script",
    category: "Cloud-Based Submission Platform",
    summary:
      "Building an automated, cloud-based submission platform for efficient file collection and management.",
    image: "/digital_solution/articles/student-submissions-1.avif",
    article: [
      {
        type: "heading",
        text: "Overview",
      },
      {
        type: "paragraph",
        text: "Managing student submissions through email or messaging platforms often leads to disorganized files, inconsistent naming, and increased administrative effort. To address these challenges, this project introduces a web-based submission system powered by Google Apps Script, providing a streamlined workflow for collecting student information and uploaded files in one centralized platform.",
      },
      {
        type: "paragraph",
        text: "The application combines a responsive frontend with Google Workspace services to automate data collection, file storage, and record management without requiring a traditional backend server.",
      },

      {
        type: "heading",
        text: "User Friendly Submission Experience",
      },
      {
        type: "paragraph",
        text: "The frontend provides a clean and responsive interface where students can submit their information with minimal effort.",
      },
      {
        type: "paragraph",
        text: "The form collects essential details including:",
      },
      {
        type: "list",
        items: [
          "Student Name",
          "Index Number",
          "Faculty",
          "Department",
          "Email Address",
          "Contact Number",
          "Image Upload",
        ],
      },
      {
        type: "paragraph",
        text: "To improve usability, the application includes drag-and-drop file uploads, client-side validation, and clear submission feedback, creating a smooth user experience across different devices.",
      },
      {
        type: "heading",
        text: "Google Workspace Integration",
      },
      {
        type: "paragraph",
        text: "Rather than relying on a dedicated backend server, the application leverages Google Apps Script to connect seamlessly with Google Workspace services.",
      },
      {
        type: "paragraph",
        text: "Once a submission is received, the system automatically:",
      },
      {
        type: "list",
        items: [
          "Uploads files to Google Drive",
          "Stores submission details in Google Sheets",
          "Generates shareable file links",
          "Maintains organized submission records",
        ],
      },
      {
        type: "paragraph",
        text: "This serverless approach reduces deployment complexity while utilizing Google’s cloud infrastructure for secure data management.",
      },
      
      {
        type: "image",
        src: "/digital_solution/articles/student-submissions-3.avif",
        alt: "Google Sheets submission records",
      },
      {
        type: "heading",
        text: "Technical Implementation",
      },
      {
        type: "paragraph",
        text: "The application follows a lightweight architecture using web technologies together with Google Apps Script.",
      },
      {
        type: "heading",
        level: 3,
        text: "Frontend",
      },
      {
        type: "list",
        items: ["HTML5", "CSS3", "JavaScript"],
      },
      {
        type: "heading",
        level: 3,
        text: "Backend",
      },
      {
        type: "list",
        items: ["Google Apps Script"],
      },
      {
        type: "heading",
        level: 3,
        text: "Cloud Services",
      },
      {
        type: "list",
        items: ["Google Sheets", "Google Drive"],
      },
      {
        type: "heading",
        text: "Key Features",
      },
      {
        type: "list",
        items: [
          "Responsive submission interface",
          "Drag-and-drop image upload",
          "Client-side input validation",
          "Automated Google Drive file storage",
          "Google Sheets data management",
          "Success and error notifications",
          "Serverless architecture",
          "Cloud-based workflow",
        ],
      },
      {
        type: "heading",
        text: "Technology Stack",
      },
      {
        type: "table",
        headers: ["Technology", "Purpose"],
        rows: [
          ["HTML5", "Form structure"],
          ["CSS3", "Responsive user interface"],
          ["JavaScript", "Client-side validation and interactions"],
          ["Google Apps Script", "Backend logic"],
          ["Google Sheets", "Submission database"],
          ["Google Drive", "File storage"],
        ],
      },
      {
        type: "heading",
        text: "Project Highlights",
      },
      {
        type: "list",
        items: [
          "Serverless web application architecture",
          "Automated submission management",
          "Google Workspace integration",
          "Responsive user interface",
          "Simplified administrative workflow",
          "Secure cloud-based data storage",
        ],
      },
    ],
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
