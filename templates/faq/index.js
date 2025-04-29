'use client'

import { useRef, useState } from 'react'
import { Container, CustomGrid, H2, H4, P, splitText } from 'styles'
import {
  AccordionCol,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemIconLine,
  AccordionItemIconWrapper,
  AccordionItemWrapper,
  FAQSection,
  TextWrapper,
} from './styles'
import { CustomButton } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function AccordionItem({ data, id, expanded, setExpanded, className }) {
  const accordionItemEl = useRef()
  const [hovered, setHovered] = useState(false)

  const isActive = id === expanded

  useGSAP(
    () => {
      gsap.set('.anim-line1', { rotate: 45, translateX: '35%' })
      gsap.set('.anim-line2', { rotate: -45 })
      gsap.set('.anim-content', { height: 0 })
    },
    { dependencies: [accordionItemEl], scope: accordionItemEl },
  )

  useGSAP(
    () => {
      if (isActive) {
        gsap.to('.anim-line1', {
          rotate: 0,
          duration: 0.75,
          ease: 'power3.out',
        })
        gsap.to('.anim-line2', {
          rotate: 0,
          duration: 0.75,
          ease: 'power3.out',
        })
        gsap.to('.anim-content', {
          height: 'auto',
          marginBottom: '2vw',
          duration: 0.75,
          ease: 'power3.out',
        })
      } else {
        gsap.to('.anim-line1', {
          rotate: 45,
          duration: 0.75,
          ease: 'power3.out',
        })
        gsap.to('.anim-line2', {
          rotate: -45,
          duration: 0.75,
          ease: 'power3.out',
        })
        gsap.to('.anim-content', {
          height: 0,
          duration: 0.75,
          marginBottom: 0,
          ease: 'power3.out',
        })
      }
    },
    { dependencies: [isActive], scope: accordionItemEl },
  )

  return (
    <AccordionItemWrapper ref={accordionItemEl} className={className}>
      <AccordionItemHeader
        onClick={() => setExpanded(isActive ? false : id)}
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}
        $active={isActive}
      >
        <H4>{data?.question}</H4>
        <AccordionItemIconWrapper>
          <AccordionItemIconLine className="anim-line1" />
          <AccordionItemIconLine className="anim-line2" />
        </AccordionItemIconWrapper>
      </AccordionItemHeader>

      <AccordionItemContent className="anim-content">
        <P>{data?.answer}</P>
      </AccordionItemContent>
    </AccordionItemWrapper>
  )
}

export default function FAQ({ TITLE, DESCRIPTION, FAQ_ITEMS }) {
  const sectionEl = useRef(null)
  const [expanded, setExpanded] = useState(0)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom',
        },
        defaults: { ease: 'power3.out', delay: 0.3 },
      })

      tl.from(gsap.utils.toArray('.anim-word'), {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.02,
        opacity: 0,
        ease: 'power3.out',
      })
        .from(
          '.anim-button',
          {
            scale: 0,
            duration: 1,
            ease: 'power3.out',
          },
          0.5,
        )
        .from(
          gsap.utils.toArray('.anim-item'),
          {
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
          },
          0.75,
        )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <FAQSection id="faq" ref={sectionEl}>
      <Container>
        <CustomGrid>
          <TextWrapper>
            <H2>{splitText(TITLE)}</H2>
            <P>{splitText(DESCRIPTION)}</P>
            <CustomButton className="anim-button" $primary href={'/book'}>
              Book Now
            </CustomButton>
          </TextWrapper>

          <AccordionCol>
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                data={item}
                id={index}
                expanded={expanded}
                setExpanded={setExpanded}
                className="anim-item"
              />
            ))}
          </AccordionCol>
        </CustomGrid>
      </Container>
    </FAQSection>
  )
}
