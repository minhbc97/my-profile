import { motion } from "framer-motion";
import type { Locale, PortfolioContent } from "@/types/portfolio";
import { fadeIn } from "./motion";

export function ExperienceSection({ lang, t }: { lang: Locale; t: PortfolioContent }) {
  return (
    <section id="experience" className="section bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div {...fadeIn()} className="text-center">
          <p className="section-kicker">{lang === "vi" ? "Kinh nghiệm" : "Career"}</p>
          <h2 className="section-title">{t.experienceTitle}</h2>
        </motion.div>

        <div className="mt-12 space-y-6">
          {t.experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              {...fadeIn(index * 0.05)}
              className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">{item.role}</h3>
                  <p className="mt-1 font-semibold text-slate-700">
                    {item.company}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                </div>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600">
                  {index === 0
                    ? lang === "vi"
                      ? "Hiện tại"
                      : "Current"
                    : lang === "vi"
                      ? "Trước đây"
                      : "Previous"}
                </span>
              </div>
              <p className="mt-5 leading-7 text-slate-600">{item.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
