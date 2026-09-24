import { useEffect, useState } from "react";
import { getEffectiveTheme, type Theme } from "./theme";

export function useEffectiveTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(getEffectiveTheme);

  useEffect(() => {
    const update = () => setTheme(getEffectiveTheme());
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", update);
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => {
      media.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);

  return theme;
}
