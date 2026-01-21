'use client'
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export function ThemeSwitch(){
  const {theme, setTheme, systemTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const setLightMode = () => {
    setTheme("light");
  }

  const setDarkMode = () => {
    setTheme("dark")
  }

  if (!mounted) return null;

  return (
    <div>
      {
        currentTheme == "dark"
        ? <MdDarkMode onClick={setLightMode} className="text-xl cursor-pointer hover:text-amber-500" />
        : <MdLightMode onClick={setDarkMode} className="text-xl cursor-pointer hover:text-amber-500" />
      }
    </div>
  )
}
