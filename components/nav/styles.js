'use client'

import Link from 'next/link'
import { Container } from 'styles'
import tw, { styled } from 'twin.macro'

export const Header = tw.header`
  fixed
  top-0
  w-full
  bg-white
  z-40
`
export const CustomContainer = styled(Container)`
  --width: 0%;

  ${tw`relative z-[31]`}
  ${tw`after:content-['']`}
  ${tw`after:block`}
  ${tw`after:border-b-[1px]`}
  ${tw`after:border-b-gray`}
  ${tw`after:border-solid`}
  ${tw`after:w-[var(--width)] `}
`
export const InnerWrapper = tw.div`
  py-xs
  flex
  items-center
  justify-between

  xl:py-xs-xl
`
export const LogoWrapper = styled(Link)`
  ${tw`
    xl:w-[${`${(225 / 1280) * 100}vw`}]
    w-[225px]
  `}
`
export const NavWrapper = tw.nav`
  absolute
  top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  hidden
  items-center
  gap-xs

  xl:gap-xs-xl
  lg:flex
`
export const ButtonsWrapper = styled.div`
  ${tw`flex items-center gap-xs xl:gap-xs-xl`}

  .call {
    ${tw`hidden sm:block`}
  }
  .book {
    ${tw`hidden xs:block`}
  }
`
export const OverflowWrapper = tw.div`
  overflow-clip inline-block align-bottom [overflow-clip-margin: 3px]
`
export const MenuWrapperButton = tw.div`
  relative
  ease-default
  cursor-pointer

  border-[1px]
  border-solid
  border-gray
  [border-radius: 5px]

  px-sm
  py-xs
  
  lg:hidden
`
export const HamburgerWrapper = styled.div`
  ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[12px]`}

  span:nth-child(1) {
    transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
    left: ${({ $open }) => ($open ? '2px' : '0')};
    top: ${({ $open }) => ($open ? '-2px' : '0')};
  }
  span:nth-child(2) {
    width: ${({ $open }) => $open && '0%'};
    opacity: ${({ $open }) => $open && '0'};
  }
  span:nth-child(3) {
    transform: ${({ $open }) => ($open ? 'rotate(-45deg)' : 'rotate(0)')};
    left: ${({ $open }) => ($open ? '2px' : '0')};
    top: ${({ $open }) => ($open ? '12px' : '10px')};
  }
`
export const HamburgerLine = styled.span`
  ${tw`block absolute h-[2px] w-full bg-black opacity-100 left-0`}
  ${tw`rotate-0 transition-all duration-500 ease-default [transform-origin: left center]`}

  &:nth-child(1) {
    ${tw`top-0`}
  }
  &:nth-child(2) {
    ${tw`top-[5px]`}
  }
  &:nth-child(3) {
    ${tw`top-[10px]`}
  }
`
export const FloatingNavButton = tw.div`
  fixed bottom-gutter right-gutter
  
  xs:hidden
`
