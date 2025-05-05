'use client'

import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const ArticlesSection = styled.section`
  ${tw`relative py-xxl xl:py-xxl-xl`}

  .slider .container {
    ${tw`gap-gutter xl:gap-gutter-xl`}
  }
`
export const TitleLine = tw.div`
  flex
  justify-between
  items-center
  w-full
  mb-lg

  xl:mb-lg-xl
`
export const SliderContainer = tw.div`
  flex-[0 0 66%]

  sm:flex-[0 0 40%]
`
export const CardWrapper = tw(Link)`
  flex
  flex-col
  gap-xs

  xl:gap-xs
`
export const ImageWrapper = tw.div`
  relative
  w-full
  [border-radius: 10px]
  h-[20rem]

  sm:h-[30svw]
`
