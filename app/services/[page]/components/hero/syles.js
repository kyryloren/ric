'use client'

import Link from 'next/link'
import { CustomGrid } from 'styles'
import tw, { styled, theme } from 'twin.macro'

export const HeroSection = tw.section`
  relative
  bg-rose
  text-cocoa
  py-lg

  xl:py-lg-xl
`

// first declare your two halves…
export const ImageWrapper = tw.div`
  col-start-1
  col-end-6
  w-full
  h-[70vh]
  max-h-[100rem]
  [border-radius: 10px]

  portrait:[grid-row: 2]
  portrait:col-end-13
`

export const RightCol = tw.div`
  col-start-6
  col-end-13
  flex
  flex-col
  justify-between
  py-lg
  h-full

  portrait:[grid-row: 1]
  portrait:col-start-1
  xl:py-lg-xl
`

export const GridWrapper = styled(CustomGrid)`
  ${tw`items-center`}
`

export const TextWrapper = tw.div`
  flex
  flex-col
  gap-md

  xl:gap-md-xl
`

export const ParagraphWrapper = tw.div`
  max-w-[50%]

  portrait:max-w-full
`

export const ButtonWrapper = styled.div`
  ${tw`
    flex
    gap-xs
    xl:gap-xs-xl
  `}
  .primary,
  .secondary {
    ${tw`border-cocoa`}
  }
  .primary {
    ${tw`bg-cocoa text-rose`}
  }
  .secondary {
    ${tw`text-cocoa`}
  }
`

export const BackButton = styled(Link)`
  ${tw`
    flex
    no-underline
    items-center
    gap-xxs
    transition-transform
    ease-default
    duration-500

    portrait:mb-md
    xl:gap-xxs-xl
  `}
  &:hover {
    ${tw`transform translate-x-xxs xl:translate-x-xxs-xl`}
  }
  svg {
    ${tw`w-sm xl:w-sm-xl`}
  }
`
