import React from "react"
import TopTenListItem from "./TopTenListItem"
import { getTopTenList } from "@/lib/data"

async function TopTenList() {
  const data = await getTopTenList()

  return (
    <div className="grid grid-cols-2">
      {data.map(x => <TopTenListItem key={x.id} item={x} />)}
    </div>
  )
}

export default TopTenList
