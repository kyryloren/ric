'use client'

import { Container, H1, P } from 'styles'
import { ButtonsWrapper, CustomVideo, HeroSection, TextWrapper } from './styles'
import { CustomButton, RevealButton, RevealText } from 'components'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TITLE = `Get the Perfect\nSmile You Deserve`
const DESCRIPTION = `We specialize in advanced dental implants using\ncutting-edge robotic technology, making the procedure\nsafer, more precise, and less stressful than ever before.`

const Hero = () => {
  const imageEl = useRef(null)

  useGSAP(
    () => {
      gsap.from(imageEl.current, {
        yPercent: 10,
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
        delay: 1.5,
      })
    },
    { dependencies: [imageEl] },
  )

  return (
    <HeroSection>
      <Container>
        <TextWrapper>
          <RevealText el={H1} text={TITLE} stagger={0.04} delay={1} />
          <RevealText el={P} text={DESCRIPTION} stagger={0.02} delay={1} />
          <ButtonsWrapper>
            <RevealButton
              delay={1.5}
              buttons={[
                <CustomButton $primary $internal href={'/'}>
                  Book Now
                </CustomButton>,
                <CustomButton $secondary $internal href={'/'}>
                  Call Now
                </CustomButton>,
              ]}
            />
          </ButtonsWrapper>
        </TextWrapper>

        <CustomVideo ref={imageEl} playsInline autoPlay muted loop>
          <source src="/hero.webm" />
        </CustomVideo>
      </Container>
    </HeroSection>
  )
}

export default Hero
