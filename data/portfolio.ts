import type {
  CertificateItem,
  EducationItem,
  ExperienceItem,
  ProfileInfo,
  ProjectItem,
  SkillItem,
  SocialLink,
} from "@/types";

/** EDIT ME: This is the single place to update your personal information. Replace the placeholder photo path with your own file inside /public/images. */
export const profile: ProfileInfo = {
  name: "Hendrico Daniel",
  title: {
    en: "Product Designer & Frontend Developer",
    id: "Product Designer & Frontend Developer",
  },
  location: "Bontang, Indonesia",
  // Replace with: /public/images/profile-placeholder.jpg
  photo: "/images/profile-placeholder.jpg",
  email: "danielhendrico03@gmail.com",
};

/** EDIT ME: Add, remove, or edit project entries here. `image` should point to a file placed inside /public/images (e.g. /images/project-01.jpg). */
export const projects: ProjectItem[] = [
  {
    id: "project-01",
    image: "/images/project-01.jpg",
    title: { en: "Lorem Ipsum Project", id: "Lorem Ipsum Proyek" },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A short summary of what the project does and the problem it solves.",
      id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ringkasan singkat mengenai fungsi proyek dan masalah yang diselesaikan.",
    },
    category: "web",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-02",
    image: "/images/project-02.jpg",
    title: { en: "Lorem Ipsum Project", id: "Lorem Ipsum Proyek" },
    description: {
      en: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      id: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    category: "design",
    tools: ["Figma", "Illustrator"],
    liveUrl: "#",
  },
  {
    id: "project-03",
    image: "/images/project-03.jpg",
    title: { en: "Lorem Ipsum Project", id: "Lorem Ipsum Proyek" },
    description: {
      en: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      id: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    category: "data",
    tools: ["Python", "Pandas", "Power BI"],
    githubUrl: "#",
  },
  {
    id: "project-04",
    image: "/images/project-04.jpg",
    title: { en: "Lorem Ipsum Project", id: "Lorem Ipsum Proyek" },
    description: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      id: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    category: "other",
    tools: ["React Native"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

/** EDIT ME: Skill levels use "beginner" | "intermediate" | "advanced" — no numeric percentages, since a made-up percentage would misrepresent real ability. */
export const skills: SkillItem[] = [
  { id: "skill-msoffice", name: "Microsoft Office", level: "intermediate", group: "technical" },
  { id: "skill-photoshop", name: "Adobe Photoshop", level: "intermediate", group: "technical" },
  { id: "skill-figma", name: "Figma", level: "advanced", group: "technical" },
  { id: "skill-html", name: "HTML", level: "advanced", group: "technical" },
  { id: "skill-css", name: "CSS", level: "advanced", group: "technical" },
  { id: "skill-js", name: "JavaScript", level: "intermediate", group: "technical" },
  { id: "skill-react", name: "React", level: "intermediate", group: "technical" },
  { id: "skill-communication", name: "Communication", level: "advanced", group: "soft" },
  { id: "skill-leadership", name: "Leadership", level: "intermediate", group: "soft" },
  { id: "skill-teamwork", name: "Teamwork", level: "advanced", group: "soft" },
];

/** EDIT ME: `image` should point to a scanned certificate placed in /public/images. */
export const certificates: CertificateItem[] = [
  {
    id: "Certificate National Internship Program",
    image: "/images/certificate-01.jpg",
    title: { en: "Lorem Ipsum Certification", id: "Sertifikasi Lorem Ipsum" },
    issuer: "Ministry of Manpower & PT. RALS",
    date: "2025",
    credentialUrl: "#",
  },
  {
    id: "certificate-02",
    image: "/images/certificate-02.jpg",
    title: { en: "Lorem Ipsum Bootcamp", id: "Bootcamp Lorem Ipsum" },
    issuer: "Ipsum Academy",
    date: "2023",
    credentialUrl: "#",
  },
  {
    id: "certificate-03",
    image: "/images/certificate-03.jpg",
    title: { en: "Lorem Ipsum Workshop", id: "Workshop Lorem Ipsum" },
    issuer: "Dolor School",
    date: "2022",
  },
];

/** EDIT ME: Add or edit education entries, most recent first. */
export const education: EducationItem[] = [
  {
    id: "Sekolah Menengah Atas",
    period: "2018 — 2021",
    institution: "SMAN 2 Bontang",
    degree: { en: "Bachelor's Degree — Lorem Ipsum", id: "Sarjana — Lorem Ipsum" },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Focused on coursework related to design and computing.",
      id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Berfokus pada mata kuliah terkait desain dan komputasi.",
    },
  },
  {
    id: "education-02",
    period: "2017 — 2020",
    institution: "High School Name",
    degree: { en: "Science Major", id: "Jurusan IPA" },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  },
];

/** EDIT ME: Add or edit experience entries, most recent first. */
export const experience: ExperienceItem[] = [
  {
    id: "experience-01",
    period: "2024 — Present",
    company: "Company Name",
    position: { en: "Product Designer", id: "Product Designer" },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    responsibilities: [
      { en: "Designed end-to-end product flows for the core app.", id: "Merancang alur produk end-to-end untuk aplikasi utama." },
      { en: "Partnered with engineering to ship features on schedule.", id: "Berkolaborasi dengan tim engineering untuk merilis fitur tepat waktu." },
      { en: "Ran usability sessions and iterated on findings.", id: "Menjalankan sesi usability dan melakukan iterasi berdasarkan temuan." },
    ],
    tools: ["Figma", "Notion", "React"],
  },
  {
    id: "experience-02",
    period: "2022 — 2024",
    company: "Previous Company",
    position: { en: "Frontend Developer", id: "Frontend Developer" },
    description: {
      en: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      id: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    responsibilities: [
      { en: "Built and maintained reusable UI components.", id: "Membangun dan memelihara komponen UI yang dapat digunakan kembali." },
      { en: "Improved page performance and accessibility.", id: "Meningkatkan performa halaman dan aksesibilitas." },
    ],
    tools: ["React", "TypeScript", "Tailwind CSS"],
  },
];

/** EDIT ME: Replace with your real profile links. */
export const socialLinks: SocialLink[] = [
  { id: "email", label: "hello@example.com", href: "mailto:hello@example.com", icon: "email" },
  { id: "linkedin", label: "linkedin.com/in/yourname", href: "https://linkedin.com", icon: "linkedin" },
  { id: "github", label: "github.com/yourname", href: "https://github.com", icon: "github" },
  { id: "instagram", label: "@yourname", href: "https://instagram.com", icon: "instagram" },
];
