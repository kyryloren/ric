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

export default function List({ data }) {
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
          {data?.map((_, index) => (
            <HollowCard
              key={index}
              href={`/services/${_?.attributes.slug}`}
              className="anim-item"
            >
              <CardTextWrapper>
                <H3>{_?.attributes?.name}</H3>
                <P>{_?.attributes?.short_description}</P>
              </CardTextWrapper>
              <ServiceButton>
                <P className="link-text">Read More</P>
                <Icon name="right-arrow" />
              </ServiceButton>
            </HollowCard>
          ))}
          <HollowCard className="anim-item" href={'/contact'} $custom>
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
