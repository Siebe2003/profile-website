"use client"

import { useProjectCarousel } from "@/components/context/CarouselProvider"
import React from 'react'

function Project() {
  const { currentItem } = useProjectCarousel()

  return (
    <div className="p-6 md:p-16 lg:px-30 xl:px-50">
      <h2 className="text-primary py-1 font-bold text-2xl text-center">{currentItem.title}</h2>
      {
        currentItem.body.split("\n").map((x, index) => <p key={index} className="px-5 py-2">{x}</p>)
      }
    </div>
  )
}

export default Project
