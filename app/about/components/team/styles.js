'use client'

import tw, { styled } from 'twin.macro'

export const TeamSection = tw.section`
  relative
  py-xxl

  xl:py-xxl-xl
`
export const StickyWrapper = tw.div`
  col-start-1
  col-end-13
  h-fit
  flex
  flex-col
  gap-xxs

  sm:col-end-7
  xl:gap-xxs-xl
`
export const StyledCanvas = tw.canvas`
  w-full
  [border-radius: 10px]
  hidden

  sm:block
`

export const TextWrapper = tw.section`
  col-start-1
  col-end-13

  sm:col-start-8
  md:col-start-10
`
export const ImageWrapper = styled.div`
  ${tw`
    w-full
    h-[50svh]
    col-start-1
    col-end-13
    sm:hidden
    overflow-hidden
    [border-radius: 10px]
  `}

  .parallax {
    ${tw`relative!`}
  }

  img {
    ${tw`w-full h-full object-cover`}
  }
`
