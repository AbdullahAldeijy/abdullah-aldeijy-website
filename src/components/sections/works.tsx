"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cloud, Container } from "lucide-react";
import { cn } from "@/lib/utils";
import { ExperienceCard } from "./experience-card";
import { experiences } from "@/lib/experience-data";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

type TabId = "projects" | "experience";

const PROJECTS = [
  {
    title: "DaMoGhazi — Lightweight Cloud Provider",
    description:
      "A cloud system that provisions and manages Docker containers as VM-like instances.",
    tags: ["Docker", "Cloud", "Linux", "Bash"],
    Icon: Container,
  },
  {
    title: "Cloud Chatbot with Terraform",
    description:
      "Chatbot app on Azure VM connected to Azure PostgreSQL DB, with fully automated infrastructure using Terraform modules.",
    tags: ["Azure", "Terraform", "PostgreSQL", "IaC"],
    Icon: Cloud,
  },
];

export function Works() {
  const [tab, setTab] = useState<TabId>("projects");

  return (
    <section id="works" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: ENTRANCE_EASE }}
          className="text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Works
        </motion.h2>

        <div className="mt-10 inline-flex w-fit gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
          {(["projects", "experience"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm capitalize transition-colors ease-out-quint",
                tab === id
                  ? "bg-primary/20 text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {id}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {tab === "projects" ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: ENTRANCE_EASE }}
                className="grid gap-6 md:max-w-5xl md:grid-cols-2"
              >
                {PROJECTS.map(({ title, description, tags, Icon }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all ease-out-quint hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_var(--color-primary)]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: ENTRANCE_EASE }}
                className="relative mx-auto max-w-6xl py-12"
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
