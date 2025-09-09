import { Button } from '@/components/ui/button'
import React from 'react'

interface ProjectProps {
  name: string
  additionalInfo: string[]
}

function Project({name, additionalInfo}: ProjectProps) {
  return (
    <div>
      <div className='flex'>
        <h3 className='text-xl font-bold align-start my-auto me-4'>{name}</h3>
        <Button className='py-1 px-3 h-8 shrink-0'>Gallery</Button>
      </div>
      <ul className='list-disc list-inside indent-3'>
        {additionalInfo.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Project
