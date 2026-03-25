"use client"

import SingleSelectProvider from "@/components/context/SingleSelectProvider"
import React from 'react'

function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SingleSelectProvider>
      {children}
    </SingleSelectProvider>
  )
}

export default AboutLayout
