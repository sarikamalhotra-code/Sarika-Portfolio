import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Developing APIs, authentication and real-time functionality.",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "WebSockets",
      "JWT",
      "Authentication",
    ],
  },
  {
    number: "03",
    title: "Database",
    description: "Working with databases and application data.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Drizzle ORM",
    ],
  },
  {
    number: "04",
    title: "Programming",
    description:
      "Strengthening programming and problem-solving fundamentals.",
    skills: [
      "Java",
      "DSA",
      "OOP",
      "Problem Solving",
    ],
  },
  {
    number: "05",
    title: "Tools & Deployment",
    description:
      "Tools I use to build, test, manage and deploy applications.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
    ],
  },
];

function Skills() {
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
            04 / Skills
          </p>

          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Skills<span className="text-purple-400">.</span>
            </h1>

            <p className="max-w-sm text-sm leading-6 text-white/30 md:text-right">
              Technologies and tools I use while building projects and
              strengthening my development fundamentals.
            </p>
          </div>
        </motion.div>

        {/* SKILLS */}
        <div className="mt-12">
          {skillGroups.map((group, index) => (
            <motion.section
              key={group.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="group border-b border-white/10 py-10 first:pt-2 md:py-12"
            >
              <div className="grid gap-8 md:grid-cols-[80px_240px_1fr]">

                {/* NUMBER */}
                <span className="text-xs tracking-[0.2em] text-purple-400">
                  {group.number}
                </span>

                {/* CATEGORY */}
                <div>
                  <h2 className="text-2xl font-bold tracking-[-0.03em] transition-colors duration-300 group-hover:text-purple-300">
                    {group.title}
                  </h2>

                  <p className="mt-2 max-w-[220px] text-xs leading-6 text-white/25">
                    {group.description}
                  </p>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap content-start gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/50 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-400/5 hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.section>
          ))}
        </div>

        {/* CURRENT FOCUS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 border-y border-white/10 py-10 md:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-purple-400">
              Currently Learning
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              Java + Data Structures & Algorithms
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/30">
              Improving problem-solving skills and preparing for technical
              interviews through consistent DSA practice.
            </p>
          </div>

          <Link
            to="/projects"
            className="group flex items-center gap-3 self-end text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-purple-400"
          >
            See my projects

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}

export default Skills;