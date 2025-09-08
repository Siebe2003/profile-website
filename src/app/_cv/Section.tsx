import { PropsWithChildren } from "react"

function Section({children}: PropsWithChildren) {
  return (
    <section className='p-4 bg-(--background) rounded shadow'>
      {children}
    </section>
  )
}

export default Section
