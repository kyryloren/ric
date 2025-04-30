import { Container, H2, RenderMedia } from 'styles'
import { WhoSection, TextWrapper, ImageWrapper } from './styles'

export default function Who({ data }) {
  return (
    <WhoSection>
      <Container>
        <TextWrapper>
          {data?.text?.split('\n\n').map((_, index) => (
            <H2 key={index}>
              {_}
              <br />
              <br />
            </H2>
          ))}
        </TextWrapper>

        <ImageWrapper>
          <RenderMedia data={data?.media?.data?.attributes} sizes="94.19vw" />
        </ImageWrapper>
      </Container>
    </WhoSection>
  )
}
