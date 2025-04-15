'use client'

import Image from 'next/image'
import tw, { styled, theme } from 'twin.macro'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useWindowSize } from 'react-use'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

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
  const timeline = useRef()

  const { height: windowHeight } = useWindowSize()
  const y = windowHeight * speed * 0.1

  useEffect(() => {
    const y = windowHeight * speed * 0.1
    const mm = gsap.matchMedia()

    timeline.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: target.current,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
        },
      })
      .fromTo(target.current, { y: -y }, { y: y, ease: 'none' })

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
        mobile: `(max-width: ${theme`screens.sm`})`,
      },
      (context) => {
        const { reduceMotion, mobile } = context.conditions

        if (reduceMotion || mobile) {
          timeline?.current?.from(target.current, { y: 0 })
          timeline?.current?.kill()
        }
      },
    )

    return () => {
      timeline?.current?.kill()
    }
  }, [windowHeight])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          // these conditions will be matched by GSAP
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduceMotion } = context.conditions

          console.log(reduceMotion)
          if (reduceMotion) {
            // Optionally, reset any transforms
            gsap.set(target.current, { y: 0 })
            return
          }

          gsap.fromTo(
            target.current,
            { y: -y },
            {
              y: y,
              ease: 'none',
              scrollTrigger: {
                trigger: target.current,
                scrub: true,
                start: 'top bottom',
                end: 'bottom top',
              },
            },
          )
        },
      )

      // cleanup
      return () => mm.revert()
    },
    { dependencies: [y, target] },
  )

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
