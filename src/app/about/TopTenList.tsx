import { IBoardGame } from "@/interfaces/BoardGame"
import React from "react"
import TopTenListItem from "./TopTenListItem"

async function TopTenList() {
  const topTenResponse = await fetch("http://localhost:3000/api/topTenList")
  const topTenData = await topTenResponse.json()
  const collectionResponse = await fetch("http://localhost:3000/api/collection?ids=" + topTenData.items.join(","))

  const collectionData: IBoardGame[] = await collectionResponse.json()

  return (
    <div className="grid grid-cols-2">
      {collectionData.map(x => <TopTenListItem key={x.id} item={x} />)}
    </div>
  )
}

export default TopTenList
