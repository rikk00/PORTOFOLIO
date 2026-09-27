export type Locale = "en" | "id";

export type SkillLevel = "beginner" | "intermediate" | "advanced";

export interface LocalizedText {
  en: string;
  id: string;
}

export interface ProjectItem {
  id: string;
  /** Path under /public/images — replace with your own screenshot. */
  image: string;
  title: LocalizedText;
  description: LocalizedText;
  category: "web" | "design" | "data" | "other";
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: SkillLevel;
  group: "technical" | "soft";
}

export interface CertificateItem {
  id: string;
  /** Path under /public/images — replace with your own certificate scan. */
  image: string;
  title: LocalizedText;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: LocalizedText;
  description: LocalizedText;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  position: LocalizedText;
  description: LocalizedText;
  responsibilities: LocalizedText[];
  tools: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "instagram";
}

export interface ProfileInfo {
  name: string;
  title: LocalizedText;
  location: string;
  /** Path under /public/images — replace with your own profile photo. */
  photo: string;
  email: string;
}
