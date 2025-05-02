'use client'

import * as React from "react"
import Image from 'next/image'
import NavItem from '@/app/_menu/NavItem'
import Link from 'next/link'
import {useState} from 'react'

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <nav className="flex items-center text-xl px-6 h-16 navbar shadow-sm">
      <div className="grow collapse md:visible">
        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
          <Image src="/images/logo-placeholder-image.png" alt="logo" width="70" height="70"/>
        </Link>
      </div>
      <ul className="grid grid-cols-4 h-full gap-10 w-100 xl:w-200 collapse md:visible">
        <NavItem name={"Home"} href={"/"}/>
        <NavItem name={"Hobbies"} href={"/hobbies"}/>
        <NavItem name={"CV"} href={"#"}/>
        <NavItem name={"Contact"} href={"#"}/>
      </ul>
      <button className="cursor-pointer grow flex justify-end md:collapse" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed
          ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#0F1729"/>
          </svg>
        }
      </button>
      <ul
        className={`md:hidden bg-(--primary) shadow-sm w-50 -left-50 top-16 fixed gap-0 transition-[left] duration-150 ease-in-out ${!isCollapsed && 'left-0'}`}>
        <NavItem name={"Home"} href={"/"}/>
        <NavItem name={"Hobbies"} href={"/hobbies"}/>
        <NavItem name={"CV"} href={"#"}/>
        <NavItem name={"Contact"} href={"#"}/>
      </ul>
    </nav>
  )
}

export default Navbar;
