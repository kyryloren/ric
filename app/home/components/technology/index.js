'use client'

import { Container, H2, H3, P, splitText } from 'styles'
import {
  Col,
  ColInfoWrapper,
  ImageWrapper,
  TechnologySection,
  TextWrapper,
} from './styles'
import { CustomButton, CustomImage } from 'components'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const TITLE = `Better Precision
Better Health`
const DESCRIPTION = `Our advanced technology makes
implants safer and more precise.`

const TEXT1 = `Our sub-millimeter precision ensures a
perfect fit, improved comfort, and long-
lasting results.`
const TEXT2 = `We complete implant procedures in half
the time, meaning less discomfort, faster
healing, and minimal disruption.`
const TEXT3 = `Our robotic guidance system prevents any
unexpected movements, ensuring steady,
controlled implant placement.`

const Technology = () => {
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
        delay: 0.3,
      }).from(
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
        <TextWrapper>
          <H2>{splitText(TITLE)}</H2>
          <P>{splitText(DESCRIPTION)}</P>

          <CustomButton
            className="anim-button"
            $secondary
            $internal
            href={'/technology'}
          >
            Learn More
          </CustomButton>
        </TextWrapper>
        <ImageWrapper>
          <CustomImage
            src={'/technology.webp'}
            alt={'Technology'}
            sizes="(min-width: 660px) 94.27vw, (min-width: 420px) calc(8.64vw + 533px), (min-width: 380px) calc(95vw - 21px), 570px"
          />
        </ImageWrapper>

        <ColInfoWrapper>
          <Col>
            <H3>{splitText('± 0.2mm')}</H3>
            <P className="description">{splitText(TEXT1)}</P>
          </Col>
          <Col>
            <H3>{splitText('50% Faster')}</H3>
            <P className="description">{splitText(TEXT2)}</P>
          </Col>
          <Col>
            <H3>{splitText('100% Safer')}</H3>
            <P className="description">{splitText(TEXT3)}</P>
          </Col>
        </ColInfoWrapper>
      </Container>
    </TechnologySection>
  )
}

export default Technology
