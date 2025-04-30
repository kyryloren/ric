'use client'

import { useRef } from 'react'
import { Container, H3, P, splitText } from 'styles'
import { Col, ColInfoWrapper, InfoSection } from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Info = ({ data }) => {
  const sectionEl = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom',
        },
        defaults: { ease: 'power3.out' },
      })

      tl.to(
        '.anim-wrapper',
        {
          '--width': '100%',
          duration: 1,
          delay: 0.3,
        },
        0,
      ).from(
        gsap.utils.toArray('.anim-word'),
        {
          yPercent: 100,
          opacity: 0,
          duration: 1.5,
        },
        0.3,
      )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <InfoSection className="info-section" ref={sectionEl}>
      <Container>
        <ColInfoWrapper className="anim-wrapper">
          {data?.map((_, index) => (
            <Col key={index}>
              <H3>{splitText(_?.title)}</H3>
              <P>{splitText(_?.description)}</P>
            </Col>
          ))}
        </ColInfoWrapper>
      </Container>
    </InfoSection>
  )
}

export default Info
