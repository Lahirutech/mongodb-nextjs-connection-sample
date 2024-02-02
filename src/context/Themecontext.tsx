"use client";
import { createContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: string | undefined;
  toggleTheme?: () => void;
}

const defaultTheme = {
  theme: "light",
};

export const ThemeContext = createContext<IThemeContext>(defaultTheme);

const getThemeStateLocalStor = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    return theme || "light";
  }
};

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(() => {
    return getThemeStateLocalStor();
  });

  const toggleTheme = () => {
    console.log("toggle theme");
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
