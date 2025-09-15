import React, {FunctionComponent} from 'react'
import Section from '../_cv/Section'
import Skill from '../_cv/Skill'
import Project from '../_cv/Project'
import Education from '../_cv/Education'

const Page: FunctionComponent = () => {
  return (
    <main className='p-4 md:p-10 xl:px-20 2xl:px-40 3xl:px-60 lg:grid lg:grid-cols-[1fr_70%] gap-x-6'>
      <div className='flex flex-col gap-4 md:gap-6 mb-4 md:mb-6 lg:mb-0'>
        <Section>
          <h2>Profile</h2>
          <p>A passionate programmer with a diligent work ethic. I am always ready to learn new technologies within the field. As a structured individual, you can count of me to deliver my work in time.</p>
        </Section>

        <Section>
          <h2>Skills</h2>
          <div className='flex flex-col gap-4'>
            <Skill name='Javascript' value={5} />
            <Skill name='C#' value={5} />
            <Skill name='Java' value={3} />
            <Skill name='PHP' value={2} />
            <Skill name='Python' value={1} />
          </div>
        </Section>
      </div>

      <div className='flex flex-col gap-4 md:gap-6'>
        <Section>
          <h2>Projects</h2>
          <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4 gap-x-10 w-full'>
            <Project name='Group trip web application' additionalInfo={['C#', 'Razor', 'Group project (agile)']} />
            <Project name='Board game review web application' additionalInfo={['Javascript', 'React', 'Next.js', 'solo project']} />
            <Project name='News website' additionalInfo={['Drupal', 'PHP', 'Twig', 'solo project']} />
            <Project name='News website' additionalInfo={['Drupal', 'PHP', 'Twig', 'solo project']} />
          </div>
        </Section>

        <Section>
          <h2>Education</h2>
          <div className='flex flex-col gap-6'>
            <Education course='Graduate Degree Programming' startDate={new Date(2023, 1, 9)} endDate={new Date(2025, 10, 9)} school='Thomas More' location='Antwerpsestraat 99, 2500 Lier' />
            <Education course='Graduate Degree Programming' startDate={new Date(2023, 1, 9)} endDate={new Date(2025, 10, 9)} school='Thomas More' location='Antwerpsestraat 99, 2500 Lier' />
          </div>
        </Section>
      </div>
    </main>
  )
}

export default Page
