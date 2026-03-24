import { PropsWithChildren } from "react";

function MainContentWrapper({children}: PropsWithChildren) {
  return (
    <div className="flex items-center justify-items-center pt-nav min-h-screen bg-[url(/images/background-pattern-3.jpg)] bg-contain bg-repeat bg-top-right md:bg-cover md:bg-no-repeat">
        {children}
    </div>
  )
}

export default MainContentWrapper;
