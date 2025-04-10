import { forwardRef } from 'react'

const IconRightArrow = forwardRef((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 15 14"
    ref={ref}
    {...props}
  >
    <path
      fill="#020202"
      d="m7.6087 14-1.1685-1.206 5.462-4.9026H0V6.1086h11.9022L6.4402 1.206 7.6087 0 15 6.9476v.1048L7.6087 14Z"
    />
  </svg>
))

export default IconRightArrow
