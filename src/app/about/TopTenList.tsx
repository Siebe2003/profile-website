import React from "react"
import TopTenListItem from "./TopTenListItem"
import { getTopTenList } from "@/lib/data"

async function TopTenList() {
  const data = await getTopTenList()

  return (
    <div className="grid grid-cols-2 lg:px-20 2xl:px-0 2xl:grid-cols-5 2xl:grid-rows-2">
      {data.map(x => <TopTenListItem key={x.id} item={x} />)}
    </div>
  )
}

export default TopTenList
