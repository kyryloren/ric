import { forwardRef } from 'react'

const IconRightArrow = forwardRef((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="Layer_1"
    xmlSpace="preserve"
    viewBox="3 9 24.49 14"
    ref={ref}
    {...props}
  >
    <line
      style={{
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
      x1={26}
      y1={16}
      x2={4}
      y2={16}
    />
    <polyline
      style={{
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
      points="20.485,10 26.485,16 20.485,22 "
    />
  </svg>
))

export default IconRightArrow
