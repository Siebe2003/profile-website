"use client"

import { useProjectCarousel } from "@/components/context/CarouselProvider"
import { motion, AnimatePresence } from "motion/react"

function Project() {
  const { currentItem } = useProjectCarousel()

  if (!currentItem) return null

  return (
    <div className="px-6 py-2 md:px-16 lg:px-30 xl:px-70">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-bold text-2xl text-center md:text-3xl">{currentItem.title}</h2>
          <p className="py-2">{currentItem.body}</p>
          <div className="flex flex-row flex-wrap gap-2 mt-4">
            {currentItem.skills?.map(x => <div key={x} className="bg-secondary rounded-md px-4">{x}</div>)}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Project
