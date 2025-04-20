'use client'

import tw, { styled } from 'twin.macro'

export const HistorySection = tw.section`
  relative
  pb-xxl

  xl:pb-xxl-xl
`
export const SectionTextWrapper = tw.div`
  col-start-1
  col-end-13
  flex
  flex-col
  gap-xs

  sm:col-end-7
  xl:gap-xs-xl
`
const Card = tw.div`
  flex flex-col justify-between h-[20rem] sm:h-[70svw] md:h-[40svw] lg:h-[27svw] [border-radius: 10px]
  px-md py-md xl:px-md-xl xl:py-md-xl
`
export const TopCard = tw(Card)`
  col-start-1
  col-end-13
  bg-yellow
  text-zomp

  sm:col-start-7
`
export const MiddleLeftCard = tw(Card)`
  col-start-1
  col-end-13
  bg-rose
  text-cocoa

  sm:col-end-9
`
export const MiddleRightCard = styled(Card)`
  ${tw`
    col-start-1
    col-end-13
    bg-azure
    text-klm
    items-center
    text-center

    sm:col-start-9
  `}

  svg {
    ${tw`w-[45%] sm:w-[90%] h-auto`}
  }
`
export const BottomLeftCard = tw(Card)`
  col-start-1
  col-end-13
  bg-lavender
  text-chrysler
  items-center
  text-center

  sm:col-end-8
`
export const BottomRightCard = tw(Card)`
  col-start-1
  col-end-13
  bg-yellow
  text-zomp

  sm:col-start-8
`
