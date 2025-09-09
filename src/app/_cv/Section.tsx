import { PropsWithChildren } from "react"

interface SectionProps extends PropsWithChildren {
  className?: string
}

function Section({children, className}: SectionProps) {
  return (
    <section className={`p-6 bg-(--background) rounded shadow ${className}`}>
      {children}
    </section>
  )
}

export default Section
