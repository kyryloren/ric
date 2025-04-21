'use client'

import tw from 'twin.macro'

export const WhoSection = tw.section`
  relative
  py-xxl

  xl:py-xxl-xl
`
export const TextWrapper = tw.div`
  flex
  flex-col
  items-center
  justify-center
  mx-auto
  max-w-[790px]

  sm:text-center

  xl:max-w-[${`${(790 / 1280) * 100}vw`}]
`
export const ImageWrapper = tw.div`
  relative
  w-full
  [border-radius: 10px]
  h-[60vw]
  pt-xxl
  overflow-hidden

  xl:pt-xxl-xl
`
