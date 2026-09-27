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
      name: "Lorem Ipsum",
      title: "Product Designer & Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. I design and build thoughtful digital products, turning complex problems into calm, usable interfaces.",
      ctaPrimary: "View My Projects",
      ctaSecondary: "Contact Me",
      photoAlt: "Your photo",
      photoPlaceholder: "YOUR PHOTO",
    },
    about: {
      eyebrow: "About",
      heading: "A little about me",
      bio1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      bio2:
        "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      cards: {
        location: { label: "Location", value: "Jakarta, Indonesia" },
        focus: { label: "Focus", value: "Product Design & Frontend" },
        experience: { label: "Experience", value: "3+ Years" },
        availability: { label: "Availability", value: "Open to work" },
      },
    },
    projects: {
      eyebrow: "Work",
      heading: "My Project",
      description:
        "A selection of projects I've designed and built. Replace these placeholders with your own work.",
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
      description: "My academic journey so far.",
    },
    experience: {
      eyebrow: "Journey",
      heading: "Experience",
      description: "Where I've worked and what I've been building.",
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
      rights: "All rights reserved.",
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
      name: "Lorem Ipsum",
      title: "Product Designer & Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Saya merancang dan membangun produk digital yang matang secara konsep, mengubah masalah rumit menjadi antarmuka yang tenang dan mudah digunakan.",
      ctaPrimary: "Lihat Proyek Saya",
      ctaSecondary: "Hubungi Saya",
      photoAlt: "Foto Anda",
      photoPlaceholder: "FOTO ANDA",
    },
    about: {
      eyebrow: "Tentang",
      heading: "Sedikit tentang saya",
      bio1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      bio2:
        "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      cards: {
        location: { label: "Lokasi", value: "Jakarta, Indonesia" },
        focus: { label: "Fokus", value: "Product Design & Frontend" },
        experience: { label: "Pengalaman", value: "3+ Tahun" },
        availability: { label: "Ketersediaan", value: "Terbuka untuk kerja" },
      },
    },
    projects: {
      eyebrow: "Karya",
      heading: "Proyek Saya",
      description:
        "Beberapa proyek yang telah saya rancang dan bangun. Ganti placeholder ini dengan karya Anda sendiri.",
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
      description: "Perjalanan akademik saya sejauh ini.",
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
        "Punya proyek yang ingin didiskusikan atau sekadar ingin menyapa? Kotak masuk saya selalu terbuka.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      instagramLabel: "Instagram",
    },
    footer: {
      rights: "Hak cipta dilindungi.",
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
