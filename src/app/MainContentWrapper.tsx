import { PropsWithChildren } from "react";

function MainContentWrapper({children}: PropsWithChildren) {
  return (
    <main className="flex items-center justify-items-center pt-nav min-h-screen bg-[url(/images/background-pattern-3.jpg)] bg-contain bg-repeat bg-top-right lg:bg-cover lg:bg-no-repeat">
        {children}
    </main>
  )
}

export default MainContentWrapper;
