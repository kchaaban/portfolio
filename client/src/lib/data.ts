// Experience Data
export const experienceData = [
  {
    title: "Associate Professor",
    organization: "Umm Al-Qura University",
    location: "Makkah, Saudi Arabia",
    period: "2015 - Present",
    responsibilities: [
      "Led quality assurance initiatives for academic programs, ensuring compliance with accreditation standards (ABET and NCAA).",
      "Defined the curriculum of the M.Sc. program in computer engineering and networking, aligning it with current industry trends.",
      "Participated in the design and launching of a new bachelor's program in data science.",
      "Developed and delivered courses for graduate and undergraduate students in various computer science subjects.",
      "Funding granted for local research project (2023): Using Machine Learning to Learn an Optimization Process for Multi-modal Transportation Systems (40,000 SAR)."
    ]
  },
  {
    title: "Associate Professor",
    organization: "ESTACA Engineering School",
    location: "Laval, France",
    period: "2007 - 2015",
    responsibilities: [
      "Chief manager of embedded systems team.",
      "Delivered courses on real-time operating systems, real-time programming, control systems, and model-based engineering.",
      "Contributed to industrial projects, including ELA (IRT-SystemX) and O4A-II (European project).",
      "Defined the curriculum for a new master's Program in embedded systems at the engineering school."
    ]
  },
  {
    title: "Join Researcher",
    organization: "IRT-SystemX",
    location: "Paris, France",
    period: "2013 - 2015",
    responsibilities: [
      "The academic lead for the \"Multi-Core Embedded Systems\" work package within the industrial ELA project.",
      "Prepared technical reports and project communications.",
      "Delivered technical training sessions to project members on automotive embedded systems."
    ]
  },
  {
    title: "Associate Researcher",
    organization: "CNRS, Heudiasyc Lab",
    location: "Compiegne, France",
    period: "2006 - 2007",
    responsibilities: [
      "Utilized contextual scheduling techniques for online diagnostics of distributed electronic functions at Renault Trucks.",
      "Contributed to ANR and European R&D projects: Diafore, Safespot, and RoadSense.",
      "Taught courses in C++, Java, VHDL/SystemC."
    ]
  }
];

// Education Data
export const educationData = [
  {
    degree: "Ph.D. in Information and Systems Technologies",
    institution: "UTC/CNRS, Heudiasyc Lab",
    location: "Compiègne, France",
    period: "2002 - 2006",
    description: "Defended on June 16th, 2006 with highest honors.",
    title: "Title: \"A Distributed Real-Time Architecture For Advanced Vehicles\""
  },
  {
    degree: "M.Sc. in Information and Systems Technologies",
    institution: "Universite de Technologie de Compiegne (UTC)",
    location: "France",
    period: "2001 - 2002",
    title: "Title: \"Distributed real-time system for Multimedia applications\""
  },
  {
    degree: "Engineering Degree in Computer Systems and Telecommunications",
    institution: "Faculty of Engineering, Lebanese University",
    location: "",
    period: "1996 - 2001"
  }
];

// Skills Data
export const programmingSkills = [
  { name: "Python", level: 90 },
  { name: "C/C++", level: 95 },
  { name: "PHP", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "SQL", level: 75 }
];

export const osSkills = [
  { name: "Unix/Linux", level: 90 },
  { name: "Real-Time Operating Systems", level: 95 },
  { name: "MicroC-OSII", level: 85 },
  { name: "OSEK", level: 80 },
  { name: "Android System", level: 70 }
];

export const skillCategories = [
  {
    title: "System Engineering",
    skills: [
      "dSPACE",
      "Automatic Code Generation",
      "Matlab/Simulink/RTW",
      "UML/SysML/MARTE"
    ]
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Pandas, Numpy, SciPy",
      "Genetic algorithms, MLP, Heuristics",
      "Scikit-learn, TensorFlow",
      "SQL, MySQL, PostgreSQL"
    ]
  },
  {
    title: "Communication & Networking",
    skills: [
      "Embedded field buses",
      "Wireless networks",
      "Ethernet/Internet"
    ]
  },
  {
    title: "Industrial Standards",
    skills: [
      "ISO26262",
      "DO178",
      "AUTOSAR",
      "IoT MQTT"
    ]
  }
];

// Publications Data
export const publications = {
  hIndex: 10,
  totalPublications: 35,
  bookChapters: 2,
  citations: 323,
  scholarUrl: "https://scholar.google.com/citations?user=B1hDTjMAAAAJ&hl=en",
  allPublicationsUrl: "#"
};

export const publicationStats = [
  { value: 35, label: "International Publications" },
  { value: 2, label: "Book Chapters" },
  { value: 323, label: "Citations" }
];

export const featuredPublications = [
  {
    title: "Distributed Real-Time Architecture for Advanced Vehicle Safety Systems",
    journal: "IEEE Transactions on Vehicular Technology",
    year: "2008",
    abstract: "This paper presents a novel architecture for safety-critical automotive systems...",
    keywords: ["Embedded Systems", "Real-time", "Automotive"]
  },
  {
    title: "Performance Analysis of OSEK-based Software Architecture for Safety-Critical Systems",
    journal: "Journal of Systems Architecture",
    year: "2010",
    abstract: "We analyze the performance characteristics of OSEK-compliant operating systems...",
    keywords: ["OSEK", "RTOS", "Safety"]
  },
  {
    title: "Optimization Techniques for Multi-core Embedded Automotive Systems",
    journal: "PECCS Conference",
    year: "2015 (Best Paper Award)",
    abstract: "This paper presents novel optimization techniques for resource allocation in multi-core systems...",
    keywords: ["Multi-core", "Optimization", "Embedded"]
  }
];

// Certifications and Awards Data
export const certifications = [
  {
    title: "Machine Learning",
    issuer: "Stanford University",
    year: "2021"
  },
  {
    title: "Accredited trainer on e-learning systems (D2L)",
    issuer: "",
    year: "2018"
  },
  {
    title: "Rapid embedded system prototyping",
    issuer: "dSPACE, Paris",
    year: "2008"
  },
  {
    title: "AUTOSAR concepts and methodology",
    issuer: "Vector, Paris",
    year: "2010"
  },
  {
    title: "Safety analysis and quality assurance",
    issuer: "ISO26262 and DO178, Laval",
    year: "2011"
  }
];

export const awards = [
  {
    title: "First prize, E-Learning Competition",
    organization: "UQU University",
    year: "2020",
    icon: "fas fa-trophy"
  },
  {
    title: "Best paper award",
    organization: "PECCS 2015 conference, France",
    year: "2015",
    icon: "fas fa-trophy"
  },
  {
    title: "CNRS BDI scholarship for PhD studies",
    organization: "",
    year: "2002-2005",
    icon: "fas fa-award"
  },
  {
    title: "CNRS BDI scholarship for M.Sc. studies",
    organization: "",
    year: "2001-2002",
    icon: "fas fa-award"
  },
  {
    title: "Chairman of \"Information Systems and Applications\" session",
    organization: "ITSC conference",
    year: "",
    icon: "fas fa-user-tie"
  }
];
