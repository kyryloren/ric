'use client'

import Link from 'next/link'
import { CustomGrid } from 'styles'
import tw, { styled } from 'twin.macro'

export const AboutSection = tw.section`
  relative
`
export const TextWrapper = tw.div`
  flex
  flex-col
  items-center
  justify-center
  mx-auto
  text-center
  py-xxl
  max-w-[880px]

  xl:max-w-[${`${(880 / 1280) * 100}vw`}]
  xl:py-xxl-xl
`
export const GridWrapper = styled(CustomGrid)`
  --fr-value-1: 1fr;
  --fr-value-2: 1fr;
  grid-template-columns: var(--fr-value-1) var(--fr-value-2);

  ${tw`py-lg
  xl:py-lg-xl`}
`
export const CardWrapper = styled(Link)`
  ${tw`
    flex
    items-center
    justify-center
    relative
    overflow-hidden
    w-full
    h-[50svh]
    [border-radius: 10px]
  `}
`
export const Overlay = tw.div`
  absolute
  top-[0]
  left-[0]
  w-full
  h-full
  flex
  flex-col
  gap-xs
  z-20
  justify-end
  text-white
  bg-black
  bg-opacity-30
  px-sm
  py-sm

  xl:px-sm-xl
  xl:py-sm-xl
  xl:gap-xs-xl
`
export const CustomVideo = tw.video`
  object-cover
  w-full
  h-full
  scale-150
  [border-radius: inherit]
`
