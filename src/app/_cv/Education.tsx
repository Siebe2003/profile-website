import React from 'react'

interface EducationProps {
  course: string
  school: string
  location: string
  startDate: Date
  endDate: Date
}

function Education({course, school, location, startDate, endDate}: EducationProps) {
  const formattedStartDate = startDate.toLocaleDateString('default', { year: 'numeric', month: 'short' })
  const formattedEndDate = endDate.toLocaleDateString('default', { year: 'numeric', month: 'short' })

  return (
    <div className='grid grid-cols-[1fr_auto] gap-y-1'>
      <h3 className='text-xl font-bold grow my-auto'>{course}</h3>
      <div className='my-auto'>{`${formattedStartDate} - ${formattedEndDate}`}</div>
      <div className='col-span-2'>{`${school} \u00A0|\u00A0 ${location}`}</div>
    </div>
  )
}

export default Education
