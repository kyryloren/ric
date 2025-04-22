'use client'

import { useRef } from 'react'
import { Container, H1, P, splitText } from 'styles'
import { ButtonsWrapper, CustomVideo, HeroSection, TextWrapper } from './styles'
import { CustomButton } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const TITLE = `Get the Perfect\nSmile You Deserve`
const DESCRIPTION = `We specialize in advanced dental implants using\ncutting-edge robotic technology, making the procedure\nsafer, more precise, and less stressful than ever before.`

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
      })
        .from(
          '.anim-button',
          {
            scale: 0,
            duration: 1,
          },
          0.5,
        )
        .from(
          '.anim-video',
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
          <ButtonsWrapper>
            <CustomButton className="anim-button" $primary href={'/'}>
              Book Now
            </CustomButton>
            <CustomButton className="anim-button" $secondary href={'/'}>
              Call Now
            </CustomButton>
          </ButtonsWrapper>
        </TextWrapper>

        <CustomVideo className="anim-video" playsInline autoPlay muted loop>
          <source src="/hero.webm" />
        </CustomVideo>
      </Container>
    </HeroSection>
  )
}

export default Hero
