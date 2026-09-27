"use client";

import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

/**
 * Fades and slides content up once it scrolls into view. Motion is disabled
 * automatically for users who prefer reduced motion (see globals.css).
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView<HTMLElement>();

  const combinedClassName = `${className} motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
    isInView
      ? "motion-safe:opacity-100 motion-safe:translate-y-0"
      : "motion-safe:opacity-0 motion-safe:translate-y-5"
  }`;
  const style = { transitionDelay: isInView ? `${delay}ms` : "0ms" };

  if (as === "li") {
    return (
      <li ref={ref as React.RefObject<HTMLLIElement>} className={combinedClassName} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={combinedClassName} style={style}>
      {children}
    </div>
  );
}
