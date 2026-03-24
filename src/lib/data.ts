import { IBoardGame } from "@/interfaces/BoardGame";
import { getBaseUrl } from "./utils";

export async function getTopTenList(): Promise<IBoardGame[]> {
  const baseUrl = getBaseUrl()
  const topTenResponse = await fetch(`${baseUrl}/api/topTenList`)
  const topTenData = await topTenResponse.json()
  const collectionResponse = await fetch(`${baseUrl}/api/collection?ids=${topTenData.items.join(",")}`)

  const collectionData: IBoardGame[] = await collectionResponse.json()

  return collectionData
}