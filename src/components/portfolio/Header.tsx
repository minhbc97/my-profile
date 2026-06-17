import Link from "next/link";
import { profile } from "@/data/portfolio";
import type { Locale, PortfolioPageContext } from "@/types/portfolio";
import { ProfileMark } from "./ProfileMark";

export function Header({ activeSection, lang, t }: PortfolioPageContext) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-3 font-semibold text-slate-900">
          <ProfileMark />
          <span className="hidden sm:block">{profile.name[lang]}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {t.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition ${
                activeSection === item.id
                  ? "text-teal-700"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher lang={lang} />
      </div>
    </header>
  );
}

function LanguageSwitcher({ lang }: { lang: Locale }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 text-sm font-semibold shadow-sm">
      {(["en", "vi"] as const).map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={`rounded-full px-3 py-1.5 transition ${
            lang === locale ? "bg-slate-800 text-white" : "text-slate-600 hover:text-slate-950"
          }`}
          aria-current={lang === locale ? "page" : undefined}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
