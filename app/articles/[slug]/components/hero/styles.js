'use client'

import tw, { styled } from 'twin.macro'

export const HeroSection = tw.section`
  relative
  pb-xxl

  xl:pb-xxl-xl
`
export const InfoWrapper = styled.div`
  ${tw`
    flex
    flex-col
    gap-0
    
    sm:gap-md
    sm:flex-row
    xl:gap-md-xl
  `}

  p:nth-child(2n) {
    ${tw`hidden sm:block`}
  }
`
export const ImageWrapper = tw.div`
  w-full
  h-[80svw]
  [border-radius: 10px]

  sm:h-[50svw]
`
