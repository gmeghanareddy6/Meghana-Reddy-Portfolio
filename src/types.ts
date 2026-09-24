export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
  problem: string;
  approach: string;
  stack: string[];
  outcomes: string[];
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface Achievement {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
  isHighlight?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  grade: string;
  gradeLabel: string;
  highlights: string[];
}

export interface StatItem {
  value: string;
  label: string;
  descriptor: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
