import { profile } from "@/data/portfolio";
import type { Locale, PortfolioContent } from "@/types/portfolio";

type FooterProps = {
  lang: Locale;
  t: PortfolioContent;
};

export function Footer({ lang, t }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">
      <p>
        © 2026 {profile.name[lang]}. {t.footer}
      </p>
    </footer>
  );
}
