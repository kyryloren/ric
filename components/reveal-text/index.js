'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import tw from 'twin.macro'

gsap.registerPlugin(ScrollTrigger)

const Overflow = tw.span`
  overflow-clip inline-block align-bottom [overflow-clip-margin: 4px]
`
const AnimWord = tw.span`
  relative inline-block
`

const GSAP_CONFIG = {
  yPercent: 100,
  duration: 1.5,
  ease: 'power3.out',
}

export default function RevealText({
  el,
  text,
  config = GSAP_CONFIG,
  delay = 0,
  stagger = true,
  scroll = false,
  ...props
}) {
  const Wrapper = el || 'span'
  const wordsEl = useRef([])
  const wrapperEl = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: scroll
          ? {
              trigger: wrapperEl.current,
              start: 'top bottom',
            }
          : null,
      })

      tl.from(wordsEl.current, {
        ...config,
        delay: scroll ? 0.25 : delay,
        stagger: stagger,
      })
    },
    { dependencies: [wordsEl] },
  )

  return (
    <Wrapper ref={wrapperEl} {...props}>
      {text.split('\n').map((paragraph, paraIndex) => (
        <span tw="block" key={paraIndex}>
          {paragraph.split(' ').map((word, wordIndex) => (
            <Overflow key={wordIndex}>
              <AnimWord ref={(el) => wordsEl.current.push(el)}>
                {word}&nbsp;
              </AnimWord>
            </Overflow>
          ))}
        </span>
      ))}
    </Wrapper>
  )
}
