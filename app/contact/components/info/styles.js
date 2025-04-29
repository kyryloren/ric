'use client'

import { CustomGrid } from 'styles'
import tw, { styled } from 'twin.macro'

export const InfoSection = tw.section`
  relative
  pb-sm

  xl:pb-sm-xl
`
export const GridWrapper = tw(CustomGrid)`
  sm:grid-rows-[auto 1fr]
  lg:grid-rows-[auto auto]
`
const CardWrapper = tw.div`
  flex
  flex-col
  gap-sm
  px-md
  py-md
  w-full
  [border-radius: 10px]

  xl:gap-sm-xl
  xl:px-md-xl
  xl:py-md-xl
`
export const HoursCardWrapper = tw.div`
  grid
  [grid-auto-rows: auto]
  gap-sm
  col-start-1
  col-end-13

  sm:col-end-6
  sm:row-start-1
  sm:row-end-2

  md:row-end-3
  md:col-end-4

  xl:gap-sm-xl
`
export const HoursList = tw.div`
  flex
  flex-col
  gap-xxs

  xl:gap-xxs-xl
`
export const TimeItemWrapper = tw.div`
  grid
  [grid-template-columns: 1fr 1fr]

  xs:[grid-template-columns: 1fr 2fr]
  sm:[grid-template-columns: 2fr 1fr]
  lg:[grid-template-columns: 1fr 1fr]
  xl:[grid-template-columns: 3fr 2fr]
`
export const HoursCard = tw(CardWrapper)`
  bg-azure
  text-blue
`
export const ContactCardsWrapper = tw.div`
  col-start-1
  col-end-13
  grid
  gap-sm

  sm:grid-cols-3
  sm:row-start-2
  sm:row-end-3
  md:row-start-1
  md:row-end-2
  md:col-start-4
  lg:grid-cols-1
  lg:row-end-3
  lg:[grid-auto-rows: auto]
  lg:col-end-7
  xl:gap-sm-xl
`
export const ContactCard = tw(CardWrapper)`
  w-full
  bg-lavender
  text-chrysler
`
export const ReviewCard = tw(CardWrapper)`
  bg-azure
  text-zomp
`
export const MapCard = styled.div`
  ${tw`
    col-start-1
    col-end-13
    overflow-hidden
    [border-radius: 10px]
    h-[20rem]

    sm:h-full
    sm:col-start-6
    sm:row-start-1
    sm:row-end-2

    md:row-start-2
    md:row-end-3
    md:col-start-4

    lg:row-start-1
    lg:col-start-7
  `}

  iframe {
    ${tw`w-full h-full [border-radius: inherit]`}
  }
`
