"use client"

import useBreakpoint from "@/hooks/useBreakpoint"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Carousel } from "react-responsive-3d-carousel"
import "react-responsive-3d-carousel/dist/styles.css"
import Project from "./Project"

// Can be any JSX.Element tag
const items = [
  <div key={1} className="">
    <Image width={1918} height={873} src="/images/project-slide-01.png" alt="example" />
  </div>,
  <div key={2} className="">
    <Image width={1918} height={873} src="/images/project-slide-01.png" alt="example" />
  </div>,
  <div key={3} className="">
    <Image width={1918} height={873} src="/images/project-slide-01.png" alt="example" />
  </div>,
  <div key={4} className="">
    <Image width={1918} height={873} src="/images/project-slide-01.png" alt="example" />
  </div>
]

function ProjectsPage() {
  const isAtBreakpoint = useBreakpoint("md")

  const handleSlideChange = (currentIndex: number) => {
    console.log(currentIndex)
  }

  const [color, setColor] = useState("")

  useEffect(() => {
    // 1. Target the root HTML element
    const rootElement = document.documentElement

    // 2. Fetch all computed styles for that element
    const computedStyles = getComputedStyle(rootElement)

    // 3. Extract the exact color variable string and trim whitespace
    const primaryColor = computedStyles.getPropertyValue("--primary").trim()

    setColor(primaryColor)
  }, [])
  
  return (
    <div className="w-full">
      <Carousel
        items={items}
        showStatus={false}
        defaultOption={{ angleFactor: isAtBreakpoint ? 0 : 1 }}
        startIndex={0}
        autoPlay={false}
        onChange={handleSlideChange}
        focusOnSelect={true}
        indicators={{activeColor: color, color: "#6b6b6b"}}
        width="100%"
        height="auto"
        containerHeight="230px"
        aspectRatio={2.197}
      />
      <Project heading="Board Game Review App" body="test" />
    </div>
  )
}

export default ProjectsPage;