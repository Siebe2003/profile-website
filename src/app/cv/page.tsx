import Section from "./Section"
import Skill, { SkillValue } from "./Skill"
import Image from "next/image"
import { TbDownload } from "react-icons/tb"
import ContactInfo from "./ContactInfo"

interface ISkill {
  name: string
  value: SkillValue
}

const skills: ISkill[] = [
  {
    name: "React",
    value: 5
  },
  {
    name: "Next.js",
    value: 5
  },
  {
    name: ".NET",
    value: 5
  },
  {
    name: "Razor",
    value: 4
  },
  {
    name: "Kotlin",
    value: 4
  },
  {
    name: "PHP",
    value: 1
  },
  {
    name: "Drupal",
    value: 3
  },
  {
    name: "WordPress",
    value: 2
  },
  {
    name: "Github",
    value: 5
  },
  {
    name: "Bitbucket",
    value: 3
  },
]

function CvPage() {
  return (
    <div className="flex flex-col p-4 md:grid md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_auto] gap-4 lg:gap-6 lg:p-6 2xl:px-50 2xl:py-10">
      <section className="bg-surface rounded-sm col-start-1 row-start-1 col-span-2 py-6 md:ms-[12%] md:grid md:grid-cols-[24%_auto_12%] lg:ms-[6%] lg:grid-cols-[12%_auto_6%] 3xl:ms-[5%] 3xl:grid-cols-[10%_auto_5%] md:px-0 md:inset-shadow-[0px_0px_15px_1px] md:inset-shadow-secondary">
        <div className="flex-1 md:translate-x-[-50%]">
          <Image
            width={200}
            height={200}
            src="/images/cv-portrait.jpg"
            alt="Resume photo"
            className="w-[40%] mx-auto mb-6 rounded-full md:w-full md:mb-0 shadow-secondary"
          />
        </div>
        <div className="flex flex-col flex-3 justify-center lg:flex-row lg:items-center">
          <div className="lg:flex-1">
            <h2 className="text-center text-4xl font-bold text-primary lg:text-start xl:text-5xl xl:mb-2">Siebe Verhaegen</h2>
            <div className="text-center leading-10 lg:text-start xl:text-lg">Software Developer</div>
          </div>
          <div className="text-center hidden mt-6 md:block lg:mt-0 lg:flex-1">
            <a className="button" href="/documents/resume-siebe-verhaegen.pdf" download>
              <TbDownload className="text-xl" />Download Resume
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <ContactInfo />
          <div className="text-center md:hidden">
            <a className="button" href="/images/cv-portrait.png" download>
              <TbDownload className="text-xl" />Download Resume
            </a>
          </div>
        </div>
      </section>

      <Section heading="Profile" className="col-start-1 row-start-2">
        <p>
          A passionate programmer with a diligent work ethic. I am always ready
          to learn new technologies within the field. As someone with a keen eye for detail, 
          you can count on me to deliver code that is functional, clear and optimized.
        </p>
      </Section>

      <Section heading="Contact" className="hidden col-start-2 row-start-2 md:block">
        <ContactInfo />
      </Section>

      <Section heading="Skills" className="col-start-1 row-start-3 col-span-2">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-10">
          {skills.map(s => <Skill key={s.name} name={s.name} value={s.value} />)}
        </div>
      </Section>
    </div>
  )
}

export default CvPage
