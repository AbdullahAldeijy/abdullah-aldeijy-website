"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { SocialContact } from "@/components/sections/social-contact";

const SPLINE_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 h-screen w-screen opacity-40 md:opacity-100">
        <SplineScene scene={SPLINE_SCENE} className="h-full w-full" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: "url(/noise.svg)" }}
      />

      <Spotlight
        className="-top-20 -left-20 md:-top-10 md:left-0"
        fill="var(--color-primary-glow)"
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center bg-gradient-to-r from-black/80 via-black/40 to-transparent px-6 md:px-0 md:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ENTRANCE_EASE }}
          className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
        >
          <h1 className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-7xl">
            Hello, I&apos;m Abdullah
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Designer &amp; Developer crafting experiences from the future
          </p>
          <div className="mt-10">
            <Link
              href="#contact"
              className="group pointer-events-auto relative inline-flex items-center justify-center overflow-hidden rounded-full border border-primary/40 bg-primary/10 px-7 py-3 text-sm font-medium text-foreground transition-all ease-out-quint hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_40px_-5px_var(--color-primary)]"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-primary/0 blur-xl transition-colors ease-out-quint group-hover:bg-primary/40"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      <SocialContact />
    </section>
  );
}
