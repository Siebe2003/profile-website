import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

interface SectionProps extends PropsWithChildren {
  heading: string
  className?: string
}

function Section({children, heading, className}: SectionProps) {
  return (
    <section className={cn("bg-surface rounded-sm shadow overflow-hidden", className)}>
      <h2 className="text-secondary-foreground py-1 ps-4 bg-linear-to-r from-secondary to-surface font-bold text-xl leading-8">{heading}</h2>
      <div className="p-6">
        {children}
      </div>
    </section>
  )
}

export default Section
