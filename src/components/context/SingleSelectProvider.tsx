import React, { createContext, useState } from 'react'

interface ISingleSelectContext {
  selectedKey?: string
  setSelectedKey: (key?: string) => void
}

const defaultContext: ISingleSelectContext = {
  selectedKey: undefined,
  setSelectedKey: () => {},
}

export const SingleSelectContext = createContext<ISingleSelectContext>(defaultContext)

function SingleSelectProvider({ children }: { children: React.ReactNode }) {
  const [selectedKey, setSelectedKey] = useState<string | undefined>()

  return (
    <SingleSelectContext value={{
      selectedKey,
      setSelectedKey
    }}>
      {children}
    </SingleSelectContext>
  )
}

export default SingleSelectProvider
