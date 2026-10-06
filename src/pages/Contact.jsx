import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, ArrowUp, } from "lucide-react";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A090C] px-6 pb-16 pt-32 text-white md:px-10 lg:px-16">

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Purple Glow */}
      <div className="pointer-events-none absolute right-[10%] top-[18%] h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/10 pb-8"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-purple-400">
            05 / Contact
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
              LET'S BUILD
              <br />
              <span className="text-white">TOGETHER</span>
              <span className="text-purple-400">.</span>
            </h1>

            {/* Intro */}
            <p className="max-w-sm text-sm leading-7 text-white/35 lg:pb-2">
              Have an opportunity, project or idea in mind?
              Let's connect and build something meaningful.
            </p>

          </div>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">

          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              Get in touch
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/40 md:text-lg">
              I'm currently open to full-stack development internships,
              software development opportunities and interesting projects.
            </p>

            {/* EMAIL */}

            <a
              href="mailto:malhotrasarika789@gmail.com"
              className="group mt-10 flex items-center justify-between border-y border-white/10 py-6 transition-colors hover:border-purple-400/30"
            >
              <div className="flex items-center gap-4">

                <Mail
                  size={19}
                  strokeWidth={1.5}
                  className="text-purple-400"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white/65 transition-colors group-hover:text-white sm:text-base">
                    malhotrasarika789@gmail.com
                  </p>
                </div>

              </div>

              <ArrowUpRight
                size={18}
                className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
              />
            </a>

            {/* PHONE */}

            <a
              href="tel:+919034293316"
              className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors hover:border-purple-400/30"
            >
              <div className="flex items-center gap-4">

                <Phone
                  size={19}
                  strokeWidth={1.5}
                  className="text-purple-400"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-white/65 transition-colors group-hover:text-white sm:text-base">
                    +91 90342 93316
                  </p>
                </div>

              </div>

              <ArrowUpRight
                size={18}
                className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
              />
            </a>

            {/* LOCATION */}

            <div className="flex items-center gap-4 border-b border-white/10 py-6">

              <MapPin
                size={19}
                strokeWidth={1.5}
                className="text-purple-400"
              />

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Location
                </p>

                <p className="mt-1 text-sm text-white/65">
                  Haryana, India
                </p>
              </div>

            </div>

          </motion.section>

          {/* ================= RIGHT ================= */}

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="lg:border-l lg:border-white/10 lg:pl-12"
          >

            <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              Connect
            </p>

            <div className="mt-6">

              {/* GITHUB */}

              <a
                href="https://github.com/sarikamalhotra-code"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-6"
              >

                <div>
                  <p className="text-lg font-semibold">
                    GitHub
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    Projects & code
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
                />

              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/sarikamalhotra-dev"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-6"
              >

                <div>
                  <p className="text-lg font-semibold">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    Professional profile
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
                />

              </a>

            </div>

            {/* OPEN TO */}

            <div className="mt-10 border border-purple-400/20 bg-purple-400/[0.025] p-6">

              <div className="flex items-center gap-2">

                <motion.span
                  animate={{
                    opacity: [1, 0.4, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-green-400"
                />

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Currently Open To
                </span>

              </div>

              <p className="mt-4 text-sm leading-6 text-white/55">
                Full-stack development internships, software development
                opportunities and meaningful projects.
              </p>

            </div>

          </motion.section>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-y border-white/10 py-8"
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-purple-400">
                Let's create
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                Have something in mind?
              </h2>

            </div>

            <a
              href="mailto:malhotrasarika789@gmail.com"
              className="group inline-flex items-center gap-3 self-start bg-white px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-purple-400"
            >
              Say Hello

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

        </motion.div>

        {/* ================= FOOTER ================= */}

        <footer className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">

          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            © 2026 Sarika Malhotra
          </p>

          <div className="flex items-center gap-6">

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
              Full-Stack Developer
            </span>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-purple-400"
            >
              Top

              <span className="flex h-7 w-7 items-center justify-center border border-white/10 transition-colors group-hover:border-purple-400/40">
                <ArrowUp
                  size={12}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </span>

            </button>

          </div>

        </footer>

      </div>
    </main>
  );
}

export default Contact;