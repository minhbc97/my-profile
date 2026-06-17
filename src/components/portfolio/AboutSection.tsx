import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import type { PortfolioContent } from "@/types/portfolio";
import { fadeIn } from "./motion";

export function AboutSection({ t }: { t: PortfolioContent }) {
  return (
    <section id="about" className="section">
      <motion.div {...fadeIn()} className="mx-auto max-w-4xl text-center">
        <p className="section-kicker">{profile.role}</p>
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-copy">{t.about.body}</p>
      </motion.div>
    </section>
  );
}
