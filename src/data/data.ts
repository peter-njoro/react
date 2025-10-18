export const about = [
    {
        title: "About Me",
        description:
            "Peter Njoroge is an aspiring data scientist with a strong foundation in computer science and a passion for solving real-world problems using data. Currently pursuing his bachelor's degree in Computer Science, Peter is building a personal brand around leveraging machine learning and analytics to address challenges in Africa, particularly in natural resource management and sustainability. His long-term goal is to become a leading data science professional who contributes to both industry innovation and impactful projects that improve livelihoods. Peter has already developed a facial recognition attendance system, FaceTrack Lite, as a demonstration of his skills in computer vision and artificial intelligence. He has also participated in collaborative projects through ALX, where he explored applying data science to global challenges such as deforestation and cultural preservation. These experiences highlight his ability to merge technical knowledge with social impact, while working effectively in diverse teams. Driven, adaptable, and motivated by curiosity, Peter continues to grow his expertise in data science while aspiring to create solutions that empower communities and advance Africa's role in the global digital economy.",
        video:
            "https://player.cloudinary.com/embed/?cloud_name=dmkpfe2zx&public_id=pitch-video-edited_ngo8zi&profile=cld-default",
    },
];

export const projects = [
    {
        title: "Facetrack-Lite",
        description:
            "An app that recognizes students, logs unidentified faces, and manages attendance sessions. Dockerized for easy deployment.",
        image: "assets/images/facetrack-lite.webp",
        imagePosition: "right",
    },
    {
        title: "Task & Project Management Tool",
        description:
            "Role-based access, notifications, and real-time search. Optimized queries for faster task management.",
        image: "assets/images/management.webp",
        imagePosition: "left",
    },
    {
        title: "Django REST APIs, Role-Based Access, and AJAX Search Projects.",
        description:
            "REST APIs, AJAX search, and role-based access experiments. More on my GitHub.",
        image: "assets/images/other-projects.webp",
        imagePosition: "right",
    },
];

export const experiences = [
    {
        title: "ALX Africa – Data Science Fellow 2025–Present",
        description:
            "Collaborated on real-world projects, practiced data cleaning (aka, dealing with digital garbage), and mastered version control — in both GitHub and team morale.",
        iconSrc: "assets/svg/rectangle-21.svg",
    },
    {
        title: "SafetyPlus Consulting – Intern 2025",
        description:
            "Assisted with software dev and IT support. Helped fix workflows, troubleshoot issues, and occasionally pretended to look very busy while code compiled.",
        iconSrc: "assets/svg/rectangle-21.svg",
    },
    {
        title: "Other Personal Projects as showcased on my github profile",
        description: "",
        iconSrc: "assets/svg/rectangle-21.svg",
    },
];

export const skills = [
    {
        name: "Python",
        icon: "assets/svg/logo_python_icon.svg",
    },
    {
        name: "django",
        icon: "assets/svg/django_fill_icon.svg",
    },
    {
        name: "Postgres",
        icon: "assets/svg/devicon-postgresql.svg",
    },
    {
        name: "Git",
        icon: "assets/svg/git_social media_icon.svg",
    },
    {
        name: "Data Analysis",
        icon: "assets/svg/data_analysis.svg",
    },
];

export const contactIcons = [
    {
        icon: "assets/svg/email_gmail_mail_logo_social_icon.svg",
    },
    {
        icon: "assets/svg/code_repository_github_repository_resource_icon.svg",
    },
    {
        icon: "assets/svg/icons8-linkedin.svg",
    },
];

export interface Achievement {
  title: string;
  description: string;
  date: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    title: "FaceTrack Lite",
    description:
      "Developed an AI-powered facial recognition attendance system demo using OpenCV and Django, capable of real-time recognition and attendance logging.",
    date: "2024",
  link: "https://github.com/peter-njoro/facetrack-lite",
  },
  {
    title: "Task & Project Management Tool",
    description:
      "Built a role-based task management system with notifications, mentions, and user activity tracking — licensed under GPL-3.0.",
    date: "2023",
  link: "https://github.com/peter-njoro/Task-Project-Management-Tool",
  },
  {
    title: "GPS Traffic Control System (Case Study)",
    description:
      "Designed a concept for an AI-assisted traffic control system leveraging GPS and predictive routing for smart city applications.",
    date: "2025",
  },
  {
    title: "Delta Residency Shortlisting",
    description:
      "Selected for the prestigious Delta AI Residency, recognizing outstanding innovation and potential in applied AI research.",
    date: "2025",
  },
];


export interface CaseStudy {
  id: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  impact: { metric: string; before?: string; after?: string; description?: string }[];
  technologies: string[];
  challenges: string[];
  futureEnhancements: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "gps-traffic-control",
    title: "GPS Traffic Control System",
    overview:
      "A smart city solution that optimizes traffic flow using real-time GPS data, AI-based prediction, and adaptive signal control to reduce congestion and emissions.",
    problem:
      "Traditional traffic systems use static timing and cannot adapt to real-world traffic fluctuations, leading to inefficiency, wasted fuel, and higher emissions.",
    solution:
      "The system collects GPS and IoT sensor data, feeding it into an AI model that dynamically adjusts signal timings and reroutes vehicles to balance traffic loads in real-time.",
    architecture: [
      "Data Collection Layer: Gathers GPS, IoT sensor, and camera data.",
      "Processing Layer: AI model predicts congestion and adjusts signals dynamically.",
      "Visualization Layer: Dashboard and API for city operators and analytics."
    ],
    features: [
      "Real-time adaptive traffic light control",
      "AI-based congestion prediction",
      "Emergency vehicle prioritization",
      "Open API for navigation app integration",
      "Live dashboard analytics"
    ],
    impact: [
      { metric: "Average Intersection Delay", before: "78 sec", after: "34 sec" },
      { metric: "CO₂ Emissions", before: "100% baseline", after: "↓ 28%" },
      { metric: "Commute Time", before: "42 mins", after: "31 mins" },
      { metric: "Fuel Usage", before: "100% baseline", after: "↓ 15%" }
    ],
    technologies: [
      "Python (FastAPI)",
      "PostgreSQL",
      "MQTT (IoT messaging)",
      "TensorFlow / Scikit-learn",
      "React",
      "Docker",
      "OpenStreetMap API"
    ],
    challenges: [
      "Ensuring GPS data anonymity and privacy.",
      "Maintaining stable IoT device connectivity.",
      "Scalability across large metropolitan networks."
    ],
    futureEnhancements: [
      "Reinforcement learning for adaptive traffic logic.",
      "Integration with autonomous vehicle APIs.",
      "Blockchain-based traffic data validation."
    ]
  },

  {
    id: "facetrack-lite",
    title: "FaceTrack Lite – Facial Recognition Attendance System",
    overview:
      "FaceTrack Lite is a lightweight facial recognition-based attendance system that automates attendance tracking using AI and computer vision. It’s designed for educational institutions and small teams.",
    problem:
      "Manual attendance tracking is error-prone, time-consuming, and easy to falsify. Many existing biometric systems are costly and difficult to integrate.",
    solution:
      "FaceTrack Lite uses OpenCV-based facial recognition to automate attendance logging. It can recognize faces in real-time or from recorded sessions, and logs attendance data directly into the system’s database.",
    architecture: [
      "Frontend: Django templates and JS-based interface.",
      "Backend: Django REST framework handling session logic and storage.",
      "Recognition Engine: OpenCV + face_recognition Python library for detection and matching."
    ],
    features: [
      "Real-time facial recognition attendance",
      "Support for live and recorded sessions",
      "Automatic session logging",
      "Unrecognized faces flagged for review",
      "Per-student attendance analytics",
      "Dockerized setup for easy deployment"
    ],
    impact: [
      {
        metric: "Time saved per class",
        before: "10–15 minutes manual check-in",
        after: "Instant facial recognition attendance"
      },
      { metric: "Accuracy", before: "85%", after: "≈98%" },
      {
        metric: "Administrative efficiency",
        description: "Automated reporting reduced manual data entry workload by ~70%."
      }
    ],
    technologies: [
      "Python (Django)",
      "OpenCV",
      "face_recognition (dlib)",
      "SQLite / PostgreSQL",
      "Docker",
      "Pandas / NumPy"
    ],
    challenges: [
      "Handling inconsistent lighting and camera angles.",
      "Balancing recognition accuracy with performance.",
      "Managing unidentified faces securely."
    ],
    futureEnhancements: [
      "WebSocket-based live attendance updates.",
      "Integration with learning management systems (LMS).",
      "AI model optimization for low-light recognition."
    ]
  },

  {
    id: "task-project-tool",
    title: "Task & Project Management Tool with Notifications",
    overview:
      "A collaborative web platform for managing projects, tasks, and team communication — built using Django with real-time notifications and role-based permissions.",
    problem:
      "Teams often struggle with scattered task tracking, unclear role assignments, and poor visibility into project progress.",
    solution:
      "This system centralizes project management with user roles, progress tracking, and smart notifications for important events like mentions, role changes, and project assignments.",
    architecture: [
      "Backend: Django-based REST API with PostgreSQL for persistence.",
      "Frontend: HTML/CSS templates with optional React frontend support.",
      "Notification System: Django signals + WebSockets for real-time alerts."
    ],
    features: [
      "Project and task management",
      "Role-based user permissions",
      "Notifications for mentions, role changes, and assignments",
      "Activity logging and audit trails",
      "Clean, responsive UI"
    ],
    impact: [
      {
        metric: "Team productivity",
        description: "Improved coordination through centralized updates."
      },
      {
        metric: "Response time",
        before: "Average of 2 hours",
        after: "Within minutes via real-time notifications"
      }
    ],
    technologies: [
      "Python (Django)",
      "PostgreSQL",
      "Django Channels (WebSockets)",
      "HTML/CSS/JavaScript",
      "Docker"
    ],
    challenges: [
      "Maintaining scalability for large teams.",
      "Ensuring notifications remain reliable under heavy load.",
      "Designing flexible role and permission systems."
    ],
    futureEnhancements: [
      "React-based frontend integration.",
      "Calendar and timeline views.",
      "Integration with Slack or Microsoft Teams."
    ]
  }
];


export const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contacts", href: "#contacts" },
    {label: "Blog", href: "/blog"}
];
