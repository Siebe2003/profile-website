import { getProjects } from "@/lib/data/project";
import React from "react"
import Carousel from "./Carousel";
import Project from "./Project";

async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <div className="w-full min-h-screen">
      <Carousel items={[...projects, ...projects]} />
      <Project />
    </div>
  )
}

export default ProjectsPage;