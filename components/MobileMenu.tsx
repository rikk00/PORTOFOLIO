"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavItem {
  id: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId: string;
}

export default function MobileMenu({ isOpen, onClose, items, activeId }: MobileMenuProps) {
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        aria-label={t.a11y.openMenu}
        className={`absolute right-0 top-0 flex h-full w-[78%] max-w-xs flex-col gap-1 bg-mist-50 px-7 pt-24 shadow-soft transition-transform duration-300 ease-out dark:bg-navy-900 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onClose}
            className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
              activeId === item.id
                ? "bg-teal-600/10 text-teal-600 dark:text-teal-400"
                : "text-ink/80 hover:bg-ink/5 dark:text-mist-100/80 dark:hover:bg-mist-100/5"
            }`}
          >
            {item.label}
          </a>
        ))}
        <div className="mt-4 border-t border-ink/10 pt-4 dark:border-mist-100/10">
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}
