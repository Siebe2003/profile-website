'use client'

import {FunctionComponent, useState} from 'react'
import Link from 'next/link'
import * as React from 'react'
import {usePathname} from 'next/navigation'

interface NavItemProps {
  name: string
  href: string
}

const NavItem: FunctionComponent<NavItemProps> = ({name, href}) => {
  const activeCSS = 'bg-secondary md:bg-inherit md:border-solid md:border-(--foreground)'

  const pathname = usePathname()
  const isActive = pathname === href

  const [hover, setHover] = useState(false)

  return (
    <li className={`${(hover || isActive) && activeCSS} py-1 md:p-0 flex items-center justify-center cursor-pointer md:border-b-3`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
      <Link href={href}>{name}</Link>
    </li>
  )
}

export default NavItem
