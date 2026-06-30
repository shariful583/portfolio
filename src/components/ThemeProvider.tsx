"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

// --- External store: localStorage preference + system color scheme ---

const listeners = new Set<() => void>();
const mq = () =>
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

function notify() {
  for (const l of listeners) l();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) notify();
  };
  const m = mq();
  window.addEventListener("storage", onStorage);
  m?.addEventListener("change", notify);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
    m?.removeEventListener("change", notify);
  };
}

function readTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const t = localStorage.getItem(STORAGE_KEY);
  return t === "light" || t === "dark" || t === "system" ? t : "system";
}

function resolve(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme;
  return mq()?.matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribe,
    readTheme,
    (): Theme => "system"
  );
  const resolvedTheme = useSyncExternalStore(
    subscribe,
    () => resolve(readTheme()),
    (): "light" | "dark" => "light"
  );

  // Sync resolved theme to <html> (external system, no setState).
  useEffect(() => {
    const el = document.documentElement;
    el.setAttribute("data-theme", resolvedTheme);
    el.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem(STORAGE_KEY, next);
    notify();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

// Runs synchronously in <head> before first paint to avoid a theme flash.
export const themeScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var r=(t==="dark"||t==="light")?t:(d?"dark":"light");document.documentElement.setAttribute("data-theme",r);document.documentElement.style.colorScheme=r;}catch(e){}})();`;
