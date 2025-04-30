'use client'

import tw, { styled } from 'twin.macro'

export const HeaderWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-col
  `}

  ${({ $size }) =>
    $size === 'lg' ? tw`gap-md xl:gap-md-xl` : tw`gap-sm xl:gap-sm-xl`}
  ${({ $padding }) => $padding && tw`py-xxl sm:py-lg xl:py-lg-xl`}
  ${({ $center }) =>
    $center && tw`justify-center sm:text-center sm:items-center`}

  .description .line-wrapper {
    ${tw`inline xs:block`}
  }
`
export const ButtonsWrapper = styled.div`
  ${tw`
    flex
    items-center
    gap-xs

    xl:gap-xs-xl
  `}

  ${({ $center }) => $center && tw`sm:justify-center`}
`
