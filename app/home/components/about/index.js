'use client'

import { useRef } from 'react'
import { Container, H2, H3, P, splitText } from 'styles'
import {
  AboutSection,
  CardWrapper,
  CustomVideo,
  GridWrapper,
  Overlay,
  TextWrapper,
} from './styles'
import { Parallax } from 'components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const TEXT = `We are pioneering the future of precision dentistry, utilizing cutting-edge robotic technology to deliver faster, safer, and more personalized dental implants.`

const CARDS = [
  {
    src: '/doctors.webm',
    href: '/about',
    title: `Our Doctors,\nPractice, & History`,
  },
  {
    src: '/technology.webm',
    href: '/technology',
    title: `Our Latest\nTechnology`,
  },
]

const About = () => {
  const sectionEl = useRef(null)
  const { contextSafe } = useGSAP({ scope: sectionEl })

  const handleMouseEnter = contextSafe((hoveredNum) => {
    for (let i = 1; i <= 2; i++) {
      gsap.to('.anim-grid', {
        [`--fr-value-${i}`]: hoveredNum === i ? '3fr' : '2fr',
        duration: 1,
        ease: 'power3.out',
      })
    }
  })

  const handleLeave = () => handleMouseEnter(null)

  useGSAP(
    () => {
      gsap.from(gsap.utils.toArray('.anim-word'), {
        yPercent: 100,
        ease: 'power3.out',
        duration: 1.5,
        delay: 0.3,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom',
        },
      })
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <AboutSection ref={sectionEl}>
      <Container>
        <TextWrapper>
          <H2>{splitText(TEXT)}</H2>
        </TextWrapper>

        <GridWrapper className="anim-grid">
          {CARDS.map((info, index) => (
            <CardWrapper
              href={info.href}
              key={index}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleLeave}
            >
              <Overlay>
                <H3>{splitText(info.title)}</H3>
                <P>Learn More</P>
              </Overlay>
              <Parallax trigger={sectionEl}>
                <CustomVideo autoPlay loop muted playsInline>
                  <source src={info.src} type="video/webm" />
                </CustomVideo>
              </Parallax>
            </CardWrapper>
          ))}
        </GridWrapper>
      </Container>
    </AboutSection>
  )
}

export default About
