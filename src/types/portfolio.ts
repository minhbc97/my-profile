export type Locale = "en" | "vi";

export type SectionId =
  | "about"
  | "skills"
  | "leadership"
  | "experience"
  | "projects"
  | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
};

export type Project = {
  codename: string;
  featured?: boolean;
  title: string;
  period: string;
  role: string;
  team?: string;
  stack: string[];
  highlights: string[];
};

export type Profile = {
  name: Record<Locale, string>;
  role: string;
  location: Record<Locale, string>;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  cv: Record<Locale, string>;
};

export type PortfolioContent = {
  metaLabel: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    proof: string;
    ctas: {
      cvEn: string;
      cvVi: string;
      linkedin: string;
      github: string;
      email: string;
    };
  };
  stats: [string, string][];
  about: {
    title: string;
    body: string;
  };
  skillsTitle: string;
  skillGroups: SkillGroup[];
  leadership: {
    title: string;
    intro: string;
    items: string[];
  };
  experienceTitle: string;
  experiences: Experience[];
  projects: {
    title: string;
    notice: string;
    items: Project[];
  };
  education: {
    title: string;
    school: string;
    degree: string;
    period: string;
  };
  contact: {
    title: string;
    body: string;
    emailSubject: string;
    emailBody: string;
  };
  footer: string;
};

export type PortfolioPageContext = {
  activeSection: SectionId;
  alternateLang: Locale;
  emailHref: string;
  lang: Locale;
  t: PortfolioContent;
};
