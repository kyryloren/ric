'use client'

import { Container, H2, H3, P } from 'styles'
import {
  AboutSection,
  CardWrapper,
  CustomVideo,
  GridWrapper,
  Overlay,
  TextWrapper,
} from './styles'
import { Parallax, RevealText } from 'components'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const TEXT = `We are pioneering the future of precision dentistry, utilizing cutting-edge robotic technology to deliver faster, safer, and more personalized dental implants.`

const CARDS = [
  {
    src: '/doctors.webm',
    href: '/',
    title: `Our Doctors,\nPractice, & History`,
  },
  {
    src: '/technology.webm',
    href: '/',
    title: `Our Latest\nTechnology`,
  },
]

const About = () => {
  const gridRel = useRef(null)
  const { contextSafe } = useGSAP({ scope: gridRel })

  const handleMouseEnter = contextSafe((hoveredNum) => {
    for (let i = 1; i <= 2; i++) {
      gsap.to(gridRel.current, {
        [`--fr-value-${i}`]: hoveredNum === i ? '3fr' : '2fr',
        duration: 1,
        ease: 'power4.out',
      })
    }
  })

  const handleLeave = () => handleMouseEnter(null)

  return (
    <AboutSection>
      <Container>
        <TextWrapper>
          <RevealText text={TEXT} el={H2} scroll={true} />
        </TextWrapper>

        <GridWrapper ref={gridRel}>
          {CARDS.map((info, index) => (
            <CardWrapper
              href={info.href}
              key={index}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleLeave}
            >
              <Overlay>
                <H3>
                  {info.title.split('\n').map((line, lineIndex) => (
                    <div key={lineIndex}>{line}</div>
                  ))}
                </H3>
                <P>Learn More</P>
              </Overlay>
              <Parallax trigger={gridRel}>
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
