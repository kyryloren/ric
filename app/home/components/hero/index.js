'use client'

import { useContext, useRef } from 'react'
import { Container, H1, P, RenderMedia, splitText } from 'styles'
import {
  ButtonsWrapper,
  VideoWrapper,
  HeroSection,
  TextWrapper,
} from './styles'
import { CustomButton } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { GlobalAPIContext } from 'context'

gsap.registerPlugin(useGSAP)

const Hero = ({ data }) => {
  const sectionEl = useRef(null)

  const headerData = data?.hero_header
  const globalData = useContext(GlobalAPIContext)

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
    <HeroSection id="hero" ref={sectionEl}>
      <Container>
        <TextWrapper>
          <H1>{splitText(headerData?.title)}</H1>
          <P className="description">{splitText(headerData?.description)}</P>
          <ButtonsWrapper>
            {headerData?.book && (
              <CustomButton className="anim-button" $primary href={'/book'}>
                Book Now
              </CustomButton>
            )}
            {headerData?.call && (
              <CustomButton
                className="anim-button"
                $secondary
                href={`tel:${globalData?.contact?.phone}`}
              >
                Call Now
              </CustomButton>
            )}
          </ButtonsWrapper>
        </TextWrapper>

        <VideoWrapper className="anim-video">
          <RenderMedia data={data?.hero_media?.data?.attributes} />
        </VideoWrapper>
      </Container>
    </HeroSection>
  )
}

export default Hero
