"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CertificationCard } from "./certification-card";
import { certifications } from "@/lib/certifications-data";

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
      </div>
    </section>
  );
}
