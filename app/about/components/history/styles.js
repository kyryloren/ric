'use client'

import tw, { styled } from 'twin.macro'

export const HistorySection = tw.section`
  relative
  pb-xxl

  xl:pb-xxl-xl
`
export const SectionTextWrapper = tw.div`
  col-start-1
  col-end-7
  flex
  flex-col
  gap-xs

  xl:gap-xs-xl
`
const Card = tw.div`
  flex flex-col justify-between h-[15rem] md:h-[27svw] [border-radius: 10px]
  px-md py-md xl:px-md-xl xl:py-md-xl
`
export const TopCard = tw(Card)`
  col-start-7
  col-end-13
  bg-yellow
  text-zomp
`
export const MiddleLeftCard = tw(Card)`
  col-start-1
  col-end-9
  bg-rose
  text-cocoa
`
export const MiddleRightCard = styled(Card)`
  ${tw`
    col-start-9
    col-end-13
    bg-azure
    text-klm
    items-center
    text-center
  `}

  svg {
    ${tw`w-[90%] h-auto`}
  }
`
export const BottomLeftCard = tw(Card)`
  col-start-1
  col-end-8
  bg-lavender
  text-chrysler
  items-center
  text-center
`
export const BottomRightCard = tw(Card)`
  col-start-8
  col-end-13
  bg-yellow
  text-zomp
`
