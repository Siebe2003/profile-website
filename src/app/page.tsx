import React from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import Image from "next/image"


export default function Home() {
  return (
    <main className="flex flex-col items-center lg:flex-row-reverse lg:px-20 lg:gap-20 2xl:gap-30 2xl:px-30 3xl:gap-50">
      <Image className="w-50 mt-10 md:w-70 lg:mt-0 lg:w-auto lg:flex-3" src="/images/hero-section-portrait.png" width="600" height="600" alt="Image of me" />
      <div className="text-foreground flex flex-col gap-10 items-center p-8 md:p-20 md:pt-10 lg:p-0 lg:items-start lg:flex-5 2xl:gap-16">
        <h1 className="text-4xl text-center leading-12 font-bold md:text-5xl md:leading-15 md:text-start 2xl:text-6xl 2xl:leading-20 3xl:text-7xl"><span className="text-primary">Welcome</span> to my Portfolio Website</h1>
        <p className="text-center md:text-start 3xl:text-lg">Hello and welcome to my portfolio website. My name is Siebe Verhaegen and I&#39;m a student of Thomas
          More in Lier. I follow a course in programming and aspire to be a great software developer. The purpose of
          this website is to show who I am. This includes my interests, skills and accomplishments. It is made by me
          to give it the flare that fits with my personality. If you would have any questions for me, feel free to
          contact me using my email or the contact form.</p>
        <Button className="gap-6 cursor-pointer w-min border-primary border-3 text-xl py-6 ps-10 pe-1.25 font-normal rounded-full">
          <Link href={"/cv"}>Read my CV</Link>
          <div className="w-max bg-primary p-1.75 rounded-full">
            <Image src="/images/cv.png" alt="cv icon" width={25} height={25} />
          </div>
        </Button>
      </div>
    </main>
  )
}