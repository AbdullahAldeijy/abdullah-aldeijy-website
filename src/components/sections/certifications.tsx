"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CertificationCard } from "./certification-card";
import { certifications } from "@/lib/certifications-data";

const LEARNING = [
  {
    title: "Data Processing: Advanced Techniques",
    org: "Tuwaiq Academy",
    date: "12/2025",
    side: "right" as const,
  },
  {
    title: "Digital Identity: Fundamentals and Principles",
    org: "Tuwaiq Academy",
    date: "11/2025 – 12/2025",
    side: "left" as const,
  },
  {
    title: "GitHub and Git: Version Control Systems",
    org: "Tuwaiq Academy",
    date: "02/2026 – 03/2026",
    side: "right" as const,
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative w-full overflow-hidden scroll-mt-20 px-6 py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs uppercase tracking-widest text-white/70">
              Certified Expertise
            </span>
          </div>

          <h2 className="mb-4 text-5xl font-bold text-white md:text-7xl">
            Certifications
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            Microsoft Azure certifications validating expertise across
            administration, development, and architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
              Continuous Learning
            </h3>
            <p className="text-sm text-neutral-400">
              Always investing in growth through specialized programs
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

            {LEARNING.map((program, idx) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, x: program.side === "right" ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`relative mb-8 flex items-start gap-4 md:gap-8 ${
                  program.side === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 ring-4 ring-blue-400/20 md:left-1/2" />

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    program.side === "left"
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12"
                  }`}
                >
                  <div className="inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md transition-colors hover:border-white/20">
                    <p className="text-sm font-semibold text-white">
                      {program.title}
                    </p>
                    <p className="mt-1 text-xs text-white/50">{program.org}</p>
                    <p className="mt-1 font-mono text-xs text-white/40">
                      {program.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
