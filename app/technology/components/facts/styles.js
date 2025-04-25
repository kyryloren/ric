'use client'

import { CustomGrid } from 'styles'
import tw, { styled } from 'twin.macro'

export const FactsSection = tw.section`
  relative
`
export const CustomRow = tw(CustomGrid)`
`
export const LeftCol = tw.div`
  col-start-1
  col-end-13
  relative
  h-full
  items-center
  flex
  flex-col

  md:flex-row
  md:col-end-7
`
export const RightCol = tw.div`
  col-start-8
  col-end-12
  items-center
  justify-center
  h-screen
  w-full
  hidden

  md:flex
`
export const ImageWrapper = tw.div`
  w-full
  h-[30rem]
  [border-radius: 10px]

  lg:h-[50vh]
  xl:h-[70vh]
  md:absolute
`
export const TextWrapper = styled.div`
  ${tw`
    w-full
    flex-col
    justify-center
    gap-xxs
    pb-xxl
    pt-md

    md:py-0
    md:pb-0
    xl:gap-xxs-xl
  `}

  .line-wrapper {
    ${tw`
      inline
      md:block
    `}
  }

  ${({ $hide }) => ($hide ? tw`flex md:hidden` : tw`hidden md:flex`)}
`
