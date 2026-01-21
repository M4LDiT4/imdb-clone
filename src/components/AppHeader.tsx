import Link from "next/link";
import { MenuItem } from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ThemeSwitch } from "./ThemeSwitch";

export function AppHeader(){
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem 
          title = "Home"
          address = "/"
          icon = {AiFillHome}
        />

        <MenuItem 
          title = "About"
          address = "/about"
          icon = {BsFillInfoCircleFill}
        />

      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitch/>

        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">
            Clone
          </span>
        </Link>
      </div>
    </div>
  )
}