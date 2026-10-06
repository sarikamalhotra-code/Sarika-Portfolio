import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
];

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-[1400px] px-6 py-5 md:px-10 lg:px-14">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3"
            >
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white text-black">
                <span className="text-sm font-black">S</span>

                <motion.span
                  className="absolute inset-0 rounded-full border border-purple-400"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-bold tracking-tight text-white">
                  SARIKA MALHOTRA
                </p>

                <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Full-Stack Developer
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 backdrop-blur-md md:flex">
              {navItems.map((item) => {
                const active = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em]"
                  >
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 transition-colors ${
                        active
                          ? "text-black"
                          : "text-white/45 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://github.com/sarikamalhotra-code"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white"
              >
                GitHub
              </a>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-full bg-purple-500 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-purple-400"
              >
                Let's Talk

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-[78px] z-40 rounded-2xl border border-white/10 bg-[#0d0b12]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navItems.map((item, index) => {
              const active = location.pathname === item.path;

              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-4 text-sm font-medium ${
                      active
                        ? "bg-white text-black"
                        : "text-white/55 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}

                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            <div className="mt-2 border-t border-white/10 pt-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-sm font-semibold text-white"
              >
                Let's Talk
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;