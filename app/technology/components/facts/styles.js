'use client'

import tw, { styled } from 'twin.macro'

export const FactsSection = styled.section`
  ${tw`relative`}

  .text-wrapper {
    ${tw`
      pb-xxl
      pt-md

      md:py-0
      md:pb-0
    `}

    &.hide {
      ${tw`flex md:hidden`}
    }
    &:not(.hide) {
      ${tw`hidden md:flex`}
    }
  }
`
export const LeftCol = tw.div`
  col-start-1
  col-end-13
  relative
  h-full
  items-center
  flex
  flex-col

  md:flex-row
  md:col-end-7
`
export const RightCol = tw.div`
  col-start-8
  col-end-12
  items-center
  justify-center
  h-screen
  w-full
  hidden

  md:flex
`
export const ImageWrapper = tw.div`
  w-full
  h-[30rem]
  [border-radius: 10px]

  lg:h-[50vh]
  xl:h-[70vh]
  md:absolute
`
