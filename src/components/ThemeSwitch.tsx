'use client'

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";

export function ThemeSwitch(){
  const {theme, setTheme, systemTheme} = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const setLightMode = () => {
    setTheme("light");
  }

  const setDarkMode = () => {
    setTheme("dark")
  }
  return (
    <div suppressHydrationWarning>
      {
        currentTheme == "dark"
        ? <MdDarkMode onClick={setLightMode} className="text-xl cursor-pointer hover:text-amber-500" />
        : <MdLightMode onClick={setDarkMode} className="text-xl cursor-pointer hover:text-amber-500" />
      }
    </div>
  )
}