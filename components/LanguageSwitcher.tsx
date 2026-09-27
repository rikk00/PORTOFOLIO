"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/types";

const options: { locale: Locale; label: string }[] = [
  { locale: "id", label: "ID" },
  { locale: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className="flex items-center rounded-full border border-ink/10 p-0.5 text-xs font-medium dark:border-mist-100/15"
    >
      {options.map((option) => {
        const isActive = locale === option.locale;
        return (
          <button
            key={option.locale}
            type="button"
            onClick={() => setLocale(option.locale)}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-ink/60 hover:text-ink dark:text-mist-100/60 dark:hover:text-mist-100"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
