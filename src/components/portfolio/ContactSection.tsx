import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import type { PortfolioPageContext } from "@/types/portfolio";
import { fadeIn } from "./motion";

export function ContactSection({ alternateLang, emailHref, lang, t }: PortfolioPageContext) {
  return (
    <section id="contact" className="section bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <motion.div {...fadeIn()}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
            {t.metaLabel}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t.contact.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href={emailHref}>
              {t.hero.ctas.email}
            </a>
            <Link className="btn-dark" href={`/${alternateLang}`}>
              {lang === "vi" ? `Phiên bản ${alternateLang.toUpperCase()}` : `${alternateLang.toUpperCase()} version`}
            </Link>
          </div>
        </motion.div>

        <motion.div {...fadeIn(0.1)} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <ContactDetails emailHref={emailHref} />
        </motion.div>
      </div>
    </section>
  );
}

function ContactDetails({ emailHref }: { emailHref: string }) {
  const items = [
    { label: "Email", href: emailHref, value: profile.email },
    { label: "Phone", href: "tel:+84386215829", value: profile.phone },
    { label: "LinkedIn", href: profile.linkedin, value: "linkedin.com/in/minhbcdev", external: true },
    { label: "GitHub", href: profile.github, value: "github.com/minhbc97", external: true },
  ];

  return (
    <dl className="space-y-5">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-sm font-semibold text-slate-400">{item.label}</dt>
          <dd className="mt-1">
            <a
              className="text-teal-200 hover:text-white"
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.value}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}
