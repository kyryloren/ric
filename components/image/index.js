'use client'

import Image from 'next/image'
import tw, { styled, theme } from 'twin.macro'
import { useEffect, useRef } from 'react'
import { useWindowSize } from 'react-use'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const ParallaxContainer = styled.div`
  ${tw`relative w-full h-full overflow-hidden [border-radius:inherit]`}
`

const Inner = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full`}
`

const ParallaxImage = styled(Image)`
  ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover [border-radius:inherit]`}
`

export default function CustomImage({
  src,
  alt,
  sizes,
  speed = 0.75,
  priority = false,
}) {
  const container = useRef(null)
  const inner = useRef(null)
  const { height: winH, width: winW } = useWindowSize()

  useEffect(() => {
    const el = inner.current
    if (!el || !container.current) return

    // reset
    gsap.set(el, { y: 0 })

    // breakpoints
    const bp = parseInt(theme('screens.sm').replace('px', ''), 10)
    const isMobile = winW <= bp
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (isMobile || reduceMotion) return

    const yOffset = winH * speed * 0.1

    const tl = gsap.fromTo(
      el,
      { y: -yOffset },
      {
        y: yOffset,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
          invalidateOnRefresh: true,
        },
      },
    )

    // ensure ScrollTrigger has correct bounds after any DOM changes
    ScrollTrigger.refresh()

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [winH, winW, speed])

  return (
    <ParallaxContainer ref={container}>
      <Inner ref={inner}>
        <ParallaxImage
          src={src}
          alt={alt}
          sizes={sizes}
          fill
          style={{ transform: 'scale(1.2)' }}
          quality={100}
          priority={priority}
        />
      </Inner>
    </ParallaxContainer>
  )
}
