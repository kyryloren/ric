'use client'

import { useRef } from 'react'
import { Container, H3, P, splitText } from 'styles'
import { Col, ColInfoWrapper, InfoSection } from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const TITLE1 = `25 Years
of Experience`
const TITLE2 = `Unique Science-
Based Care`
const TITLE3 = `Outcomes, Not
Quotas`

const TEXT1 = `Our clinical team is led by renowned
clinicians.`
const TEXT2 = `We’re a leader in implant technology.
We take advantage of all the latest research.`
const TEXT3 = `We prioritize your health and confidence,
and recommend only the care you need.`

const Info = () => {
  const sectionEl = useRef()

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
          duration: 1.5,
        },
        0.3,
      )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <InfoSection ref={sectionEl}>
      <Container>
        <ColInfoWrapper className="anim-wrapper">
          <Col>
            <H3>{splitText(TITLE1)}</H3>
            <P>{splitText(TEXT1)}</P>
          </Col>
          <Col>
            <H3>{splitText(TITLE2)}</H3>
            <P>{splitText(TEXT2)}</P>
          </Col>
          <Col>
            <H3>{splitText(TITLE3)}</H3>
            <P>{splitText(TEXT3)}</P>
          </Col>
        </ColInfoWrapper>
      </Container>
    </InfoSection>
  )
}

export default Info
