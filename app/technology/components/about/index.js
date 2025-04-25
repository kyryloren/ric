'use client'

import { useRef } from 'react'
import { Container, H2, H3, P, splitText } from 'styles'
import { AboutSection, Col, ColInfoWrapper, TextWrapper } from './styles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const TITLE = `Staten Island’s First Robotically\nAssisted Dental Implant`
const ITEMS = [
  {
    title: '± 0.2mm',
    text: 'Our clinical team is led by renowned clinicians.',
  },
  {
    title: '50% Faster',
    text: 'We’re a leader in implant technology. We take advantage of all the latest research.',
  },
  {
    title: '50% Faster',
    text: 'We prioritize your health and confidence, and recommend only the care you need.',
  },
  {
    title: '± 0.2mm',
    text: 'Our clinical team is led by renowned clinicians.',
  },
  {
    title: '50% Faster',
    text: 'We’re a leader in implant technology. We take advantage of all the latest research.',
  },
  {
    title: '50% Faster',
    text: 'We prioritize your health and confidence, and recommend only the care you need.',
  },
]

export default function About() {
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
          <H2>{splitText(TITLE)}</H2>
        </TextWrapper>

        <ColInfoWrapper className="anim-wrapper">
          {ITEMS.map((item, index) => (
            <Col key={index}>
              <H3>{splitText(item.title)}</H3>
              <P>{splitText(item.text)}</P>
            </Col>
          ))}
        </ColInfoWrapper>
      </Container>
    </AboutSection>
  )
}
