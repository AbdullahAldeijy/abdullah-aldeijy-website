"use client";

import { Suspense, lazy } from "react";
import type { ComponentProps } from "react";
import type SplineComponent from "@splinetool/react-spline";

const Spline = lazy(() => import("@splinetool/react-spline"));

type SplineLoadHandler = NonNullable<
  ComponentProps<typeof SplineComponent>["onLoad"]
>;

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: SplineLoadHandler;
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={onLoad} />
    </Suspense>
  );
}
