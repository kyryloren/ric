'use client'

import tw, { styled } from 'twin.macro'

export const HeroSection = tw.section`
  relative
`
export const TextWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    py-xxl
    text-left
    justify-center
    gap-md

    sm:text-center
    sm:items-center
    sm:py-lg

    xl:py-lg-xl
    xl:gap-md-xl
  `}

  .description .line-wrapper {
    ${tw`inline xs:block`}
  }
`
export const ButtonsWrapper = tw.div`
  flex
  gap-xs
  items-center

  sm:justify-center
  
  xl:gap-xs-xl
`
export const CustomVideo = tw.video`
  w-full
  aspect-video
  [border-radius: 10px]
`
