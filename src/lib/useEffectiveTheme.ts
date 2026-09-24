import { useEffect, useState } from "react";
import { getEffectiveTheme, type Theme } from "./theme";

export function useEffectiveTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(getEffectiveTheme);

  useEffect(() => {
    const update = () => setTheme(getEffectiveTheme());
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onMediaChange = () => {
      document.documentElement.removeAttribute("data-theme");
      update();
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
