"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const { t } = useLanguage();
  const cards = Object.values(t.about.cards);

  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-eyebrow">{t.about.eyebrow}</p>
          <h2 className="section-heading">{t.about.heading}</h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <AnimatedSection delay={80}>
            {/*
              EDIT ME: swap this placeholder for a Next.js <Image /> pointing
              at your own photo, e.g. /public/images/profile-placeholder.jpg
            */}
            <div className="flex aspect-square items-center justify-center rounded-2xl border border-ink/10 bg-mist-100/70 dark:border-mist-100/10 dark:bg-navy-800/60">
              <span className="text-sm font-medium uppercase tracking-[0.14em] text-ink/40 dark:text-mist-100/40">
                {t.hero.photoPlaceholder}
              </span>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection delay={140}>
              <p className="leading-relaxed text-ink/75 dark:text-mist-100/75">{t.about.bio1}</p>
              <p className="mt-4 leading-relaxed text-ink/75 dark:text-mist-100/75">
                {t.about.bio2}
              </p>
            </AnimatedSection>

            <ul className="mt-8 grid grid-cols-2 gap-4">
              {cards.map((card, index) => (
                <AnimatedSection key={card.label} as="li" delay={180 + index * 60}>
                  <div className="rounded-xl border border-ink/10 bg-mist-100/40 p-4 dark:border-mist-100/10 dark:bg-navy-800/40">
                    <p className="text-xs font-medium uppercase tracking-wide text-ink/45 dark:text-mist-100/45">
                      {card.label}
                    </p>
                    <p className="mt-1.5 font-medium text-ink dark:text-mist-50">{card.value}</p>
                  </div>
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
