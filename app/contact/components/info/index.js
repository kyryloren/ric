'use client'

import { useContext, useRef } from 'react'
import { Container, H2, P, splitText } from 'styles'
import {
  ContactCard,
  ContactCardsWrapper,
  GridWrapper,
  HoursCard,
  HoursCardWrapper,
  HoursList,
  InfoSection,
  MapCard,
  ReviewCard,
  TimeItemWrapper,
} from './styles'
import { CustomLink } from 'components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { GlobalAPIContext } from 'context'
import { formatPhone } from 'lib'

gsap.registerPlugin(useGSAP)

export default function Info() {
  const sectionEl = useRef(null)
  const globalAPI = useContext(GlobalAPIContext)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 0.5 } })

      tl.from(gsap.utils.toArray('.anim-card'), {
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.02,
      })
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <>
      <InfoSection ref={sectionEl}>
        <Container>
          <GridWrapper>
            <HoursCardWrapper>
              <HoursCard className="anim-card">
                <H2>Hours</H2>
                <HoursList>
                  {globalAPI?.hours?.map((_, index) => (
                    <TimeItemWrapper key={index}>
                      <P>{_?.day}</P>
                      <P>{_?.time}</P>
                    </TimeItemWrapper>
                  ))}
                </HoursList>
              </HoursCard>

              <ReviewCard className="anim-card">
                <H2>4.8/5 Stars</H2>
                <CustomLink
                  href={
                    'https://www.google.com/maps/place/Robotic+Implant+Center/@40.535476,-74.152026,17z/data=!4m6!3m5!1s0x89c24b3f1ce5b925:0xfd7d2e02ee4f5017!8m2!3d40.5354756!4d-74.1520264!16s%2Fg%2F11x73gxltg?hl=en&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D'
                  }
                >
                  Leave us a review
                </CustomLink>
              </ReviewCard>
            </HoursCardWrapper>

            <ContactCardsWrapper>
              <ContactCard className="anim-card">
                <H2>Address</H2>
                <P>{splitText(globalAPI?.contact?.address)}</P>
              </ContactCard>

              <ContactCard className="anim-card">
                <H2>Email</H2>
                <CustomLink href={`mailto:${globalAPI?.contact?.email}`}>
                  Click to email
                </CustomLink>
              </ContactCard>

              <ContactCard className="anim-card">
                <H2>Phone</H2>
                <CustomLink href={`tel:${globalAPI?.contact?.phone}`}>
                  {formatPhone(globalAPI?.contact?.phone)}
                </CustomLink>
              </ContactCard>
            </ContactCardsWrapper>

            <MapCard className="anim-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.276517346656!2d-74.1546066892869!3d40.53547964828549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24b3f1ce5b925%3A0xfd7d2e02ee4f5017!2sRobotic%20Implant%20Center!5e0!3m2!1sen!2sus!4v1745892832708!5m2!1sen!2sus"
                width="800"
                height="600"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapCard>
          </GridWrapper>
        </Container>
      </InfoSection>
    </>
  )
}
