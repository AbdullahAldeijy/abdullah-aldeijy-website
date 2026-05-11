"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/lib/certifications-data";

interface Props {
  cert: Certification;
  index: number;
}

export function CertificationCard({ cert, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1500}
        gyroscope={true}
        className="h-full"
      >
        <div className="group relative h-full">
          <div
            className="absolute -inset-0.5 rounded-2xl opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at center, ${cert.glowColor}, transparent 70%)`,
            }}
          />

          <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl">
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-20 ${cert.color}`}
            />

            <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
                <Award size={12} className="text-white/70" />
                <span className="text-xs font-medium text-white/70">
                  {cert.level}
                </span>
              </div>
              <span className="font-mono text-xs text-white/40">{cert.year}</span>
            </div>

            <div className="relative flex justify-center pb-6 pt-20">
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative h-40 w-40"
              >
                <div
                  className="absolute inset-0 rounded-full opacity-50 blur-2xl transition-opacity group-hover:opacity-80"
                  style={{ background: cert.glowColor }}
                />

                <div
                  className="absolute inset-0 animate-ping rounded-full border-2 opacity-20"
                  style={{ borderColor: cert.glowColor }}
                />

                <div className="relative h-full w-full">
                  <Image
                    src={cert.badgeImage}
                    alt={cert.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="160px"
                  />
                </div>
              </motion.div>
            </div>

            <div className="space-y-4 px-6 pb-6">
              <div className="flex justify-center">
                <span
                  className={`rounded-full bg-gradient-to-r px-3 py-1 font-mono text-xs font-bold tracking-wider text-white ${cert.color}`}
                >
                  {cert.code}
                </span>
              </div>

              <h3 className="text-center text-xl font-bold leading-tight text-white">
                {cert.title}
              </h3>

              <div className="flex items-center justify-center gap-2 text-xs text-white/50">
                <span>Issued by</span>
                <span className="font-semibold text-white/70">{cert.issuer}</span>
              </div>

              <p className="line-clamp-3 text-center text-sm leading-relaxed text-white/60">
                {cert.description}
              </p>

              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {cert.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/40">
                    +{cert.skills.length - 3} more
                  </span>
                )}
              </div>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <span>Verify Credential</span>
                <ExternalLink
                  size={14}
                  className="transition-transform group-hover/btn:translate-x-0.5"
                />
              </a>
            </div>

            <div
              className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-30 blur-3xl ${cert.color}`}
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
