'use client'

import tw from 'twin.macro'

export const HeroSection = tw.section`
  relative
`
export const TextWrapper = tw.div`
  w-full
  flex
  flex-col
  py-lg
  text-center
  items-center
  justify-center
  gap-md

  xl:py-xl-xl
  xl:gap-md-xl
`
export const ButtonsWrapper = tw.div`
  flex
  gap-xs
  items-center
  justify-center
//   mt-sm
  
  xl:gap-xs-xl
//   xl:mt-sm-xl
`
export const CustomVideo = tw.video`
  w-full
  aspect-video
  [border-radius: 10px]
`
