"use client";

import { useLanguage } from "@/context/LanguageContext";
import { education } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  const { t, pick } = useLanguage();

  return (
    <section id="education" className="scroll-mt-20 bg-mist-100/50 py-24 dark:bg-navy-900/40 sm:py-28">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-eyebrow">{t.education.eyebrow}</p>
          <h2 className="section-heading">{t.education.heading}</h2>
          <p className="mt-3 max-w-xl text-ink/65 dark:text-mist-100/65">
            {t.education.description}
          </p>
        </AnimatedSection>

        <ol className="mt-12 border-l border-ink/10 pl-8 dark:border-mist-100/15">
          {education.map((item, index) => (
            <AnimatedSection key={item.id} as="li" delay={index * 100}>
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-mist-50 bg-teal-500 dark:border-navy-950" />
                <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
                  {item.period}
                </p>
                <h3 className="mt-1 font-display text-xl text-ink dark:text-mist-50">
                  {item.institution}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-ink/70 dark:text-mist-100/70">
                  {pick(item.degree)}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60 dark:text-mist-100/60">
                  {pick(item.description)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  );
}
