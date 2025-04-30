'use client'

import { useEffect, useRef } from 'react'
import { Container, P, RenderMedia } from 'styles'
import {
  BackButton,
  GridWrapper,
  HeroSection,
  ImageWrapper,
  RightCol,
} from './syles'
import { CustomHeader, Icon } from 'components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'

gsap.registerPlugin(useGSAP)

export default function Hero({ data }) {
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
            <RenderMedia data={data?.media?.data?.attributes} />
          </ImageWrapper>

          <RightCol>
            <BackButton className="back-button" href={'/services'}>
              <Icon name="left-arrow" />
              <P>Back to all services</P>
            </BackButton>

            <CustomHeader
              title={data?.name}
              description={data?.long_description}
              center={false}
              book
              call
            />
          </RightCol>
        </GridWrapper>
      </Container>
    </HeroSection>
  )
}
