export type Theme = "light" | "dark";

export function systemPrefersDark(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function getEffectiveTheme(): Theme {
  const override = document.documentElement.dataset.theme;
  return override === "light" || override === "dark"
    ? override
    : systemPrefersDark()
      ? "dark"
      : "light";
}
