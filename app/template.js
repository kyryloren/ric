'use client'

import { GlobalStyle } from 'styles'
import { Footer, Lenis, Nav, Scrollbar } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Template({ children }) {
  useGSAP(() => {
    gsap.set('#main', { autoAlpha: 1 })
  })

  return (
    <>
      <GlobalStyle />
      <Scrollbar />

      <main id="main">
        <Nav />
        {children}
        <Footer />
      </main>
      <Lenis root />
    </>
  )
}
