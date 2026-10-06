import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { number: "3+", label: "Projects Built" },
  { number: "Full-Stack", label: "Developer" },
  { number: "2027", label: "Graduation" },
];

function About() {
  return (
    <main className="min-h-screen bg-[#0A090C] px-6 pb-24 pt-32 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between border-b border-white/10 pb-5"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-purple-400">
            01 / About
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            Get to know me
          </span>
        </motion.div>

        {/* MAIN */}
        <div className="mt-16 grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:border-r lg:border-white/10 lg:pr-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Who I am
            </p>

            <h1 className="mt-6 text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] sm:text-7xl">
              More
              <br />
              Than
              <br />
              <span className="text-purple-400">Code.</span>
            </h1>

            <div className="mt-10 h-px w-24 bg-purple-500" />

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/35">
              Developer, learner and problem solver — constantly building,
              experimenting and improving.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="max-w-3xl text-xl leading-9 text-white/70 md:text-2xl">
              I'm{" "}
              <span className="font-semibold text-white">
                Sarika Malhotra
              </span>
              , a BCA student and aspiring full-stack developer who enjoys
              turning ideas into useful digital products.
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/35">
              My current focus is on building strong fundamentals in software
              development while gaining real-world experience through
              projects and internships. I work mainly with JavaScript,
              React, Node.js and MongoDB, while also strengthening my Java
              and DSA skills.
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/35">
              I care about writing clean code, understanding how things work
              behind the scenes and continuously pushing myself to become a
              better developer.
            </p>

            {/* STATS */}
            <div className="mt-14 grid max-w-2xl grid-cols-3 border-y border-white/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className={`py-7 ${
                    index !== stats.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }`}
                >
                  <p className="text-3xl font-bold tracking-tight text-white">
                    {stat.number}
                  </p>

                  <p className="mt-2 max-w-[90px] text-[9px] uppercase leading-4 tracking-[0.15em] text-white/25">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-purple-400"
              >
                Explore my work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 grid border-y border-white/10 md:grid-cols-3"
        >
          <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r">
            <p className="text-[9px] uppercase tracking-[0.3em] text-purple-400">
              01
            </p>

            <h3 className="mt-3 text-sm font-semibold">
              Build
            </h3>

            <p className="mt-2 text-xs leading-6 text-white/30">
              Building practical full-stack applications and exploring
              better ways to solve problems.
            </p>
          </div>

          <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r">
            <p className="text-[9px] uppercase tracking-[0.3em] text-purple-400">
              02
            </p>

            <h3 className="mt-3 text-sm font-semibold">
              Learn
            </h3>

            <p className="mt-2 text-xs leading-6 text-white/30">
              Strengthening DSA, Java and core software development
              fundamentals.
            </p>
          </div>

          <div className="px-6 py-8">
            <p className="text-[9px] uppercase tracking-[0.3em] text-purple-400">
              03
            </p>

            <h3 className="mt-3 text-sm font-semibold">
              Grow
            </h3>

            <p className="mt-2 text-xs leading-6 text-white/30">
              Looking for opportunities where I can contribute, learn and
              grow as a developer.
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

export default About;