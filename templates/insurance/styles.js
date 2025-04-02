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
  relative
  col-start-1
  col-end-7
  w-full
  h-[70svh]
  [border-radius: 10px]
`
export const TextWrapper = styled.div`
  ${tw`flex flex-col gap-sm col-start-8 col-end-13 xl:gap-sm`}

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
