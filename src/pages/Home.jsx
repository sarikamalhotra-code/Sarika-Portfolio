import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MoveUpRight,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const techStack = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Java",
  "DSA",
];

function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A090C] text-white">

      {/* SUBTLE NOISE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")",
        }}
      />

      {/* PURPLE GLOW */}
      <div className="pointer-events-none absolute right-[18%] top-[22%] h-72 w-72 rounded-full bg-purple-600/10 blur-[130px]" />

      <section className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-32 md:px-10 lg:px-16">

        {/* TOP BAR */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-white/10 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-purple-400" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45">
              Portfolio / 2026
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-white/25 md:block">
            Based in India
          </span>
        </motion.div>

        {/* HERO GRID */}
        <div className="relative mt-14 grid min-h-[650px] grid-cols-1 lg:grid-cols-[160px_1fr_300px]">

          {/* LEFT VERTICAL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex"
          >
            <div className="flex h-full flex-col justify-between border-r border-white/10 pr-8">

              <span className="text-[9px] uppercase tracking-[0.35em] text-white/30 [writing-mode:vertical-rl]">
                Full-Stack Developer
              </span>

              <div className="flex flex-col items-center gap-4">
                <span className="text-[9px] text-white/25">
                  SCROLL
                </span>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-14 w-px bg-gradient-to-b from-purple-400 to-transparent"
                />
              </div>

            </div>
          </motion.div>

          {/* CENTER */}
          <div className="relative px-0 lg:px-12">

            {/* INTRO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-10"
            >
              <p className="text-sm text-white/45">
                Hi, I'm{" "}
                <span className="text-white">
                  Sarika Malhotra
                </span>
              </p>
            </motion.div>

            {/* NAME */}
            <div className="relative">

              <motion.h1
                initial={{ opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="select-none text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.09em] sm:text-[16vw] md:text-[13vw] lg:text-[9.5vw]"
              >
                SARIKA
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 mt-3 select-none text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.09em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] sm:text-[16vw] md:text-[13vw] lg:text-[9.5vw]"
              >
                MALHOTRA
                <span className="text-purple-400 [-webkit-text-stroke:0px]">
                  .
                </span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                }}
                className="mt-8 h-px w-full origin-left bg-gradient-to-r from-purple-500 via-purple-500/30 to-transparent"
              />
            </div>

            {/* DESCRIPTION + BUTTONS */}
            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.55,
                }}
                className="max-w-xl text-base leading-7 text-white/45 md:text-lg"
              >
                I design and develop web experiences that are clean,
                responsive and built to solve real problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.65,
                }}
                className="flex gap-3"
              >
                <Link
                  to="/projects"
                  className="group flex items-center gap-3 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-purple-400"
                >
                  View Work

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center gap-2 border border-white/15 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white/60 transition hover:border-white/40 hover:text-white"
                >
                  Contact
                </Link>
              </motion.div>

            </div>
          </div>

          {/* RIGHT INFO */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-16 border-l border-white/10 pl-7 lg:mt-0"
          >
            <div className="flex h-full flex-col justify-between">

              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                  Currently
                </p>

                <h3 className="mt-4 text-xl font-medium leading-7">
                  Building
                  <br />
                  & learning.
                </h3>

                <div className="mt-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />

                  <span className="text-xs text-white/40">
                    Open to opportunities
                  </span>
                </div>
              </div>

              <div className="mt-16">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  Focus
                </p>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-sm text-white/50">
                      Development
                    </span>

                    <span className="text-xs text-purple-400">
                      01
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-sm text-white/50">
                      Java DSA
                    </span>

                    <span className="text-xs text-purple-400">
                      02
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-sm text-white/50">
                      Problem Solving
                    </span>

                    <span className="text-xs text-purple-400">
                      03
                    </span>
                  </div>

                </div>
              </div>

              <div className="mt-16 flex items-end justify-between">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Let's build
                </span>

                <MoveUpRight
                  size={28}
                  strokeWidth={1}
                  className="text-purple-400"
                />
              </div>

            </div>
          </motion.aside>

        </div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          className="border-y border-white/10 py-5"
        >
          <div className="flex items-center gap-8 overflow-hidden">

            <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.3em] text-purple-400">
              Stack
            </span>

            <div className="flex min-w-max items-center gap-8">

              {techStack.map((tech, index) => (
                <div
                  key={tech}
                  className="flex items-center gap-8"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white">
                    {tech}
                  </span>

                  {index !== techStack.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-white/15" />
                  )}
                </div>
              ))}

            </div>
          </div>
        </motion.div>

        {/* ================= FOOTER ================= */}

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/10"
        >

          {/* FOOTER MAIN */}
          <div className="grid gap-10 py-10 md:grid-cols-[1fr_auto_1fr] md:items-center">

            {/* BRAND */}
            <div>
              <p className="text-sm font-bold tracking-tight text-white">
                SARIKA MALHOTRA
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/25">
                Full-Stack Developer
              </p>
            </div>

            {/* CENTER */}
            <p className="text-center text-xs uppercase tracking-[0.2em] text-white/25">
              Building. Learning. Growing.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-6 md:justify-end">

              <a
                href="https://github.com/sarikamalhotra-code"
                target="_blank"
                rel="noreferrer"
                className="text-[9px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-purple-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sarikamalhotra-dev"
                target="_blank"
                rel="noreferrer"
                className="text-[9px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-purple-400"
              >
                LinkedIn
              </a>

              <a
                href="mailto:malhotrasarika789@gmail.com"
                className="text-[9px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-purple-400"
              >
                Email
              </a>

            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="flex flex-col justify-between gap-5 border-t border-white/10 py-5 sm:flex-row sm:items-center">

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
              © 2026 Sarika Malhotra
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-purple-400"
            >
              Back to top

              <span className="flex h-7 w-7 items-center justify-center border border-white/10 transition-colors group-hover:border-purple-400/40">
                <ArrowUp
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </span>
            </button>

          </div>

        </motion.footer>

      </section>
    </main>
  );
}

export default Home;