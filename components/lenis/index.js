'use client'

import { useStore } from 'lib'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import 'lenis/dist/lenis.css'

export default function Lenis({ root, options }) {
  const lenisRef = useRef(null)
  const isNavOpened = useStore((state) => state.isNavOpened)
  const lenis = useLenis()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

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
