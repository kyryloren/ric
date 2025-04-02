'use client'

import 'swiper/css'
import { ArticlesSection, CardWrapper, ImageWrapper, TitleLine } from './styles'
import { Container, H2, H4 } from 'styles'
import { CustomButton, CustomImage } from 'components'
import { Swiper, SwiperSlide } from 'swiper/react'

const Articles = () => {
  return (
    <ArticlesSection>
      <Container>
        <TitleLine>
          <H2>Top Articles</H2>
          <CustomButton $secondary $internal href={'/articles'}>
            Read All
          </CustomButton>
        </TitleLine>
        <Swiper slidesPerView={4} loop={true} spaceBetween={20}>
          <SwiperSlide>
            <CardWrapper href="/">
              <ImageWrapper>
                <CustomImage src="/1.webp" alt="Image" />
              </ImageWrapper>
              <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper href="/">
              <ImageWrapper>
                <CustomImage src="/1.webp" alt="Image" />
              </ImageWrapper>
              <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper href="/">
              <ImageWrapper>
                <CustomImage src="/1.webp" alt="Image" />
              </ImageWrapper>
              <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper href="/">
              <ImageWrapper>
                <CustomImage src="/1.webp" alt="Image" />
              </ImageWrapper>
              <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper href="/">
              <ImageWrapper>
                <CustomImage src="/1.webp" alt="Image" />
              </ImageWrapper>
              <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper href="/">
              <ImageWrapper>
                <CustomImage src="/1.webp" alt="Image" />
              </ImageWrapper>
              <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
            </CardWrapper>
          </SwiperSlide>
        </Swiper>
      </Container>
    </ArticlesSection>
  )
}

export default Articles
