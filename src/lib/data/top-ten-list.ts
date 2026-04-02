import { setTimeout } from "timers/promises"
import { convertXML } from "simple-xml-to-json"

type ApiCallData = {
  user: {
    children: object[]
  }
}

type TopChild = {
  top: {
    children: {
      item: {
        id: string
      }
    }[]
  }
}
 
export async function getTopTenListIds(): Promise<string[]> {
  const maxRetries = 3
  let retries = 0
  let response: Response | undefined

  try {
    do {
      if (response?.status === 202) {
        await setTimeout(5000)
      }

      response = await fetch(`https://boardgamegeek.com/xmlapi2/user?name=flyingviper&top=1&_t=${Date.now()}`, {
        method: "GET",
        headers: {
          "content-type": "application/xml",
          "Authorization": process.env.NEXT_PUBLIC_BGG_API_KEY || process.env.BGG_API_KEY!
        }
      })
      retries++

    } while (retries <= maxRetries && response.status === 202)

    const xmlText = await response.text();
    const jsonResponse = convertXML(xmlText) as ApiCallData
    const topTenList = jsonResponse.user.children.find(x => Object.hasOwn(x, "top")) as TopChild
    
    return topTenList.top.children.map(x => x.item.id)
  } catch {

    return []
  }
}