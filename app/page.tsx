"use client";

import { useEffect, useState } from "react";
import DefaultHome from "./default-home";
import RetroHome from "./retro-home";
import Background from "./background";

type Theme = "default" | "retro";
type Phase = "off" | "on" | null;

const STORAGE_KEY = "theme";

const THEME_BG: Record<Theme, string> = {
  default: "var(--ctp-base)",
  retro: "#ece9d8",
};

export default function Home() {
  const [theme, setTheme] = useState<Theme>("default");
  const [displayedTheme, setDisplayedTheme] = useState<Theme>("default");
  const [phase, setPhase] = useState<Phase>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "retro" || stored === "default") {
      setTheme(stored);
      setDisplayedTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = phase ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  function toggleTheme() {
    if (phase) return;
    const next: Theme = theme === "default" ? "retro" : "default";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    setPhase("off");
  }

  function handleAnimationEnd() {
    if (phase === "off") {
      setDisplayedTheme(theme);
      setPhase("on");
    } else if (phase === "on") {
      setPhase(null);
    }
  }

  const isRetro = displayedTheme === "retro";
  const wrapperClass = phase === "off" ? "crt-off" : phase === "on" ? "crt-on" : "";

  return (
    <div className="relative">
      {phase && (
        <div style={{ position: "fixed", inset: 0, zIndex: 0, background: THEME_BG[theme] }}>
          {theme === "default" && <Background />}
        </div>
      )}
      <div
        className={wrapperClass}
        onAnimationEnd={handleAnimationEnd}
        style={
          phase
            ? { position: "fixed", inset: 0, overflow: "hidden", zIndex: 1 }
            : undefined
        }
      >
        {displayedTheme === "default" ? (
          <DefaultHome showBackground={phase !== "on"} />
        ) : (
          <RetroHome />
        )}
      </div>

      <button
        onClick={toggleTheme}
        className="theme-switcher-btn"
        style={
          isRetro
            ? {
                position: "fixed",
                bottom: 20,
                right: 20,
                zIndex: 10,
                background: "#d4d0c8",
                boxShadow:
                  "inset -1px -1px #404040, inset 1px 1px #fff, inset -2px -2px #808080, inset 2px 2px #dfdfdf",
                color: "#1a1a1a",
                fontFamily: "Tahoma, Verdana, 'Segoe UI', Arial, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                padding: "8px 14px",
              }
            : {
                position: "fixed",
                bottom: 20,
                right: 20,
                zIndex: 10,
                background: "rgba(205,214,244,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                color: "var(--ctp-text)",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                padding: "10px 16px",
              }
        }
      >
        {isRetro ? "✨ Switch to Modern" : "🖥️ Switch to Retro"}
      </button>
    </div>
  );
}
