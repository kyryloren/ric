'use client'

import tw from 'twin.macro'

export const TechnologySection = tw.section`
  relative
  pb-xxl

  xl:pb-xxl
`
export const TextWrapper = tw.div`
  text-center
  mx-auto
  flex
  flex-col
  gap-sm
  items-center
  mb-lg

  xl:gap-sm
  xl:mb-lg-xl
`
export const ImageWrapper = tw.div`
  relative
  w-full
  h-[80svh]
`
export const ColInfoWrapper = tw.div`
  flex
  justify-between
  mt-md

  xl:mt-md-xl
`
export const Col = tw.div`
  flex
  flex-col
  gap-md

  xl:gap-md-xl
`
