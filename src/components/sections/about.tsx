"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

const EDUCATION = [
  {
    title: "Cloud Computing Bootcamp",
    org: "Saudi Digital Academy",
    period: "02/2025 – 05/2025",
  },
  {
    title: "Information Systems",
    org: "Imam Mohammad bin Saud Islamic University",
    period: "2019 – 2024",
  },
];

const SKILLS = [
  "System Analysis and Business Technology",
  "Requirements Gathering & Analysis",
  "Cross-Functional Collaboration",
  "Problem Solving & Critical Thinking",
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: ENTRANCE_EASE }}
          >
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              About Me
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Certified Solutions Architect &amp; Cloud Engineer with an Information Systems and Product Management background. I specialize in the full lifecycle of cloud-native applications, focusing on building resilient, cost-optimized Azure, AWS, and GCP infrastructure that aligns technical scale with business goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: ENTRANCE_EASE }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center gap-2 text-sm text-primary-glow">
                <GraduationCap className="h-4 w-4" />
                Education
              </div>
              <ul className="space-y-4">
                {EDUCATION.map((edu) => (
                  <li key={edu.title}>
                    <div className="text-base font-medium text-foreground">
                      {edu.title}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {edu.org} · {edu.period}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 backdrop-blur-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
