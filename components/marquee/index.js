'use client'

import { StyledMarquee } from './styles'
import { useIntersectionObserver } from 'hooks'

const Marquee = ({
  children,
  repeat = 2,
  duration = 5,
  offset = 0,
  $inverted = false,
  animationStart = true,
  style,
  ...props
}) => {
  const [setIntersectionRef, intersection] = useIntersectionObserver()

  return (
    <StyledMarquee
      ref={setIntersectionRef}
      {...props}
      className={
        `marquee ` +
        `${$inverted && 'inverted'}${
          intersection?.isIntersecting && ' running'
        }`
      }
      style={{
        '--duration': duration + 's',
        '--offset': (offset % 100) + '%',
        '--animation-status':
          intersection?.isIntersecting && animationStart ? 'running' : 'paused',
      }}
    >
      {new Array(repeat).fill(children).map((_, i) => (
        <div key={i} className="inner">
          {children}
        </div>
      ))}
    </StyledMarquee>
  )
}

export default Marquee
