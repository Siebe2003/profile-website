import React from "react"
import TopTenListItem from "./TopTenListItem"
import { getTopTenListIds } from "@/lib/data/top-ten-list"
import { getCollection } from "@/lib/data/collection"

async function TopTenList() {
  const ids = await getTopTenListIds()
  const data = await getCollection(ids)

  return (
    <div className="grid grid-cols-2 lg:px-20 2xl:px-0 2xl:grid-cols-5 2xl:grid-rows-2">
      {data.map(x => <TopTenListItem key={x.id} item={x} />)}
    </div>
  )
}

export default TopTenList
