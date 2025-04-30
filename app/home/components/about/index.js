'use client'

import { useRef } from 'react'
import { Container, H2, H3, P, RenderMedia, splitText } from 'styles'
import {
  AboutSection,
  CardWrapper,
  GridWrapper,
  Overlay,
  TextWrapper,
} from './styles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const About = ({ data }) => {
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
          <H2>{splitText(data?.description)}</H2>
        </TextWrapper>

        <GridWrapper className="anim-grid">
          {data?.col?.map((_, index) => (
            <CardWrapper
              href={'/about'}
              key={index}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleLeave}
            >
              <Overlay>
                <H3>{splitText(_?.title)}</H3>
                <P>{_?.description}</P>
              </Overlay>
              <RenderMedia data={_?.media?.data?.attributes} />
            </CardWrapper>
          ))}
        </GridWrapper>
      </Container>
    </AboutSection>
  )
}

export default About
