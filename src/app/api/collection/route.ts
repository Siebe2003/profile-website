import { setTimeout } from 'timers/promises';
import { convertXML } from 'simple-xml-to-json'
import { NextRequest, NextResponse } from 'next/server';

type MixedData = { name: { content: string } } | { comment: { content: string } } | { image: { content: string } }

function checkTypeGuard(obj: object): obj is MixedData {
  return "name" in obj || "comment" in obj || "image" in obj;
}

type ApiCallData = {
  items: {
    children: {
      item: {
        children: MixedData[]
      }
    }[]
  }
}

type Children = {
  name: {content: string}
  image: {content: string}
  comment: {content: string}
}


type ResponseData = {
  name: string
  image: string
  comment: string
}
 
export async function GET(request: NextRequest): Promise<NextResponse<any>> {
  const ids = request.nextUrl.searchParams.get("ids")

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
  const jsonResponse = convertXML(xmlText) as ApiCallData
  const filteredChildren = jsonResponse.items.children.map(x => {
    const result: Record<string, string> = {};
    
    for (const child of x.item.children) {
      if (checkTypeGuard(child)) {
        const [[key, value]] = Object.entries(child);
        result[key] = value.content;
      }
    }
    
    return result;
  })
  return NextResponse.json({ items: filteredChildren }, {status: response.status})
}