import { motion } from "framer-motion";
import type { Locale, PortfolioContent, Project } from "@/types/portfolio";
import { fadeIn } from "./motion";
import { TagList } from "./TagList";

export function ProjectsSection({ lang, t }: { lang: Locale; t: PortfolioContent }) {
  const featuredProjects = t.projects.items.filter((project) => project.featured);
  const otherProjects = t.projects.items.filter((project) => !project.featured);

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeIn()} className="max-w-3xl">
          <p className="section-kicker">{lang === "vi" ? "Dự án" : "Impact"}</p>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="mt-5 rounded-2xl border border-teal-200 bg-teal-50 p-5 text-sm leading-6 text-teal-900">
            {t.projects.notice}
          </p>
        </motion.div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-slate-950">
            {lang === "vi" ? "Dự án nổi bật" : "Featured Projects"}
          </h3>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.codename}-${project.period}-${project.title}`}
              index={index}
              project={project}
            />
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-slate-950">
            {lang === "vi" ? "Dự án khác" : "More Projects"}
          </h3>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => (
            <CompactProjectCard
              key={`${project.codename}-${project.period}-${project.title}`}
              index={index}
              project={project}
            />
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

function CompactProjectCard({ index, project }: { index: number; project: Project }) {
  return (
    <motion.article
      {...fadeIn(0.12 + index * 0.03)}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
            {project.codename}
          </p>
          <h4 className="mt-2 font-bold text-slate-950">{project.title}</h4>
        </div>
        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {project.period}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-700">{project.role}</p>
      {project.team ? <p className="mt-1 text-xs leading-5 text-slate-500">{project.team}</p> : null}
      <p className="mt-3 text-sm leading-6 text-slate-600">{project.highlights[0]}</p>
      <TagList items={project.stack.slice(0, 5)} className="mt-4" />
    </motion.article>
  );
}
