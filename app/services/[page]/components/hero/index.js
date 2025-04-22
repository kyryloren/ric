'use client'

import { useEffect, useRef } from 'react'
import { Container, H1, P, splitText } from 'styles'
import {
  BackButton,
  ButtonWrapper,
  GridWrapper,
  HeroSection,
  ImageWrapper,
  ParagraphWrapper,
  RightCol,
  TextWrapper,
} from './syles'
import { CustomButton, CustomImage, Icon } from 'components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'

gsap.registerPlugin(useGSAP)

export default function Hero() {
  const sectionEl = useRef(null)
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0)
    }
  }, [lenis])

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { delay: 0.5, ease: 'power3.out' } })

      tl.from(
        gsap.utils.toArray('.anim-word'),
        {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.02,
        },
        0,
      )
        .from('.back-button', { opacity: 0 }, 0)
        .from(
          gsap.utils.toArray('.anim-button'),
          {
            scale: 0,
            stagger: 0.02,
            duration: 1,
          },
          0.5,
        )
        .from(
          '.anim-image',
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          0.5,
        )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <HeroSection ref={sectionEl}>
      <Container>
        <GridWrapper>
          <ImageWrapper className="anim-image">
            <CustomImage src={'/1.webp'} alt={'Image ALT tag'} />
          </ImageWrapper>

          <RightCol>
            <BackButton className="back-button" href={'/services'}>
              <Icon name="left-arrow" />
              <P>Back to all services</P>
            </BackButton>
            <TextWrapper>
              <H1>{splitText(`Fixed-Removable Implant Dentures`)}</H1>
              <ParagraphWrapper>
                <P>
                  {splitText(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                  )}
                </P>
              </ParagraphWrapper>
              <ButtonWrapper>
                <CustomButton
                  className="anim-button primary"
                  $primary
                  href={'/'}
                >
                  Schedule Free Consultation
                </CustomButton>
                <CustomButton
                  className="anim-button secondary"
                  $secondary
                  href="/"
                >
                  Call Now
                </CustomButton>
              </ButtonWrapper>
            </TextWrapper>
          </RightCol>
        </GridWrapper>
      </Container>
    </HeroSection>
  )
}
