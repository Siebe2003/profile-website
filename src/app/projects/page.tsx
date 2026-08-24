import { getProjects } from "@/lib/data/project";
import React from "react"
import Carousel from "./Carousel";
import Project from "./Project";

async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <div className="w-full min-h-screen">
      <h2 className="header w-1/2 mx-auto">Projects</h2>
      <p className="text-center">Here are some of the projects I&apos;ve developed.</p>
      <Carousel items={projects} />
      <Project />
    </div>
  )
}

export default ProjectsPage;