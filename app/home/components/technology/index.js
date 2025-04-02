import { Container, H2, H3, P } from 'styles'
import {
  Col,
  ColInfoWrapper,
  ImageWrapper,
  TechnologySection,
  TextWrapper,
} from './styles'
import { CustomButton, CustomImage, RevealButton, RevealText } from 'components'

const TITLE = `Better Precision
Better Health`
const DESCRIPTION = `Our advanced technology makes
implants safer and more precise.`

const TEXT1 = `Our sub-millimeter precision ensures a
perfect fit, improved comfort, and long-
lasting results.`
const TEXT2 = `We complete implant procedures in half
the time, meaning less discomfort, faster
healing, and minimal disruption.`
const TEXT3 = `Our robotic guidance system prevents any
unexpected movements, ensuring steady,
controlled implant placement.`

const Technology = () => {
  return (
    <TechnologySection>
      <Container>
        <TextWrapper>
          <RevealText el={H2} text={TITLE} scroll />
          <RevealText el={P} text={DESCRIPTION} scroll />
          <RevealButton
            scroll
            buttons={[
              <CustomButton $secondary $internal href={'/technology'}>
                Learn More
              </CustomButton>,
            ]}
          />
        </TextWrapper>
        <ImageWrapper>
          <CustomImage src={'/technology.webp'} alt={'Technology'} />
        </ImageWrapper>

        <ColInfoWrapper>
          <Col>
            <RevealText el={H3} text={'± 0.2mm'} scroll />
            <RevealText el={P} text={TEXT1} scroll />
          </Col>
          <Col>
            <RevealText el={H3} text={'50% Faster'} scroll />
            <RevealText el={P} text={TEXT2} scroll />
          </Col>
          <Col>
            <RevealText el={H3} text={'100% Safer'} scroll />
            <RevealText el={P} text={TEXT3} scroll />
          </Col>
        </ColInfoWrapper>
      </Container>
    </TechnologySection>
  )
}

export default Technology
