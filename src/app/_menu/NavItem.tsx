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
    <li data-active={isActive} className='p-1 data-[active=true]:bg-(--secondary) hover:bg-(--secondary) md:hover:bg-transparent md:data-[active=true]:bg-transparent md:p-0 md:flex-1'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
      <Link href={href} className='flex w-full h-full justify-center items-center relative'>
        {name}
        <span className={(hover || isActive ? 'w-full' : 'w-0') + ' hidden md:block bg-(--foreground) absolute bottom-0 h-[4px] transition-[width] duration-200 ease-in-out'}></span>
      </Link>
    </li>
  )
}

export default NavItem
