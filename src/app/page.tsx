import React from 'react'
import Link from 'next/link'
import Carousel from '@/app/_home/Carousel'
import {Button} from '@/components/ui/button'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/hero-background.mp4" type="video/mp4"/>
      </video>
      <div
        className="flex items-center justify-items-center md:px-20 xl:px-30 2xl:px-60 min-h-screen pt-16">
        <main className="flex flex-col items-center sm:items-start md:grid md:grid-rows-[auto_auto_auto] md:grid-cols-2 md:gap-10 lg:flex lg:flex-row lg:gap-15 xl:gap-20 3xl:gap-30">
          <Carousel />
          <div className="flex flex-col gap-10 items-center p-10 md:p-0 order-first md:order-last md:grid md:grid-cols-subgrid md:grid-rows-subgrid md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-3 lg:flex lg:flex-col lg:row-start-auto lg:col-start-auto lg:gap-10 lg:items-start 3xl:gap-10">
            <h1 className="text-5xl text-center md:mb-0 md:col-span-2 lg:text-start 3xl:text-6xl">My portfolio</h1>
            <p className="text-center md:text-start md:row-start-2 md:col-start-2 md:h-full lg:row-start-auto">Hello and welcome to my portfolio website. My name is Siebe Verhaegen and I&#39;m a student of Thomas
              More in Lier. I follow a course in programming and aspire to be a great software developer. The purpose of
              this website is to show who I am. This includes my interests, skills and accomplishments. It is made by me
              to give it the flare that fits with my personality. If you would have any questions for me, feel free to
              contact me using my email or the contact form.</p>
            <Button className="gap-6 bg-accent w-50 cursor-pointer w-min shadow-md border-primary border-3 text-xl py-6 ps-10 pe-[5px] hover:bg-muted-accent font-normal rounded-full md:row-start-3 md:col-start-2 lg:row-start-auto">
              <Link href={'/cv'}>Read my CV</Link>
              <div className="w-max bg-primary p-[7px] rounded-full">
                <Image src="/images/cv.png" alt="cv icon" width={25} height={25} />
              </div>
            </Button>
          </div>
        </main>
      </div>
    </>
  )
}