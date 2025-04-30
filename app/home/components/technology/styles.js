'use client'

import tw, { styled } from 'twin.macro'

export const TechnologySection = tw.section`
  relative
  pb-xxl

  xl:pb-xxl
`
export const ImageWrapper = tw.div`
  relative
  w-full
  h-[20rem]
  mt-lg
  
  md:h-[80svh]
  xl:mt-lg-xl
`
export const ColInfoWrapper = tw.div`
  flex
  justify-between
  mt-md
  flex-col

  sm:flex-row
  sm:justify-between
  sm:gap-md

  xl:mt-md-xl
  xl:gap-md-xl
`
export const Col = styled.div`
  ${tw`
    flex
    flex-col
    gap-md
    py-md
    border-t
    border-gray

    sm:py-0
    sm:border-0

    xl:gap-md-xl
  `}

  .description {
    .line-wrapper {
      ${tw`inline lg:block`}
    }
  }
`
