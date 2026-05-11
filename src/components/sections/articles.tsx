"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

export function Articles() {
  return (
    <section id="articles" className="relative scroll-mt-20 py-16 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: ENTRANCE_EASE }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary-glow backdrop-blur-md">
            <BookOpen className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Articles Coming Soon
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            I&apos;m preparing in-depth articles on cloud architecture, FinOps, and multi-cloud strategies.
          </p>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-7 py-3 text-sm font-medium text-foreground transition-all ease-out-quint hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_40px_-5px_var(--color-primary)]"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
