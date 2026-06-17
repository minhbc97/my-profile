import { motion } from "framer-motion";
import type { PortfolioContent } from "@/types/portfolio";
import { fadeIn } from "./motion";

export function LeadershipSection({ t }: { t: PortfolioContent }) {
  return (
    <section id="leadership" className="section relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        className="absolute left-[-5rem] top-12 h-52 w-52 rounded-full bg-teal-100 blur-3xl"
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div {...fadeIn()}>
          <p className="section-kicker">Leadership</p>
          <h2 className="section-title">{t.leadership.title}</h2>
          <p className="section-copy text-left">{t.leadership.intro}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.leadership.items.map((item, index) => (
            <motion.div
              key={item}
              {...fadeIn(index * 0.04)}
              className="card relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                animate={{ width: ["3rem", "4.5rem", "3rem"] }}
                className="mb-4 block h-1.5 rounded-full bg-teal-600"
                transition={{ delay: index * 0.15, duration: 2.8, repeat: Infinity }}
              />
              <p className="font-medium leading-7 text-slate-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
