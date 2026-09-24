export type Theme = "light" | "dark";

export function systemPrefersDark(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function getSystemTheme(): Theme {
  return systemPrefersDark() ? "dark" : "light";
}

export function getEffectiveTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  const override = document.documentElement.dataset.theme;

  if (override === "light" || override === "dark") {
    return override;
  }

  return getSystemTheme();
}