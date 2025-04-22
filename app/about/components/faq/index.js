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

const TITLE = `Frequently 
Asked Quesitons`
const DESCRIPTION = `Getting dental implants is a big decision.
We're here for you every step of the way.`
const FAQ_ITEMS = [
  {
    question: 'What are dental implants?',
    answer:
      'Dental implants are titanium posts that are surgically positioned into the jawbone beneath your gums to replace missing tooth roots. Once in place, they allow your dentist to mount replacement teeth onto them.',
  },
  {
    question: 'How long do dental implants last?',
    answer:
      'With proper care and maintenance, dental implants can last a lifetime. Regular dental check-ups, good oral hygiene, and avoiding habits like smoking can significantly extend their lifespan.',
  },
  {
    question: 'Is the implant procedure painful?',
    answer:
      "The procedure is typically performed under local anesthesia, so you shouldn't feel pain during the surgery. Some discomfort may occur during the healing process, which can be managed with prescribed medications.",
  },
  {
    question: 'How long is the recovery period?',
    answer:
      'Recovery time varies by individual, but most patients can return to normal activities within 1-2 days. Complete healing and osseointegration (when the implant fuses with the jawbone) typically takes 3-6 months.',
  },
  {
    question: 'Are dental implants covered by insurance?',
    answer:
      'Coverage varies by insurance plan. Some plans cover a portion of the cost, while others may not cover implants at all. We recommend checking with your insurance provider for specific details.',
  },
  {
    question: 'What are the benefits of dental implants?',
    answer:
      "Dental implants provide a permanent solution for missing teeth, improve appearance, restore chewing ability, prevent bone loss, and maintain facial structure. They also don't require adjacent teeth to be modified, unlike bridges.",
  },
  {
    question: 'Who is a good candidate for dental implants?',
    answer:
      'Most adults in good general health with adequate bone density are candidates for dental implants. Factors like smoking, certain medical conditions, or insufficient bone may affect eligibility, but many of these can be addressed.',
  },
  {
    question: 'How do I care for my dental implants?',
    answer:
      'Care for implants like natural teeth with regular brushing, flossing, and professional cleanings. Avoid tobacco products and maintain regular dental check-ups to ensure long-term success.',
  },
]

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

export default function FAQ() {
  const sectionEl = useRef(null)
  const [expanded, setExpanded] = useState(0)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom',
        },
        defaults: { ease: 'power3.out' },
      })

      tl.from(gsap.utils.toArray('.anim-word'), {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.02,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3,
      })
        .from(
          '.anim-button',
          {
            scale: 0,
            duration: 1,
            ease: 'power3.out',
          },
          0,
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
          0.5,
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
            <CustomButton className="anim-button" $primary $internal href={'/'}>
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
