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
    title: { en: "Matcha Bakery Project", id: "Proyek Kue Matcha" },
    description: {
      en: "Analyzing bussiness opportunity of Matcha Bakery in Bontang City, using SQL and Python",
      id: "Analisa Peluang Bisnis MatchaBakery Menggunakan SQL dan Python di Kota Bontang",
    },
    category: "data",
    tools: ["Python", "SQL", "Pandas"],
    liveUrl: "Analisa Peluang Bisnis MatchaBakery Menggunakan SQL dan Python di Kota Bontang",
    githubUrl: "#",
  },
  {
    id: "project-02",
    image: "/images/project-02.jpg",
    title: { en: "Basketball Match Simulation Tools", id: "Alat Simulasi Hasil Pertandingan Basket" },
    description: {
      en: "Using Python and Excel to simulate basketball match results based on player statistics and team performance on LocalHost using Monte Carlo Simulation.",
      id: "Menggunakan Python dan Excel untuk mensimulasikan hasil pertandingan basket berdasarkan statistik pemain dan performa tim di LocalHost menggunakan Simulasi Monte Carlo.",
    },
    category: "data",
    tools: ["Python", "Excel"],
    liveUrl: "#",
  },
  {
    id: "project-03",
    image: "/images/project-03.jpg",
    title: { en: "Basketball Academy Sites on Google Sites ", id: "Situs Akademi Basket di Google Sites" },
    description: {
      en: "Making an all-in-one website for basketball academy using Google Sites, HTML, and Google Workspace.",
      id: "Membuat website all-in-one untuk akademi basket menggunakan Google Sites, HTML, dan Google Workspace.",
    },
    category: "web",
    tools: ["Google Sites", "HTML", "Google Workspace"],
    githubUrl: "#",
  },
  {
    id: "project-04",
    image: "/images/project-04.jpg",
    title: { en: "Task Reminder Bot on WhatsApp", id: "Bot Pengingat Tugas di WhatsApp" },
    description: {
      en: "Using Node.js and WhatsApp API to create a bot that can send reminders for tasks and events on WhatsApp 24/7 via Oracle server hosting.",
      id: "Menggunakan Node.js dan WhatsApp API untuk membuat bot yang dapat mengirimkan pengingat untuk tugas dan acara di WhatsApp 24/7 via hosting Oracle server.",
    },
    category: "other",
    tools: ["Node.js", "WhatsApp API", "Oracle Server"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

/** EDIT ME: Skill levels use "beginner" | "intermediate" | "advanced" — no numeric percentages, since a made-up percentage would misrepresent real ability. */
export const skills: SkillItem[] = [
  { id: "skill-msoffice", name: "Microsoft Office", level: "intermediate", group: "technical" },
  { id: "skill-photoshop", name: "Adobe Photoshop", level: "intermediate", group: "technical" },
  { id: "skill-Canva", name: "Canva", level: "advanced", group: "technical" },
  { id: "skill-html", name: "HTML", level: "beginner", group: "technical" },
  { id: "skill-css", name: "CSS", level: "beginner", group: "technical" },
  { id: "skill-js", name: "JavaScript", level: "beginner", group: "technical" },
  { id: "skill-react", name: "React", level: "beginner", group: "technical" },
  { id: "skill-communication", name: "Communication", level: "advanced", group: "soft" },
  { id: "skill-leadership", name: "Leadership", level: "intermediate", group: "soft" },
  { id: "skill-teamwork", name: "Teamwork", level: "advanced", group: "soft" },
];

/** EDIT ME: `image` should point to a scanned certificate placed in /public/images. */
export const certificates: CertificateItem[] = [
  {
    id: "Certificate-01",
    image: "/images/certificate-01.jpg",
    title: { en: "Loss Prevention Supervisor on National Internship Program", id: "Sertifikasi Loss Prevention Supervisor pada Program Magang Nasional" },
    issuer: "Ministry of Manpower & PT. RALS",
    date: "2025",
    credentialUrl: "#",
  },
  {
    id: "Certificate-02",
    image: "/images/certificate-02.jpg",
    title: { en: "Digital Office Administration", id: "Administrasi Perkantoran Digital" },
    issuer: "Ministry of Manpower, BPVP Samarinda & LPK Aptekkom",
    date: "2026",
    credentialUrl: "#",
  },
  {
    id: "Certificate-03",
    image: "/images/certificate-03.jpg",
    title: { en: "12+ Design Thinking Skills", id: "12+ Desain Keterampilan Berpikir" },
    issuer: "GNIK & Ministry of Manpower",
    date: "2025",
  },
];

/** EDIT ME: Add or edit education entries, most recent first. */
export const education: EducationItem[] = [
  {
    id: "Sarjana (S-1)",
    period: "2021 — 2025",
    institution: "Universitas Mulawarman",
    degree: { en: "Bachelor's Degree — English Literature", id: "Sarjana — Sasta Inggris (S.S)" },
    description: {
      en: 'Thesis: "Sociological Analysis of The Marshall Mathers LP (2000) album by Eminem" GPA: 3.64/4.00',
      id: 'Skripsi: "Sociological Analysis of The Marshall Mathers LP (2000) album by Eminem" IPK: 3.64/4.00',
    },
  },
  {
    id: "Sekolah Menengah Atas (SMA)",
    period: "2018 — 2021",
    institution: "SMAN 2 Bontang",
    degree: {
      en: "",
      id: ""
    },
    description: {
      en: "Graduates from SMAN 2 Bontang with a focus on Science, actively participating in various extracurricular activities.",
      id: "Lulusan SMAN 2 Bontang dengan fokus pada IPA, secara aktif berpartisipasi dalam berbagai kegiatan ekstrakurikuler.",
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
      { en: "Planning and executing sales strategies.", id: "Merencanakan dan melaksanakan strategi penjualan." },
      { en: "Collaborated with various stakeholder regarding sales initiatives.", id: "Berkolaborasi dengan berbagai pemangku kepentingan terkait inisiatif penjualan." },
      { en: "Supervising incoming/outcoming goods while maintaining inventory standards.", id: "Mengawasi barang masuk/keluar sambil menjaga standar inventaris." },
    ],
    tools: ["HRIS (My Orange HR)", "Excel", "LibreOffice"],
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
      { en: "Making sure the content is engaging and informative.", id: "Memastikan konten menarik dan informatif." },
      { en: "Making a report regarding social account growth.", id: "Membuat laporan tentang pertumbuhan akun sosial." },
    ],
    tools: ["Canva", "CapCut", "Gemini & ChatGPT AI"],
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
      { en: "Maintaining inventory standards & Freshness.", id: "Memastikan standar inventaris dan kesegaran produk." },
      { en: "Supervise and consult regarding Target and Inventory to related stakeholders", id: "Mengawasi dan memberikan konsultasi terkait Target dan Inventaris kepada pemangku kepentingan terkait." },
    ],
    tools: ["Excel", "LibreOffice", "Ramayana's Dashboard System"],
  },

];

/** EDIT ME: Replace with your real profile links. */
export const socialLinks: SocialLink[] = [
  { id: "email", label: "danielhendrico@gmail.com", href: "mailto:danielhendrico@gmail.com", icon: "email" },
  { id: "linkedin", label: "linkedin.com/in/hendricodaniel", href: "https://linkedin.com", icon: "linkedin" },
  { id: "github", label: "github.com/rikk00", href: "https://github.com", icon: "github" },
  { id: "instagram", label: "@hendriko.daniel", href: "https://instagram.com", icon: "instagram" },
];
