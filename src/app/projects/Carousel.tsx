"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Carousel as ReactCarousel } from "react-responsive-3d-carousel"
import "react-responsive-3d-carousel/dist/styles.css"
import { IProject } from "@/lib/data/project"
import { useProjectCarousel } from "@/components/context/CarouselProvider"
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

interface CarouselProps {
  items: IProject[]
}

function Carousel({ items }: CarouselProps) {
  const { currentItem, setCurrentItem } = useProjectCarousel()

  const itemDivs = items.map(x => 
    <div key={1} className="">
      <Image width={1918} height={873} src={x.thumbnail} alt="example" />
    </div>
  )

  const handleSlideChange = (currentIndex: number) => {
    setCurrentItem(items[currentIndex])
    console.log(currentItem)
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
    <ReactCarousel
      items={itemDivs}
      showStatus={false}
      startIndex={0}
      perspective={1}
      autoPlay={false}
      onChange={handleSlideChange}
      focusOnSelect={true}
      indicators={{
        activeColor: color, 
        color: "#2e2e2e",
        gap: "10px"
      }}
      transformDuration={500}
      containerHeight="400px"
      arrows={{
        prevIcon: <IoArrowBackCircle className="opacity-40 hover:opacity-100 text-gray-500 mx-auto" />,
        nextIcon: <IoArrowForwardCircle className="opacity-40 hover:opacity-100 text-gray-500 mx-auto" />,
        shadow: "none",
        width: "50%"
      }}
    />
  )
}

export default Carousel;