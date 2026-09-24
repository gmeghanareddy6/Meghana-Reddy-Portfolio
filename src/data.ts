import { Project, SkillCategory, Achievement, Certification, EducationItem, StatItem, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Guntuka Meghana Reddy",
  shortName: "Meghana",
  monogram: "GM",
  role: "AI / ML Engineer & Software Developer",
  statusBadge: "Available for 2025/2026 Opportunities",
  kicker: "AI / ML ENGINEER IN THE MAKING",
  location: "Hyderabad, India",
  timezone: "Asia/Kolkata",
  email: "guntukameghanareddy7@gmail.com",
  phone: "+91 62810 38551",
  displayPhone: "+91 62810 38551",
  bioHeadline: "Quietly obsessed with high-fidelity software, multimodal AI pipelines, and mathematical modeling.",
  bioParagraphs: [
    "I am a Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning at DRK Institute of Science and Technology (JNTUH), graduating in 2027.",
    "My engineering practice centers on translating theoretical machine learning architectures into dependable, production-grade tools. From multimodal audio/visual NLP summarizers to clinical healthcare predictors and cyber-threat classification pipelines, I prioritize clean code structure, rigorous data preprocessing, and measurable performance.",
    "Driven by curiosity and systems thinking, I build software that reduces cognitive friction, automates repetitive analysis, and solves critical problems with elegance."
  ],
  resumeUrl: "/resume.pdf",
};

export const STATS: StatItem[] = [
  {
    value: "03+",
    label: "Core AI / ML Systems",
    descriptor: "End-to-end built & tested",
  },
  {
    value: "2026",
    label: "Hackathon Winner",
    descriptor: "Rapid prototyping & AI modeling",
  },
  {
    value: "7.2",
    label: "B.Tech CGPA",
    descriptor: "DRK IST / JNTUH (AI & ML)",
  },
  {
    value: "2027",
    label: "Class of Graduation",
    descriptor: "Open to internships & full-time roles",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core algorithmic foundations, object-oriented design, and scripting.",
    skills: [
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
      { name: "SQL", highlight: false },
      { name: "C (Foundations)", highlight: false },
    ],
  },
  {
    title: "Data Analysis & BI",
    description: "Exploratory data analysis, statistical validation, and business intelligence.",
    skills: [
      { name: "Pandas", highlight: true },
      { name: "NumPy", highlight: true },
      { name: "Microsoft Excel", highlight: false },
      { name: "Power BI", highlight: true },
      { name: "Tableau", highlight: false },
    ],
  },
  {
    title: "Machine Learning & AI",
    description: "Predictive pipelines, natural language processing, and deep neural models.",
    skills: [
      { name: "Scikit-learn", highlight: true },
      { name: "TensorFlow", highlight: true },
      { name: "PyTorch", highlight: true },
      { name: "NLP & Tokenization", highlight: false },
      { name: "OCR & Text Extraction", highlight: false },
    ],
  },
  {
    title: "Tools & Workflows",
    description: "Modern developer ergonomics, version control, and reproducible environments.",
    skills: [
      { name: "VS Code", highlight: true },
      { name: "Jupyter Notebooks", highlight: true },
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "Linux Basics", highlight: false },
      { name: "Vercel / CI", highlight: false },
    ],
  },
];

export const ALL_SKILLS_MARQUEE: string[] = [
  "Python",
  "Java",
  "Machine Learning",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Power BI",
  "Tableau",
  "Natural Language Processing",
  "Computer Vision & OCR",
  "Speech-to-Text",
  "Git & GitHub",
  "SQL",
  "Data Pipelines",
  "Agentic AI",
  "Jupyter",
  "VS Code",
];

export const PROJECTS: Project[] = [
  {
    id: "multimodal-summarisation",
    number: "01",
    title: "AI Multimodal Summarisation",
    subtitle: "Unified cross-modal intelligence engine across text, PDF, raster image, and video media.",
    description: "An end-to-end multimodal pipeline that ingests long-form video lectures, scanned PDFs, screenshots, and raw text, producing synthesized, actionable executive digests.",
    category: "Natural Language Processing & Computer Vision",
    tags: ["Python", "NLP", "OCR", "Speech-to-Text", "Summarization"],
    problem: "Knowledge workers and researchers waste hours manually sifting through disparate media types—including audio lectures, scanned research manuscripts, and slides—to distill key takeaways.",
    approach: "Orchestrated a unified ingestion pipeline: PyPDF and Tesseract OCR extract textual streams from documents and images; Whisper models transcribe audio tracks from video files; Hugging Face transformer models synthesize concise abstractive summaries.",
    stack: ["Python", "Tesseract OCR", "Whisper", "Transformers", "PyPDF", "Streamlit"],
    outcomes: [
      "Extracted structured semantic summaries from multi-gigabyte media archives.",
      "Reduced research ingestion time by over 60% across academic workflows.",
      "Implemented modular pipeline allowing independent upgrades of OCR and transcription engines.",
    ],
    metrics: [
      { label: "Supported Formats", value: "PDF, MP4, PNG, JPG, TXT" },
      { label: "Ingestion Speedup", value: "~60% Efficiency Gain" },
      { label: "Architecture", value: "Modular Pipeline" },
    ],
    githubUrl: "https://github.com/gmeghanareddy6/Meghana-Reddy-Portfolio",
    demoUrl: "https://github.com/gmeghanareddy6/Meghana-Reddy-Portfolio",
    featured: true,
  },
  {
    id: "ai-medtech",
    number: "02",
    title: "AI MedTech Diagnostic Predictor",
    subtitle: "Clinical risk stratification model using structured physiological biomarker data.",
    description: "A machine learning solution analyzing clinical biomarkers and patient vitals to assist healthcare practitioners in preliminary risk assessment and early disease indicators.",
    category: "Healthcare Machine Learning",
    tags: ["Python", "ML", "Healthcare", "Scikit-learn", "Pandas"],
    problem: "Early detection of health complications requires processing high-dimensional vital measurements where subtle nonlinear patterns are easily missed during manual triage.",
    approach: "Designed a clean feature engineering pipeline that handled clinical missing values via iterative median imputation, normalized outlier vitals, and evaluated ensemble classifiers with cross-validation to maximize sensitivity.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    outcomes: [
      "Achieved high clinical recall to specifically minimize dangerous false negatives.",
      "Identified top correlated physiological risk markers through SHAP-based feature importance.",
      "Designed an intuitive diagnostic interface allowing doctors to inspect risk factor breakdowns.",
    ],
    metrics: [
      { label: "Evaluation Priority", value: "High Sensitivity / Recall" },
      { label: "Data Pipeline", value: "Robust Imputation & Scaling" },
      { label: "Interpretability", value: "Feature Importance Maps" },
    ],
    githubUrl: "https://github.com/gmeghanareddy6/Meghana-Reddy-Portfolio",
    demoUrl: "https://github.com/gmeghanareddy6/Meghana-Reddy-Portfolio",
    featured: true,
  },
  {
    id: "phishing-url-detection",
    number: "03",
    title: "Phishing URL Detection System",
    subtitle: "Proactive cybersecurity classification pipeline based on lexical and structural heuristics.",
    description: "An automated cybersecurity defense model that analyzes raw URL strings in real-time, detecting deceptive social engineering patterns before user credentials are compromised.",
    category: "Cybersecurity & Predictive Classification",
    tags: ["Python", "Scikit-learn", "Feature Engineering", "Cybersecurity"],
    problem: "Phishing URLs mutate continuously to bypass traditional static blocklists, tricking users with subtle homoglyphs, excessive subdomains, and obfuscated redirects.",
    approach: "Extracted 18+ fine-grained structural and lexical features (URL length, entropy, hyphen density, token depth, IP presence, HTTPS validity) and trained an ensemble Scikit-learn classifier pipeline for sub-millisecond inference.",
    stack: ["Python", "Scikit-learn", "Feature Engineering", "Regex", "Pandas", "Joblib"],
    outcomes: [
      "Engineered lightweight feature extraction requiring zero network roundtrip lookups.",
      "Trained an ensemble classifier providing rapid defense against zero-day fraudulent URLs.",
      "Delivered a deployable lightweight inference API capable of instant client-side inspection.",
    ],
    metrics: [
      { label: "Extracted Features", value: "18+ Lexical Attributes" },
      { label: "Inference Latency", value: "< 15ms per URL" },
      { label: "Pipeline", value: "Scikit-learn + Joblib" },
    ],
    githubUrl: "https://github.com/gmeghanareddy6/Meghana-Reddy-Portfolio",
    demoUrl: "https://github.com/gmeghanareddy6/Meghana-Reddy-Portfolio",
    featured: true,
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: "2026",
    title: "Hackathon Winner",
    organization: "Collegiate Innovation Challenge",
    description: "Awarded 1st place for architecting and deploying an AI-powered automated solution under intensive 36-hour sprint constraints.",
    badge: "1st Place",
    isHighlight: true,
  },
  {
    year: "2023",
    title: "JNTUH Hackathon Participant & Finalist",
    organization: "Jawaharlal Nehru Technological University Hyderabad",
    description: "Developed and presented a computational problem-solving prototype addressing regional technical and community challenges.",
    badge: "Finalist",
    isHighlight: false,
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Agentic AI Foundations",
    issuer: "Oracle",
    year: "2026",
    credentialId: "Oracle Certified Professional",
    description: "In-depth credential covering autonomous agent design patterns, multi-agent orchestration, tool integration, and reasoning workflows.",
    tags: ["Agentic AI", "Autonomous Systems", "Oracle"],
  },
  {
    title: "SQL Masterclass & Relational Data",
    issuer: "Simplilearn",
    year: "2026",
    credentialId: "Certificate of Achievement",
    description: "Advanced querying, indexing, relational schema design, complex joins, subqueries, and window functions for analytics-heavy workflows.",
    tags: ["SQL", "Databases", "Query Optimization"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: "2023 — 2027",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "DRK Institute of Science and Technology, JNTUH",
    location: "Hyderabad, India",
    grade: "7.2 CGPA",
    gradeLabel: "Current CGPA",
    highlights: [
      "Specialized coursework in Machine Learning, Deep Neural Networks, Data Structures, Algorithms, and Software Engineering.",
      "Active participant in technical symposiums, coding hackathons, and machine learning research groups.",
    ],
  },
  {
    period: "2021 — 2023",
    degree: "Senior Secondary / Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    location: "Hyderabad, India",
    grade: "85%",
    gradeLabel: "Final Aggregate",
    highlights: [
      "Rigorous focus on Higher Mathematics, Physics, and Chemistry analytical problem-solving.",
      "Ranked in top quartile with strong foundations in calculus, vectors, and linear algebra.",
    ],
  },
  {
    period: "2011 — 2021",
    degree: "ICSE Board (Class X)",
    institution: "Sherwood Public School",
    location: "Hyderabad, India",
    grade: "84%",
    gradeLabel: "Board Exam Result",
    highlights: [
      "Comprehensive ICSE curriculum with early computer applications and logical programming coursework.",
      "Consistently achieved academic excellence across science and language disciplines.",
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/gmeghanareddy6",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/guntukameghanareddy",
    icon: "linkedin",
  },
  {
    label: "Email",
    url: "mailto:guntukameghanareddy7@gmail.com",
    icon: "mail",
  },
];
