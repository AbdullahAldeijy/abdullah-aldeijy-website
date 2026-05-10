"use client";

import { useEffect, useState } from "react";

const CORE_THRESHOLD = 4;

export function useLowEndDevice() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const cores = navigator.hardwareConcurrency ?? 8;
    setIsLowEnd(cores < CORE_THRESHOLD);
  }, []);

  return isLowEnd;
}
