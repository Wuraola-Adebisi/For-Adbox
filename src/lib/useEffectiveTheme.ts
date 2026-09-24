import { useEffect, useState } from "react";
import { getEffectiveTheme, getSystemTheme, type Theme } from "./theme";

export function useEffectiveTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(getEffectiveTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const update = () => {
      setTheme(getEffectiveTheme());
    };

    const onMediaChange = () => {
      // Device preference has changed, so remove any temporary
      // manual override and return to the system preference.
      document.documentElement.removeAttribute("data-theme");
      setTheme(getSystemTheme());
    };

    media.addEventListener("change", onMediaChange);

    const observer = new MutationObserver(update);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      media.removeEventListener("change", onMediaChange);
      observer.disconnect();
    };
  }, []);

  return theme;
}