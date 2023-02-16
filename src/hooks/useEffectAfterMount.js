import { useEffect, useRef } from "react";

export function useEffectAfterMount(effect, deps) {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (effect) return effect();
  }, deps);
}
