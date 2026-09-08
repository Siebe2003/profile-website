import { collection, DocumentReference, getDoc, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"

interface IData {
  id: string
  title: string
  body: string
  thumbnail: string
  link: string
  skills: DocumentReference[]
}

interface ISkillReference {
  id: string
  name: string
  isSoftSkill: boolean
}

export interface IProject {
  title: string
  body: string
  thumbnail: string
  skills: string[]
}

export async function getProjects(): Promise<IProject[]> {
  const projects = []
  const snapshot = await getDocs(collection(db, "projects"))
  const items = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as IData[]

  for (const item of items) {
    const snapshotPromise = item.skills.map((ref) => getDoc(ref))
    const skillsSnapshot = await Promise.all(snapshotPromise)

    const project: IProject = {
      ...item,
      skills: skillsSnapshot.map((doc) => (doc.data() as ISkillReference).name)
    }

    projects.push(project)
  }

  return projects
}

