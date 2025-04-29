'use client'

import { GlobalStyle } from 'styles'
import { Book, Lenis, Scrollbar } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ModalProvider } from 'lib'

export default function Template({ children }) {
  useGSAP(() => {
    gsap.set('#main', { autoAlpha: 1 })
  })

  return (
    <>
      <GlobalStyle />
      <Scrollbar />

      <ModalProvider>
        <Book />
        <main id="main">{children}</main>
      </ModalProvider>
      <Lenis root />
    </>
  )
}
