"use client";

import { useEffect, useState } from "react";

const CORE_THRESHOLD = 4;
const MEMORY_THRESHOLD = 4;

type NavigatorWithDeviceInfo = Navigator & {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
    saveData?: boolean;
  };
};

export function useLowEndDevice() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const nav = navigator as NavigatorWithDeviceInfo;
    const cores = nav.hardwareConcurrency ?? 8;
    const memory = nav.deviceMemory ?? 8;
    const connection = nav.connection;
    const slowNetwork =
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g" ||
      connection?.saveData === true;

    setIsLowEnd(cores < CORE_THRESHOLD || memory < MEMORY_THRESHOLD || slowNetwork);
  }, []);

  return isLowEnd;
}
