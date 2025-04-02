'use client'

import Image from 'next/image'
import tw, { styled } from 'twin.macro'
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
  blur,
  speed = 1,
  priority = false,
}) {
  const target = useRef()

  const { height: windowWidth } = useWindowSize()
  const y = windowWidth * speed * 0.1

  useGSAP(
    () => {
      let mm = gsap.matchMedia()
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: target.current,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
        },
      })

      tl.fromTo(target.current, { y: -y }, { y: y, ease: 'none' })

      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduceMotion } = context.conditions

          if (reduceMotion) {
            tl?.current?.from(target.current, { y: 0 })
            tl?.current?.kill()
          }
        },
      )
    },
    { dependencies: [target, windowWidth] },
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
