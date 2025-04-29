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
  const pathname = usePathname()
  const isActive = pathname === href

  const [hover, setHover] = useState(false)

  return (
    <li className={`${(hover || isActive) && 'nav-item-active'} flex items-center justify-center nav-item`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
      <Link href={href}>{name}</Link>
    </li>
  )
}

export default NavItem
