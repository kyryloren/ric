'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { useTempus } from 'tempus/react'
import { useStore } from 'lib'

import 'lenis/dist/lenis.css'

export default function Lenis({ root, options }) {
  const lenisRef = useRef(null)
  const isNavOpened = useStore((state) => state.isNavOpened)
  const lenis = useLenis()

  useTempus((time) => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.raf(time)
    }
  })

  useEffect(() => {
    if (isNavOpened) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [isNavOpened, lenis])

  return (
    <ReactLenis
      ref={lenisRef}
      root={root}
      options={{
        ...options,
        autoRaf: false,
        anchors: true,
      }}
    />
  )
}
