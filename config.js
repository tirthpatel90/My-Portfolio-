/**
 * Portfolio Configuration File
 * Centralize all personal details, links, project information, and configurations here.
 * Anyone using this portfolio template only needs to edit this file.
 */

const CONFIG = {
    // ==========================================
    // Page Title & Header Settings
    // ==========================================
    pageTitle: "Tirth Patel | Interactive Linux Shell",
    logoPrompt: "~/tirth.dev",
    
    // ==========================================
    // Terminal Host & User Settings
    // ==========================================
    terminalUser: "tirth",
    terminalHost: "linux",
    welcomeMessage: "Welcome to Tirth's interactive shell. <br>Type 'help' to begin.<br>💡 Hint: Type 'server' to boot up a real serverless Linux server inside your browser!",
    bootMessages: [
        "Initializing system...",
        "Loading modules...",
        "Establishing secure connection...",
        "Welcome to Tirth's terminal"
    ],

    // ==========================================
    // About Section (whoami)
    // ==========================================
    about: {
        title: "About Section",
        name: "Tirth Patel",
        pfp: "profile.jpg", // path or url to profile picture
        pfpFallback: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
        titleRole: "DevOps & Cloud Systems Engineer | Open Source Contributor",
        bioParagraphs: [
            "Information Technology student at LDRP Institute of Technology and Research.",
            "Interested in Cloud Architectures, DevOps CI/CD automation, and virtualization sandboxes.",
            "Active open-source contributor focusing on CI/CD pipelines, container automation, and build toolchains."
        ],
        learningAndInterests: [
            "Currently learning AWS services, Docker containers, automated pipelines, and system architectures.",
            "I enjoy designing developer utilities, implementing interactive console sandboxes, and debugging cloud systems."
        ],
        location: "India (GMT +5:30)"
    },

    // ==========================================
    // Skills Section (skills tree view)
    // ==========================================
    skills: {
        title: "Skills Inventory",
        // Column 1 tree view layout
        treeCol1: `
.
├── Languages
│   ├── JavaScript
│   ├── HTML/CSS
│   ├── Python
│   ├── C/C++
│   └── SQL
├── Databases
│   ├── PostgreSQL
│   ├── MySQL
│   ├── SQLite
│   └── Firebase
└── Tools
    ├── Docker
    ├── Git/Github
    ├── Postman
    └── Github Actions
`,
        // Column 2 tree view layout
        treeCol2: `
├── Cloud/DevOps
│   ├── AWS
│   ├── Azure
│   ├── Kubernetes
│   ├── CI/CD
│   └── Oracle
├── Core Concepts
│   ├── Linux Fundamentals
│   ├── Networking Basics
│   ├── OOP
│   └── System Design fundamentals
└── Soft Skills
    ├── Communication
    ├── Leadership
    ├── Time Management
    ├── Problem Solving
    └── Collaboration
`
    },

    // ==========================================
    // Projects Section (projects)
    // ==========================================
    projectsSectionTitle: "Deployment Log: Projects",
    projects: [
        {
            name: "Zedda (Python Library)",
            url: "https://github.com/Zedda-Labs/Zedda",
            timeline: "Ongoing",
            description: [
                "Developed a high-performance Python EDA (Exploratory Data Analysis) and data-cleaning library powered by a C++17 core, enabling constant-memory dataset profiling at terabyte scale.",
                "Designed and automated multi-platform native wheel compilation pipelines using GitHub Actions Matrix and cibuildwheel to publish optimized binaries to PyPI.",
                "Implemented containerized integration tests using Docker to validate data quality diagnostics and file formats (CSV, Parquet, Arrow) across multiple architectures."
            ],
            stack: "C++17, Python, Apache Arrow, Docker, GitHub Actions (CI/CD), cibuildwheel, CMake"
        },
        {
            name: "Data Agnostic MLOps Pipeline",
            url: "https://github.com/tirthpatel90/Data-agnostic-MLOps-pipeline",
            timeline: "Ongoing",
            description: [
                "Developed a modular MLOps pipeline designed to automate data ingestion, preprocessing, and model training workflows across multiple data formats (CSV, Excel, JSON).",
                "Implemented structured pipeline orchestration with configuration-based execution and designed project architecture following automation and deployment-ready principles aligned with MLOps & DevOps workflows.",
                "Structured ML pipeline with future containerization support using docker for reproducible execution."
            ],
            stack: "Python, Pandas, NumPy, Scikit-learn, Docker, CI/CD, GitHub Actions"
        },
        {
            name: "DevOps Utility Hub",
            url: "https://github.com/tirthpatel90/DevOps-Utility-",
            timeline: "March 2026",
            description: [
                "Developed a client-side DevOps toolkit with multiple utilities for configuration validation, secrets encoding, and infrastructure helpers.",
                "Hosted the application on AWS S3 hosting, demonstrating cloud deployment and lightweight serverless delivery of developer tools."
            ],
            stack: "JavaScript, HTML/CSS, AWS S3"
        },
        {
            name: "NAVIQ – Career Guidance Platform",
            url: "https://github.com/tirthpatel90/NAVIQ",
            timeline: "Dec 2025 – Jan 2026",
            description: [
                "Developed a career guidance platform providing structured learning roadmaps, study resources, and interview preparation support for multiple technical roles.",
                "Build backend REST APIs using python flask with SQLite database integration for managing career and learning data."
            ],
            stack: "Python, React, Flask, SQLite, Tailwind CSS"
        },
        {
            name: "Travel Management System",
            url: "https://github.com/tirthpatel90/Travel-Management-system-",
            timeline: "Oct 2025 – Dec 2025",
            description: [
                "Developed a backend web app using JavaScript to manage tours, hotels, and booking workflows through RESTful APIs.",
                "Implemented role-based control for secure user and admin operations and integrated SQLite database schemas to handle booking, user data, and travel management operations efficiently."
            ],
            stack: "JavaScript, Node.js, SQLite, JWT Authentication, RESTful APIs"
        }
    ],

    // ==========================================
    // Experience Section (experience)
    // ==========================================
    experienceSectionTitle: "SysLog: Experience",
    experience: [
        {
            title: "Microsoft Azure Intern",
            company: "Microsoft India × AICTE",
            location: "Remote",
            timeline: "Jan 2026 – Feb 2026",
            description: [
                "Completed a 4-week industry focused on Microsoft Azure cloud services fundamentals.",
                "Gained exposure to cloud computing concepts including virtual machines, storage, networking, and deployment models.",
                "Developed foundational understanding of cloud architecture, resource provisioning, and enterprise cloud environment using Microsoft Azure Portal."
            ]
        }
    ],

    // ==========================================
    // Contributions Section (contributions)
    // ==========================================
    contributionsSectionTitle: "Changelog: Open Source Contributions",
    contributions: [
        {
            project: "NVIDIA / cuda-python",
            projectUrl: "https://github.com/NVIDIA/cuda-python",
            role: "Open Source Contributor",
            prUrl: "https://github.com/NVIDIA/cuda-python/pull/2411",
            timeline: "Recent",
            highlights: [
                "<strong>CI/CD Optimization:</strong> Streamlined build-wheel and testing workflows (for both Linux and Windows) for Python 3.15 compatibility.",
                "<strong>Pipeline Refactoring:</strong> Removed custom, redundant NumPy compilation steps by transitioning build workflows to natively leverage Python 3.15 beta 4.",
                "<strong>Dependency Resolution:</strong> Resolved environment discrepancies and improved build reliability across Python 3.15 CI testing matrices."
            ]
        },
        {
            project: "Serena",
            projectUrl: "https://github.com/oraios/serena",
            role: "CI/CD Contributor",
            prUrl: "https://github.com/oraios/serena/pull/1421",
            timeline: "Recent",
            highlights: [
                "<strong>CI/CD Optimization:</strong> Redesigned legacy GitHub Actions workflows into a Parallel Matrix, slashing execution time from 2+ hours to under 10 minutes.",
                "<strong>Docker Automation:</strong> Automated custom Docker environment deployments to GitHub Container Registry (GHCR) for isolated testing.",
                "<strong>Pipeline Stability:</strong> Stabilized workflows by quarantining flaky toolchains and resolving cross-fork dependency issues using dynamic variables."
            ]
        }
    ],

    // ==========================================
    // Contact Section (Formspree Mailer Integration)
    // ==========================================
    connect: {
        title: "LinkLayer: Connect",
        subtitle: "Establish a secure connection. Send a message directly to my inbox.",
        formspreeId: "xojkvlba", // Replace this with your own Formspree form ID
        defaultMessage: "I'd like to connect with you!"
    },

    // ==========================================
    // Social Links
    // ==========================================
    socials: [
        { name: "github", url: "https://github.com/tirthpatel90", icon: "fab fa-github" },
        { name: "linkedin", url: "https://www.linkedin.com/in/tirth-patel-3bbb30288", icon: "fab fa-linkedin" },
        { name: "email", url: "mailto:tirthpatel5393@gmail.com", icon: "fas fa-envelope" }
    ],

    // ==========================================
    // Resume File Settings
    // ==========================================
    resumeUrl: "Resume.pdf"
};
