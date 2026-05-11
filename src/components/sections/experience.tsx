"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "./experience-card";
import { experiences } from "@/lib/experience-data";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: ENTRANCE_EASE }}
          className="text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Experience
        </motion.h2>

        <div className="relative mx-auto mt-12 max-w-6xl py-12">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={exp.id} exp={exp} index={idx} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-white/40">
              Total Experience
            </p>
            <p className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
              5+ Years
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
