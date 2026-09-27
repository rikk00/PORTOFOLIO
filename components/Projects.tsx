"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/portfolio";
import type { ProjectItem } from "@/types";
import AnimatedSection from "./AnimatedSection";

type FilterKey = "all" | ProjectItem["category"];

export default function Projects() {
  const { t, pick } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filters: FilterKey[] = ["all", "web", "design", "data", "other"];

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="scroll-mt-20 bg-mist-100/50 py-24 dark:bg-navy-900/40 sm:py-28">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-eyebrow">{t.projects.eyebrow}</p>
          <h2 className="section-heading">{t.projects.heading}</h2>
          <p className="mt-3 max-w-xl text-ink/65 dark:text-mist-100/65">
            {t.projects.description}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={t.projects.heading}>
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-navy-800 text-mist-50 dark:bg-teal-500 dark:text-navy-950"
                      : "border border-ink/10 text-ink/70 hover:border-teal-500/40 hover:text-teal-600 dark:border-mist-100/15 dark:text-mist-100/70 dark:hover:text-teal-400"
                  }`}
                >
                  {t.projects.filters[filter]}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {filteredProjects.length === 0 ? (
          <p className="mt-12 text-ink/60 dark:text-mist-100/60">{t.projects.noResults}</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 70}>
                <article className="group h-full overflow-hidden rounded-2xl border border-ink/10 bg-mist-50 shadow-card transition-shadow hover:shadow-soft dark:border-mist-100/10 dark:bg-navy-800/60">
                  {/*
                    EDIT ME: replace with a Next.js <Image /> pointing at
                    /public/images/project-0X.jpg
                  */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-mist-200 dark:bg-navy-700">
                    <div className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <span className="text-xs font-medium uppercase tracking-wide text-ink/35 dark:text-mist-100/35">
                        {project.title.en}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl text-ink dark:text-mist-50">
                      {pick(project.title)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-mist-100/65">
                      {pick(project.description)}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-full bg-teal-500/10 px-2.5 py-1 text-xs font-medium text-teal-700 dark:text-teal-300"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex gap-4 text-sm font-medium">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="text-ink underline decoration-teal-500/40 decoration-2 underline-offset-4 hover:text-teal-600 dark:text-mist-50 dark:hover:text-teal-400"
                        >
                          {t.projects.viewProject}
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="text-ink/60 underline decoration-ink/20 decoration-2 underline-offset-4 hover:text-ink dark:text-mist-100/60 dark:hover:text-mist-50"
                        >
                          {t.projects.viewCode}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
