'use client'

import Link from 'next/link'
import { P } from 'styles'
import tw, { styled, css } from 'twin.macro'

const SharedButtonStyles = css`
  ${tw`relative w-fit py-xxs px-xs flex items-center justify-center gap-xxs [border-radius: 5px] no-underline`}
  ${tw`xl:gap-xxs-xl xl:py-xxs-xl xl:px-xs-xl`}
  ${tw`hover:opacity-80 transition-opacity ease-default duration-500`}

  ${({ $primary }) => $primary && tw`bg-blue text-white`}
  ${({ $secondary }) =>
    $secondary && tw`border-[1px] border-gray text-black border-solid`}
`
const InnerLink = styled.a`
  ${SharedButtonStyles}
`
const ExternalLink = styled(Link)`
  ${SharedButtonStyles}
`
const FormButton = styled.button`
  ${SharedButtonStyles}
`

const CustomButton = ({
  $internal = false,
  $primary,
  $secondary = $primary === false ? true : false,
  $form,
  href,
  children,
  ...props
}) => {
  if (!$internal) {
    return (
      <ExternalLink
        href={href}
        $primary={$primary}
        $secondary={$secondary}
        {...props}
      >
        <P>{children}</P>
      </ExternalLink>
    )
  } else if ($internal) {
    return (
      <InnerLink
        href={href}
        $primary={$primary}
        $secondary={$secondary}
        {...props}
      >
        <P>{children}</P>
      </InnerLink>
    )
  } else if ($form) {
    return (
      <FormButton
        type="submit"
        $primary={$primary}
        $secondary={$secondary}
        {...props}
      >
        <P>{children}</P>
      </FormButton>
    )
  }
}

export default CustomButton
