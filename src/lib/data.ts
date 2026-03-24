import { IBoardGame } from "@/interfaces/BoardGame"
import { getTopTenListIds } from "./top-ten-list-data"
import { getCollection } from "./collection-data"

export async function getTopTenList(): Promise<IBoardGame[]> {
  const topTenListResponse = await getTopTenListIds()
  const collectionResponse = await getCollection(topTenListResponse)

  return collectionResponse
}