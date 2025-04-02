'use client'

import Link from 'next/link'
import { P } from 'styles'
import tw, { styled, css, theme } from 'twin.macro'
import Icon from './icons'

const SharedButtonStyles = css`
  ${tw`relative w-fit py-xxs px-xs flex items-center justify-center gap-xxs [border-radius: 5px] no-underline`}
  ${tw`xl:gap-xxs-xl xl:py-xxs-xl xl:px-xs-xl`}
  ${tw`hover:opacity-80 transition-opacity ease-default duration-500`}

  .secondary {
    ${tw`whitespace-nowrap`}
    ${tw`transition-all ease-default duration-500`}
  }

  svg {
    ${tw`w-xs h-xs xl:w-xs-xl xl:h-xs-xl transition-all ease-default duration-500`}
  }
  .left {
    ${tw`absolute ml-xs xl:ml-xs-xl scale-0 left-[0] top-1/2 -translate-y-1/2`}
  }
  .right {
    ${tw`scale-100`}
  }

  &:hover {
    .left {
      ${tw`scale-100`}
    }
    .right {
      ${tw`scale-0`}
    }
    .secondary {
      transform: translateX(calc(${theme`spacing.xs`} + ${theme`spacing.xxs`}));

      @media (min-width: ${theme`screens.xl`}) {
        transform: translateX(
          calc(${theme`spacing.xs-xl`} + ${theme`spacing.xxs-xl`})
        );
      }
    }
  }

  ${({ $primary }) => $primary && tw`bg-blue text-white`}
  ${({ $secondary }) =>
    $secondary && tw`border-[1px] border-gray text-black border-solid`}
`

const StyledCustomButton = styled(Link)`
  ${SharedButtonStyles}
`

const CustomButton = ({
  $internal = false,
  $primary,
  $secondary = $primary === false ? true : false,
  $form,
  href,
  ref,
  onClick,
  children,
  ...props
}) => {
  if (!href || typeof href !== 'string') {
    return (
      <FormButton
        type="submit"
        $primary={$primary}
        $secondary={$secondary}
        onClick={onClick}
        {...props}
      >
        <P>{children}</P>
      </FormButton>
    )
  }

  const isExternal =
    href.startsWith('http') ||
    href.startsWith('mailto') ||
    href.startsWith('tel')

  const internalLinkProps = {
    ...props,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noopener noreferrer' : undefined,
  }

  return (
    <StyledCustomButton
      ref={ref}
      $primary={$primary}
      $secondary={$secondary}
      onClick={(e) => {
        onClick?.(e)
      }}
      href={href}
      {...internalLinkProps}
    >
      {$secondary && <Icon className="left" name="right-arrow" />}
      <P className={$secondary && 'secondary'}>{children}</P>
      {$secondary && <Icon className="right" name="right-arrow" />}
    </StyledCustomButton>
  )
}

export default CustomButton
