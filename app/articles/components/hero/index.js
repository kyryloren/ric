'use client'

import { useRef } from 'react'
import { Container } from 'styles'
import { HeroSection } from './styles'
import { CustomHeader } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export default function Hero({ data }) {
  const sectionEl = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 0.5 } })

      tl.from(gsap.utils.toArray('.anim-word'), {
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.02,
      }).from(
        gsap.utils.toArray('.anim-button'),
        {
          scale: 0,
          duration: 1,
        },
        0.5,
      )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <HeroSection id="hero" ref={sectionEl}>
      <Container>
        <CustomHeader
          title={data?.title}
          description={data?.description}
          book={data?.book}
          call={data?.call}
          buttons={data?.button}
          center
          padded
        />
      </Container>
    </HeroSection>
  )
}
