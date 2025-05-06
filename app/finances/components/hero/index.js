'use client'

import { useRef } from 'react'
import { Container, RenderMedia } from 'styles'
import { HeroSection, ImageWrapper } from './styles'
import { CustomHeader, CustomImage, Marquee } from 'components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function Hero({ data }) {
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
          '.anim-image',
          {
            yPercent: 10,
            opacity: 0,
            duration: 1,
            stagger: 0.02,
          },
          0.75,
        )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  console.log(data)

  return (
    <HeroSection id="hero" ref={sectionEl}>
      <Container>
        <CustomHeader
          title={headerData?.title}
          description={headerData?.description}
          book={headerData?.book}
          call={headerData?.call}
          buttons={headerData?.button}
          padded
          center
        />
      </Container>

      <Marquee duration={10}>
        {data?.reel?.data?.map((_, index) => (
          <ImageWrapper key={index} className="anim-image">
            <RenderMedia
              data={_?.attributes}
              priority={true}
              parallax={false}
            />
          </ImageWrapper>
        ))}
      </Marquee>
    </HeroSection>
  )
}
