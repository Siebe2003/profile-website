"use client"

import * as React from "react"
import NavItem from "@/app/_menu/NavItem"
import {useState} from "react"
import { GrMenu, GrClose } from "react-icons/gr"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const destinations = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Hobbies",
    href: "/hobbies",
  },
  {
    name: "CV",
    href: "/cv",
  },
  {
    name: "Contact",
    href: "#",
  },
]


function Navbar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <nav className="w-full fixed z-30 flex items-center text-lg px-6 h-nav navbar shadow-sm bg-background lg:px-10 2xl:px-14">
      <div className="lg:grow"></div>
      <ul className={cn("bg-background md:bg-transparent md:h-full md:relative md:flex md:inset-0 md:gap-20 md:w-full shadow-sm w-50 -left-50 top-nav fixed gap-0 transition-[left] duration-150 ease-in-out lg:w-112.5 lg:gap-10", !isCollapsed && "left-0")}>
        {destinations.map(d => <NavItem key={d.name} name={d.name} href={d.href} isActive={pathname === d.href} />)}
      </ul>
      <button className="cursor-pointer flex justify-end md:hidden text-foreground text-3xl" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed
          ? <GrMenu />
          : <GrClose />}
      </button>
    </nav>
  )
}

export default Navbar;
