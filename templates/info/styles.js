'use client'

import tw from 'twin.macro'

export const InfoSection = tw.section`
  relative
  pb-xxl

  xl:pb-xxl-xl
`
export const ColInfoWrapper = tw.div`
  [--width: 0%]
  relative
  flex
  justify-between
  mt-md
  before:content-['']
  before:block
  before:absolute
  before:top-[0]
  before:h-fit
  before:border-t-[1px]
  before:border-t-gray
  before:border-solid
  before:w-[var(--width)]
  pt-lg

  xl:pt-lg-xl
  xl:mt-md-xl
`
export const Col = tw.div`
  flex
  flex-col
  gap-md

  xl:gap-md-xl
`
