'use client'

import { useEffect, useRef } from 'react'
import { useRect } from 'hooks'
import { useLenis } from 'lenis/react'
import { mapRange } from 'lib/maths'
import tw, { styled } from 'twin.macro'

const ScrollbarWrapper = styled.div`
  ${tw`fixed right-[0] bottom-[0] top-[0] z-50`}

  .inner {
    ${tw`h-full relative`};
  }

  .thumb {
    ${tw`absolute right-[0] min-h-[150px] w-[8px] bg-gray cursor-grab`}
  }

  @include mobile {
    display: none;
  }
`

export default function Scrollbar() {
  const thumbRef = useRef()
  const lenis = useLenis()
  const [innerMeasureRef, { height: innerHeight }] = useRect()
  const [thumbMeasureRef, { height: thumbHeight }] = useRect()

  useLenis(
    ({ scroll, limit }) => {
      const progress = scroll / limit

      thumbRef.current.style.transform = `translate3d(0,${
        progress * (innerHeight - thumbHeight)
      }px,0)`
    },
    [innerHeight, thumbHeight],
  )

  useEffect(() => {
    let start = null

    function onPointerMove(e) {
      if (!start) return
      e.preventDefault()

      const scroll = mapRange(
        start,
        innerHeight - (thumbHeight - start),
        e.clientY,
        0,
        lenis.limit,
      )
      lenis.scrollTo(scroll, { immediate: true })
    }

    function onPointerDown(e) {
      start = e.offsetY
    }

    function onPointerUp() {
      start = null
    }

    thumbRef.current?.addEventListener('pointerdown', onPointerDown, false)
    window.addEventListener('pointermove', onPointerMove, false)
    window.addEventListener('pointerup', onPointerUp, false)

    return () => {
      thumbRef.current?.removeEventListener('pointerdown', onPointerDown, false)
      window.removeEventListener('pointermove', onPointerMove, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }
  }, [lenis, innerHeight])

  return (
    <ScrollbarWrapper>
      <div ref={innerMeasureRef} className="inner">
        <div
          className="thumb"
          ref={(node) => {
            thumbRef.current = node
            thumbMeasureRef(node)
          }}
        />
      </div>
    </ScrollbarWrapper>
  )
}
