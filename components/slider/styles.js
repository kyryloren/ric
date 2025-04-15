'use client'

import tw, { styled } from 'twin.macro'

export const StyledSlider = styled.div`
  ${tw`overflow-hidden`}

  &:global(.is-draggable) {
    ${tw`cursor-grab`}
  }

  &:global(.is-dragging) {
    ${tw`cursor-grabbing`}
  }
`
export const Container = tw.div`
  flex
`
