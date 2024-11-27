"use client";

import { createContext, useInsertionEffect, useState } from "react";

interface Context {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<Context | null>(null);

type Theme = "dark" | "light";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    const localStorageTheme = window.localStorage.getItem("color-theme");

    return ((localStorageTheme &&
      ["dark", "light"].includes(localStorageTheme) &&
      localStorageTheme) ??
      "dark") as Theme;
  });

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("color-theme", nextTheme);
  };

  useInsertionEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
