'use client'

import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const MenuLayover = styled.div`
  ${tw`fixed top-[0] w-screen h-screen z-30 bg-white py-[6rem]`}

  display: ${({ $menuOpen }) => ($menuOpen ? 'block' : 'none')};
`
export const LinksWrapper = tw.nav`
  flex
  flex-col
  gap-xs

  xl:gap-xs-xl
`
export const MenuLink = styled(Link)`
  ${tw`text-h1 xl:text-h1-xl w-fit`}

  &:hover {
    ${tw`underline`}
  }

  ${({ $disabled }) =>
    $disabled
      ? tw`text-gray pointer-events-none`
      : tw`text-black pointer-events-auto`}
`
export const BottomContact = tw.div`
  absolute
  bottom-gutter
  flex
  flex-col

  xl:bottom-gutter-xl
`
export const SocialsWrapper = tw.div`
  absolute
  bottom-gutter
  right-gutter
  flex
  flex-col
  gap-xxs

  xl:bottom-gutter-xl
  xl:right-gutter-xl
  xl:gap-xxs-xl
`
export const SocialLink = styled.a`
  ${tw`text-black fill-black`}

  svg {
    ${tw`w-md h-auto xl:w-md-xl`}
  }

  &:hover {
    opacity: 0.5;
  }
`
