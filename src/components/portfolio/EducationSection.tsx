import { motion } from "framer-motion";
import type { PortfolioContent } from "@/types/portfolio";
import { fadeIn } from "./motion";

export function EducationSection({ t }: { t: PortfolioContent }) {
  return (
    <section className="section bg-white">
      <motion.div
        {...fadeIn()}
        className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10"
      >
        <p className="section-kicker">{t.education.title}</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950">{t.education.school}</h2>
        <p className="mt-3 text-slate-700">{t.education.degree}</p>
        <p className="mt-2 text-sm font-semibold text-teal-700">{t.education.period}</p>
      </motion.div>
    </section>
  );
}
