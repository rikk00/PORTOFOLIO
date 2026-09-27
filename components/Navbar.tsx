"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

const SECTION_IDS = ["about", "projects", "certificates", "education", "experience"];

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "certificates", label: t.nav.certificates },
    { id: "education", label: t.nav.education },
    { id: "experience", label: t.nav.experience },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-mist-50/80 shadow-card backdrop-blur-md dark:bg-navy-950/75"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="font-display text-lg font-semibold text-ink dark:text-mist-50"
          >
            MyPortofolio<span className="text-teal-600 dark:text-teal-400">.</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeId === item.id
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-ink/70 hover:text-ink dark:text-mist-100/70 dark:hover:text-mist-50"
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-teal-500" />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-ink/10 dark:border-mist-100/15"
            >
              <span
                className={`h-0.5 w-4 rounded-full bg-ink transition-transform dark:bg-mist-100 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-full bg-ink transition-opacity dark:bg-mist-100 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-full bg-ink transition-transform dark:bg-mist-100 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={navItems}
        activeId={activeId}
      />
    </>
  );
}
