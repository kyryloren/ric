'use client'

import { useIntersectionObserver, useResizeObserver } from 'hooks'
import { useLenis } from 'lenis/react'
import { useTempus } from 'tempus/react'
import tw, { styled } from 'twin.macro'
import { Maths } from 'lib'
import { useRef } from 'react'

const StyledMarquee = styled.div`
  ${tw`relative flex items-center overflow-x-clip whitespace-nowrap`}

  .inner {
    ${tw`flex items-center whitespace-nowrap w-fit shrink-0`}
    transform: translate3d(0, 0, 0);

    > * {
      ${tw`shrink-0`}
    }
  }
`

export default function Marquee({
  children,
  className,
  repeat = 2,
  speed = 1,
  scrollVelocity = true,
  reversed = false,
  pauseOnHover = false,
  onMouseEnter,
  onMouseLeave,
  ...props
}) {
  const [setRectRef, getEntry] = useResizeObserver({
    lazy: true,
  })

  // return
  const elementsRef = useRef([])
  const transformRef = useRef(Math.random() * 1000)
  const isHovered = useRef(false)

  const [setIntersectionRef, intersection] = useIntersectionObserver()

  const lenis = useLenis()

  useTempus((_, deltaTime) => {
    const entry = getEntry()

    if (!intersection?.isIntersecting) return
    if (pauseOnHover && isHovered.current) return

    if (!entry?.borderBoxSize[0]?.inlineSize) return

    let velocity = lenis?.velocity ?? 0
    if (!scrollVelocity) {
      velocity = 0
    }
    velocity = 1 + Math.abs(velocity / 5)

    const offset = deltaTime * (speed * 0.1 * velocity)

    if (reversed) {
      transformRef.current -= offset
    } else {
      transformRef.current += offset
    }

    const width = entry.borderBoxSize[0].inlineSize
    transformRef.current = Maths.modulo(transformRef.current, width)

    for (const node of elementsRef.current) {
      node.style.transform = `translate3d(${-transformRef.current}px,0,0)`
    }
  })

  return (
    <StyledMarquee
      ref={setIntersectionRef}
      className={className}
      onMouseEnter={(e) => {
        isHovered.current = true
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        isHovered.current = false
        onMouseLeave?.(e)
      }}
      {...props}
    >
      {new Array(repeat).fill(children).map((_, i) => (
        <div
          key={`marquee-item-${i}`}
          className={'inner'}
          aria-hidden={i !== 0}
          data-nosnippet={i !== 0 ? '' : undefined}
          ref={(node) => {
            if (!node) return
            elementsRef.current[i] = node

            if (i === 0) setRectRef(node)
          }}
        >
          {children}
        </div>
      ))}
    </StyledMarquee>
  )
}
