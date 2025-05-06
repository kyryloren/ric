'use client'

import tw, { styled } from 'twin.macro'

export const StyledMarquee = styled.div`
  ${tw`relative flex items-center overflow-x-clip whitespace-nowrap`}

  @include reduced-motion {
    --duration: 50s !important;
  }

  .inner {
    ${tw`flex items-center whitespace-nowrap w-fit shrink-0 will-change-transform`}
    animation: marquee var(--duration) linear infinite;
    animation-play-state: var(--animation-status);

    > * {
      ${tw`shrink-0`}
    }
  }

  &.inverted {
    .inner {
      animation: marquee-inverted var(--duration) linear infinite;
      animation-play-state: var(--animation-status);
    }
  }

  @keyframes marquee {
    0% {
      transform: translate3d(calc(var(--offset) * -1), 0, 0);
    }

    100% {
      transform: translate3d(calc(-100% - var(--offset)), 0, 0);
    }
  }

  @keyframes marquee-inverted {
    0% {
      transform: translate3d(calc(-100% - var(--offset)), 0, 0);
    }

    100% {
      transform: translate3d(calc(var(--offset) * -1), 0, 0);
    }
  }
`
