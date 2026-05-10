"use client";

import { useCallback, useEffect, useRef } from "react";
import type { ComponentProps } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type SplineComponent from "@splinetool/react-spline";
import { SplineScene } from "@/components/ui/splite";
import { RobotFallback } from "@/components/ui/robot-fallback";
import { useRobotVisibility } from "@/lib/robot-visibility";
import { useLowEndDevice } from "@/lib/use-low-end-device";

const SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const SHRINK_START_VH = 0.25;
const SHRINK_END_VH = 0.85;
const SCALE_MIN_DESKTOP = 0.22;
const HIDE_DURATION = 0.5;
const HIDE_EASE = [0.22, 1, 0.36, 1] as const;
const RENDER_SCALE = 0.5;

type SplineApp = Parameters<
  NonNullable<ComponentProps<typeof SplineComponent>["onLoad"]>
>[0];

export function PersistentRobot() {
  const { scrollY } = useScroll();
  const vhRef = useRef(800);
  const isMobileRef = useRef(false);
  const { hidden } = useRobotVisibility();
  const isLowEnd = useLowEndDevice();
  const splineAppRef = useRef<SplineApp | null>(null);

  useEffect(() => {
    const updateVh = () => {
      vhRef.current = window.innerHeight;
    };
    const mq = window.matchMedia("(max-width: 767px)");
    const updateMq = (event?: MediaQueryListEvent) => {
      isMobileRef.current = event ? event.matches : mq.matches;
    };
    updateVh();
    updateMq();
    window.addEventListener("resize", updateVh);
    mq.addEventListener("change", updateMq);
    return () => {
      window.removeEventListener("resize", updateVh);
      mq.removeEventListener("change", updateMq);
    };
  }, []);

  useEffect(() => {
    const app = splineAppRef.current;
    if (!app) return;
    if (hidden) {
      app.stop();
    } else {
      app.play();
    }
  }, [hidden]);

  const handleSplineLoad = useCallback<NonNullable<ComponentProps<typeof SplineComponent>["onLoad"]>>(
    (app) => {
      splineAppRef.current = app;
      if (typeof window !== "undefined") {
        app.setSize(
          window.innerWidth * RENDER_SCALE,
          window.innerHeight * RENDER_SCALE,
        );
      }
      if (hidden) app.stop();
    },
    [hidden],
  );

  const scale = useTransform(scrollY, (latest) => {
    const vh = vhRef.current;
    const start = vh * SHRINK_START_VH;
    const end = vh * SHRINK_END_VH;
    if (latest <= start) return 1;
    if (latest >= end) return SCALE_MIN_DESKTOP;
    const t = (latest - start) / (end - start);
    return 1 - t * (1 - SCALE_MIN_DESKTOP);
  });

  const opacity = useTransform(scrollY, (latest) => {
    const vh = vhRef.current;
    if (isMobileRef.current) {
      if (latest <= vh * 0.4) return 0.4;
      if (latest >= vh * 0.85) return 0;
      return 0.4 - ((latest - vh * 0.4) / (vh * 0.45)) * 0.4;
    }
    return latest <= vh * 0.7 ? 1 : 0.9;
  });

  const pulseOpacity = useTransform(scrollY, (latest) => {
    if (isMobileRef.current) return 0;
    return latest >= vhRef.current * 0.9 ? 1 : 0;
  });

  const smoothScale = useSpring(scale, {
    stiffness: 140,
    damping: 24,
    mass: 0.4,
  });

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ duration: HIDE_DURATION, ease: HIDE_EASE }}
      >
        <motion.div
          className="h-full w-full"
          style={{
            transformOrigin: "100% 100%",
            scale: smoothScale,
            opacity,
            x: -24,
            y: -24,
          }}
        >
          <motion.div
            className="pointer-events-auto h-full w-full"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {isLowEnd ? (
              <RobotFallback />
            ) : (
              <SplineScene
                scene={SPLINE_SCENE}
                className="h-full w-full"
                onLoad={handleSplineLoad}
              />
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.span
        aria-hidden
        className="pointer-events-none fixed bottom-12 right-12 z-30 hidden md:flex"
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ duration: HIDE_DURATION, ease: HIDE_EASE }}
      >
        <motion.span
          className="relative flex h-3 w-3"
          style={{ opacity: pulseOpacity }}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/60" />
        </motion.span>
      </motion.span>
    </>
  );
}
