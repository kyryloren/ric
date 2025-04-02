'use client'

import { useEffect, useLayoutEffect } from 'react'
import { useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export function ScrollTriggerConfig() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.clearScrollMemory('manual')
  }, [])

  const lenis = useLenis(ScrollTrigger.update)
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => ScrollTrigger.refresh(), [lenis])

  return null
}
