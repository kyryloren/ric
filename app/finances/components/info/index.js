import { Container, H2, P, splitText } from 'styles'
import {
  ImageWrapper,
  InfoWrapper,
  RowOne,
  RowTwo,
  TextWrapper,
} from './styles'
import { CustomButton, CustomImage } from 'components'

const TITLE1 = `Affordable Dental
Implants at RIC`
const TEXT1 = `With affordable, transparent, and hassle-free
financing options, your path to a new smile
can be as comfortable as it is rewarding.`
const TITLE2 = `Cost of Dental
Implants`
const TEXT2 = `With affordable, transparent, and hassle-free
financing options, your path to a new smile
can be as comfortable as it is rewarding.`

export default function Info() {
  return (
    <InfoWrapper>
      <Container>
        <RowOne>
          <ImageWrapper className={'image-wrapper'}>
            <CustomImage src={'/1.webp'} alt={'Custom Image'} parallax={true} />
          </ImageWrapper>
          <TextWrapper className={'text-wrapper'}>
            <H2>{splitText(TITLE1)}</H2>
            <P>{TEXT1}</P>
            <CustomButton $secondary href={'/'}>
              Ask us
            </CustomButton>
          </TextWrapper>
        </RowOne>
        <RowTwo>
          <TextWrapper className={'text-wrapper'}>
            <H2>{splitText(TITLE2)}</H2>
            <P>{TEXT2}</P>
            <CustomButton $secondary href={'/'}>
              Ask us
            </CustomButton>
          </TextWrapper>
          <ImageWrapper className={'image-wrapper'}>
            <CustomImage src={'/1.webp'} alt={'Custom Image'} parallax={true} />
          </ImageWrapper>
        </RowTwo>
      </Container>
    </InfoWrapper>
  )
}
