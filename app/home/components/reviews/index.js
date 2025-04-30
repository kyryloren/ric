'use client'

import { useRef } from 'react'
import { Container, P, RenderMedia } from 'styles'
import {
  CardWrapper,
  Col,
  CreditName,
  CreditTextWrapper,
  CreditWrapper,
  CustomQuoteText,
  DesktopGrid,
  ImageWrapper,
  PfP,
  ReviewsSection,
  SlideButtonsWrapper,
  SlideContainer,
} from './styles'
import {
  CustomHeader,
  CustomImage,
  Icon,
  Parallax,
  Slider,
  useSlider,
} from 'components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const SliderButtons = () => {
  const { scrollPrev, scrollNext } = useSlider()

  return (
    <SlideButtonsWrapper>
      <button aria-label="Previous Slide" onClick={scrollPrev}>
        <Icon name="left-arrow" />
      </button>
      <button aria-label="Next Slide" onClick={scrollNext}>
        <Icon name="right-arrow" />
      </button>
    </SlideButtonsWrapper>
  )
}

const Reviews = ({ data }) => {
  const sectionEl = useRef(null)
  const headerData = data?.reviews_header
  const reviewCards = data?.review_card

  const mediaLeft = data?.review_media_left?.data?.attributes
  const mediaCenter = data?.review_media_center?.data?.attributes
  const mediaRight = data?.review_media_right?.data?.attributes

  const leftReviews = reviewCards.slice(0, 2)
  const centerReviews = reviewCards.slice(2, 4)
  const rightReviews = reviewCards.slice(4, 6)

  useGSAP(
    () => {
      gsap.from(gsap.utils.toArray('.anim-word'), {
        yPercent: 100,
        ease: 'power3.out',
        duration: 1.5,
        delay: 0.3,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom',
        },
      })
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <ReviewsSection ref={sectionEl}>
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

        <DesktopGrid>
          <Parallax trigger={sectionEl} speed={-3}>
            <Col>
              <ImageWrapper>
                <RenderMedia
                  data={mediaLeft}
                  sizes="(min-width: 1380px) 41.05vw, (min-width: 1060px) calc(10vw + 423px), calc(-21.54vw + 750px)"
                />
              </ImageWrapper>
              {leftReviews.map((_, index) => (
                <CardWrapper key={index} $yellow={index === 0}>
                  <CustomQuoteText>{_?.quote}</CustomQuoteText>
                  <CreditWrapper>
                    <PfP>
                      <RenderMedia
                        data={_?.pfp?.data?.attributes}
                        sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                        parallax={false}
                      />
                    </PfP>
                    <CreditTextWrapper>
                      <CreditName>
                        <b>{_?.name}</b>
                      </CreditName>
                      <P>{_?.source}</P>
                    </CreditTextWrapper>
                  </CreditWrapper>
                </CardWrapper>
              ))}
            </Col>
          </Parallax>
          <Parallax trigger={sectionEl} speed={-1}>
            <Col>
              {centerReviews.map((_, index) => (
                <CardWrapper
                  key={index}
                  $blue={index === 0}
                  $orange={index === 1}
                >
                  <CustomQuoteText>{_?.quote}</CustomQuoteText>
                  <CreditWrapper>
                    <PfP>
                      <RenderMedia
                        data={_?.pfp?.data?.attributes}
                        sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                        parallax={false}
                      />
                    </PfP>
                    <CreditTextWrapper>
                      <CreditName>
                        <b>{_?.name}</b>
                      </CreditName>
                      <P>{_?.source}</P>
                    </CreditTextWrapper>
                  </CreditWrapper>
                </CardWrapper>
              ))}
              <ImageWrapper>
                <RenderMedia
                  data={mediaCenter}
                  sizes="(min-width: 1380px) 41.05vw, (min-width: 1060px) calc(10vw + 423px), calc(-21.54vw + 750px)"
                />
              </ImageWrapper>
            </Col>
          </Parallax>
          <Parallax trigger={sectionEl} speed={-3}>
            <Col>
              <CardWrapper $orange>
                <CustomQuoteText>{rightReviews[0]?.quote}</CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <RenderMedia
                      data={rightReviews[0]?.pfp?.data?.attributes}
                      sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                      parallax={false}
                    />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>{rightReviews[0]?.name}</b>
                    </CreditName>
                    <P>{rightReviews[0]?.source}</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>

              <ImageWrapper>
                <RenderMedia
                  data={mediaRight}
                  sizes="(min-width: 1380px) 41.05vw, (min-width: 1060px) calc(10vw + 423px), calc(-21.54vw + 750px)"
                />
              </ImageWrapper>

              <CardWrapper $yellow>
                <CustomQuoteText>{rightReviews[1]?.quote}</CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <RenderMedia
                      data={rightReviews[1]?.pfp?.data?.attributes}
                      sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                      parallax={false}
                    />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>{rightReviews[1]?.name}</b>
                    </CreditName>
                    <P>{rightReviews[1]?.source}</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
            </Col>
          </Parallax>
        </DesktopGrid>

        <Slider
          className="slider"
          emblaApi={{
            slidesToScroll: 1,
            skipSnaps: false,
            align: 'start',
            loop: true,
            autoScroll: true,
          }}
        >
          <Slider.Slides className={'slider'}>
            {reviewCards.map((_, index) => (
              <SlideContainer key={index}>
                <CardWrapper
                  $orange={index % 3 === 0}
                  $blue={index % 3 === 1}
                  $yellow={index % 3 === 2}
                >
                  <CustomQuoteText>{_?.quote}</CustomQuoteText>
                  <CreditWrapper>
                    <PfP>
                      <RenderMedia
                        data={_?.pfp?.data?.attributes}
                        sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                        parallax={false}
                      />
                    </PfP>
                    <CreditTextWrapper>
                      <CreditName>
                        <b>{_?.name}</b>
                      </CreditName>
                      <P>{_?.source}</P>
                    </CreditTextWrapper>
                  </CreditWrapper>
                </CardWrapper>
              </SlideContainer>
            ))}
          </Slider.Slides>

          <SliderButtons />
        </Slider>
      </Container>
    </ReviewsSection>
  )
}

export default Reviews
