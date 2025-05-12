'use client'

import { Container, RenderMedia } from 'styles'
import {
  ContentWrapper,
  ImageObject,
  ImageWrapper,
  InsuranceSection,
} from './styles'
import { Marquee, CustomHeader } from 'components'
import { getStrapiURL } from 'lib'

const Insurance = ({ data }) => {
  return (
    <InsuranceSection>
      <Container>
        <ContentWrapper>
          <ImageWrapper>
            <RenderMedia
              data={data?.media?.data?.attributes}
              sizes="(min-width: 780px) 59.19vw, (min-width: 560px) 95.5vw, 462px"
            />
          </ImageWrapper>

          <CustomHeader
            title={data?.title}
            description={data?.description}
            className={'text-wrapper'}
            buttons={[data?.button]}
            center={false}
            size="md"
          >
            <Marquee className={'marquee'} repeat={3}>
              {data?.icons?.data?.map((_, index) => (
                <ImageObject
                  key={index}
                  src={getStrapiURL(_?.attributes?.url + '?format=webp')}
                  alt={
                    _?.attributes?.alternativeText ||
                    'Robotic Implant Center Image'
                  }
                  width={100}
                  height={100}
                />
              ))}
            </Marquee>
          </CustomHeader>
        </ContentWrapper>
      </Container>
    </InsuranceSection>
  )
}

export default Insurance
