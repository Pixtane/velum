import { useState, useRef, useEffect } from "react";

const THROTTLE_MS = 80;
const DRAIN_PER_MS = 1.5; // progress lost per ms when not holding

export type UseRitualOptions = {
  initialProgress?: number;
  storageKey?: string;
};

export function useRitual(
  targetMs: number = 60000,
  options?: UseRitualOptions
) {
  const initial = options?.initialProgress ?? 0;
  const [progress, setProgress] = useState(initial);
  const [isHolding, setIsHolding] = useState(false);
  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const isHoldingRef = useRef(isHolding);
  const progressRef = useRef(initial);
  const throttleRef = useRef(0);

  isHoldingRef.current = isHolding;

  const animate = (time: number) => {
    const prevTime = lastTimeRef.current;
    lastTimeRef.current = time;
    if (prevTime > 0) {
      const deltaTime = time - prevTime;
      const holding = isHoldingRef.current;
      progressRef.current = holding
        ? Math.min(progressRef.current + deltaTime, targetMs)
        : Math.max(progressRef.current - deltaTime * DRAIN_PER_MS, 0);

      if (time - throttleRef.current >= THROTTLE_MS) {
        throttleRef.current = time;
        const value = progressRef.current;
        setProgress(value);
        if (options?.storageKey && typeof sessionStorage !== "undefined") {
          try {
            sessionStorage.setItem(
              options.storageKey,
              JSON.stringify({ progress: value, savedAt: Date.now() })
            );
          } catch {
            // ignore
          }
        }
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  // Sync from restored initialProgress when it becomes available (e.g. after client hydration)
  useEffect(() => {
    const v = options?.initialProgress;
    if (v != null && v !== progressRef.current) {
      progressRef.current = v;
      setProgress(v);
    }
  }, [options?.initialProgress]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return { progress, progressRef, isHolding, setIsHolding };
}

export function getRitualProgressFromStorage(
  storageKey: string,
  targetMs: number
): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = sessionStorage.getItem(storageKey);
    if (!raw) return 0;
    const { progress: savedProgress, savedAt } = JSON.parse(raw);
    const elapsedMs = Date.now() - savedAt;
    const progressLost = elapsedMs * DRAIN_PER_MS;
    return Math.max(0, Math.min(targetMs, savedProgress - progressLost));
  } catch {
    return 0;
  }
}
