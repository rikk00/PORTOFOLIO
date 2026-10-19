"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { certificates } from "@/data/portfolio";
import type { CertificateItem } from "@/types";
import AnimatedSection from "./AnimatedSection";
import CertificateModal from "./CertificateModal";
import Image from "next/image";

export default function Certificates() {
  const { t, pick } = useLanguage();
  const [selected, setSelected] = useState<CertificateItem | null>(null);

  return (
    <div className="mt-16">
      <AnimatedSection>
        <h3 className="font-display text-2xl text-ink dark:text-mist-50">
          {t.skillsCertificates.certificatesHeading}
        </h3>
        <p className="mt-2 text-ink/60 dark:text-mist-100/60">
          {t.skillsCertificates.certificatesDescription}
        </p>
      </AnimatedSection>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <AnimatedSection key={certificate.id} delay={index * 70}>
            <div className="rounded-2xl border border-ink/10 bg-mist-50 p-5 shadow-card dark:border-mist-100/10 dark:bg-navy-800/60">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist-100 dark:bg-navy-700">
                <Image
                  src={certificate.image}
                  alt={pick(certificate.title)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2"
                />
              </div>

              <h4 className="mt-4 font-display text-lg text-ink dark:text-mist-50">
                {pick(certificate.title)}
              </h4>
              <p className="mt-1 text-sm text-ink/60 dark:text-mist-100/60">
                {certificate.issuer} — {certificate.date}
              </p>

              <button
                type="button"
                onClick={() => setSelected(certificate)}
                className="mt-4 text-sm font-medium text-teal-600 underline decoration-2 underline-offset-4 dark:text-teal-400"
              >
                {t.skillsCertificates.viewCertificate}
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
