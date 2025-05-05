'use client'

import {
  ArticlesSection,
  CardWrapper,
  ImageWrapper,
  SliderContainer,
  TitleLine,
} from './styles'
import { Container, H2, H4, RenderMedia } from 'styles'
import { CustomButton, Slider } from 'components'

const Articles = ({ data }) => {
  return (
    <ArticlesSection>
      <Container>
        <TitleLine>
          <H2>Top Articles</H2>
          <CustomButton $secondary href={'/articles'}>
            Read All
          </CustomButton>
        </TitleLine>
        <Slider>
          <Slider.Slides className={'slider'}>
            {data?.map((_, index) => (
              <SliderContainer key={index}>
                <CardWrapper href={`/articles/${_?.attributes?.slug}`}>
                  <ImageWrapper>
                    <RenderMedia
                      data={_?.attributes?.media?.data?.attributes}
                      sizes="(min-width: 600px) 45vw, (min-width: 420px) 477px, (min-width: 380px) calc(65vw - 23px), 468px"
                    />
                  </ImageWrapper>
                  <H4>{_?.attributes?.title}</H4>
                </CardWrapper>
              </SliderContainer>
            ))}
          </Slider.Slides>
        </Slider>
      </Container>
    </ArticlesSection>
  )
}

export default Articles
