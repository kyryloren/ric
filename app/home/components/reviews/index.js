'use client'

import { useRef } from 'react'
import { Container, H2, P, splitText } from 'styles'
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
  TextWrapper,
} from './styles'
import { CustomImage, Icon, Parallax, Slider, useSlider } from 'components'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const DESCRIPTION = `Why patients are saying we’re the top
choice for their dental implant provider.`

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

const Reviews = () => {
  const sectionEl = useRef(null)

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
        <TextWrapper>
          <H2>{splitText('Patient-First Excellence')}</H2>
          <P>{splitText(DESCRIPTION)}</P>
        </TextWrapper>

        <DesktopGrid>
          <Parallax trigger={sectionEl} speed={-3}>
            <Col>
              <ImageWrapper>
                <CustomImage
                  src={'/1.webp'}
                  alt={'One'}
                  sizes="(min-width: 1380px) 41.05vw, (min-width: 1060px) calc(10vw + 423px), calc(-21.54vw + 750px)"
                />
              </ImageWrapper>
              <CardWrapper $yellow>
                <CustomQuoteText>
                  Dr. Pedro was so thoughtful and took his time to explain
                  everything- I had a great experience and highly recommend Dr
                  Pedro.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image
                      src={'/person1.webp'}
                      alt="Person 1"
                      fill
                      sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                    />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
              <CardWrapper>
                <CustomQuoteText>
                  Truly the best dental experience I’ve ever had. The office was
                  immaculate and the customer attention was impeccable. I highly
                  recommend this dental office with no hesitation.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image
                      src={'/person1.webp'}
                      alt="Person 1"
                      fill
                      sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                    />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
            </Col>
          </Parallax>
          <Parallax trigger={sectionEl} speed={-1}>
            <Col>
              <CardWrapper $blue>
                <CustomQuoteText>
                  Other dentists did not want to try– with time and expertise,
                  Dr. Pedro succeeded in creating a perfect bridge! He has
                  successfully branched into the field of aesthetics. It’s
                  heaven!!!
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image
                      src={'/person1.webp'}
                      alt="Person 1"
                      fill
                      sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                    />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
              <CardWrapper $orange>
                <CustomQuoteText>
                  The finished result was amazing and over our expectations. I
                  can write this review with a great big smile. I would highly
                  recommend anyone who wishes to have their smile restored.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image
                      src={'/person1.webp'}
                      alt="Person 1"
                      fill
                      sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                    />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
              <ImageWrapper>
                <CustomImage
                  src={'/2.webp'}
                  alt={'Two'}
                  sizes="(min-width: 1400px) 41vw, (min-width: 1120px) calc(15.77vw + 348px), calc(-17.81vw + 721px)"
                />
              </ImageWrapper>
            </Col>
          </Parallax>
          <Parallax trigger={sectionEl} speed={-3}>
            <Col>
              <CardWrapper $orange>
                <CustomQuoteText>
                  The finished result was amazing and over our expectations. I
                  can write this review with a great big smile. I would highly
                  recommend anyone who wishes to have their smile restored.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image
                      src={'/person1.webp'}
                      alt="Person 1"
                      fill
                      sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                    />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
              <ImageWrapper>
                <CustomImage
                  src={'/3.webp'}
                  alt={'Three'}
                  sizes="(min-width: 1400px) 41vw, (min-width: 1120px) calc(15.77vw + 348px), calc(-17.81vw + 721px)"
                />
              </ImageWrapper>
              <CardWrapper $yellow>
                <CustomQuoteText>
                  I had my first appointment at this office today. My experience
                  with each staff member was excellent. I had a gentle and
                  thorough cleaning. There was no wait time. I highly recommend
                  this office.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image
                      src={'/person1.webp'}
                      alt="Person 1"
                      fill
                      sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                    />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
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
            <SlideContainer>
              <CardWrapper $yellow>
                <CustomQuoteText>
                  Dr. Pedro was so thoughtful and took his time to explain
                  everything- I had a great experience and highly recommend Dr
                  Pedro.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image
                      src={'/person1.webp'}
                      alt="Person 1"
                      sizes="(min-width: 940px) 50px, calc(5vw + 4px)"
                      fill
                    />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
            </SlideContainer>
            <SlideContainer>
              <CardWrapper>
                <CustomQuoteText>
                  Truly the best dental experience I’ve ever had. The office was
                  immaculate and the customer attention was impeccable. I highly
                  recommend this dental office with no hesitation.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image src={'/person1.webp'} alt="Person 1" fill />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
            </SlideContainer>
            <SlideContainer>
              <CardWrapper $blue>
                <CustomQuoteText>
                  Other dentists did not want to try– with time and expertise,
                  Dr. Pedro succeeded in creating a perfect bridge! He has
                  successfully branched into the field of aesthetics. It’s
                  heaven!!!
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image src={'/person1.webp'} alt="Person 1" fill />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
            </SlideContainer>
            <SlideContainer>
              <CardWrapper $orange>
                <CustomQuoteText>
                  The finished result was amazing and over our expectations. I
                  can write this review with a great big smile. I would highly
                  recommend anyone who wishes to have their smile restored.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image src={'/person1.webp'} alt="Person 1" fill />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
            </SlideContainer>
            <SlideContainer>
              <CardWrapper $orange>
                <CustomQuoteText>
                  The finished result was amazing and over our expectations. I
                  can write this review with a great big smile. I would highly
                  recommend anyone who wishes to have their smile restored.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image src={'/person1.webp'} alt="Person 1" fill />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
            </SlideContainer>
            <SlideContainer>
              <CardWrapper $yellow>
                <CustomQuoteText>
                  I had my first appointment at this office today. My experience
                  with each staff member was excellent. I had a gentle and
                  thorough cleaning. There was no wait time. I highly recommend
                  this office.
                </CustomQuoteText>
                <CreditWrapper>
                  <PfP>
                    <Image src={'/person1.webp'} alt="Person 1" fill />
                  </PfP>
                  <CreditTextWrapper>
                    <CreditName>
                      <b>Katherine Contino</b>
                    </CreditName>
                    <P>Google Review</P>
                  </CreditTextWrapper>
                </CreditWrapper>
              </CardWrapper>
            </SlideContainer>
          </Slider.Slides>

          <SliderButtons />
        </Slider>
      </Container>
    </ReviewsSection>
  )
}

export default Reviews
