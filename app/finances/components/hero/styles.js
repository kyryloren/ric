'use client'

import tw, { styled } from 'twin.macro'

export const HeroSection = styled.section`
  ${tw`
    relative
    bg-azure
    h-[90vh]
    mb-[15%]
  `}

  h1 {
    ${tw`text-klm`}
  }
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

  h1 {
    ${tw`text-klm`}
  }

  .description .line-wrapper {
    ${tw`inline xs:block`}
  }
`
export const ImageWrapper = styled.div`
  ${tw`
    relative
    z-10
    [border-radius: 10px]
    mr-md

    xl:mr-md-xl
  `}

  &:nth-child(1) {
    ${tw`
      h-[20rem]
      w-[20rem]
      md:w-[15vw]
      md:h-[22vw]
    `}
  }
  &:nth-child(2) {
    ${tw`
      h-[20rem]
      w-[20rem]
      md:w-[20vw]
      md:h-[12vw]
    `}
  }
  &:nth-child(3) {
    ${tw`
      h-[20rem]
      w-[20rem]
      md:w-[15vw]
      md:h-[22vw]
    `}
  }
  &:nth-child(4) {
    ${tw`
      h-[20rem]
      w-[20rem]
      md:w-[25vw]
      md:h-[20vw]
    `}
  }
`
