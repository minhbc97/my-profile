import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import type { PortfolioContent, PortfolioPageContext } from "@/types/portfolio";
import { fadeIn } from "./motion";

export function Hero({ emailHref, lang, t }: PortfolioPageContext) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.14),transparent_34%),radial-gradient(circle_at_top_left,rgba(31,41,55,0.10),transparent_30%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.16, 0.28, 0.16], scale: [1, 1.08, 1] }}
        className="absolute right-[-8rem] top-20 h-72 w-72 rounded-full bg-teal-200 blur-3xl"
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.12, 0.2, 0.12], y: [0, 24, 0] }}
        className="absolute bottom-[-7rem] left-10 h-64 w-64 rounded-full bg-slate-300 blur-3xl"
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <motion.div {...fadeIn()}>
          <p className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{t.hero.summary}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{t.hero.proof}</p>
          <HeroActions emailHref={emailHref} t={t} />
        </motion.div>

        <motion.aside
          {...fadeIn(0.1)}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-2xl shadow-slate-200"
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-teal-300/20"
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: -360 }}
            className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/10"
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative flex items-center gap-5">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              className="relative flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-teal-600 shadow-xl shadow-teal-950/30"
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                aria-hidden="true"
                animate={{ rotate: 360 }}
                className="absolute h-24 w-24 rounded-full border border-white/20"
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                aria-hidden="true"
                animate={{ rotate: -360 }}
                className="absolute h-16 w-16 rounded-full border border-teal-100/30"
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative text-3xl font-black tracking-tight text-white">
                BCM
              </span>
              <span className="absolute bottom-2 right-2 rounded-full border border-white/10 bg-slate-950 px-2 py-1 text-[10px] font-bold text-teal-200 shadow-md">
                FE
              </span>
            </motion.div>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-teal-200">{profile.role}</p>
              <h2 className="mt-2 text-2xl font-bold">{profile.name[lang]}</h2>
              <p className="mt-1 text-slate-300">{profile.location}</p>
            </div>
          </div>

          <div className="relative mt-8 grid gap-4">
            {t.stats.map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:border-teal-300/50 hover:bg-white/[0.09]"
                transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
                whileHover={{ x: 4, scale: 1.015 }}
              >
                <p className="text-3xl font-bold text-teal-200">{value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300 transition group-hover:text-white">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="relative mt-6 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-100/80">
            {["Design", "Review", "Release"].map((item, index) => (
              <motion.span
                key={item}
                animate={{ opacity: [0.65, 1, 0.65] }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2"
                transition={{ delay: index * 0.35, duration: 2.4, repeat: Infinity }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function HeroActions({ emailHref, t }: { emailHref: string; t: PortfolioContent }) {
  const actions = [
    { className: "btn-primary", href: profile.cv.en, label: t.hero.ctas.cvEn, download: true },
    { className: "btn-secondary", href: profile.cv.vi, label: t.hero.ctas.cvVi, download: true },
    { className: "btn-secondary", href: profile.linkedin, label: t.hero.ctas.linkedin, external: true },
    { className: "btn-secondary", href: profile.github, label: t.hero.ctas.github, external: true },
    { className: "btn-secondary", href: emailHref, label: t.hero.ctas.email },
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {actions.map((action) => (
        <a
          key={action.label}
          className={action.className}
          href={action.href}
          download={action.download}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noreferrer" : undefined}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
}
