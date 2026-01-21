'use client'
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";


export function Providers({children} : {children: ReactNode}) {
  return (
    <ThemeProvider defaultTheme="system" attribute={"class"}>
      <div>
        {children}
      </div>
    </ThemeProvider>
  ) 
}