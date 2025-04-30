'use client'

import { createContext, useEffect, useState } from 'react'
import { useLenis } from 'lenis/react'

export const ModalContext = createContext([])

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    if (modal) {
      if (lenis) lenis.stop()
    } else {
      if (lenis) lenis.start()
    }

    return () => {
      lenis?.start()
    }
  }, [modal, lenis])

  // Create the context value
  const contextValue = {
    modal,
    setModal,
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}
