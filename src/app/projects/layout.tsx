"use client"

import CarouselProvider from "@/components/context/CarouselProvider"
import React from 'react'

function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CarouselProvider>
      {children}
    </CarouselProvider>
  )
}

export default ProjectsLayout