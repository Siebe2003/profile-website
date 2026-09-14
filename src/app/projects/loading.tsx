import React from 'react'

function loading() {
  return (
    <div className="w-full min-h-screen">
      <h2 className="header w-1/2 mx-auto">Projects</h2>
      <p className="text-center mb-10">Here are some of the projects I&apos;ve developed.</p>
      <div className="mx-auto w-3/5 h-87.5 bg-skeleton mb-10 shimmer-bg shimmer" />
      <div className="flex flex-col w-3/4 mx-auto gap-3">
        {Array(8).fill(null).map((_, i) => <div key={i} className="h-3 bg-gray-600 w-full" />)}
      </div>
    </div>
  )
}

export default loading