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

  ${tw`grid-cols-1 md:[grid-template-columns: var(--fr-value-1) var(--fr-value-2)]`}
`
const CardWrapper = styled(Link)`
  ${tw`flex flex-col justify-between h-[15rem] md:h-[25svw] [border-radius: 10px]`}
  ${tw`px-md py-md xl:px-md-xl xl:py-md-xl`}

  h1 {
    ${tw`transition-transform translate-x-0 ease-default duration-500`}
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
  ${tw`bg-azure [border-radius: 10px] h-auto lg:h-[40svw]`}
  grid-template-rows: 1fr auto;

  .copy {
    ${tw`text-gray`}
  }

  ${tw`px-md py-md xl:py-md-xl xl:px-md-xl`}
`
export const FooterTextWrapper = tw.div`
  col-start-1
  col-end-13
  text-blue
  pb-xxl

  sm:pb-0
  sm:col-end-5
`
const FooterCol = tw.div`
  flex
  flex-col
  gap-xl

  xs:gap-md
  xl:gap-md-xl
`
export const LeftColWrapper = tw(FooterCol)`
  col-start-1
  col-end-7

  sm:col-start-5
  sm:col-end-9
  md:col-start-7
`
export const RightColWrapper = tw(FooterCol)`
  col-start-7
  col-end-13

  sm:col-start-9
  sm:col-end-13
  md:col-start-10
`
export const BlackLinkWrapper = tw.div`
  flex
  flex-col
  gap-[1px]
  text-black
  [word-wrap: break-word]
`
export const LinkListWrapper = tw.div`
  flex
  flex-col
  gap-[4px]
  text-gray
`
export const LogoWrapper = styled.div`
  ${tw`
    pt-xxl
    flex
    col-start-1
    col-end-7

    sm:col-start-5
    sm:col-end-9
    md:col-start-7
    md:col-end-10
    lg:col-end-9
    lg:pt-0
  `}

  svg {
    ${tw`w-full`}
  }
`
export const SocialsWrapper = tw.div`
  col-start-9
  col-end-13
  flex
  gap-xxs
  items-center
  pt-xxl
  justify-end

  sm:justify-start
  sm:col-start-10
  sm:col-end-13
  lg:pt-0
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
