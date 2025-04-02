'use client'

import { Container, CustomGrid, H2, H4, P } from 'styles'
import {
  ServiceButton,
  ServicesCol,
  ServicesSection,
  TextWrapper,
} from './styles'
import { CustomButton, Icon, RevealButton, RevealText } from 'components'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const TITLE = `We Simply
Deliver More`
const DESCRIPTION = `Getting dental implants is a big decision.
We’re here for you every step of the way.`
const SERVICES = [
  {
    name: 'Full Mouth Reconstruction',
    href: '/',
  },
  {
    name: 'Single Tooth Dental Implants',
    href: '/',
  },
  {
    name: 'Computer-Guided Implant Surgery',
    href: '/',
  },
  {
    name: 'Zirconia Restored Dental Implants',
    href: '/',
  },
  {
    name: 'Fixed-Removable Implant Dentures',
    href: '/',
  },
  {
    name: 'Implant Overdentures',
    href: '/',
  },
  {
    name: 'Crestal Approach Sinus Lift',
    href: '/',
  },
  {
    name: 'In-House CBCT Scan Technology',
    href: '/',
  },
]

const Services = () => {
  const sectionEl = useRef(null)
  const servicesEl = useRef([])

  useGSAP(
    () => {
      gsap.from(servicesEl.current, {
        yPercent: 100,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom',
        },
      })
    },
    { dependencies: [servicesEl, sectionEl] },
  )

  useGSAP(() => {})
  return (
    <ServicesSection ref={sectionEl}>
      <Container>
        <CustomGrid>
          <TextWrapper>
            <RevealText el={H2} text={TITLE} scroll />
            <RevealText el={P} text={DESCRIPTION} scroll />
            <RevealButton
              buttons={[
                <CustomButton $primary $internal href={'/'}>
                  Book Now
                </CustomButton>,
              ]}
              scroll
            />
          </TextWrapper>

          <ServicesCol>
            {SERVICES.map((service, index) => (
              <ServiceButton
                key={index}
                href={service.href}
                ref={(el) => servicesEl.current.push(el)}
              >
                <H4 className="text">{service.name}</H4>
                <Icon name="right-arrow" />
              </ServiceButton>
            ))}
          </ServicesCol>
        </CustomGrid>
      </Container>
    </ServicesSection>
  )
}

export default Services
