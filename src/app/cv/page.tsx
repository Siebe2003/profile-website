import React, {FunctionComponent} from 'react'
import Section from '../_cv/Section'
import Skill from '../_cv/Skill'

const Page: FunctionComponent = () => {
  return (
    <main className='px-60 grid grid-cols-[30%_70%] gap-6'>
      <Section>
        <h2>Profile</h2>
        <p>Een gepassioneerde programmeur die ijverig werkt. Ik sta altijd klaar om nieuwe technologieën  te meesteren. Als een gestructureerde ontwikkelaar kunt u op mij rekenen dat ik geordend werk en mijn deadlines haal.</p>
      </Section>

      <Section>
        <h2>Projects</h2>
        <div className='grid grid-cols-2'>
          <div>
            <h3 className='text-xl font-bold mb-3'>Group trip web application</h3>
            <ul className='list-disc list-inside indent-3'>
              <li>React</li>
              <li>Nextjs</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-3'>Board game review web application</h3>
            <ul className='list-disc list-inside indent-3'>
              <li>React</li>
              <li>Nextjs</li>
            </ul>
          </div>
        </div>
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

      <Section>
        <h2>Education</h2>
        <p>Een gepassioneerde programmeur die ijverig werkt. Ik sta altijd klaar om nieuwe technologieën  te meesteren. Als een gestructureerde ontwikkelaar kunt u op mij rekenen dat ik geordend werk en mijn deadlines haal.</p>
      </Section>
    </main>
  )
}

export default Page
