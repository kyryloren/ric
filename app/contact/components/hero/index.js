'use client'

import { Container, H1, P, splitText } from 'styles'
import { HeroSection, TextWrapper } from './styles'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const TITLE = `Your New Smile is
One Step Away`
const DESCRIPTION = `We specialize in advanced dental implants using\ncutting-edge robotic technology, making the procedure\nsafer, more precise, and less stressful than ever before.`

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
        <TextWrapper>
          <H1>{splitText(TITLE)}</H1>
          <P>{splitText(DESCRIPTION)}</P>
        </TextWrapper>
      </Container>
    </HeroSection>
  )
}
