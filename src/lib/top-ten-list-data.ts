import { setTimeout } from "timers/promises";
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
  let retries = 0
  const maxRetries = 3

  try {
    let response = await fetch(
      "https://boardgamegeek.com/xmlapi2/user?name=flyingviper&top=1",
      {
      method: "GET",
      headers: {
        "content-type": "application/xml",
        "Authorization": process.env.NEXT_PUBLIC_BGG_API_KEY || process.env.BGG_API_KEY!
      }
    })

    console.log(response)

    while (response.status === 202 && retries < maxRetries) {
      await setTimeout(5000)
      response = await fetch("https://boardgamegeek.com/xmlapi2/user?name=flyingviper&top=1", {
        method: "GET",
        headers: {
          "content-type": "application/xml",
          "Authorization": process.env.NEXT_PUBLIC_BGG_API_KEY || process.env.BGG_API_KEY!
        }
      })
      retries++
    }

    const xmlText = await response.text();
    const jsonResponse = convertXML(xmlText) as ApiCallData
    const topTenList = jsonResponse.user.children.find(x => Object.hasOwn(x, "top")) as TopChild
    
    return topTenList.top.children.map(x => x.item.id)
  } catch {

    console.log("API REQUEST ABORTED!!!")
    return []
  }
}