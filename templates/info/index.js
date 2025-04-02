'use client'

import { useRef } from 'react'
import { Container, H3, P } from 'styles'
import { Col, ColInfoWrapper, InfoSection } from './styles'
import { RevealText } from 'components'
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
      gsap.to(sectionEl.current, {
        '--width': '100%',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom',
        },
      })
    },
    { dependencies: [sectionEl] },
  )

  return (
    <InfoSection>
      <Container>
        <ColInfoWrapper ref={sectionEl}>
          <Col>
            <RevealText el={H3} text={TITLE1} scroll />
            <RevealText el={P} text={TEXT1} scroll />
          </Col>
          <Col>
            <RevealText el={H3} text={TITLE2} scroll />
            <RevealText el={P} text={TEXT2} scroll />
          </Col>
          <Col>
            <RevealText el={H3} text={TITLE3} scroll />
            <RevealText el={P} text={TEXT3} scroll />
          </Col>
        </ColInfoWrapper>
      </Container>
    </InfoSection>
  )
}

export default Info
