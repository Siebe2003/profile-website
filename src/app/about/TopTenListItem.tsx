"use client"

import { SingleSelectContext } from "@/components/context/SingleSelectProvider"
import { IBoardGame } from "@/interfaces/BoardGame"
import { cn, decodeHtmlEntities } from "@/lib/utils"
import Image from "next/image"
import React, { useContext, useRef } from "react"

interface TopTenListItemProps {
  item: IBoardGame
}

function TopTenListItem({ item }: TopTenListItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const {selectedKey, setSelectedKey} = useContext(SingleSelectContext)
  const expand = selectedKey === item.id
  const clickEventHandler = () => {
    setSelectedKey(selectedKey === item.id ? undefined : item.id)
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: "center" })
    }, 0)
  }

  return (
    <div className={cn("aspect-square relative p-4 flex md:p-10", expand && "aspect-2/1 col-span-2")} ref={ref} onClick={clickEventHandler}>
      <div className={cn("w-full h-full overflow-hidden", expand && "w-1/2 pe-4 md:pe-10")}>
        <Image width={500} height={500} src={item.image} alt={`Photo of ${item.name}`} className={cn("object-cover w-full h-full", expand && "-ms-6 md:-ms-10 delay-200 duration-200 transition-[margin]")} />
      </div>
      <div className="grow" />
      <div className={cn("w-0 absolute top-0 right-0", expand && "w-[75%] p-[inherit] h-full transition-[width] duration-300 ease-out")}>
        <div className={cn("text-[10px] bg-secondary text-secondary-foreground overflow-hidden w-full h-full md:text-base", expand && "py-1 px-2")}>{decodeHtmlEntities(item.comment)}</div>
      </div>
      <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xl hexagon flex justify-center items-center">{item.ranking}</div>
    </div>
  )
}

export default TopTenListItem
