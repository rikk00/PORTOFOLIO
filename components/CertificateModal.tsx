"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { CertificateItem } from "@/types";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const { t, pick } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!certificate) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg animate-fade-up rounded-2xl bg-mist-50 p-6 shadow-soft dark:bg-navy-900">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={t.skillsCertificates.close}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/60 hover:text-ink dark:border-mist-100/15 dark:text-mist-100/60 dark:hover:text-mist-50"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 5l14 14M19 5L5 19"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* EDIT ME: replace with a Next.js <Image /> of the real certificate scan */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-ink/10 bg-mist-100 dark:border-mist-100/10 dark:bg-navy-800">
          <span className="text-sm text-ink/40 dark:text-mist-100/40">
            {pick(certificate.title)}
          </span>
        </div>

        <h3
          id="certificate-modal-title"
          className="mt-5 font-display text-xl text-ink dark:text-mist-50"
        >
          {pick(certificate.title)}
        </h3>
        <p className="mt-1 text-sm text-ink/60 dark:text-mist-100/60">
          {certificate.issuer} — {certificate.date}
        </p>
      </div>
    </div>
  );
}
