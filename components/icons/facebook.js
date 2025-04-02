import { forwardRef } from 'react'

const IconFacebook = forwardRef((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 19 19"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#facebook)">
      <path
        fill="#020202"
        d="M9.5.003C4.2856.003.019 4.26.019 9.503c0 4.7405 3.4701 8.6751 8.002 9.3862v-6.6368H5.613V9.503H8.021V7.4076c0-2.3797 1.4127-3.6881 3.5839-3.6881 1.0334 0 2.1142.1801 2.1142.1801v2.3419h-1.1946c-1.1756 0-1.5454.73-1.5454 1.479V9.503h2.6358l-.4267 2.7495h-2.2091v6.6368a9.4814 9.4814 0 0 0 8.002-9.3862c0-5.243-4.2664-9.5-9.481-9.5Z"
      />
    </g>
    <defs>
      <clipPath id="facebook">
        <path fill="#fff" d="M0 .003h19V18.889H0z" />
      </clipPath>
    </defs>
  </svg>
))

export default IconFacebook
