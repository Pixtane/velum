"use client";

import { css } from "$/styled-system/css";
import { useRitual, getRitualProgressFromStorage } from "@/hooks/useRitual";
import { useEffect, useRef, useState } from "react";

const TARGET_MS = 60000;
const BUTTON_SIZE = 216; // 120 * 1.8
const RITUAL_STORAGE_KEY = "velum-ritual";
const PAPER = "#F9F7F2";
const CLOCK_RADIUS = BUTTON_SIZE / 2 - 1;
const CLOCK_CIRCUMFERENCE = 2 * Math.PI * CLOCK_RADIUS;

export default function GatePage({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  const [initialProgress, setInitialProgress] = useState<number>(0);
  const { progress, progressRef, isHolding, setIsHolding } = useRitual(
    TARGET_MS,
    { initialProgress, storageKey: RITUAL_STORAGE_KEY }
  );

  // Restore from sessionStorage on client (with time-absent drain) and sync into hook
  useEffect(() => {
    setInitialProgress(
      getRitualProgressFromStorage(RITUAL_STORAGE_KEY, TARGET_MS)
    );
  }, []);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonTextRef = useRef<HTMLSpanElement>(null);
  const clockCircleRef = useRef<SVGCircleElement>(null);
  const isIdle = progress > 0 && !isHolding;

  // Spacebar: hold as alternative to mouse
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        setIsHolding(true);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        setIsHolding(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [setIsHolding]);

  // Inset shadow + text opacity + radial gradient: update from progressRef every frame
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = buttonRef.current;
      const textEl = buttonTextRef.current;
      const clockCircle = clockCircleRef.current;
      const fraction = Math.min(1, progressRef.current / TARGET_MS);
      if (clockCircle) {
        clockCircle.style.strokeDashoffset = String(
          CLOCK_CIRCUMFERENCE * (1 - fraction)
        );
      }
      if (el) {
        const spread = 2;
        const blur = 8;
        const shadowOpacity = 0.25 * fraction;
        el.style.boxShadow =
          fraction > 0
            ? `outset 0 0 ${blur}px ${spread}px rgba(18, 18, 16, ${shadowOpacity})`
            : "none";
        // Radial gradient: 0% progress = paper, 100% = white; soft transition
        const pct = fraction * 100;
        const transition = 25; // % of radius for blend between white and paper
        const inner = Math.max(0, pct - transition);
        const outer = Math.min(100, pct + transition);
        el.style.background = `radial-gradient(circle, white 0%, white ${inner}%, ${PAPER} ${outer}%, ${PAPER} 100%)`;
      }
      if (textEl) {
        textEl.style.opacity = String(1 - fraction);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [progressRef]);

  return (
    <main
      className={css({
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F9F7F2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
        py: "8",
        px: "4",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          maxW: "lg",
        })}
      >
        {/* Quote */}
        <div
          className={css({
            transition: "filter 0.5s ease",
            filter: isIdle ? "blur(2px) grayscale(1)" : "blur(0) grayscale(0)",
          })}
        >
          <p
            className={css({
              fontFamily: "alice",
              fontSize: "2xl",
              color: "#121210",
              textAlign: "center",
            })}
          >
            &ldquo;{quote}&rdquo;
          </p>
          {author && (
            <p
              className={css({
                fontFamily: "alice",
                fontSize: "md",
                color: "#121210",
                textAlign: "right",
              })}
            >
              — {author}
            </p>
          )}
        </div>

        {/* Button + progress border */}
        <div
          className={css({
            position: "relative",
            width: `${BUTTON_SIZE}px`,
            height: `${BUTTON_SIZE}px`,
            flexShrink: 0,
            animation: isIdle ? "shake-little 5s ease-in-out infinite" : "none",
          })}
        >
          <button
            ref={buttonRef}
            type="button"
            onMouseDown={() => setIsHolding(true)}
            onMouseUp={() => setIsHolding(false)}
            onMouseLeave={() => setIsHolding(false)}
            onTouchStart={(e) => {
              e.preventDefault();
              setIsHolding(true);
            }}
            onTouchEnd={() => setIsHolding(false)}
            onTouchCancel={() => setIsHolding(false)}
            className={css({
              position: "relative",
              width: `${BUTTON_SIZE}px`,
              height: `${BUTTON_SIZE}px`,
              borderRadius: "full",
              outline: "none",
              background: "transparent",
              fontFamily: "lora",
              fontSize: "18px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#121210",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s ease",
              _hover: { background: "rgba(18, 18, 16, 0.02)" },
              _active: { background: "rgba(18, 18, 16, 0.02)" },
            })}
          >
            <span ref={buttonTextRef}>{isHolding ? "Stay" : "Enter"}</span>
          </button>
          <svg
            aria-hidden
            className={css({
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 1,
            })}
            viewBox={`0 0 ${BUTTON_SIZE} ${BUTTON_SIZE}`}
          >
            {/* Very light track showing the path of the progress */}
            <circle
              cx={BUTTON_SIZE / 2}
              cy={BUTTON_SIZE / 2}
              r={CLOCK_RADIUS}
              fill="none"
              stroke="#F2EEE6"
              strokeWidth={2}
            />
            <circle
              ref={clockCircleRef}
              cx={BUTTON_SIZE / 2}
              cy={BUTTON_SIZE / 2}
              r={CLOCK_RADIUS}
              fill="none"
              stroke="#AA8E55 "
              strokeWidth={2}
              strokeDasharray={CLOCK_CIRCUMFERENCE}
              strokeDashoffset={CLOCK_CIRCUMFERENCE}
              transform={`rotate(-90 ${BUTTON_SIZE / 2} ${BUTTON_SIZE / 2})`}
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
