"use client"

import Modal from "@/components/custom/Modal"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import Carousel from "./Carousel"

interface ProjectProps {
  name: string
  additionalInfo: string[]
}

function Project({name, additionalInfo}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <div className="flex">
        <h3 className="text-xl font-bold align-start my-auto grow">{name}</h3>
        <Button className="py-1 px-3 h-8 shrink-0" onClick={() => setIsModalOpen(true)}>Gallery</Button>
      </div>
      <ul className="list-disc list-inside indent-3">
        {additionalInfo.map(item => <li key={item}>{item}</li>)}
      </ul>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Carousel />
      </Modal>
    </div>
  )
}

export default Project
