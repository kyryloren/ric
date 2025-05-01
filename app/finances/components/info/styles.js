'use client'

import { CustomGrid } from 'styles'
import tw, { styled } from 'twin.macro'

export const InfoWrapper = tw.section`
  relative
  pt-xxl
  pb-xl

  xl:pt-xxl-xl
  xl:pb-xl-xl
`
export const RowWrapper = styled(CustomGrid)`
  ${tw`items-center`}

  &:nth-child(1) {
    ${tw`
      mb-lg

      xl:mb-lg-xl
    `}

    .image-wrapper {
      ${tw`
        col-start-1
        col-end-13

        md:col-end-7
    `}
    }
    .text-wrapper {
      ${tw`
        col-start-1
        col-end-13

        md:col-start-8
        md:col-end-12
      `}
    }
  }
  &:nth-child(2) {
    .image-wrapper {
      ${tw`
      col-start-1
      col-end-13
      [grid-row: 1]

      md:col-start-7
    `}
    }

    .text-wrapper {
      ${tw`
      col-start-1
      col-end-13
      [grid-row: 2]

      md:[grid-row: 1]
      md:col-start-2
      md:col-end-6
    `}
    }
  }
`
export const ImageWrapper = tw.div`
  relative
  w-full
  h-[20rem]
  [border-radius: 10px]

  md:h-[30vw]
`
export const TextWrapper = tw.div`
  flex
  flex-col
  gap-sm
  
  xl:gap-sm-xl
`
