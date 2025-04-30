'use client'

import { Container } from 'styles'
import {
  ContentWrapper,
  ImageObject,
  ImageWrapper,
  InsuranceSection,
} from './styles'
import { CustomImage, Marquee, CustomHeader } from 'components'
import { getStrapiURL } from 'lib'

const Insurance = ({ data }) => {
  return (
    <InsuranceSection>
      <Container>
        <ContentWrapper>
          <ImageWrapper>
            <CustomImage
              src={'/smiles.webp'}
              alt={'Smiles'}
              sizes="(min-width: 780px) 59.01vw, (min-width: 580px) 95.56vw, (min-width: 420px) calc(23.57vw + 380px), (min-width: 380px) calc(95vw - 21px), 468px"
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
