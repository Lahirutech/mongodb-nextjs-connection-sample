"use client";
import { ThemeContext } from "@/context/Themecontext";
import React, { useContext } from "react";
// 20,24,16

// import { SunIcon } from "@heroicons/react/24/outline";
// import { SunIcon } from "@heroicons/react/24/solid";

// import { SunIcon } from "@heroicons/react/20/solid";

import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div onClick={toggleTheme}>
      {theme == "dark" ? (
        <SunIcon
          style={{ height: "23", color: "white", padding: 0, margin: 0 }}
        />
      ) : (
        <MoonIcon
          style={{ height: "23", color: "yellow", padding: 0, margin: 0 }}
        />
      )}
    </div>
  );
};
