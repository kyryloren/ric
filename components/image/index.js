'use client'

import Image from 'next/image'
import tw, { styled, theme } from 'twin.macro'
import gsap from 'gsap'
import { useRef } from 'react'
import { useWindowSize } from 'react-use'
import { useGSAP } from '@gsap/react'

const ParallaxWrapper = styled.div`
  ${tw`absolute h-[inherit] w-[inherit] min-h-[inherit] overflow-hidden [border-radius: inherit]`}

  img {
    ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    ${tw`[border-radius: inherit] object-cover overflow-hidden`}
  }
`

export default function CustomImage({
  src,
  alt,
  sizes,
  speed = 0.75,
  priority = false,
}) {
  const target = useRef(null)

  const { height: windowWidth } = useWindowSize()
  const y = windowWidth * speed * 0.1

  useGSAP(() => {
    // create a matchMedia instance
    const mm = gsap.matchMedia()

    mm.add(
      {
        // these conditions will be matched by GSAP
        reduceMotion: '(prefers-reduced-motion: reduce)',
        mobile: `(max-width: ${theme`screens.sm`})`,
      },
      (context) => {
        const { reduceMotion, mobile } = context.conditions

        console.log(mobile)

        // If the user prefers reduced motion or we are on mobile,
        // do not initialize the parallax animation.
        if (reduceMotion || mobile) {
          // Optionally, reset any transforms
          gsap.set(target.current, { y: 0 })
          return
        }

        // Otherwise, create the timeline with scrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: target.current,
            scrub: true,
            start: 'top bottom',
            end: 'bottom top',
          },
        })

        tl.fromTo(target.current, { y: -y }, { y: y, ease: 'none' })
      },
    )

    // cleanup
    return () => mm.revert()
  }, [windowWidth])

  return (
    <ParallaxWrapper>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        fill
        style={{ transform: 'scale(1.2)' }}
        quality={100}
        ref={target}
        priority={priority}
      />
    </ParallaxWrapper>
  )
}
