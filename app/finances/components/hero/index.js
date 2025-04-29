'use client'

import { useRef } from 'react'
import { Container, H1, P, splitText } from 'styles'
import {
  HeroSection,
  ImageFour,
  ImageOne,
  ImageThree,
  ImageTwo,
  TextWrapper,
} from './styles'
import { CustomButton, CustomImage, Marquee, Parallax } from 'components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const TEXT = `Happier Smiles
at Happier Prices`
const DESCRIPTION = `We work with third-party financiers to help you afford dental
implants.​ Learn more about our dental implant costs and treatment
options when you attend your FREE consultation with a 3D scan.`

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
        <TextWrapper>
          <H1>{splitText(TEXT)}</H1>
          <P className="description">{splitText(DESCRIPTION)}</P>
          <CustomButton className="anim-button" $primary href={'/book'}>
            Book Now
          </CustomButton>
        </TextWrapper>
      </Container>

      <Marquee duration={10}>
        <ImageOne className="anim-image">
          <CustomImage
            priority={true}
            src={'/teeth.webp'}
            alt={'Teeth'}
            parallax={false}
          />
        </ImageOne>
        <ImageThree className="anim-image">
          <CustomImage
            priority={true}
            src={'/1.webp'}
            alt={'Dr. Pedro'}
            parallax={false}
          />
        </ImageThree>
        <ImageTwo className="anim-image">
          <CustomImage
            priority={true}
            src={'/2.webp'}
            alt={'Awards'}
            parallax={false}
          />
        </ImageTwo>
        <ImageFour className="anim-image">
          <CustomImage
            priority={true}
            src={'/tech.webp'}
            alt={'Tech'}
            parallax={false}
          />
        </ImageFour>
      </Marquee>
    </HeroSection>
  )
}
