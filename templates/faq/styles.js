'use client'

import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const FAQSection = tw.section`
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
export const AccordionCol = tw.div`
  flex
  flex-col
  col-start-1
  col-end-13
  pt-gutter

  md:pt-0
  md:col-start-7
`
export const AccordionItemWrapper = tw.div`
  flex
  flex-col
  border-b
  border-solid
  border-gray
`
export const AccordionItemHeader = styled.div`
  ${tw`flex justify-between items-center py-sm cursor-pointer xl:py-sm-xl`}

  ${(props) => (props.$active ? tw`text-blue` : tw`text-black`)}
`
export const AccordionItemIconWrapper = tw.div`
  flex
  items-center
`
export const AccordionItemIconLine = tw.span`
  w-xs
  h-[3px]
  bg-black

  xl:w-xs-xl
`
export const AccordionItemContent = tw.div`
  overflow-hidden
`
