'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import tw from 'twin.macro'

gsap.registerPlugin(ScrollTrigger)

const AnimButtonWrapper = tw.span`
  relative inline-block w-fit
`

const GSAP_CONFIG = {
  scale: 0,
  duration: 1,
  ease: 'power3.out',
}

export default function RevealButton({
  buttons,
  config = GSAP_CONFIG,
  delay = 0,
  stagger = true,
  scroll = false,
  ...props
}) {
  const buttonsEl = useRef([])

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: scroll
          ? {
              trigger: buttonsEl.current[0],
              start: 'top bottom',
            }
          : null,
      })

      tl.from(buttonsEl.current, {
        ...config,
        delay: scroll ? 0.25 : delay,
        stagger: stagger,
      })
    },
    { dependencies: [buttonsEl] },
  )

  return (
    <>
      {buttons.map((button, index) => (
        <AnimButtonWrapper
          key={index}
          ref={(el) => buttonsEl.current.push(el)}
          {...props}
        >
          {button}
        </AnimButtonWrapper>
      ))}
    </>
  )
}
