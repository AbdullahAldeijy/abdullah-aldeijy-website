"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-40 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: "url(/noise.svg)" }}
      />

      <div className="pointer-events-none absolute inset-0 z-40 flex items-center bg-gradient-to-r from-black/80 via-black/40 to-transparent px-6 md:px-0 md:pl-24 lg:pl-44">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ENTRANCE_EASE }}
          className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
        >
          <h1 className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-7xl">
            Hello, I&apos;m {SITE.fullName.split(" ")[0]}
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            {SITE.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
