import { motion } from "framer-motion";
import type { PortfolioContent, Project } from "@/types/portfolio";
import { fadeIn } from "./motion";
import { TagList } from "./TagList";

export function ProjectsSection({ t }: { t: PortfolioContent }) {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeIn()} className="max-w-3xl">
          <p className="section-kicker">Impact</p>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="mt-5 rounded-2xl border border-teal-200 bg-teal-50 p-5 text-sm leading-6 text-teal-900">
            {t.projects.notice}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {t.projects.items.map((project, index) => (
            <ProjectCard key={project.codename} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ index, project }: { index: number; project: Project }) {
  return (
    <motion.article {...fadeIn(index * 0.04)} className="card flex flex-col">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            {project.codename}
          </p>
          <h3 className="mt-2 text-xl font-bold text-slate-950">{project.title}</h3>
          <p className="mt-2 text-sm font-semibold text-slate-600">{project.period}</p>
        </div>
        <span className="shrink-0 whitespace-nowrap rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          {project.role}
        </span>
      </div>

      {project.team ? <p className="mt-4 text-sm font-medium text-slate-500">{project.team}</p> : null}

      <ul className="mt-5 space-y-3">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <TagList items={project.stack} className="mt-6" />
    </motion.article>
  );
}
