'use client'

import { useRef } from 'react'
import { Container, CustomGrid, H3, P } from 'styles'
import {
  CardTextWrapper,
  HollowCard,
  ListSection,
  ServiceButton,
} from './styles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomHeader, Icon } from 'components'

gsap.registerPlugin(useGSAP)

export default function List({ headerData, data }) {
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
        <CustomHeader
          title={headerData?.title}
          description={headerData?.description}
          book={headerData?.book}
          call={headerData?.call}
          buttons={headerData?.button}
          padded
        />
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
