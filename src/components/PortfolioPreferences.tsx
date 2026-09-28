"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Language = "en" | "ja";
export type Theme = "dark" | "light";

type Preferences = {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
};

const PreferencesContext = createContext<Preferences | null>(null);
const defaultPreferences = { language: "en", theme: "dark" } as const;
let snapshot: { language: Language; theme: Theme } | null = null;
const listeners = new Set<() => void>();

function getSnapshot() {
  if (!snapshot) {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    snapshot = {
      language: savedLanguage === "ja" ? "ja" : "en",
      theme: savedTheme === "light" ? "light" : "dark",
    };
  }
  return snapshot;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getServerSnapshot() {
  return defaultPreferences;
}

export function PortfolioPreferences({ children }: { children: ReactNode }) {
  const preference = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = preference.language;
    document.documentElement.dataset.theme = preference.theme;
  }, [preference]);

  function updatePreference<K extends keyof typeof preference>(
    key: K,
    value: (typeof preference)[K],
  ) {
    const current = getSnapshot();
    if (current[key] === value) return;
    snapshot = { ...current, [key]: value };
    window.localStorage.setItem(`portfolio-${key}`, value);
    listeners.forEach((listener) => listener());
  }

  return (
    <PreferencesContext.Provider
      value={{
        ...preference,
        setLanguage: (language) => updatePreference("language", language),
        setTheme: (theme) => updatePreference("theme", theme),
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePortfolioPreferences() {
  const preferences = useContext(PreferencesContext);
  if (!preferences) {
    throw new Error(
      "usePortfolioPreferences must be used within PortfolioPreferences",
    );
  }
  return preferences;
}
