import { IProject } from "@/lib/data/project"
import React, { createContext, useContext, useState } from 'react'

interface ICarouselContext {
  currentItem: IProject
  setCurrentItem: (item: IProject) => void
}

const defaultContext: ICarouselContext = {
  currentItem: { title: "", body: "", thumbnail: "", tags: [] },
  setCurrentItem: () => {},
}

const CarouselContext = createContext<ICarouselContext>(defaultContext)

export function useProjectCarousel() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error("useProjectCarousel must be used within a CarouselProvider")
  }
  return context
}

function CarouselProvider({ children }: { children: React.ReactNode }) {
  const [currentItem, setCurrentItem] = useState<IProject>({ title: "", body: "", thumbnail: "", tags: [] })

  return (
    <CarouselContext.Provider value={{
      currentItem,
      setCurrentItem
    }}>
      {children}
    </CarouselContext.Provider>
  )
}

export default CarouselProvider
