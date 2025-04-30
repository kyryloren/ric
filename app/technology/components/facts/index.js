'use client'

import { Fragment, useRef } from 'react'
import { Container, CustomGrid, RenderMedia } from 'styles'
import { FactsSection, ImageWrapper, LeftCol, RightCol } from './styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { theme } from 'twin.macro'
import { CustomHeader } from 'components'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Facts({ data }) {
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
        <CustomGrid className="grid">
          <LeftCol className="left-col">
            <ImageWrapper className="image-col">
              <RenderMedia
                data={data[0]?.media?.data?.attributes}
                parallax={false}
              />
            </ImageWrapper>
            <CustomHeader
              title={data[0]?.title}
              description={data[0]?.description}
              book={false}
              call={false}
              center={false}
              className={'text-wrapper hide'}
              size="md"
            />
            <ImageWrapper className="image-col hidden">
              <RenderMedia
                data={data[1]?.media?.data?.attributes}
                parallax={false}
              />
            </ImageWrapper>
            <CustomHeader
              title={data[1]?.title}
              description={data[1]?.description}
              book={false}
              call={false}
              center={false}
              className={'text-wrapper hide'}
              size="md"
            />
            <ImageWrapper className="image-col hidden">
              <RenderMedia
                data={data[2]?.media?.data?.attributes}
                parallax={false}
              />
            </ImageWrapper>
            <CustomHeader
              title={data[2]?.title}
              description={data[2]?.description}
              book={false}
              call={false}
              center={false}
              className={'text-wrapper hide'}
              size="md"
            />
          </LeftCol>
          {data?.map((_, index) => (
            <Fragment key={index}>
              <RightCol className={`right-col`}>
                <CustomHeader
                  title={_?.title}
                  description={_?.description}
                  book={false}
                  call={false}
                  center={false}
                  className={'text-wrapper'}
                  size="md"
                />
              </RightCol>
            </Fragment>
          ))}
        </CustomGrid>
      </Container>
    </FactsSection>
  )
}
