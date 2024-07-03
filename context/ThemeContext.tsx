"use client";

import React, { useEffect, useState, createContext, useContext } from 'react';

type ThemeTypes = "light" | "dark";
type ThemeContextProviderTypes = {
    children:React.ReactNode,
};

type ThemeContextTypes = {
    activeTheme:ThemeTypes,
    toggleTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextTypes | null>(null);

export default function ThemeContextProvider({ children } :ThemeContextProviderTypes) {

    const [activeTheme, setActiveTheme] = useState<ThemeTypes>("light");

    function toggleTheme () {
        if (activeTheme === "light") {
            setActiveTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }else {
            setActiveTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as ThemeTypes | null;

        if (localTheme){
            setActiveTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        }else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setActiveTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, [])

  return (
    <ThemeContext.Provider
    value={{
        activeTheme,
        toggleTheme,
    }}
    >
        {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {

    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider")
    }

    return context;
}
