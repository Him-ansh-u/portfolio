export const PROJECTS = [
  {
    title: "HexaHome - Real Estate Platform",
    description:
      "A real estate platform for finding and listing homes with verified properties and zero brokerage. Features include smart search filters, free posting, and direct owner-to-user communication for a seamless experience.",
    link: "https://www.hexahome.in/",
    type: "Professional Project",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
    ],
  },
  {
    title: "NexG - Recruitment platform",
    description:
      "A full-stack recruitment platform enabling job postings, candidate applications, and recruiter/admin dashboards, built with a scalable backend and modern frontend for a seamless hiring experience.",
    link: "https://www.nexg.tech/",
    type: "Professional Project",
    techStack: [
      "Next.js",
      "Mantine UI",
      "Tailwind CSS",
      "Tanstack Query",
      "Framer Motion",
    ],
  },
  {
    title: "AI Chatbot – Personal Assistant",
    description:
      "An AI-powered personal assistant platform featuring real-time conversations, user authentication, chat history, and session management. Allows users to interact seamlessly with an intelligent chatbot through a clean and responsive interface.",
    link: "https://ai-chatbot-rdgstdkd8-him-ansh-us-projects.vercel.app/",
    type: "Personal Project",
    techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "JWT"],
  },
];

export const CASE_STUDIES = [
  {
    title: "HexaHome – Real Estate Platform",
    type: "Professional Project",

    description:
      "A full-stack real estate platform for finding and listing verified properties with zero brokerage. Built to support scalability, fast search, and smooth user experience.",

    live: "https://www.hexahome.in",
    github: "",

    summary: [
      "Built a production-grade real estate platform for buyers and property owners.",
      "Focused on performance, scalability, and clean UI/UX.",
      "Improved authentication flows, logging, and overall application stability.",
    ],

    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      cloud: ["AWS (EC2, S3)"],
    },

    role: [
      "Built frontend features using reusable components and responsive UI",
      "Developed and maintained REST APIs using Node.js and Express",
      "Worked with MongoDB schemas and optimized queries for performance",
      "Contributed to deployment tasks and environment configuration",
      "Improved authentication flows and session handling",
      "Implemented structured logging for debugging and monitoring",
      "Integrated Facebook and Instagram Graph APIs",
    ],
    features: [
      "JWT-based authentication and improved session handling",
      "Performance-optimized APIs and frontend rendering",
      "Responsive UI across mobile and desktop devices",
      "Structured logging for better debugging and monitoring",
      "Facebook and Instagram Graph API integration for ad publishing",
    ],

    challenges: [
      {
        problem:
          "Critical CSS issue in Next.js 14 caused CSS to block initial page load and hurt performance",
        solution:
          "Temporarily resolved using a custom postBuild script to inject missing CSS, later confirmed fixed in Next.js 15 canary",
      },
      {
        problem:
          "Next.js 14 issue where setting cookies via Server Actions caused full app reload and state reset",
        solution:
          "Avoided Server Actions for cookie mutation and handled cookies through API routes instead",
      },
      {
        problem:
          "Auth edge cases and unreliable logging due to middleware limitations (always returned 200)",
        solution:
          "Improved auth flow and built a custom Next.js server for accurate request/response logging",
      },
      {
        problem:
          "Global state updates were causing unnecessary re-renders and UI inconsistencies",
        solution: "Optimized Zustand store usage and refactored selectors",
      },
    ],

    tools: [
      "VS Code",
      "GitHub",
      "Postman",
      "Jira",
      "Lighthouse",
      "React DevTools",
      "Google PageSpeed Insights",
      "Screaming Frog SEO Spider",
    ],
  },
  {
    title: "NexG – Recruitment Dashboard",
    type: "Professional Project",

    description:
      "A full-stack recruitment platform enabling job postings, candidate applications, and recruiter/admin dashboards with a scalable backend and modern frontend architecture.",

    live: "https://nexg.dev",
    github: "",

    summary: [
      "Built an end-to-end recruitment platform used internally by team and candidate.",
      "Designed scalable frontend architecture with efficient data fetching.",
      "Focused on UX for recruiters and candidates.",
    ],

    techStack: {
      frontend: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Mantine UI",
        "Material UI",
      ],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      cloud: ["Vercel"],
    },

    role: [
      "Developed overall frontend architecture",
      "Built reusable UI components using Mantine, Tailwind CSS and Material UI",
      "Integrated TanStack Query for optimized API and query handling",
      "Implemented authentication and protected routes",
      "Collaborated with backend team on API contracts",
    ],

    features: [
      "Role-based dashboards (Admin, Recruiter, Candidate)",
      "Job posting and candidate application flow",
      "Pagination and filtering for large datasets",
      "Responsive UI for desktop and mobile",
      "Optimized data fetching using TanStack Query",
    ],

    challenges: [
      {
        problem: "Slow performance when loading large candidate lists",
        solution:
          "Implemented pagination, caching, and optimized data fetching using TanStack Query",
      },
      {
        problem:
          "Auto-generating assignment questions based on job descriptions was inconsistent and hard to maintain",
        solution:
          "Refactored logic into reusable hooks and modular utilities for better reliability",
      },
      {
        problem:
          "Complex state handling across multiple dashboard views caused bugs and re-renders",
        solution:
          "Restructured state management and refactored into reusable hooks and cleaner component architecture",
      },
    ],

    tools: ["Git", "Postman", "Jira"],
  },
  {
    title: "AI Chatbot – Personal Assistant",
    type: "Personal Project",

    description:
      "An AI-powered personal assistant platform supporting real-time chat, authentication, session management, and conversation history with a clean, responsive interface.",

    live: "https://ai-chatbot-rose-gamma.vercel.app/",
    github: "https://github.com/Him-ansh-u/aI-chatbot",

    summary: [
      "Built a full-stack chatbot application with real-time interactions.",
      "Implemented authentication and session persistence.",
      "Designed clean conversational UI inspired by modern AI tools.",
    ],

    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      cloud: ["Vercel"],
    },

    role: [
      "Designed UI/UX for conversational experience",
      "Built authentication system using JWT",
      "Developed backend APIs for chat and session storage",
      "Implemented WebSocket-based real-time messaging",
    ],

    features: [
      "JWT-based user authentication",
      "Real-time chat with persistent sessions",
      "Conversation history stored per user",
      "Responsive UI across devices",
    ],

    challenges: [
      {
        problem: "Minor edge cases in authentication flows during testing",
        solution: "Refined JWT handling and improved validation logic",
      },
      {
        problem: "Some endpoints lacked consistent error handling initially",
        solution:
          "Improved response structure and added proper status handling",
      },
    ],

    tools: ["GitHub Desktop", "Postman", "Google Gemini"],
  },

  {
    title: "Picture Book – Social Media Platform",
    type: "Personal Project",

    description:
      "A full-stack social media platform focused on professional-style content sharing, featuring feed-based content, user profiles, authentication, and interactive post engagement.",

    live: "",
    github: "",

    summary: [
      "Built a functional social media platform with real-world app architecture.",
      "Implemented authentication, protected routes, and user session management.",
      "Designed scalable feed and interaction system.",
    ],

    techStack: {
      frontend: ["React", "Material UI", "Redux"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      cloud: [],
    },

    role: [
      "Designed overall application architecture",
      "Built reusable UI components using Material UI",
      "Implemented Redux for global state management",
      "Developed REST APIs using Node.js and Express",
      "Designed MongoDB schemas for users and posts",
      "Implemented JWT authentication and protected routes",
    ],

    features: [
      "User authentication and authorization with JWT",
      "Feed-based post system with create, like, and delete actions",
      "User profiles with personal posts and details",
      "Protected routes and session persistence",
      "Responsive layout across devices",
    ],

    challenges: [
      {
        problem: "Managing complex state across feed, auth, and user profile",
        solution:
          "Introduced Redux store with structured slices for predictable state flow",
      },
      {
        problem: "Securing API routes from unauthorized access",
        solution: "Implemented middleware-based JWT validation",
      },
      {
        problem: "Feed performance issues as posts increased",
        solution:
          "Optimized API responses and reduced unnecessary client-side re-renders",
      },
    ],

    tools: ["Git", "Postman"],
  },
  {
    title: "College ERP System",
    type: "Personal Project",

    description:
      "A college ERP system to manage academic workflows including authentication, profile management, assignments, scheduling, and productivity tools like calendar and to-do lists.",

    live: "",
    github: "",

    summary: [
      "Built a functional ERP-style system simulating real academic workflows.",
      "Focused on backend logic, authentication, and CRUD-heavy architecture.",
      "Strengthened understanding of session flows and access control.",
    ],

    techStack: {
      frontend: ["HTML", "CSS", "jQuery"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      cloud: [],
    },

    role: [
      "Designed backend routes and controllers",
      "Implemented JWT-based authentication",
      "Built profile, assignment, and test modules",
      "Handled MongoDB schema design",
      "Created frontend views using jQuery",
    ],

    features: [
      "User authentication with JWT",
      "Student profile view/edit",
      "Assignment and test management",
      "Calendar and to-do system",
      "Secure access to protected routes",
    ],

    challenges: [
      {
        problem: "Managing multiple modules with clean structure",
        solution: "Separated concerns into controllers, routes, and models",
      },
      {
        problem: "Maintaining session state securely",
        solution: "Used JWT-based stateless authentication",
      },
    ],

    tools: ["Git"],
  },

  {
    title: "Snake Game – Python Arcade Game",
    type: "Personal Project",

    description:
      "A classic Snake game built using Python and Pygame demonstrating real-time game loop, collision detection, scoring logic, and keyboard event handling.",

    live: "",
    github: "",

    summary: [
      "Built a fully functional arcade-style Snake game from scratch.",
      "Strengthened understanding of game loops and event-driven programming.",
      "Practiced structured Python development.",
    ],

    techStack: {
      frontend: ["Pygame"],
      backend: ["Python"],
      database: [],
      cloud: [],
    },

    role: [
      "Designed game mechanics and logic",
      "Implemented collision detection system",
      "Handled keyboard controls and game loop",
      "Built scoring and game-over logic",
    ],

    features: [
      "Real-time snake movement",
      "Collision detection with walls and self",
      "Score tracking system",
      "Restartable game loop",
    ],

    challenges: [
      {
        problem: "Managing smooth movement and frame updates",
        solution: "Used controlled clock speed and optimized update loop",
      },
      {
        problem: "Handling multiple game states cleanly",
        solution: "Structured game flow into start, play, and game-over states",
      },
    ],

    tools: ["VS Code"],
  },
];
