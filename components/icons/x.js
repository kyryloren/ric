import { forwardRef } from 'react'

const IconX = forwardRef((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 19 20"
    ref={ref}
    {...props}
  >
    <rect width={19} height={19} y={0.9463} fill="#020202" rx={1} />
    <path
      fill="#FBFBF6"
      d="M13.2709 4.6592h1.9927l-4.3753 4.9116L16 16.2335h-4.0114L8.848 12.1847l-3.5955 4.0488H3.2598l4.6352-5.2533-4.8951-6.321h4.111l2.8374 3.6986 3.3226-3.6986Zm-.6975 10.4212h1.1047L6.5304 5.7696h-1.187l7.23 9.3108Z"
    />
  </svg>
))

export default IconX
