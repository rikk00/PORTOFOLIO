"use client";

import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const { t, pick } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      {/* Decorative background — subtle grid + gradient glow, purely visual */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.ink/0.04)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.ink/0.04)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,theme(colors.mist.100/0.04)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.mist.100/0.04)_1px,transparent_1px)]" />
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/3 rounded-full bg-teal-400/20 blur-[110px] dark:bg-teal-500/10" />
      </div>

      <div className="section-container grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-teal-600 dark:text-teal-400">
            {t.hero.greeting}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink dark:text-mist-50 sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-ink/70 dark:text-mist-100/70 sm:text-xl">
            {pick(profile.title)}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60 dark:text-mist-100/60">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-navy-800 px-6 py-3 text-sm font-medium text-mist-50 shadow-soft transition-transform hover:-translate-y-0.5 dark:bg-teal-500 dark:text-navy-950"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-teal-500/50 hover:text-teal-600 dark:border-mist-100/20 dark:text-mist-100 dark:hover:text-teal-400"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-400/25 via-transparent to-navy-700/10 blur-2xl" />
          {/*
            EDIT ME: replace this placeholder block with a Next.js <Image />
            pointing at your own photo, e.g. /public/images/profile-placeholder.jpg
          */}
          <div className="motion-safe:animate-float flex h-full w-full items-center justify-center rounded-[2rem] border border-ink/10 bg-mist-100/70 shadow-soft backdrop-blur-sm dark:border-mist-100/10 dark:bg-navy-800/60">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-ink/40 dark:text-mist-100/40">
              {t.hero.photoPlaceholder}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
