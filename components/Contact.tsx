"use client";

import { useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";

const ICONS: Record<string, JSX.Element> = {
  email: (
    <path
      d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  linkedin: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.2 10.2v6M8.2 7.9v.01M12 16.2v-3.6c0-1.2.7-2 1.9-2 1.1 0 1.7.8 1.7 2v3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  github: (
    <path
      d="M12 4a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.6.8.6 1.6v2.4c0 .2.1.5.6.4A8 8 0 0 0 12 4Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
    </>
  ),
};

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container">
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <p className="section-eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-heading">{t.contact.heading}</h2>
          <p className="mt-4 text-ink/65 dark:text-mist-100/65">{t.contact.description}</p>

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2.5 text-sm font-medium text-ink/75 transition-colors hover:border-teal-500/50 hover:text-teal-600 dark:border-mist-100/15 dark:text-mist-100/75 dark:hover:text-teal-400"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {ICONS[link.icon]}
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
