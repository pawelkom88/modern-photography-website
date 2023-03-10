import { createContext, useState } from "react";

export const ThemeContext = createContext("");

export function ThemeMode({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    setDarkMode(prevTheme => !prevTheme);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}
