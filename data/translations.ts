import type { Locale } from "@/types";

/**
 * Every piece of static UI copy lives here, keyed by locale.
 * To change wording, edit the strings below — no component edits required.
 */
export const translations = {
  en: {
    nav: {
      about: "About Me",
      projects: "My Project",
      certificates: "Certificate & Skills",
      education: "Education",
      experience: "Experience",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Hendrico Daniel",
      title: "Management & Operational",
      description:
        "Hello, I am Hendrico Daniel. An English Literature graduate from Universitas Mulawarman. Currently I'm exploring outside my specialties, learning data analysis and visualization by Project Based Learning (Mini Project)",
      ctaPrimary: "View My Projects",
      ctaSecondary: "Contact Me",
      photoAlt: "Your photo",
      photoPlaceholder: "YOUR PHOTO",
    },
    about: {
      eyebrow: "About",
      heading: "A little about me",
      bio1:
        "Hello, I am Hendrico Daniel. An English Literature graduate from Universitas Mulawarman with hands-on experience as a retail Store Supervisor. Skilled in store operations, inventory management, data-driven promotional content creation, and active organizational leadership.",
      bio2:
        "I also like to do a mini project to learn new things, the goals it to ease the process in daily task",
      cards: {
        location: { label: "Location", value: "Bontang, Indonesia" },
        focus: { label: "Focus", value: "Research and Development" },
        experience: { label: "Experience", value: "Fresh Graduate" },
        availability: { label: "Availability", value: "Open to work" },
      },
    },
    projects: {
      eyebrow: "Work",
      heading: "My Project",
      description:
        "A selection of projects I've designed and built.",
      filters: {
        all: "All",
        web: "Web",
        design: "Design",
        data: "Data",
        other: "Other",
      },
      viewProject: "View Project",
      viewCode: "GitHub",
      noResults: "No projects in this category yet.",
    },
    skillsCertificates: {
      eyebrow: "Expertise",
      heading: "Certificate & Skills",
      skillsHeading: "Skills",
      skillsDescription: "Tools and abilities I rely on day to day.",
      certificatesHeading: "Certificates",
      certificatesDescription: "Courses and programs I've completed.",
      levels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
      groups: {
        technical: "Technical",
        soft: "Soft Skills",
      },
      viewCertificate: "View Certificate",
      close: "Close",
    },
    education: {
      eyebrow: "Background",
      heading: "Education",
      description: "My recent academic journey.",
    },
    experience: {
      eyebrow: "Journey",
      heading: "Experience",
      description: "Where I've worked and what I've been building (Includes Internships).",
      responsibilitiesLabel: "Key responsibilities",
    },
    contact: {
      eyebrow: "Get in touch",
      heading: "Let's work together.",
      description:
        "Have a project in mind or just want to say hello? My inbox is always open.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      instagramLabel: "Instagram",
    },
    footer: {
      rights: "@hendriko.daniel",
      builtWith: "Built with Next.js & Tailwind CSS.",
      backToTop: "Back to top",
    },
    theme: {
      light: "Light mode",
      dark: "Dark mode",
    },
    language: {
      label: "Language",
    },
    a11y: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skipToContent: "Skip to content",
    },
  },
  id: {
    nav: {
      about: "Tentang Saya",
      projects: "Proyek Saya",
      certificates: "Sertifikat & Keahlian",
      education: "Pendidikan",
      experience: "Pengalaman",
    },
    hero: {
      greeting: "Halo, saya",
      name: "Hendrico Daniel",
      title: "Manajemen & Operasional",
      description:
        "Halo, saya Hendrico Daniel. Lulusan Sastra Inggris dari Universitas Mulawarman. Saat ini saya sedang mengeksplorasi di luar spesialisasi saya, belajar analisis dan visualisasi data melalui Project Based Learning (Mini Project)",
      ctaPrimary: "Lihat Proyek Saya",
      ctaSecondary: "Hubungi Saya",
      photoAlt: "Foto Anda",
      photoPlaceholder: "FOTO ANDA",
    },
    about: {
      eyebrow: "Tentang",
      heading: "Sedikit tentang saya",
      bio1:
        "Halo, Saya Hendrico Daniel. Lulusan Sastra Inggris dari Universitas Mulawarman dengan pengalaman langsung sebagai Supervisor Toko Ritel. Terampil dalam operasi toko, manajemen inventaris, pembuatan konten promosi berbasis data, dan kepemimpinan organisasi yang aktif.",
      bio2:
        "Saya juga termotivasi untuk melakukan proyek mini untuk mempelajari hal baru, dengan tujuan mempermudah proses dalam tugas sehari-hari.",
      cards: {
        location: { label: "Lokasi", value: "Bontang, Indonesia" },
        focus: { label: "Fokus", value: "Penelitian dan Pengembangan" },
        experience: { label: "Pengalaman", value: "Fresh Graduate" },
        availability: { label: "Ketersediaan", value: "Terbuka untuk kerja" },
      },
    },
    projects: {
      eyebrow: "Karya",
      heading: "Proyek Saya",
      description:
        "Beberapa proyek yang telah saya rancang dan bangun.",
      filters: {
        all: "Semua",
        web: "Web",
        design: "Desain",
        data: "Data",
        other: "Lainnya",
      },
      viewProject: "Lihat Proyek",
      viewCode: "GitHub",
      noResults: "Belum ada proyek pada kategori ini.",
    },
    skillsCertificates: {
      eyebrow: "Keahlian",
      heading: "Sertifikat & Keahlian",
      skillsHeading: "Keahlian",
      skillsDescription: "Alat dan kemampuan yang saya andalkan sehari-hari.",
      certificatesHeading: "Sertifikat",
      certificatesDescription: "Kursus dan program yang telah saya selesaikan.",
      levels: {
        beginner: "Pemula",
        intermediate: "Menengah",
        advanced: "Mahir",
      },
      groups: {
        technical: "Teknis",
        soft: "Keahlian Non-teknis",
      },
      viewCertificate: "Lihat Sertifikat",
      close: "Tutup",
    },
    education: {
      eyebrow: "Latar Belakang",
      heading: "Pendidikan",
      description: "Pendidikan akademik terbaru saya.",
    },
    experience: {
      eyebrow: "Perjalanan",
      heading: "Pengalaman",
      description: "Tempat saya bekerja dan hal yang sedang saya bangun.",
      responsibilitiesLabel: "Tanggung jawab utama",
    },
    contact: {
      eyebrow: "Hubungi saya",
      heading: "Mari bekerja sama.",
      description:
        "Punya proyek yang ingin didiskusikan atau sekadar ingin menyapa? Hubungi saya melalui",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      instagramLabel: "Instagram",
    },
    footer: {
      rights: "@hendrico.daniel.",
      builtWith: "Dibangun dengan Next.js & Tailwind CSS.",
      backToTop: "Kembali ke atas",
    },
    theme: {
      light: "Mode terang",
      dark: "Mode gelap",
    },
    language: {
      label: "Bahasa",
    },
    a11y: {
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      skipToContent: "Lompat ke konten",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export type TranslationDict = (typeof translations)["en"];
