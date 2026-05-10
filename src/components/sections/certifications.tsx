"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

const CERTS = [
  { code: "AZ-104", name: "Microsoft Azure Administrator Associate" },
  { code: "AZ-204", name: "Microsoft Azure Developer Associate" },
  { code: "AZ-305", name: "Microsoft Azure Solutions Architect Expert" },
];

const LEARNING = [
  {
    title: "Data Processing: Advanced Techniques",
    org: "Tuwaiq Academy",
    period: "12/2025",
  },
  {
    title: "Digital Identity: Fundamentals and Principles",
    org: "Tuwaiq Academy",
    period: "11/2025 – 12/2025",
  },
  {
    title: "GitHub and Git: Version Control",
    org: "Tuwaiq Academy",
    period: "02/2026 – 03/2026",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative scroll-mt-20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: ENTRANCE_EASE }}
          className="text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Certifications
        </motion.h2>

        <div className="mt-10 grid gap-6 md:max-w-5xl md:grid-cols-3">
          {CERTS.map((c, i) => (
            <motion.article
              key={c.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: ENTRANCE_EASE,
              }}
              className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-[#0078D4]/20 to-black p-6 backdrop-blur-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                <Cloud className="h-6 w-6" />
              </div>
              <div className="text-xs uppercase tracking-wider text-blue-300">
                {c.code}
              </div>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {c.name}
              </h3>
              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 text-sm text-blue-300 transition-colors hover:text-white"
              >
                Verify →
              </button>
            </motion.article>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Continuous Learning
          </h3>
          <ol className="mt-8 space-y-4 border-l border-white/10 pl-6 md:max-w-3xl">
            {LEARNING.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: ENTRANCE_EASE,
                }}
                className="relative"
              >
                <span className="absolute -left-[1.92rem] top-2 inline-flex h-2 w-2 rounded-full bg-primary" />
                <div className="text-base font-medium text-foreground">
                  {item.title}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.org} · {item.period}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
