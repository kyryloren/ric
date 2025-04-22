'use client'

import { useRef } from 'react'
import { Container, CustomGrid, H2, H4, P, splitText } from 'styles'
import {
  AllServicesButton,
  ServiceButton,
  ServicesCol,
  ServicesSection,
  TextWrapper,
} from './styles'
import { CustomButton, Icon } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const TITLE = `We Simply
Deliver More`
const DESCRIPTION = `Getting dental implants is a big decision.
We’re here for you every step of the way.`
const SERVICES = [
  { name: 'Full Mouth Reconstruction', href: '/' },
  { name: 'Single Tooth Dental Implants', href: '/' },
  { name: 'Computer-Guided Implant Surgery', href: '/' },
  { name: 'Zirconia Restored Dental Implants', href: '/' },
  { name: 'Fixed-Removable Implant Dentures', href: '/' },
  { name: 'Implant Overdentures', href: '/' },
  { name: 'Crestal Approach Sinus Lift', href: '/' },
  { name: 'In-House CBCT Scan Technology', href: '/' },
]

const Services = () => {
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
          gsap.utils.toArray('.list-anim'),
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
    <ServicesSection ref={sectionEl}>
      <Container>
        <CustomGrid>
          <TextWrapper>
            <H2>{splitText(TITLE)}</H2>
            <P>{splitText(DESCRIPTION)}</P>
            <CustomButton className="anim-button" $primary $internal href={'/'}>
              Book Now
            </CustomButton>
          </TextWrapper>
          <ServicesCol>
            {SERVICES.map((service, index) => (
              <ServiceButton
                key={index}
                href={service.href}
                className="list-anim"
              >
                <H4 className="text">{service.name}</H4>
                <Icon name="right-arrow" />
              </ServiceButton>
            ))}
            <AllServicesButton className="list-anim" href="/services">
              <H4 className="text">View All Services</H4>
              <Icon name="right-arrow" />
            </AllServicesButton>
          </ServicesCol>
        </CustomGrid>
      </Container>
    </ServicesSection>
  )
}

export default Services
