'use client'

import { CustomHeader } from 'components'
import { formatDate } from 'lib'
import { P } from 'styles'
import tw, { styled } from 'twin.macro'

export const TermsSection = tw.section`
  relative
  py-xxl

  xl:py-xxl-xl
`
export const ArticleBody = styled.article`
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
export const TermsHeader = ({ data, updated }) => {
  return (
    <CustomHeader
      title={data?.title}
      description={data?.description}
      book={data?.book}
      call={data?.call}
      buttons={data?.button}
      id={'hero'}
      center={false}
      padded={false}
    >
      <P>Last updated {formatDate(updated)}</P>
    </CustomHeader>
  )
}
