'use client'

import { P } from 'styles'
import tw, { styled } from 'twin.macro'

export const ReviewsSection = tw.section`
  relative
  py-xxl

  xl:py-xxl-xl
`
export const TextWrapper = tw.div`
  text-center
  mx-auto
  flex
  flex-col
  gap-sm
  items-center
  mb-lg

  xl:gap-sm
  xl:mb-lg-xl
`
export const Col = styled.div`
  ${tw`grid grid-cols-1 gap-sm xl:gap-sm-xl`}

  &:nth-child(1) {
    ${tw`col-start-1 col-end-5`}
  }
  &:nth-child(2) {
    ${tw`col-start-5 col-end-9`}
  }
  &:nth-child(3) {
    ${tw`col-start-9 col-end-13`}
  }
`
export const ImageWrapper = styled.div`
  ${tw`relative w-full h-full min-h-[350px] overflow-hidden [border-radius: 10px]
  xl:min-h-[${`${(350 / 1280) * 100}vw`}]
  `}
`
export const CardWrapper = styled.div`
  ${tw`flex min-h-[350px] flex-col justify-between px-md py-md [border-radius: 10px] xl:px-md-xl xl:py-md-xl xl:min-h-[${`${(350 / 1280) * 100}vw`}]`}

  ${({ $orange, $blue, $yellow }) =>
    $orange
      ? tw`bg-rose text-cocoa`
      : $blue
        ? tw`bg-azure text-klm`
        : $yellow
          ? tw`bg-yellow text-zomp`
          : tw`bg-lavender text-chrysler`}
`
export const CustomQuoteText = styled.q`
  ${tw`relative text-h4 xl:text-h4-xl`}

  &::before {
    ${tw`absolute -left-[3.5%]`}
  }
`
export const CreditWrapper = tw.div`
  flex
  items-center
  gap-xs

  xl:gap-xs-xl
`
export const PfP = styled.div`
  ${tw`relative w-[50px] h-[50px] [border-radius: 50%] overflow-hidden`}

  img {
    ${tw`w-full h-full object-cover [border-radius: inherit]`}
  }
`
export const CreditName = tw(P)`
  text-black
  font-bold
`
export const CreditTextWrapper = tw.div`
  flex
  flex-col
  text-gray
`
