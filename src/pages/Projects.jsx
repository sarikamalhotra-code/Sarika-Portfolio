import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Hotel Management",
    category: "Web Application",
    description:
      "A modern hotel management web application focused on providing a clean, responsive and easy-to-use experience for hotel-related workflows.",
    tech: ["React", "JavaScript", "Vercel"],
    live: "https://hotel-management-ten-pi.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    title: "Namma PG",
    category: "Full-Stack MERN",
    description:
      "A full-stack PG management platform designed for tenants, owners and administrators with property management and complaint handling features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://nammapg-app.vercel.app/",
    backend: "https://namma-pg.onrender.com",
  },
  {
    number: "03",
    title: "ChaiForms",
    category: "Full-Stack Product",
    description:
      "A Typeform-inspired form builder for creating forms, collecting responses and viewing analytics through a modern web interface.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
    live: "https://chaiforms-app.vercel.app/",
    backend: "https://chaiforms-t269.onrender.com",
  },
];

function Projects() {
  return (
    <main className="min-h-screen bg-[#0A090C] px-6 pb-24 pt-32 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-purple-400">
              02 / Selected Work
            </p>

            <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Projects<span className="text-purple-400">.</span>
            </h1>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/30 md:text-right">
            A collection of applications I've built while learning,
            experimenting and solving real-world problems.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="mt-12">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group border-b border-white/10 py-12 first:pt-4 md:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-[70px_1fr_250px]">

                {/* NUMBER */}
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] text-purple-400">
                    {project.number}
                  </span>
                </div>

                {/* PROJECT INFO */}
                <div>
                  {/* CATEGORY */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="border border-purple-400/30 px-2 py-1 text-[8px] uppercase tracking-[0.18em] text-purple-400">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* TITLE */}
                  <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] transition-colors duration-300 group-hover:text-purple-300 sm:text-4xl md:text-5xl">
                    {project.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/35 md:text-base">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white/40 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-col justify-between lg:items-end">

                  {/* ARROW */}
                  <div className="hidden lg:block">
                    <ArrowUpRight
                      size={34}
                      strokeWidth={1}
                      className="text-white/15 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:text-purple-400"
                    />
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-2 pt-5 lg:pt-0 lg:justify-end">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/button inline-flex items-center gap-2 bg-white px-4 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-purple-400"
                    >
                      Live Demo

                      <ExternalLink
                        size={12}
                        className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      />
                    </a>

                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white/45 transition-colors duration-300 hover:border-white/40 hover:text-white"
                      >
                        Backend
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between gap-5 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            More projects coming soon
          </p>

          <a
            href="https://github.com/sarikamalhotra-code"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-purple-400"
          >
            View GitHub

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </main>
  );
}

export default Projects;