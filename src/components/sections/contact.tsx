"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: ENTRANCE_EASE }}
          >
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Let&apos;s Build Something Together
            </h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Open to cloud architecture consulting, full-time roles, and collaborations on cloud-native projects.
            </p>

            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors ease-out-quint hover:border-primary/40 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="text-sm text-foreground">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors ease-out-quint hover:border-primary/40 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="text-sm text-foreground">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="text-sm text-foreground">
                    {SITE.location}
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: ENTRANCE_EASE }}
            // name="contact"
            // method="POST"
            // data-netlify="true"
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-muted-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium text-foreground transition-all ease-out-quint hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_40px_-5px_var(--color-primary)]"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
