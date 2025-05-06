'use client'

import { CustomHeader } from 'components'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const ListWrapper = tw.section`
  relative
  pb-xxl

  xl:pb-xxl-xl
`
export const ArticleItem = styled(Link)`
  ${tw`
    flex
    flex-col
    gap-xs

    xl:gap-xs-xl
  `}

  &:nth-child(odd) {
    ${tw`col-start-1 col-end-13 sm:col-end-7`}
  }
  &:nth-child(even) {
    ${tw`col-start-1 col-end-13 sm:col-start-7`}
  }
`
export const ImageWrapper = tw.div`
  relative
  w-full
  h-[25rem]
  [border-radius: 10px]

  sm:h-[25svw]
`
export const Header = ({ data }) => {
  return (
    <CustomHeader
      title={data?.title}
      description={data?.description}
      book={data?.book}
      call={data?.call}
      buttons={data?.button}
      id={'hero'}
      center
      padded
    />
  )
}
