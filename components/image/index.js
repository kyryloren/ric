'use client'

import { useRef } from 'react'
import Image from 'next/image'
import tw, { styled, theme } from 'twin.macro'
import { useWindowSize } from 'react-use'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ParallaxContainer = styled.div`
  ${tw`relative w-full h-full overflow-hidden [border-radius:10px]`}
`

const Inner = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full will-change-transform`}
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
  parallax = true,
}) {
  const container = useRef(null)
  const inner = useRef(null)
  const { height: winH } = useWindowSize()

  useGSAP(
    () => {
      let mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: `(min-width: ` + theme`screens.sm` + `)`,
          isMobile: ScrollTrigger.isTouch === 1,
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions
          const yOffset = winH * speed * 0.1

          if (isDesktop && !isMobile && parallax) {
            gsap.fromTo(
              inner.current,
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
          }
        },
      )
    },
    { dependencies: [container, winH, speed, inner], scope: container },
  )

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
