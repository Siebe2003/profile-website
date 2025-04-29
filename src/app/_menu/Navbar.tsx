'use client'

import * as React from "react"
import Image from 'next/image'
import NavItem from '@/app/_menu/NavItem'
import Link from 'next/link'

function Navbar() {
    return (
      <nav className="flex items-center text-xl gap-32 px-6 h-16 navbar">
        <div className="grow">
          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
            <Image src="/images/logo-placeholder-image.png" alt="logo" width="70" height="70"/>
          </Link>
        </div>
        <ul className="grid grid-cols-4 h-full gap-10 w-200">
          <NavItem name={"Home"} href={"/"} />
          <NavItem name={"Hobbies"} href={"/hobbies"} />
          <NavItem name={"CV"} href={"#"} />
          <NavItem name={"Contact"} href={"#"} />
        </ul>
        <button className="grow flex justify-end invisible">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>
    )
}

export default Navbar;
