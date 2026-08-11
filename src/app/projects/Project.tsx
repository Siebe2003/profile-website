import React from 'react'

interface ProjectProps {
  heading: string
  body: string
}

const test =
        "This solo project was the one designed to evaluate us for the school subject &quot;Backend frameworks&quot;. " +
        "The task included creating any website as long as it adhered to the numorous requirements. " +
        "One of which being for it to be developed using Next.js. Students were allowed to choose what purpose their project served, thus " +
        "I programmed an application where I could write my reviews of different board games I played and users would be able to view these in depth reviews. " +
        "Additionally, users could comment, as well as like reviews. Lastly, a seperate page was dedicated to maintaining a "+
        "person&apos;s top 10 list of their favorite board games. " +
        "They could add, edit, delete and reorder items. " +
        "\nData was stored by making use of Prisma models. The validation said data was managed by the zod schemas. " +
        "A seed script was written to generate the test data that needed to be viewed upon running the app. Because backend was " +
        "the main part at play in this project," +
        "authentication was to be implemented through sessions and cookies."

function Project({heading}: ProjectProps) {
  return (
    <>
      <h2 className="text-primary py-1 font-bold text-2xl text-center">{heading}</h2>
      {
        test.split("\n").map((x, index) => <p key={index} className="px-5 py-2">{x}</p>)
      }
    </>
  )
}

export default Project
