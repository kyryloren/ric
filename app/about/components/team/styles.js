'use client'

import tw from 'twin.macro'

export const TeamSection = tw.section`
  relative
  py-xxl

  xl:py-xxl-xl
`
export const StickyWrapper = tw.div`
  col-start-1
  col-end-7
  h-fit
  flex
  flex-col
  gap-xxs

  xl:gap-xxs-xl
`
export const StyledCanvas = tw.canvas`
  w-full
  [border-radius: 10px]
`

export const TextWrapper = tw.section`
  col-start-10
  col-end-13
`
