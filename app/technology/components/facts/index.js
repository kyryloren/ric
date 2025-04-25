'use client'

import { Fragment, useRef } from 'react'
import { Container, H2, P, splitText } from 'styles'
import {
  CustomRow,
  FactsSection,
  ImageWrapper,
  LeftCol,
  RightCol,
  TextWrapper,
} from './styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { CustomImage } from 'components'
import { theme } from 'twin.macro'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const SCREENS = [
  {
    title: `Introducing
Yomi Robot`,
    description: 'Description for screen 1',
    href: '/1.webp',
    alt: 'Dr. Pedro',
  },
  {
    title: `Less Time.
Less Pain.`,
    description: 'Description for screen 2',
    href: '/2.webp',
    alt: 'Dr. Pedro',
  },
  {
    title: 'Screen 3',
    description: 'Description for screen 3',
    href: '/3.webp',
    alt: 'Dr. Pedro',
  },
]

export default function Facts() {
  const sectionEl = useRef(null)
  const leftContainerEl = useRef(null)

  useGSAP(
    () => {
      let mm = gsap.matchMedia()
      const images = gsap.utils.toArray('.image-col')
      const panels = gsap.utils.toArray('.right-col')

      mm.add(`(min-width: ` + theme`screens.md` + `)`, () => {
        ScrollTrigger.create({
          trigger: '.grid',
          start: 'top top',
          end: 'bottom bottom',
          pin: '.left-col',
          scrub: true,
          invalidateOnRefresh: true,
          pinSpacing: false,
        })

        gsap.set(images, { autoAlpha: 0 })
        gsap.set(images[0], { autoAlpha: 1 })

        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: 'top center',
            onEnter: () =>
              gsap.to(images, {
                autoAlpha: (j) => (j === i ? 1 : 0),
                overwrite: true,
              }),
            onEnterBack: () =>
              gsap.to(images, {
                autoAlpha: (j) => (j === i ? 1 : 0),
                overwrite: true,
              }),
          })
        })
      })
    },
    { dependencies: [sectionEl, leftContainerEl], scope: sectionEl },
  )

  return (
    <FactsSection ref={sectionEl}>
      <Container>
        <CustomRow className="grid">
          <LeftCol className="left-col">
            <ImageWrapper className="image-col">
              <CustomImage src="/1.webp" alt="Dr. Pedro" parallax={false} />
            </ImageWrapper>
            <TextWrapper $hide>
              <H2>{splitText(SCREENS[0].title)}</H2>
              <P>{splitText(SCREENS[0].description)}</P>
            </TextWrapper>
            <ImageWrapper className="image-col hidden">
              <CustomImage src="/2.webp" alt="Dr. Pedro" parallax={false} />
            </ImageWrapper>
            <TextWrapper $hide>
              <H2>{splitText(SCREENS[1].title)}</H2>
              <P>{splitText(SCREENS[1].description)}</P>
            </TextWrapper>
            <ImageWrapper className="image-col hidden">
              <CustomImage src="/3.webp" alt="Dr. Pedro" parallax={false} />
            </ImageWrapper>
            <TextWrapper $hide>
              <H2>{splitText(SCREENS[2].title)}</H2>
              <P>{splitText(SCREENS[2].description)}</P>
            </TextWrapper>
          </LeftCol>
          {SCREENS.map((screen, index) => (
            <Fragment key={index}>
              <RightCol className={`right-col`}>
                <TextWrapper>
                  <H2>{splitText(screen.title)}</H2>
                  <P>{splitText(screen.description)}</P>
                </TextWrapper>
              </RightCol>
            </Fragment>
          ))}
        </CustomRow>
      </Container>
    </FactsSection>
  )
}
