"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface SkillProps {
  name: string
  value: SkillValue
}

const widthMap = {
  1: "w-[20%]",
  2: "w-[40%]",
  3: "w-[60%]",
  4: "w-[80%]",
  5: "w-full"
}

export type SkillValue = keyof typeof widthMap

function Skill({name, value}: SkillProps) {
  const [show, setShow] = useState(false)
  useEffect(() => {
   setShow(true) 
  }, [])

  return (
    <div>
      <h3 className="text-xs mb-2 md:text-base">{name}</h3>
      <div className="w-full h-1.5 bg-muted-primary rounded-full overflow-hidden">
         <div className={cn("h-full bg-primary transition-[width] duration-500 ease-in-out w-0", show && widthMap[value])}></div>
      </div>
    </div>
  )
}

export default Skill