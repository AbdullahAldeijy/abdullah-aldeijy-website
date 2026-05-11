"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { certifications } from "@/lib/certifications-data";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "3", label: "Azure Certifications" },
  { value: "Multi-Cloud", label: "Azure · AWS · GCP" },
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-xs uppercase tracking-widest text-white/70">
                About Me
              </span>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Cloud-native systems,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                built to scale.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Certified Solutions Architect &amp; Cloud Engineer with an
              Information Systems and Product Management background. I
              specialize in the full lifecycle of cloud-native applications,
              focusing on building resilient, cost-optimized Azure, AWS, and GCP
              infrastructure that aligns technical scale with business goals.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                >
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: ENTRANCE_EASE }}
            className="space-y-3"
          >
            <div className="mb-4 text-xs uppercase tracking-widest text-white/40">
              Certifications
            </div>
            {certifications.map((cert) => (
              <a
                key={cert.id}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all ease-out-quint hover:border-white/30 hover:bg-white/10"
              >
                <div className="relative h-14 w-14 flex-shrink-0">
                  <Image
                    src={cert.badgeImage}
                    alt={cert.title}
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full bg-gradient-to-r px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-white ${cert.color}`}
                    >
                      {cert.code}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                      {cert.level}
                    </span>
                  </div>
                  <h4 className="mt-1 truncate text-sm font-semibold text-white">
                    {cert.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] text-white/40">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="flex-shrink-0 text-white/40 transition-colors group-hover:text-white"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
