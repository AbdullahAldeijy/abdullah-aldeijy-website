"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cloud, Container } from "lucide-react";
import { cn } from "@/lib/utils";

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

const EXPERIENCE = [
  {
    role: "Co-Founder & Solution Architect",
    company: "Lunixa Cloud",
    period: "06/2025 – Present · Part-Time",
    description:
      "Cloud consultancy delivering end-to-end services in migration, modernization, security, FinOps, and managed multi-cloud operations.",
  },
  {
    role: "Product Manager Consultant",
    company: "Setup Master",
    period: "2022 – Present · Part-Time",
    description: "E-commerce leader in PC hardware and custom builds.",
  },
  {
    role: "Software Developer Intern",
    company: "King Saud University",
    period: "04/2024 – 07/2024",
    description: "Coop training in the Deanship of E-Transactions.",
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
              <motion.ul
                key="experience"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: ENTRANCE_EASE }}
                className="space-y-4 md:max-w-3xl"
              >
                {EXPERIENCE.map((exp) => (
                  <li
                    key={`${exp.role}-${exp.company}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors ease-out-quint hover:border-primary/40"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-primary-glow">
                      {exp.company}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
