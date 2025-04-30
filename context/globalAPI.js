'use client'

import React from 'react'

export const GlobalAPIContext = React.createContext([])

export function GlobalAPIProvider({ children, value }) {
  return (
    <GlobalAPIContext.Provider value={value || {}}>
      {children}
    </GlobalAPIContext.Provider>
  )
}
