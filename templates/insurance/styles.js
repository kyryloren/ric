'use client'

import { CustomGrid } from 'styles'
import tw, { styled } from 'twin.macro'

export const InsuranceSection = tw.section`
  relative
  bg-azure
  py-xl

  xl:py-xl-xl
`
export const ContentWrapper = tw(CustomGrid)`
  items-center
`
export const ImageWrapper = tw.div`
  flex
  relative
  col-start-1
  col-end-13
  w-full
  h-[20rem]
  [border-radius: 10px]

  md:h-[70svh]
  md:col-end-7
`
export const TextWrapper = styled.div`
  ${tw`flex flex-col gap-sm col-end-13 xl:gap-sm`}
  ${tw`col-start-1 md:col-start-8`}

  .marquee {
    ${tw`mt-lg xl:mt-lg-xl`}

    &:before {
      ${tw`content-[''] absolute z-20 w-full h-full bg-gradient-to-r from-azure via-[rgba(0, 0, 0, 0)] to-azure`}
    }
  }
`
export const ImageObject = tw.img`
  relative
  mr-sm
  w-[100px]

  xl:mr-sm-xl
`
