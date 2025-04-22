'use client'

import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const ServicesSection = tw.section`
  relative
  py-xxl

  xl:py-xxl-xl
`
export const TextWrapper = tw.div`
  col-start-1
  col-end-13
  flex
  flex-col
  gap-xxs

  md:col-end-7
  md:gap-sm
  xl:gap-xs-xl
`
export const ServicesCol = tw.div`
  flex
  flex-col
  gap-xs
  col-start-1
  col-end-13
  pt-gutter

  md:pt-0
  md:col-start-7
  xl:gap-xs-xl
`
export const ServiceButton = styled(Link)`
  ${tw`flex justify-between items-center py-sm px-xs `}
  ${tw`border-[1px] border-solid border-gray [border-radius: 10px]`}
  ${tw`xl:py-sm-xl xl:px-xs-xl`}
  
  .text {
    ${tw`transition-transform translate-x-0 ease-default duration-500`}
  }

  svg {
    ${tw`transition-transform ease-default duration-500`}
  }

  &:hover {
    .text {
      ${tw`transform translate-x-xs xl:translate-x-xs-xl`}
    }

    svg {
      ${tw`transform -translate-x-xs xl:-translate-x-xs-xl`}
    }
  }

  svg {
    ${tw`w-sm xl:w-sm-xl`}
  }
`
export const AllServicesButton = styled(Link)`
  ${tw`flex ml-auto w-fit items-center px-xs gap-xxs text-gray`}
  ${tw`xl:px-xs-xl xl:gap-xxs-xl`}
  
  svg {
    ${tw`w-sm xl:w-sm-xl`}
  }
  .text,
  svg {
    ${tw`transition-transform translate-x-0 ease-default duration-500`}
  }
  &:hover {
    .text,
    svg {
      ${tw`transform -translate-x-xs xl:-translate-x-xs-xl`}
    }
  }
`
