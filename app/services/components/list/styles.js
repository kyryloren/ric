'use client'

import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const ListSection = tw.section`
  relative
  pb-xxl

  xl:pb-xxl-xl
`
export const TextWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    py-xxl
    text-left
    justify-center
    gap-md

    sm:text-center
    sm:items-center
    sm:py-lg

    xl:py-lg-xl
    xl:gap-md-xl
  `}

  .line-wrapper {
    ${tw`inline xs:block`}
  }
`
export const HollowCard = styled(Link)`
  ${tw`
    col-span-12
    flex
    flex-col
    justify-between
    [border-radius: 10px]
    border-solid
    border-[1px]
    px-sm
    py-sm
    h-[15rem]

    sm:mb-xs
    sm:col-span-6
    sm:h-[20rem]
    lg:col-span-4
    lg:h-[30svw]
    xl:h-[20svw]
    xl:px-sm-xl
    xl:py-sm-xl
    xl:mb-xs-xl
  `}

  ${({ $custom }) => ($custom ? tw`border-blue text-blue` : tw`border-gray`)}
`
export const CardTextWrapper = tw.div`
  flex
  flex-col
  gap-xxs

  xl:gap-xxs-xl
`
export const ServiceButton = styled.button`
  ${tw`flex justify-between items-center py-xxs px-xs `}
  ${tw`border-[1px] border-solid [border-radius: 5px]`}
  ${tw`xl:py-xxs-xl xl:px-xs-xl`}

  ${({ $custom }) => ($custom ? tw`border-blue text-blue` : tw`border-gray`)}

  .link-text {
    ${tw`transition-transform translate-x-0 ease-default duration-500`}
  }

  svg {
    ${tw`transition-transform ease-default duration-500 w-sm xl:w-sm-xl`}
  }

  &:hover {
    .link-text {
      ${tw`transform translate-x-xs xl:translate-x-xs-xl`}
    }

    svg {
      ${tw`transform -translate-x-xs xl:-translate-x-xs-xl`}
    }
  }
`
