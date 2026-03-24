import { IBoardGame } from "@/interfaces/BoardGame"

export async function getTopTenList(): Promise<IBoardGame[]> {
  const baseUrl = "https://profile-website-one-nu.vercel.app/"
  const topTenResponse = await fetch(`${baseUrl}/api/topTenList`)
  const topTenData = await topTenResponse.json()
  const collectionResponse = await fetch(`${baseUrl}/api/collection?ids=${topTenData.items.join(",")}`)

  const collectionData: IBoardGame[] = await collectionResponse.json()

  return collectionData
}