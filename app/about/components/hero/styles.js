'use client'

import tw, { styled } from 'twin.macro'

export const HeroSection = tw.section`
  relative
  py-xxl
  bg-azure
  text-klm
  h-[calc(var(--dvh) * 100)]

  xl:py-xxl-xl
`
export const CenterTextWrapper = styled.div`
  ${tw`
    absolute
    left-1/2
    top-1/2
    text-center
    -translate-x-1/2
    -translate-y-1/2
    w-full
    z-10
  `}

  .custom-line-wrapper {
    ${tw`block`}
  }
`
export const MovementWrapper = tw.div`
  absolute
  top-full
  w-full
  h-full
  z-20
  drop-shadow
`
export const StyledCanvas = tw.canvas`
  absolute
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  w-[65vw]
  z-20
  [border-radius: 10px]
`
