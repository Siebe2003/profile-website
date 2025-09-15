'use client'

import { PropsWithChildren } from "react";

function MainContentWrapper({children}: PropsWithChildren) {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/hero-background.mp4" type="video/mp4"/>
      </video>
      <div className="flex items-center justify-items-center pt-16 min-h-screen">
          {children}
      </div>
    </>
  )
}

export default MainContentWrapper;
