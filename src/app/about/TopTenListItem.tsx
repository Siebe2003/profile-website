"use client"

import { IBoardGame } from "@/interfaces/BoardGame"
import { cn, decodeHtmlEntities } from "@/lib/utils"
import Image from "next/image"
import React from "react"
import { useState } from "react"

interface TopTenListItemProps {
  item: IBoardGame
}

function TopTenListItem({ item }: TopTenListItemProps) {
  const [detail, setDetail] = useState(false)

  return (
    <div className={cn("aspect-square relative p-4 flex", detail && "aspect-2/1 col-span-2")} onClick={() => setDetail(!detail)}>
      <div className={cn("w-full h-full", detail && "w-1/2 pe-4")}>
        <Image width={500} height={500} src={item.image} alt={`Photo of ${item.name}`} className={cn("object-cover w-full h-full")} />
      </div>
      <div className="grow" />
      <div className={cn("w-0 absolute top-0 right-0", detail && "w-[70%] p-[inherit] h-full transition-[width] duration-500 ease-out")}>
        <div className={cn("text-[10px] bg-secondary text-secondary-foreground overflow-hidden w-full h-full", detail && "p-2")}>{decodeHtmlEntities(item.comment)}</div>
      </div>
      <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-lg hexagon flex justify-center items-center">{item.ranking}</div>
    </div>
  )
}

export default TopTenListItem
