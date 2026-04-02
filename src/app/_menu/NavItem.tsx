"use client"

import {FunctionComponent, useState} from "react"
import Link from "next/link"
import * as React from "react"
import { cn } from "@/lib/utils"

interface NavItemProps {
  name: string
  href: string
  isActive: boolean
  setIsCollapsed: (value: boolean) => void
}

const NavItem: FunctionComponent<NavItemProps> = ({name, href, isActive, setIsCollapsed}) => {
  const [hover, setHover] = useState(false)

  return (
    <li data-active={isActive} 
        className={cn(
          "p-1 hover:bg-primary md:hover:bg-transparent md:p-0 md:flex-1 active:bg-primary active:text-primary-foreground md:active:bg-transparent md:active:text-primary",
          isActive ? "bg-primary text-primary-foreground md:bg-transparent md:text-primary" : "hover:text-primary-foreground md:hover:text-primary bg-transparent text-foreground"
        )}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => isActive || setIsCollapsed(true)}>
      <Link href={href} className="flex w-full h-full justify-center items-center relative">
        {name}
        <span 
          className={cn(
            hover || isActive ? "w-full bg-primary" : "w-0 bg-foreground", 
            "hidden md:block absolute bottom-0 h-1 transition-[width] duration-200 ease-in-out"
          )}
        />
    </Link>
    </li>
  )
}

export default NavItem
