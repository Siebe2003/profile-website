import { setTimeout } from "timers/promises"
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
 
export async function getCollection(ids: string[]): Promise<IBoardGame[]> {
  try {
    if (ids.length === 0) {
      throw new Error()
    }

    const queryParameter = ids.join(",")

    let response = await fetch(
        "https://boardgamegeek.com/xmlapi2/collection?username=flyingviper&id=" + queryParameter,
      {
      method: "GET",
      headers: {
        "content-type": "application/xml",
        "Authorization": process.env.NEXT_PUBLIC_BGG_API_KEY || process.env.BGG_API_KEY!
      }
    })

    if (response.status === 202) {
      await setTimeout(5000)
      response = await fetch(
          "https://boardgamegeek.com/xmlapi2/collection?username=flyingviper&id=" + queryParameter,
        {
        method: "GET",
        headers: {
          "content-type": "application/xml",
          "Authorization": process.env.NEXT_PUBLIC_BGG_API_KEY || process.env.BGG_API_KEY!
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
      return ids.indexOf(a.objectid) - ids.indexOf(b.objectid)
    }).map((x, index) => ({
      id: x.objectid,
      name: x.name["#text"],
      image: x.image,
      comment: x.comment,
      ranking: index + 1
    }))
        
    return output
  } catch {
    return []
  }
}