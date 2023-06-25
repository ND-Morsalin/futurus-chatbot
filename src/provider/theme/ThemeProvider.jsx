/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    //   console.log(prefersDarkMode);
    // set theme on localstorage
    localStorage.getItem("theme") === "dark"
      ? setIsDarkMode(true)
      : setIsDarkMode(false);
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleTheme = () => {
    // set theme on localstorage
    localStorage.getItem("theme") === "dark"
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");

    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
