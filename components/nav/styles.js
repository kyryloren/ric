'use client'

import Link from 'next/link'
import { Container } from 'styles'
import tw, { styled } from 'twin.macro'

export const Header = tw.header`
  fixed
  top-[0]
  w-full
  bg-white
  z-40
`
export const CustomContainer = styled(Container)`
  --width: 0%;
  
  ${tw`after:content-['']`}
  ${tw`after:block`}
  ${tw`after:border-b-[1px]`}
  ${tw`after:border-b-gray`}
  ${tw`after:border-solid`}
  ${tw`after:w-[var(--width)]`}
`
export const InnerWrapper = tw.div`
  py-xs
  flex
  items-center
  justify-between

  xl:py-xs-xl
`
export const LogoWrapper = tw(Link)`
  xl:w-[${`${(225 / 1280) * 100}vw`}]
  w-[225px]
`
export const NavWrapper = tw.nav`
  absolute
  top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  flex
  items-center
  gap-xs

  xl:gap-xs-xl
`
export const ButtonsWrapper = tw.div`
  flex
  items-center
  gap-xs

  xl:gap-xs-xl
`
export const OverflowWrapper = tw.div`
  overflow-clip inline-block align-bottom [overflow-clip-margin: 3px]
`
