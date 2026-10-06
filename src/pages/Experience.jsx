import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

function Experience() {
  return (
    <main className="min-h-screen bg-[#0A090C] px-6 pb-24 pt-32 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/10 pb-8"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-purple-400">
            03 / Experience
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h1 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Experience<span className="text-purple-400">.</span>
            </h1>

            <p className="max-w-sm text-sm leading-6 text-white/30 md:text-right">
              Learning through real projects, teamwork and hands-on
              development experience.
            </p>
          </div>
        </motion.div>

        {/* EXPERIENCE */}
        <section className="mt-14">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 lg:grid-cols-[220px_1fr_180px]"
          >

            {/* DATE */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                Sep 2026
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-purple-400">
                Present
              </p>
            </div>

            {/* MAIN */}
            <div className="border-l border-white/10 pl-7 md:pl-10">

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-purple-400/20 bg-purple-400/5">
                  <BriefcaseBusiness
                    size={17}
                    strokeWidth={1.5}
                    className="text-purple-400"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                    Internship
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                    MERN Stack Developer Intern
                  </h2>

                  <p className="mt-2 text-sm text-purple-400">
                    Athenura
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                Working on full-stack web development using the MERN stack,
                contributing to backend APIs, authentication and
                admin-dashboard functionality.
              </p>

              {/* WORK AREAS */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-purple-400">
                    01
                  </p>

                  <h3 className="mt-2 text-sm font-semibold">
                    Backend Development
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/30">
                    Building and working with APIs, authentication and
                    server-side functionality.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-purple-400">
                    02
                  </p>

                  <h3 className="mt-2 text-sm font-semibold">
                    Admin Dashboard
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/30">
                    Working on dashboard features, metrics and backend
                    integration.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-purple-400">
                    03
                  </p>

                  <h3 className="mt-2 text-sm font-semibold">
                    Authentication
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/30">
                    Working with login, forgot-password and Google
                    authentication flows.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-purple-400">
                    04
                  </p>

                  <h3 className="mt-2 text-sm font-semibold">
                    Team Collaboration
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/30">
                    Collaborating with other developers to debug and improve
                    application features.
                  </p>
                </div>

              </div>
            </div>

            {/* SIDE */}
            <div className="flex items-start lg:justify-end">
              <div className="border border-white/10 px-4 py-3">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Focus
                </p>

                <p className="mt-2 text-xs font-medium text-white/60">
                  Full-Stack
                </p>
              </div>
            </div>

          </motion.div>

        </section>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-6"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
              Growing through experience
            </p>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-purple-400"
            >
              Work with me
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

export default Experience;