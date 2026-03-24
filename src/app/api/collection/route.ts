import { setTimeout } from "timers/promises"
import { NextRequest, NextResponse } from "next/server"
import { XMLParser } from "fast-xml-parser"
import { IBoardGame } from "@/interfaces/BoardGame"

type ApiCallData = {
  items: {
    item: {
      name: {
        "#text": string
      }
      image: string
      comment: string
      objectid: string
    }[]
  }
}
 
export async function GET(request: NextRequest): Promise<NextResponse<IBoardGame[]>> {
  const ids = request.nextUrl.searchParams.get("ids")
  const sortingArray = ids!.split(",")

  let response = await fetch(
      "https://boardgamegeek.com/xmlapi2/collection?username=flyingviper&id=" + ids,
    {
    method: "GET",
    headers: {
      "content-type": "application/xml",
      "Authorization": process.env.BGG_API_KEY!
    }
  })

  if (response.status === 202) {
    await setTimeout(5000)
    response = await fetch(
        "https://boardgamegeek.com/xmlapi2/collection?username=flyingviper&id=" + ids,
      {
      method: "GET",
      headers: {
        "content-type": "application/xml",
        "Authorization": process.env.BGG_API_KEY!
      }
    })
  }

  const xmlText = await response.text();
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
  })
  const obj = parser.parse(xmlText) as ApiCallData
  const output: IBoardGame[] = obj.items.item.sort(function (a, b) {
    return sortingArray.indexOf(a.objectid) - sortingArray.indexOf(b.objectid)
  }).map((x, index) => ({
    id: x.objectid,
    name: x.name["#text"],
    image: x.image,
    comment: x.comment,
    ranking: index + 1
  }))
      
  return NextResponse.json(output, {status: response.status})
}