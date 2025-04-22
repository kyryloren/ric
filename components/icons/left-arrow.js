import { forwardRef } from 'react'

const IconLeftArrow = forwardRef((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="4.51 9 24.49 14"
    ref={ref}
    {...props}
  >
    <path
      d="M6 16h22M11.515 22l-6-6 6-6"
      style={{
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
    />
  </svg>
))

export default IconLeftArrow
