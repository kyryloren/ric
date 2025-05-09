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
    z-10
    left-gutter
    top-1/2
    -translate-y-1/2
    
    xs:w-full
    xs:left-1/2
    xs:-translate-x-1/2
    xs:text-center
  `}

  .custom-line-wrapper {
    ${tw`inline-block pt-xxs sm:pt-0 sm:block`}
  }
`
export const MovementWrapper = tw.div`
  absolute
  top-full
  w-full
  h-full
  z-20
  drop-shadow
  hidden

  xs:block
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
export const BottomTextWrapper = styled.div`
  ${tw`
    absolute
    z-10
    left-gutter
    bottom-[10%]

    xs:bottom-gutter
    xs:w-full
    xs:left-1/2
    xs:-translate-x-1/2
    xs:text-center
  `}

  .custom-line-wrapper {
    ${tw`block`}
  }
`
