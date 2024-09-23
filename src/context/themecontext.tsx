"use client";
import { createContext, useContext, useState, ReactNode, useLayoutEffect } from "react";

type Theme = "light" | "dark";

// define context props
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// create context for theme and toggler
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// create own hook to get theme or throw error
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// wrapper for context provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // get theme from localStorage at mount
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // toggle between two themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // return wrapper
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
