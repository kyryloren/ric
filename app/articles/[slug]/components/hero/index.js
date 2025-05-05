'use client'

import { Container, P, RenderMedia } from 'styles'
import { HeroSection, ImageWrapper, InfoWrapper } from './styles'
import { CustomHeader } from 'components'
import { formatDate } from 'lib'
import { useLenis } from 'lenis/react'
import { useEffect } from 'react'

export default function Hero({ data }) {
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0)
    }
  }, [lenis])

  return (
    <HeroSection>
      <Container>
        <CustomHeader title={data?.title} padded center>
          <InfoWrapper>
            <P>Written by {data?.author}</P>
            <P>|</P>
            <P>{formatDate(data?.date)}</P>
            <P>|</P>
            <P>{data?.length} read</P>
          </InfoWrapper>
        </CustomHeader>
        <ImageWrapper>
          <RenderMedia data={data?.media?.data?.attributes} />
        </ImageWrapper>
      </Container>
    </HeroSection>
  )
}
