import { motion } from "framer-motion";
import type { Locale, PortfolioContent } from "@/types/portfolio";
import { fadeIn } from "./motion";
import { TagList } from "./TagList";

export function SkillsSection({ lang, t }: { lang: Locale; t: PortfolioContent }) {
  return (
    <section id="skills" className="section bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeIn()} className="max-w-3xl">
          <p className="section-kicker">{lang === "vi" ? "Năng lực" : "Capabilities"}</p>
          <h2 className="section-title">{t.skillsTitle}</h2>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              {...fadeIn(index * 0.04)}
              className="card group relative overflow-hidden"
              whileHover={{ y: -6 }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute right-5 top-5 h-10 w-10 rounded-full bg-teal-100 opacity-0 blur-lg transition group-hover:opacity-100"
                layoutId={`skill-glow-${group.title}`}
              />
              <h3 className="relative text-lg font-bold text-slate-950">{group.title}</h3>
              <TagList items={group.items} className="mt-5" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
