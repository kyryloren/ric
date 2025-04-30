'use client'

import { Container, H3, P, RenderMedia, splitText } from 'styles'
import { Col, ColInfoWrapper, ImageWrapper, TechnologySection } from './styles'
import { CustomHeader } from 'components'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Technology = ({ data }) => {
  const sectionEl = useRef(null)
  const headerData = data?.technology_header
  const colData = data?.technology_col

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom',
        },
        defaults: { ease: 'power3.out', delay: 0.3 },
      })

      tl.from(
        gsap.utils.toArray('.anim-word'),
        {
          yPercent: 100,
          duration: 1.5,
          stagger: 0.02,
          opacity: 0,
        },
        0,
      ).from(
        '.anim-button',
        {
          scale: 0,
          duration: 1,
        },
        0.3,
      )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <TechnologySection ref={sectionEl}>
      <Container>
        <CustomHeader
          title={headerData?.title}
          description={headerData?.description}
          book={headerData?.book}
          call={headerData?.call}
          buttons={headerData?.button}
          size="md"
          center
        />
        <ImageWrapper>
          <RenderMedia
            data={data?.technology_media?.data?.attributes}
            sizes="(min-width: 660px) 94.27vw, (min-width: 420px) calc(8.64vw + 533px), (min-width: 380px) calc(95vw - 21px), 570px"
          />
        </ImageWrapper>

        <ColInfoWrapper>
          {colData?.map((_, index) => (
            <Col key={index}>
              <H3>{splitText(_?.title)}</H3>
              <P className="description">{splitText(_?.description)}</P>
            </Col>
          ))}
        </ColInfoWrapper>
      </Container>
    </TechnologySection>
  )
}

export default Technology
