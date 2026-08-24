import { createClient } from '@/lib/supabase/server'

export interface IProject {
  title: string
  body: string
  thumbnail: string
  tags: string[]
}

export async function getProjects(): Promise<IProject[]> {
  const supabase = createClient()
  const { data: projects, error } = await supabase.from('projects').select(`
    title,
    body,
    thumbnail,
    tags ( name )
  `)

  if (error) throw new Error("Projects failed to load")

  return projects.map(x => ({...x, tags: x.tags.map(t => t.name)}))
}

