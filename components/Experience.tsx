"use client";

import { useLanguage } from "@/context/LanguageContext";
import { experience } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const { t, pick } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-eyebrow">{t.experience.eyebrow}</p>
          <h2 className="section-heading">{t.experience.heading}</h2>
          <p className="mt-3 max-w-xl text-ink/65 dark:text-mist-100/65">
            {t.experience.description}
          </p>
        </AnimatedSection>

        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 100}>
              <article className="rounded-2xl border border-ink/10 bg-mist-50 p-7 shadow-card dark:border-mist-100/10 dark:bg-navy-800/60">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl text-ink dark:text-mist-50">
                    {pick(item.position)} · {item.company}
                  </h3>
                  <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                    {item.period}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-mist-100/65">
                  {pick(item.description)}
                </p>

                <p className="mt-5 text-xs font-medium uppercase tracking-wide text-ink/45 dark:text-mist-100/45">
                  {t.experience.responsibilitiesLabel}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={pick(responsibility)}
                      className="flex gap-2 text-sm leading-relaxed text-ink/65 dark:text-mist-100/65"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-teal-500" />
                      {pick(responsibility)}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {item.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full bg-teal-500/10 px-2.5 py-1 text-xs font-medium text-teal-700 dark:text-teal-300"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
