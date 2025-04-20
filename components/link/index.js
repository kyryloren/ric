'use client'

import Link from 'next/link'
import tw, { styled } from 'twin.macro'

const textStyles = tw`font-sans text-p xl:text-p-xl`

const StyledCustomLink = styled(Link)`
  ${tw`relative w-fit no-underline whitespace-nowrap cursor-pointer text-[inherit]`}
  ${textStyles}

  &:before,
  &:after {
    ${tw`absolute w-full h-[1px] bg-[currentColor] top-full left-0 pointer-events-none`}
  }

  &:before {
    ${tw`content-[''] transition-transform ease-default duration-500`}
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
  }

  &:hover:before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
`

export default function CustomLink({
  href,
  fallback = 'div',
  onClick,
  ref,
  ...props
}) {
  if (!href || typeof href !== 'string') {
    const Tag = fallback

    return <Tag ref={ref} onClick={onClick} {...props} href={href} />
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
    <StyledCustomLink
      ref={ref}
      onClick={(e) => {
        onClick?.(e)
      }}
      {...internalLinkProps}
      href={href}
    />
  )
}
