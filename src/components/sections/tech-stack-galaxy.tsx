"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { categories } from "@/lib/tech-stack-data";
import { useRobotVisibility } from "@/lib/robot-visibility";

const CATEGORY_ORBIT_RADIUS = 220;
const TOOL_ORBIT_RADIUS = 280;
const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

function getOrbitPosition(
  index: number,
  total: number,
  radius: number,
  rotationDeg: number,
  startAngleDeg: number,
) {
  const angleDeg = startAngleDeg + (index / total) * 360 + rotationDeg;
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(angleRad),
    y: radius * Math.sin(angleRad),
  };
}

export function TechStackGalaxy() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });
  const { setHidden } = useRobotVisibility();

  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    setHidden(inView);
    return () => setHidden(false);
  }, [inView, setHidden]);

  useEffect(() => {
    if (selectedId !== null || !inView) return;
    let raf = 0;
    let last = performance.now();
    let accumulator = 0;
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      accumulator += dt;
      if (accumulator >= 100) {
        setRotationAngle((a) => (a + accumulator * 0.008) % 360);
        accumulator = 0;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [selectedId, inView]);

  const selectedCategory =
    selectedId !== null
      ? categories.find((c) => c.id === selectedId) ?? null
      : null;

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative w-full scroll-mt-20 bg-black py-24 md:py-32"
    >
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: ENTRANCE_EASE }}
          className="text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: ENTRANCE_EASE }}
          className="mt-4 max-w-2xl text-muted-foreground"
        >
          An interactive galaxy of tools and technologies I work with. Click any category to explore.
        </motion.p>
      </div>

      <div className="relative mx-auto hidden h-[700px] w-full max-w-5xl items-center justify-center md:flex">
        <div className="pointer-events-none absolute z-10 flex h-48 w-48 items-center justify-center">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl shadow-blue-500/30">
            <Image
              src="/images/abdullah-image.jpg"
              alt="Abdullah Aldeijy"
              fill
              className="object-cover"
              priority
              sizes="160px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          </div>
          <div className="absolute h-48 w-48 animate-ping rounded-full border border-white/10 opacity-50" />
          <div
            className="absolute h-56 w-56 animate-ping rounded-full border border-white/5 opacity-30"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="absolute h-64 w-64 animate-ping rounded-full border border-white/5 opacity-20"
            style={{ animationDelay: "1.4s" }}
          />
        </div>

        <AnimatePresence>
          {selectedCategory && (
            <>
              <motion.button
                key="back"
                type="button"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: ENTRANCE_EASE }}
                onClick={() => setSelectedId(null)}
                className="absolute left-6 top-6 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md transition-all ease-out-quint hover:border-white/30 hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Categories
              </motion.button>
              <motion.div
                key="title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: ENTRANCE_EASE }}
                className="pointer-events-none absolute left-1/2 top-8 z-40 flex -translate-x-1/2 flex-col items-center gap-1"
              >
                <h3
                  className={`bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl ${selectedCategory.color}`}
                >
                  {selectedCategory.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-white/40">
                  {selectedCategory.tools.length} tools
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {selectedCategory === null ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: ENTRANCE_EASE }}
              className="absolute inset-0"
            >
              {categories.map((cat, i) => {
                const { x, y } = getOrbitPosition(
                  i,
                  categories.length,
                  CATEGORY_ORBIT_RADIUS,
                  rotationAngle,
                  -90,
                );
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedId(cat.id)}
                    className="group absolute left-1/2 top-1/2 flex flex-col items-center"
                    style={{
                      transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                    }}
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${cat.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="mt-2 whitespace-nowrap text-sm font-semibold text-white">
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key={`tools-${selectedCategory.id}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.6, ease: ENTRANCE_EASE }}
              className="absolute inset-0"
            >
              {selectedCategory.tools.map((tool, i) => {
                const { x, y } = getOrbitPosition(
                  i,
                  selectedCategory.tools.length,
                  TOOL_ORBIT_RADIUS,
                  0,
                  0,
                );
                return (
                  <div
                    key={tool.slug}
                    className="group absolute left-1/2 top-1/2 flex flex-col items-center"
                    style={{
                      transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                      ["--tool-color" as string]: `#${tool.color}`,
                    }}
                  >
                    <span
                      title={tool.name}
                      className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--tool-color)] group-hover:shadow-[0_0_30px_-5px_var(--tool-color)]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          tool.iconUrl ??
                          `https://cdn.simpleicons.org/${tool.slug}/${tool.color}`
                        }
                        alt={tool.name}
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                    </span>
                    <span className="mt-2 whitespace-nowrap text-xs text-white/70">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mx-auto grid max-w-3xl gap-8 px-6 md:hidden">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.id}>
              <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-white ${cat.color}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                {cat.title}
              </h3>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.slug}
                    className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        tool.iconUrl ??
                        `https://cdn.simpleicons.org/${tool.slug}/${tool.color}`
                      }
                      alt={tool.name}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <span className="text-center text-[10px] text-white/70">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
