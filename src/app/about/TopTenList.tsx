import React from 'react'

async function TopTenList() {
  const response = await fetch("http://localhost:3000/api/topTenList")
  const data = await response.json()
  const response2 = await fetch("http://localhost:3000/api/collection?ids=" + data.items.join(","))

  const data2 = await response2.json()
  console.log(data2)

  return (
    <div>
      {data != undefined}
    </div>
  )
}

export default TopTenList
