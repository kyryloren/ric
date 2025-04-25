'use client'

import { CustomGrid } from 'styles'
import tw from 'twin.macro'

export const AboutSection = tw.section`
  relative
  py-xxl

  xl:py-xxl-xl
`
export const TextWrapper = tw.div`
  w-full
  flex
  flex-col
  pb-lg

  sm:text-center
  sm:items-center
  xl:pb-lg-xl
`
export const ColInfoWrapper = tw(CustomGrid)`
  [--width: 0%]
  relative
  before:content-['']
  before:block
  before:absolute
  before:top-0
  before:h-fit
  before:border-t-[1px]
  before:border-t-gray
  before:border-solid
  before:w-[var(--width)]
  pt-lg
  gap-y-lg-xl

  xl:gap-y-lg-xl
  xl:pt-lg-xl
`
export const Col = tw.div`
  flex
  flex-col
  gap-md
  w-full
  col-span-6
  mt-lg

  lg:mt-0
  lg:col-span-4
  xl:gap-md-xl
`
