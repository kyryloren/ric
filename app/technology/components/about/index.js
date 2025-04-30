'use client'

import { useRef } from 'react'
import { Container, H2, H3, P, splitText } from 'styles'
import { AboutSection, Col, ColInfoWrapper, TextWrapper } from './styles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function About({ data }) {
  const sectionEl = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom',
        },
        defaults: { ease: 'power3.out', delay: 0.3 },
      })

      tl.to(
        '.anim-wrapper',
        {
          '--width': '100%',
          duration: 1,
        },
        0,
      ).from(
        gsap.utils.toArray('.anim-word'),
        {
          yPercent: 100,
          opacity: 0,
          duration: 1.5,
          stagger: 0.02,
        },
        0.3,
      )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <AboutSection ref={sectionEl}>
      <Container>
        <TextWrapper>
          <H2>{splitText(data?.info_col_title)}</H2>
        </TextWrapper>

        <ColInfoWrapper className="anim-wrapper">
          {data?.info_col?.map((_, index) => (
            <Col key={index}>
              <H3>{splitText(_?.title)}</H3>
              <P>{splitText(_?.description)}</P>
            </Col>
          ))}
        </ColInfoWrapper>
      </Container>
    </AboutSection>
  )
}
