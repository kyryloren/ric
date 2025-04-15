'use client'

import { useEffect, useRef, cloneElement, forwardRef } from 'react'
import { gsap } from 'gsap'
import { useWindowSize } from 'react-use'
import { theme } from 'twin.macro'

const Parallax = forwardRef(function Parallax(
  {
    children,
    speed = 1,
    id = 'parallax',
    position,
    direction = 'vertical',
    trigger = useRef(),
    $toggleMobile,
  },
  ref,
) {
  const target = useRef()
  const timeline = useRef()
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    const y = windowWidth * speed * 0.1
    const x = windowWidth * speed * 0.1
    const mm = gsap.matchMedia()

    timeline.current = gsap
      .timeline({
        scrollTrigger: {
          id,
          trigger:
            position === 'top'
              ? document.body
              : ref?.current || trigger.current,
          scrub: true,
          start: position === 'top' ? 'top top' : 'top bottom',
          end: position === 'top' ? '+=100%' : 'bottom top',
        },
      })
      .fromTo(
        target.current,
        direction === 'vertical'
          ? { y: position === 'top' ? 0 : -y }
          : { x: position === 'top' ? 0 : -x },
        direction === 'vertical'
          ? { y: y, ease: 'none' }
          : { x: x, ease: 'none' },
      )

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
        mobile: `(max-width: ${theme`screens.sm`})`,
      },
      (context) => {
        const { reduceMotion, mobile } = context.conditions

        if (reduceMotion || mobile) {
          timeline?.current?.from(target.current, { y: 0 })
          timeline?.current?.kill()
        }
      },
    )

    return () => {
      timeline?.current?.kill()
    }
  }, [id, speed, position, windowWidth, target])

  if ($toggleMobile && windowWidth <= 600) {
    return children
  }

  return <>{cloneElement(children, { ref: target })}</>
})

export default Parallax
