import { IBoardGame } from "@/interfaces/BoardGame"
import React from "react"
import TopTenListItem from "./TopTenListItem"
import { getBaseUrl } from "@/lib/utils"

async function TopTenList() {
  const baseUrl = getBaseUrl()
  const topTenResponse = await fetch(`${baseUrl}/api/topTenList`)
  const topTenData = await topTenResponse.json()
  const collectionResponse = await fetch(`${baseUrl}/api/collection?ids=${topTenData.items.join(",")}`)

  const collectionData: IBoardGame[] = await collectionResponse.json()

  return (
    <div className="grid grid-cols-2">
      {collectionData.map(x => <TopTenListItem key={x.id} item={x} />)}
    </div>
  )
}

export default TopTenList
