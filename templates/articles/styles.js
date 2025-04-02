'use client'

import Link from 'next/link'
import tw from 'twin.macro'

export const ArticlesSection = tw.section`
  relative
  py-xxl

  xl:py-xxl-xl
`
export const TitleLine = tw.div`
  flex
  justify-between
  items-center
  w-full
  mb-lg

  xl:mb-lg-xl
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
  h-[30svw]
  [border-radius: 10px]
`
