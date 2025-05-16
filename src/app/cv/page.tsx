import React, {FunctionComponent} from 'react'

interface PageProps {

}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/hero-background.mp4" type="video/mp4"/>
      </video>
      <div className="flex items-center justify-items-center md:px-20 xl:px-30 2xl:px-60 min-h-screen pt-16">Hello world</div>
    </>
  )
}

export default Page
