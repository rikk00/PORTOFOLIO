"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/data/portfolio";
import type { SkillLevel } from "@/types";
import AnimatedSection from "./AnimatedSection";

const LEVEL_FILL: Record<SkillLevel, string> = {
  beginner: "w-1/3",
  intermediate: "w-2/3",
  advanced: "w-full",
};

export default function Skills() {
  const { t } = useLanguage();
  const groups: { key: "technical" | "soft"; label: string }[] = [
    { key: "technical", label: t.skillsCertificates.groups.technical },
    { key: "soft", label: t.skillsCertificates.groups.soft },
  ];

  return (
    <div>
      <AnimatedSection>
        <h3 className="font-display text-2xl text-ink dark:text-mist-50">
          {t.skillsCertificates.skillsHeading}
        </h3>
        <p className="mt-2 text-ink/60 dark:text-mist-100/60">
          {t.skillsCertificates.skillsDescription}
        </p>
      </AnimatedSection>

      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.key}>
            <p className="text-xs font-medium uppercase tracking-wide text-ink/45 dark:text-mist-100/45">
              {group.label}
            </p>
            <ul className="mt-4 space-y-4">
              {skills
                .filter((skill) => skill.group === group.key)
                .map((skill, index) => (
                  <AnimatedSection key={skill.id} as="li" delay={index * 60}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink dark:text-mist-50">{skill.name}</span>
                      <span className="text-xs text-ink/50 dark:text-mist-100/50">
                        {t.skillsCertificates.levels[skill.level]}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-mist-100/10">
                      <div
                        className={`h-full rounded-full bg-teal-500 transition-all duration-700 ${LEVEL_FILL[skill.level]}`}
                      />
                    </div>
                  </AnimatedSection>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
