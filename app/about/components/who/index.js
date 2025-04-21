import { Container, H2 } from 'styles'
import { WhoSection, TextWrapper, ImageWrapper } from './styles'
import { CustomImage } from 'components'

export default function Who() {
  return (
    <WhoSection>
      <Container>
        <TextWrapper>
          <H2>
            Over the years, our practice has evolved from a traditional implant
            center into a <b>pioneering clinic</b> that leads the industry in
            robotic-assisted <b>implant surgery</b>.
          </H2>
          <br />
          <br />
          <H2>
            As one of the <b>first and only providers</b> in NYC using the Yomi
            Robotic System, we’ve introduced a new standard of <b>precision</b>,{' '}
            <b>comfort</b>, and <b>efficiency</b>-giving our patients access to
            the most advanced implant procedures available today.
          </H2>
          <br />
          <br />
          <H2>
            We’re transforming more than smiles.{' '}
            <b>We’re transforming lives.</b>
          </H2>
        </TextWrapper>

        <ImageWrapper>
          <CustomImage src="/team.webp" alt="Team" sizes="94.19vw" />
        </ImageWrapper>
      </Container>
    </WhoSection>
  )
}
