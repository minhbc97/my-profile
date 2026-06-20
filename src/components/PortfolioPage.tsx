"use client";

import { useMemo, useState } from "react";
import { portfolioContent, profile } from "@/data/portfolio";
import type {
  Locale,
  PortfolioPageContext,
  SectionId,
} from "@/types/portfolio";
import { AboutSection } from "./portfolio/AboutSection";
import { ContactSection } from "./portfolio/ContactSection";
import { EducationSection } from "./portfolio/EducationSection";
import { ExperienceSection } from "./portfolio/ExperienceSection";
import { Footer } from "./portfolio/Footer";
import { Header } from "./portfolio/Header";
import { Hero } from "./portfolio/Hero";
import { LeadershipSection } from "./portfolio/LeadershipSection";
import { ProjectsSection } from "./portfolio/ProjectsSection";
import { SkillsSection } from "./portfolio/SkillsSection";
import { useActiveSection } from "./portfolio/useActiveSection";

export type { Locale } from "@/types/portfolio";

export function PortfolioPage({ lang }: { lang: Locale }) {
  const t = portfolioContent[lang];
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const alternateLang: Locale = lang === "en" ? "vi" : "en";

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(t.contact.emailSubject);
    return `mailto:${profile.email}?subject=${subject}&body=${t.contact.emailBody}`;
  }, [t.contact.emailBody, t.contact.emailSubject]);

  useActiveSection(lang, setActiveSection);

  const context: PortfolioPageContext = {
    activeSection,
    alternateLang,
    emailHref,
    lang,
    t,
  };

  return (
    <main className='min-h-screen bg-slate-50 text-slate-800'>
      <Header {...context} />
      <Hero {...context} />
      <AboutSection t={t} />
      <SkillsSection lang={lang} t={t} />
      <LeadershipSection lang={lang} t={t} />
      <ExperienceSection lang={lang} t={t} />
      <ProjectsSection lang={lang} t={t} />
      <EducationSection t={t} />
      <ContactSection {...context} />
      <Footer lang={lang} t={t} />
    </main>
  );
}
