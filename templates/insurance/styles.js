'use client'

import Image from 'next/image'
import { CustomGrid } from 'styles'
import tw, { styled } from 'twin.macro'

export const InsuranceSection = styled.section`
  ${tw`
    relative
    bg-azure
    py-xl

    xl:py-xl-xl
  `}

  .text-wrapper {
    ${tw`col-start-1 col-end-13 md:col-start-8`}

    .marquee {
      ${tw`mt-lg xl:mt-lg-xl`}

      &:before {
        ${tw`content-[''] absolute z-20 w-full h-full bg-gradient-to-r from-azure via-[rgba(0, 0, 0, 0)] to-azure`}
      }
    }
  }
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
export const ImageObject = tw(Image)`
  relative
  mr-md
  w-[100px]

  xl:mr-md-xl
`
