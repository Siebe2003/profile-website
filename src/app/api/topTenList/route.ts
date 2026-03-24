import { setTimeout } from "timers/promises";
import { convertXML } from "simple-xml-to-json"
import { NextResponse } from "next/server";

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

type ResponseData = {
  items: object | undefined
}
 
export async function GET(): Promise<NextResponse<ResponseData>> {
  let response = await fetch(
    "https://boardgamegeek.com/xmlapi2/user?name=flyingviper&top=1",
    {
    method: "GET",
    headers: {
      "content-type": "application/xml",
      "Authorization": process.env.BGG_API_KEY!
    }
  })

  if (response.status === 202) {
    await setTimeout(5000)
    response = await fetch("https://boardgamegeek.com/xmlapi2/user?name=flyingviper&top=1", {
      method: "GET",
      headers: {
        "content-type": "application/xml",
        "Authorization": process.env.BGG_API_KEY!
      }
    })
  }

  const xmlText = await response.text();
  const jsonResponse = convertXML(xmlText) as ApiCallData
  const topTenList = jsonResponse.user.children.find(x => Object.hasOwn(x, "top")) as TopChild
  
  return NextResponse.json({ items: topTenList.top.children.map(x => x.item.id) }, {status: response.status})
}