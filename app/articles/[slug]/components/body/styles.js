'use client'

import tw, { styled } from 'twin.macro'

export const ArticleBody = styled.article`
  ${tw`relative [max-width: 840px] mx-auto`}

  p {
    ${tw`my-md xl:my-md-xl`}
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`my-lg xl:my-lg-xl`}
  }
  ul {
    ${tw`
      mx-md!
      p-[unset]!

      xl:mx-md-xl!
    `}
  }
  li {
    ${tw`list-disc text-p font-sans xl:text-p-xl`}
  }
  a {
    ${tw`text-blue`}
  }
`
export const ImageWrapper = tw.div`
  w-full
  h-[70svw]
  [border-radius: 10px]

  sm:h-[50svw]
`
