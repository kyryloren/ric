'use client'

import { Container, RenderMedia } from 'styles'
import { ImageWrapper, InfoWrapper, RowWrapper } from './styles'
import { CustomButton, CustomHeader } from 'components'

export default function Info({ data }) {
  return (
    <InfoWrapper>
      <Container>
        {data?.info_row?.map((_, index) => (
          <RowWrapper key={index}>
            <ImageWrapper className={'image-wrapper'}>
              <RenderMedia data={_?.media?.data?.attributes} />
            </ImageWrapper>

            <CustomHeader
              title={_?.title}
              description={_.description}
              book={false}
              call={false}
              className={'text-wrapper'}
              center={false}
              size="md"
            >
              <CustomButton $secondary href={'/contact'}>
                Ask us
              </CustomButton>
            </CustomHeader>
          </RowWrapper>
        ))}
      </Container>
    </InfoWrapper>
  )
}
