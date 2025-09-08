export interface Props {
  name: string
  value: SkillValue
}

const widthMap = {
  1: 'w-[20%]',
  2: 'w-[40%]',
  3: 'w-[60%]',
  4: 'w-[80%]',
  5: 'w-full'
}

export type SkillValue = keyof typeof widthMap

function Skill({name, value}: Props) {
  return (
    <div>
      <h3 className='text-lg font-bold'>{name}</h3>
      <div className='w-full h-5 bg-gray-200 rounded overflow-hidden'>
         <div className={`h-full bg-accent ${widthMap[value]}`}></div>
      </div>
    </div>
  )
}

export default Skill