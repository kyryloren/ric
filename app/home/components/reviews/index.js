'use client'

import { Container, CustomGrid, H2, H4, P } from 'styles'
import {
  CardWrapper,
  Col,
  CreditName,
  CreditTextWrapper,
  CreditWrapper,
  CustomQuoteText,
  ImageWrapper,
  PfP,
  ReviewsSection,
  TextWrapper,
} from './styles'
import { CustomImage, Parallax, RevealText } from 'components'
import Image from 'next/image'
import { useRef } from 'react'

const DESCRIPTION = `Why patients are saying we’re the top
choice for their dental implant provider.`

const Reviews = () => {
  const gridEl = useRef(null)

  return (
    <ReviewsSection>
      <Container>
        <TextWrapper>
          <RevealText el={H2} text={'Patient-First Excellence'} scroll={true} />
          <RevealText el={P} text={DESCRIPTION} scroll={true} />
        </TextWrapper>

        <CustomGrid ref={gridEl}>
          <Parallax trigger={gridEl} speed={-3}>
            <Col>
              <ImageWrapper>
                <CustomImage src={'/1.webp'} alt={'One'} />
              </ImageWrapper>
              <CardWrapper $yellow>
                <CustomQuoteText>
                  Dr. Pedro was so thoughtful and took his time to explain
                  everything- I had a great experience and highly recommend Dr
                  Pedro.
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
            </Col>
          </Parallax>
          <Parallax trigger={gridEl} speed={-1}>
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
              <ImageWrapper>
                <CustomImage src={'/2.webp'} alt={'Two'} />
              </ImageWrapper>
            </Col>
          </Parallax>
          <Parallax trigger={gridEl} speed={-3}>
            <Col>
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
              <ImageWrapper>
                <CustomImage src={'/3.webp'} alt={'Three'} />
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
            </Col>
          </Parallax>
        </CustomGrid>
      </Container>
    </ReviewsSection>
  )
}

export default Reviews
