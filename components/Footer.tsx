"use client";

import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 py-8 dark:border-mist-100/10">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-sm text-ink/55 dark:text-mist-100/55 sm:flex-row">
        <p>
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-5">
          <p>{t.footer.builtWith}</p>
          <a href="#hero" className="font-medium text-ink/70 hover:text-teal-600 dark:text-mist-100/70 dark:hover:text-teal-400">
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
