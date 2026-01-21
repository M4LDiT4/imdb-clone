'use client'
import { ReactNode,} from "react";
import { ThemeProvider } from "next-themes";


export function Providers({children} : {children: ReactNode}) {

  return (
    <ThemeProvider 
      defaultTheme="system" 
      attribute={"class"}
      enableSystem
    >
      <div className="transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  ) 
}