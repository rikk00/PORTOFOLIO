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
    en: "Management & Operational",
    id: "Manajemen & Operasional",
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
    id: "Certificate-01",
    image: "/images/certificate-01.jpg",
    title: { en: "Lorem Ipsum Certification", id: "Sertifikasi Lorem Ipsum" },
    issuer: "Ministry of Manpower & PT. RALS",
    date: "2025",
    credentialUrl: "#",
  },
  {
    id: "Certificate-02",
    image: "/images/certificate-02.jpg",
    title: { en: "Lorem Ipsum Bootcamp", id: "Bootcamp Lorem Ipsum" },
    issuer: "Ipsum Academy",
    date: "2023",
    credentialUrl: "#",
  },
  {
    id: "Certificate-03",
    image: "/images/certificate-03.jpg",
    title: { en: "Lorem Ipsum Workshop", id: "Workshop Lorem Ipsum" },
    issuer: "Dolor School",
    date: "2022",
  },
];

/** EDIT ME: Add or edit education entries, most recent first. */
export const education: EducationItem[] = [
  {
    id: "Sarjana (S-1)",
    period: "2021 — 2025",
    institution: "Universitas Mulawarman",
    degree: { en: "Bachelor's Degree — Lorem Ipsum", id: "Sarjana — Sasta Inggris (S.S)" },
    description: {
      en: 'Thesis: "Sociological Analysis of The Marshall Mathers LP (2000) album by Eminem" GPA: 3.64/4.00',
      id: 'Skripsi: "Sociological Analysis of The Marshall Mathers LP (2000) album by Eminem" IPK: 3.64/4.00',
    },
  },
  {
    id: "Sekolah Menengah Atas (SMA)",
    period: "2018 — 2021",
    institution: "SMAN 2 Bontang",
    degree: { en: "Bachelor's Degree — Lorem Ipsum", id: "Sa — Lorem Ipsum" },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  },
];

/** EDIT ME: Add or edit experience entries, most recent first. */
export const experience: ExperienceItem[] = [
  {
    id: "Store Supervisor",
    period: "2025 — 2026",
    company: "PT Ramayana Lestari Sentosa Tbk",
    position: { en: "Store Supervisor", id: "Store Supervisor" },
    description: {
      en: "Supervised, directed, and evaluated staff in the sales area at Ramayana Plaza Bontang. Managed sales targets, inventory levels, promotions, human resources, and center and selling point displays.",
      id: "Mengawasi, mengarahkan, dan mengevaluasi rekan kerja di area penjualan Ramayana Plaza Bontang. Bertanggung jawab terhadap pencapaian target, manajemen inventaris, promosi, pengelolaan SDM, serta penataan center dan selling point.",
    },
    responsibilities: [
      { en: "Designed end-to-end product flows for the core app.", id: "Merancang alur produk end-to-end untuk aplikasi utama." },
      { en: "Partnered with engineering to ship features on schedule.", id: "Berkolaborasi dengan tim engineering untuk merilis fitur tepat waktu." },
      { en: "Ran usability sessions and iterated on findings.", id: "Menjalankan sesi usability dan melakukan iterasi berdasarkan temuan." },
    ],
    tools: ["Figma", "Notion", "React"],
  },
  {
    id: "Team Creative",
    period: "2025 — 2026",
    company: "Ramayana Department Store (R-81) Bontang",
    position: { en: "Team Creative", id: "Tim Kreatif" },
    description: {
      en: "Contributed to brainstorming, drafting, video shooting, and editing promotional store content aimed at supporting overall sales performance.",
      id: "Terlibat langsung dalam sesi brainstorming, penyusunan naskah, pengambilan video, hingga proses finishing konten promosi toko untuk mendongkrak performa penjualan secara keseluruhan.",
    },
    responsibilities: [
      { en: "Built and maintained reusable UI components.", id: "Membangun dan memelihara komponen UI yang dapat digunakan kembali." },
      { en: "Improved page performance and accessibility.", id: "Meningkatkan performa halaman dan aksesibilitas." },
    ],
    tools: ["React", "TypeScript", "Tailwind CSS"],
  },
    {
    id: "Fresh Product Handling",
    period: "2025 — 2026",
    company: "Ramayana Department Store (R-81) Bontang",
    position: { en: "Fresh Product Handling", id: "Fresh Product Handling" },
    description: {
      en: "Handled quality control, receiving and ordering processes, and inventory liquidation for fresh products.",
      id: "Melakukan kontrol kualitas (QC), proses receiving dan ordering, serta pengelolaan likuidasi (pemusnahan) produk segar secara berkala.",
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
  { id: "email", label: "danielhendrico@gmail.com", href: "mailto:danielhendrico@gmail.com", icon: "email" },
  { id: "linkedin", label: "linkedin.com/in/hendricodaniel", href: "https://linkedin.com", icon: "linkedin" },
  { id: "github", label: "github.com/rikk00", href: "https://github.com", icon: "github" },
  { id: "instagram", label: "@hendriko.daniel", href: "https://instagram.com", icon: "instagram" },
];
