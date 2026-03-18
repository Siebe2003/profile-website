import { PropsWithChildren } from "react";

function MainContentWrapper({children}: PropsWithChildren) {
  return (
    <div className="flex items-center justify-items-center pt-nav min-h-screen bg-[url(/images/background-pattern-3.jpg)] bg-cover bg-no-repeat bg-top-right">
        {children}
    </div>
  )
}

export default MainContentWrapper;
