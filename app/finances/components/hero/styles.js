'use client'

import tw, { styled } from 'twin.macro'

export const HeroSection = tw.section`
  relative
  bg-azure
  h-[90vh]
  mb-[15%]
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
const ImageWrapper = tw.div`
  relative
  z-10
  [border-radius: 10px]
  mr-md

  xl:mr-md-xl
`
export const ImageOne = tw(ImageWrapper)`
  h-[20rem]
  w-[20rem]
  md:w-[15vw]
  md:h-[22vw]
`
export const ImageTwo = tw(ImageWrapper)`
  h-[20rem]
  w-[20rem]
  md:w-[40vw]
  md:h-[25vw]
`
export const ImageThree = tw(ImageWrapper)`
  h-[20rem]
  w-[20rem]
  md:w-[20vw]
  md:h-[12vw]
`
export const ImageFour = tw(ImageWrapper)`
  h-[20rem]
  w-[20rem]
  md:w-[25vw]
  md:h-[20vw]
`
