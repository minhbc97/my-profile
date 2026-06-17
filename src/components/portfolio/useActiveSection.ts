import { useEffect } from "react";
import { sectionIds } from "@/data/portfolio";
import type { Locale, SectionId } from "@/types/portfolio";

export function useActiveSection(
  lang: Locale,
  setActiveSection: (sectionId: SectionId) => void,
) {
  useEffect(() => {
    document.documentElement.lang = lang;

    const handleScroll = () => {
      const current = [...sectionIds]
        .reverse()
        .map((id) => document.getElementById(id))
        .find((section) => section && section.getBoundingClientRect().top <= 120);

      if (current?.id) {
        setActiveSection(current.id as SectionId);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang, setActiveSection]);
}
