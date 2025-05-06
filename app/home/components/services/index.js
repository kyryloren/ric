'use client'

import { useRef } from 'react'
import { Container, CustomGrid, H4 } from 'styles'
import {
  AllServicesButton,
  ServiceButton,
  ServicesCol,
  ServicesSection,
} from './styles'
import { CustomHeader, Icon } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Services = ({ data, services }) => {
  const sectionEl = useRef(null)
  const headerData = data?.services_header

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
          <CustomHeader
            title={headerData?.title}
            description={headerData?.description}
            book={headerData?.book}
            call={headerData?.call}
            buttons={headerData?.button}
            className={'text-wrapper'}
            center={false}
            size="md"
          />

          <ServicesCol>
            {services?.data?.map((_, index) => (
              <ServiceButton
                key={index}
                href={`/services/${_?.attributes?.slug}`}
                className="list-anim"
              >
                <H4 className="text">{_?.attributes?.name}</H4>
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
