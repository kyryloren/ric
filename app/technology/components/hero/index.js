'use client'

import { useRef } from 'react'
import { Container, H1, P, splitText } from 'styles'
import { HeroSection, ImageWrapper, TextWrapper } from './styles'
import { CustomImage } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const TITLE = `State-of-the-Art\nRobotic Assisted Care`
const DESCRIPTION = `Our cutting-edge technology allows for an\nincredibly efficient, accurate, and minimally\ninvasive experience for our patients.`

const Hero = () => {
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
        '.anim-image',
        {
          yPercent: 10,
          opacity: 0,
          duration: 1,
        },
        0.75,
      )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <HeroSection ref={sectionEl}>
      <Container>
        <TextWrapper>
          <H1>{splitText(TITLE)}</H1>
          <P className="description">{splitText(DESCRIPTION)}</P>
        </TextWrapper>

        <ImageWrapper className="anim-image">
          <CustomImage src={'/tech.webp'} alt={'Yomi Robot'} />
        </ImageWrapper>
      </Container>
    </HeroSection>
  )
}

export default Hero
