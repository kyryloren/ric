'use client'

import { useRef } from 'react'
import { Container } from 'styles'
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
        <ImageWrapper className="anim-image">
          <CustomImage
            priority={true}
            src={'/teeth.webp'}
            alt={'Teeth'}
            parallax={false}
          />
        </ImageWrapper>
        <ImageWrapper className="anim-image">
          <CustomImage
            priority={true}
            src={'/1.webp'}
            alt={'Dr. Pedro'}
            parallax={false}
          />
        </ImageWrapper>
        <ImageWrapper className="anim-image">
          <CustomImage
            priority={true}
            src={'/2.webp'}
            alt={'Awards'}
            parallax={false}
          />
        </ImageWrapper>
        <ImageWrapper className="anim-image">
          <CustomImage
            priority={true}
            src={'/tech.webp'}
            alt={'Tech'}
            parallax={false}
          />
        </ImageWrapper>
      </Marquee>
    </HeroSection>
  )
}
