'use client'

import { useRef } from 'react'
import { Container } from 'styles'
import { HeroSection } from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CustomHeader } from 'components'

gsap.registerPlugin(useGSAP)

const TITLE = `Your New Smile is
One Step Away`

export default function Hero() {
  const sectionEl = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 0.5 } })

      tl.from(gsap.utils.toArray('.anim-word'), {
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.02,
      })
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <HeroSection ref={sectionEl}>
      <Container>
        <CustomHeader title={TITLE} padded />
      </Container>
    </HeroSection>
  )
}
