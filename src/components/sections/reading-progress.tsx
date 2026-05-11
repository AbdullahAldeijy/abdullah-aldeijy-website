"use client";

import { motion, useScroll } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-blue-500 to-cyan-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
