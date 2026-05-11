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

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 backdrop-blur-xl md:p-6">
              <div
                className={`absolute -top-20 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-3xl ${
                  isLeft ? "-right-20" : "-left-20"
                } ${exp.brandColor}`}
              />

              <div className="mb-4 flex items-start justify-between">
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5 transition-transform duration-500 group-hover:scale-110 md:h-16 md:w-16">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="64px"
                  />
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  {exp.isCurrent && (
                    <div className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      <span className="text-[10px] font-medium text-green-300">
                        Current
                      </span>
                    </div>
                  )}
                  <span className="font-mono text-[10px] text-white/40">
                    {duration}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white md:text-2xl">
                {exp.company}
              </h3>
              <p
                className={`bg-gradient-to-r bg-clip-text text-sm font-semibold text-transparent md:text-base ${exp.brandColor}`}
              >
                {exp.role}
              </p>

              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-white/50">
                <div className="flex items-center gap-1.5">
                  <Calendar size={11} />
                  <span>{period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={11} />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase size={11} />
                  <span>{exp.type}</span>
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                {exp.highlights.slice(0, 2).map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-2 text-[11px] text-white/60 md:text-xs"
                  >
                    <span
                      className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-r ${exp.brandColor}`}
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/5 pt-3">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60"
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
