'use client'

import { CustomGrid, P } from 'styles'
import tw, { styled } from 'twin.macro'

export const ReviewsSection = styled.section`
  ${tw`relative py-xxl xl:py-xxl-xl`}

  .slider {
    ${tw`mt-lg md:hidden`}
  }
`
export const DesktopGrid = tw(CustomGrid)`
  hidden

  mt-lg
  md:grid
  xl:mt-lg-xl
`
export const Col = styled.div`
  ${tw`grid grid-cols-1 gap-sm will-change-transform xl:gap-sm-xl`}

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
export const SlideContainer = tw.div`
  flex-[0 0 100%]

  xs:flex-[0 0 70%]
  mr-gutter
`
export const CardWrapper = styled.div`
  ${tw`flex min-h-[350px] flex-col justify-between px-md py-md [border-radius: 10px] `}
  ${tw`xl:px-md-xl xl:py-md-xl xl:min-h-[${`${(350 / 1280) * 100}vw`}]`}

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
    ${tw`absolute -left-[0.6rem] md:-left-[0.8rem]`}
  }
`
export const CreditWrapper = tw.div`
  flex
  items-center
  gap-xs

  xl:gap-xs-xl
`
export const PfP = tw.div`
  relative
  w-[50px]
  h-[50px]
  [border-radius: 50%]
  overflow-hidden
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
export const SlideButtonsWrapper = styled.div`
  ${tw`flex gap-xs mt-gutter md:hidden`}

  button {
    svg {
      ${tw`w-md h-md`}
    }
  }
`
