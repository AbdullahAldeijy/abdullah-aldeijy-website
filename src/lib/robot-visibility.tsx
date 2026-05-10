"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type RobotVisibility = {
  hidden: boolean;
  setHidden: (value: boolean) => void;
};

const RobotVisibilityContext = createContext<RobotVisibility>({
  hidden: false,
  setHidden: () => {},
});

export function RobotVisibilityProvider({ children }: { children: ReactNode }) {
  const [hidden, setHiddenState] = useState(false);
  const setHidden = useCallback((value: boolean) => setHiddenState(value), []);
  return (
    <RobotVisibilityContext.Provider value={{ hidden, setHidden }}>
      {children}
    </RobotVisibilityContext.Provider>
  );
}

export function useRobotVisibility() {
  return useContext(RobotVisibilityContext);
}
