"use client";

import { useTheme } from "@/context/themecontext";

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle background (useContext: {theme === "light" ? "light" : "dark"})
    </button>
  );
};