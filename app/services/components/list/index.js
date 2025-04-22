'use client'

import { useRef } from 'react'
import { Container, CustomGrid, H1, H3, P, splitText } from 'styles'
import {
  CardTextWrapper,
  HollowCard,
  ListSection,
  ServiceButton,
  TextWrapper,
} from './styles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Icon } from 'components'

gsap.registerPlugin(useGSAP)

const TITLE = `Dental Implant
Services at RIC`
const DESCRIPTION = `At RIC, we’re here to give you your smile back with
the help of dental implants. Learn more when you
schedule your FREE consultation with a 3D scan.`
const SERVICES = [
  {
    name: 'Full Mouth Reconstruction',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    href: '/services/page',
  },
  {
    name: 'Single Tooth Dental Implants',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    href: '/services/page',
  },
  {
    name: 'Computer-Guided Implant Surgery',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    href: '/services/page',
  },
  {
    name: 'Zirconia Restored Dental Implants',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    href: '/services/page',
  },
  {
    name: 'Fixed-Removable Implant Dentures',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    href: '/services/page',
  },
  {
    name: 'Implant Overdentures',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    href: '/services/page',
  },
  {
    name: 'Crestal Approach Sinus Lift',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    href: '/services/page',
  },
  {
    name: 'In-House CBCT Scan Technology',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    href: '/services/page',
  },
]

export default function List() {
  const sectionEl = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 0.5 } })

      tl.from(
        gsap.utils.toArray('.anim-word'),
        {
          yPercent: 100,
          duration: 1.5,
          stagger: 0.02,
          opacity: 0,
          ease: 'power3.out',
        },
        0,
      ).from(
        gsap.utils.toArray('.anim-item'),
        {
          opacity: 0,
          yPercent: 100,
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
    <ListSection ref={sectionEl}>
      <Container>
        <TextWrapper>
          <H1>{splitText(TITLE)}</H1>
          <P>{splitText(DESCRIPTION)}</P>
        </TextWrapper>
        <CustomGrid>
          {SERVICES.map((service, index) => (
            <HollowCard key={index} href={service.href} className="anim-item">
              <CardTextWrapper>
                <H3>{service.name}</H3>
                <P>{service.text}</P>
              </CardTextWrapper>
              <ServiceButton>
                <P className="link-text">Read More</P>
                <Icon name="right-arrow" />
              </ServiceButton>
            </HollowCard>
          ))}
          <HollowCard className="anim-item" href={'/'} $custom>
            <CardTextWrapper>
              <H3>Request a Custom Service</H3>
              <P>
                Looking for a service that’s not here or have a question? Reach
                out and consult with one of our trained professionals.
              </P>
            </CardTextWrapper>
            <ServiceButton $custom>
              <P className="link-text">Contact</P>
              <Icon name="right-arrow" />
            </ServiceButton>
          </HollowCard>
        </CustomGrid>
      </Container>
    </ListSection>
  )
}
