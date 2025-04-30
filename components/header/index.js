import { useContext } from 'react'
import { H1, H2, P, splitText } from 'styles'
import { HeaderWrapper, ButtonsWrapper } from './styles'
import CustomButton from 'components/button'
import { GlobalAPIContext } from 'context'

export default function CustomHeader({
  title,
  description,
  className,
  padded = false,
  book = false,
  call = false,
  center = true,
  buttons = [],
  size = 'lg',
  children,
}) {
  const globalData = useContext(GlobalAPIContext)

  return (
    <HeaderWrapper
      $center={center}
      $padding={padded}
      $size={size}
      className={className}
    >
      {size === 'lg' ? (
        <H1>{splitText(title)}</H1>
      ) : (
        <H2>{splitText(title)}</H2>
      )}
      <P className="description">{splitText(description)}</P>
      {book || call || buttons.length > 0 ? (
        <ButtonsWrapper $center={center}>
          {book && (
            <CustomButton
              className="book-button anim-button"
              $primary
              href={'/book'}
            >
              Book Now
            </CustomButton>
          )}
          {call && (
            <CustomButton
              className="call-button anim-button"
              $secondary
              href={`tel:${globalData?.contact?.phone}`}
            >
              Call Now
            </CustomButton>
          )}
          {buttons.length > 0 &&
            buttons.map((_, index) => (
              <CustomButton
                key={index}
                className="custom-button anim-button"
                $primary={_?.primary}
                $secondary={!_?.primary}
                href={_?.url}
              >
                {_?.text}
              </CustomButton>
            ))}
        </ButtonsWrapper>
      ) : null}
      {children}
    </HeaderWrapper>
  )
}
