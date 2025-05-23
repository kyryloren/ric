'use client'

import Link from 'next/link'
import { CustomGrid } from 'styles'
import tw, { styled } from 'twin.macro'

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

  portrait:h-[60vw]
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

  .description {
    ${tw`
      max-w-[50%]
      portrait:max-w-full
    `}
  }

  .book-button,
  .call-button {
    ${tw`border-cocoa w-full text-center xs:text-left xs:w-fit`}
  }
  .book-button {
    ${tw`bg-cocoa text-rose`}
  }
  .call-button {
    ${tw`text-cocoa`}
  }
`
export const BackButton = styled(Link)`
  ${tw`
    flex
    no-underline
    items-center
    gap-xxs

    portrait:mb-lg
    xl:gap-xxs-xl
  `}
  &:hover {
    ${tw`underline`}
  }

  svg {
    ${tw`w-sm xl:w-sm-xl`}
  }
`
