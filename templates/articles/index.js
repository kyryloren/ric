'use client'

import {
  ArticlesSection,
  CardWrapper,
  ImageWrapper,
  SliderContainer,
  TitleLine,
} from './styles'
import { Container, H2, H4 } from 'styles'
import { CustomButton, CustomImage, Slider } from 'components'

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
        <Slider>
          <Slider.Slides className={'slider'}>
            <SliderContainer>
              <CardWrapper href="/">
                <ImageWrapper>
                  <CustomImage
                    src="/1.webp"
                    alt="Image"
                    sizes="(min-width: 600px) 45vw, (min-width: 420px) 477px, (min-width: 380px) calc(65vw - 23px), 468px"
                  />
                </ImageWrapper>
                <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
              </CardWrapper>
            </SliderContainer>
            <SliderContainer>
              <CardWrapper href="/">
                <ImageWrapper>
                  <CustomImage
                    src="/1.webp"
                    alt="Image"
                    sizes="(min-width: 600px) 45vw, (min-width: 420px) 477px, (min-width: 380px) calc(65vw - 23px), 468px"
                  />
                </ImageWrapper>
                <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
              </CardWrapper>
            </SliderContainer>
            <SliderContainer>
              <CardWrapper href="/">
                <ImageWrapper>
                  <CustomImage
                    src="/1.webp"
                    alt="Image"
                    sizes="(min-width: 600px) 45vw, (min-width: 420px) 477px, (min-width: 380px) calc(65vw - 23px), 468px"
                  />
                </ImageWrapper>
                <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
              </CardWrapper>
            </SliderContainer>
            <SliderContainer>
              <CardWrapper href="/">
                <ImageWrapper>
                  <CustomImage
                    src="/1.webp"
                    alt="Image"
                    sizes="(min-width: 600px) 45vw, (min-width: 420px) 477px, (min-width: 380px) calc(65vw - 23px), 468px"
                  />
                </ImageWrapper>
                <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
              </CardWrapper>
            </SliderContainer>
            <SliderContainer>
              <CardWrapper href="/">
                <ImageWrapper>
                  <CustomImage
                    src="/1.webp"
                    alt="Image"
                    sizes="(min-width: 600px) 45vw, (min-width: 420px) 477px, (min-width: 380px) calc(65vw - 23px), 468px"
                  />
                </ImageWrapper>
                <H4>Lorem ipsum dolor sit amet, consectetur.</H4>
              </CardWrapper>
            </SliderContainer>
          </Slider.Slides>
        </Slider>
      </Container>
    </ArticlesSection>
  )
}

export default Articles
