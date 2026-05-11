"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import {
  calculateDuration,
  formatDate,
  type Experience,
} from "@/lib/experience-data";

interface Props {
  exp: Experience;
  index: number;
}

export function ExperienceCard({ exp, index }: Props) {
  const duration = calculateDuration(exp.startDate, exp.endDate);
  const period = `${formatDate(exp.startDate)} — ${formatDate(exp.endDate)}`;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative"
    >
      <div className="absolute left-4 top-8 z-20 -translate-x-1/2 md:left-1/2">
        <div className="relative">
          {exp.isCurrent && (
            <div
              className="absolute inset-0 h-4 w-4 animate-ping rounded-full"
              style={{ background: exp.glowColor }}
            />
          )}
          <div
            className={`relative h-4 w-4 rounded-full border-2 ${
              exp.isCurrent ? "border-white" : "border-white/50"
            }`}
            style={{
              background: exp.isCurrent ? exp.glowColor : "rgba(255,255,255,0.1)",
              boxShadow: exp.isCurrent ? `0 0 20px ${exp.glowColor}` : "none",
            }}
          />
        </div>
      </div>

      <div
        className={`pl-12 md:w-1/2 md:pl-0 ${
          isLeft ? "md:pr-12" : "md:ml-auto md:pl-12"
        }`}
      >
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={1500}
          scale={1.01}
          transitionSpeed={1500}
          className="h-full"
        >
          <div className="group relative">
            <div
              className="absolute -inset-0.5 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
              style={{ background: exp.glowColor }}
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl md:p-8">
              <div
                className={`absolute -top-20 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-3xl ${
                  isLeft ? "-right-20" : "-left-20"
                } ${exp.brandColor}`}
              />

              <div className="mb-6 flex items-start justify-between">
                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="80px"
                  />
                </div>

                <div className="flex flex-col items-end gap-2">
                  {exp.isCurrent && (
                    <div className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      <span className="text-xs font-medium text-green-300">
                        Current
                      </span>
                    </div>
                  )}
                  <span className="font-mono text-xs text-white/40">
                    {duration}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="mb-1 text-2xl font-bold text-white md:text-3xl">
                  {exp.company}
                </h3>
                <p
                  className={`bg-gradient-to-r bg-clip-text text-base font-semibold text-transparent md:text-lg ${exp.brandColor}`}
                >
                  {exp.role}
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-3 text-xs text-white/50">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  <span>{period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase size={12} />
                  <span>{exp.type}</span>
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-white/70">
                {exp.description}
              </p>

              <div className="mb-5 space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-2 text-xs text-white/60 md:text-sm"
                  >
                    <span
                      className={`mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-r ${exp.brandColor}`}
                    />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60 transition-colors hover:border-white/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
}
