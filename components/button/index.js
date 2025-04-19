'use client'

import { P } from 'styles'
import { StyledCustomButton } from './styles'
import { Icon } from 'components'

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
