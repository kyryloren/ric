'use client'

import { useContext } from 'react'
import { P } from 'styles'
import { FormButton, StyledCustomButton } from './styles'
import { Icon } from 'components'
import { ModalContext } from 'context'

const CustomButton = ({
  $primary,
  $secondary = $primary === false ? true : false,
  disabled = false,
  href,
  ref,
  onClick,
  children,
  ...props
}) => {
  const { setModal } = useContext(ModalContext)

  if (href === '/book') {
    return (
      <FormButton
        $primary={$primary}
        $secondary={$secondary}
        onClick={() => setModal(true)}
        disabled={disabled}
        {...props}
      >
        <P>{children}</P>
      </FormButton>
    )
  }

  if (!href || typeof href !== 'string') {
    return (
      <FormButton
        type="submit"
        $primary={$primary}
        $secondary={$secondary}
        onClick={onClick}
        disabled={disabled}
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
      disabled={disabled}
      {...internalLinkProps}
    >
      {$secondary && <Icon className="left" name="right-arrow" />}
      <P className={$secondary && 'secondary'}>{children}</P>
      {$secondary && <Icon className="right" name="right-arrow" />}
    </StyledCustomButton>
  )
}

export default CustomButton
