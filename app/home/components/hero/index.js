'use client'

import { useRef } from 'react'
import { Container, RenderMedia } from 'styles'
import { VideoWrapper, HeroSection } from './styles'
import { CustomHeader } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const Hero = ({ data }) => {
  const sectionEl = useRef(null)

  const headerData = data?.hero_header

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
        <CustomHeader
          title={headerData?.title}
          description={headerData?.description}
          book={headerData?.book}
          call={headerData?.call}
          buttons={headerData?.button}
          center
          padded
        />

        <VideoWrapper className="anim-video">
          <RenderMedia
            data={data?.hero_media?.data?.attributes}
            fallback={{
              url: '/hero.webp',
              alternativeText: 'Robotic Implant Center',
            }}
          />
        </VideoWrapper>
      </Container>
    </HeroSection>
  )
}

export default Hero
