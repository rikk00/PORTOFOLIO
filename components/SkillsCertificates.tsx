"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import Skills from "./Skills";
import Certificates from "./Certificates";

export default function SkillsCertificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-eyebrow">{t.skillsCertificates.eyebrow}</p>
          <h2 className="section-heading">{t.skillsCertificates.heading}</h2>
        </AnimatedSection>

        <div className="mt-12">
          <Skills />
          <Certificates />
        </div>
      </div>
    </section>
  );
}
