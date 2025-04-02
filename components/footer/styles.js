'use client'

import Link from 'next/link'
import { CustomGrid } from 'styles'
import tw, { styled } from 'twin.macro'

export const BottomSectionWrapper = tw.footer`
  relative
  pb-gutter

  xl:pb-gutter-xl
`
export const InnerWrapper = tw.div`
  flex
  flex-col
  gap-sm

  xl:gap-sm-xl
`
export const CTAWrapper = styled(CustomGrid)`
  --fr-value-1: 2fr;
  --fr-value-2: 1fr;
  grid-template-columns: var(--fr-value-1) var(--fr-value-2);
`
const CardWrapper = styled(Link)`
  ${tw`flex flex-col justify-between h-[25svw] [border-radius: 10px]`}
  ${tw`px-md py-md xl:px-md-xl xl:py-md-xl`}

  h1 {
    ${tw`transition-transform translate-x-[0] ease-default duration-500`}
  }

  &:hover {
    h1 {
      ${tw`transform translate-x-xs xl:translate-x-xs-xl`}
    }
  }
`
export const LeftCard = tw(CardWrapper)`
  bg-rose
  text-cocoa
`
export const RightCard = tw(CardWrapper)`
  bg-yellow
  text-zomp
`

export const FooterWrapper = styled(CustomGrid)`
  ${tw`bg-azure [border-radius: 10px] h-[40svw]`}
  grid-template-rows: 1fr auto;

  .copy {
    ${tw`text-gray`}
  }

  ${tw`py-md xl:py-md-xl`}
`
export const FooterTextWrapper = tw.div`
  pl-md
  col-start-1
  col-end-5
  text-blue

  xl:pl-md-xl
`
const FooterCol = tw.div`
  flex
  flex-col
  gap-md

  xl:gap-md-xl
`
export const LeftColWrapper = tw(FooterCol)`
  col-start-7
  col-end-9
`
export const RightColWrapper = tw(FooterCol)`
  col-start-10
  col-end-13
`
export const BlackLinkWrapper = tw.div`
  flex
  flex-col
  gap-[1px]
  text-black
`
export const LinkListWrapper = tw.div`
  flex
  flex-col
  gap-[4px]
  text-gray
`
export const LogoWrapper = tw.div`
  col-start-7
  col-end-9
`
export const SocialsWrapper = tw.div`
  col-start-10
  col-end-13
  flex
  gap-xxs
  items-center

  xl:gap-xxs-xl
`
export const SocialLink = styled.a`
  ${tw`text-black fill-black`}

  svg {
    ${tw`w-sm h-auto xl:w-sm-xl`}
  }

  &:hover {
    opacity: 0.5;
  }
`
