import { Container, H2, P } from 'styles'
import {
  ContentWrapper,
  ImageObject,
  ImageWrapper,
  InsuranceSection,
  TextWrapper,
} from './styles'
import { CustomImage, CustomButton, Marquee } from 'components'

const Insurance = () => {
  return (
    <InsuranceSection>
      <Container>
        <ContentWrapper>
          <ImageWrapper>
            <CustomImage src={'/smiles.webp'} alt={'Smiles'} />
          </ImageWrapper>
          <TextWrapper>
            <H2>
              Happier Smiles at
              <br />
              Happier Prices
            </H2>
            <P>
              With affordable, transparent, and hassle-free
              <br />
              financing options, your path to a new smile
              <br />
              can be as comfortable as it is rewarding.
            </P>
            <CustomButton $secondary $internal href={'/technology'}>
              Explore Financing
            </CustomButton>
            <Marquee className={'marquee'} repeat={3}>
              <ImageObject src="/zip.svg" alt="Zip" />
              <ImageObject src="/afterpay.svg" alt="Afterpay" />
              <ImageObject src="/humm.svg" alt="Humm" />
              <ImageObject src="/affirm.svg" alt="Affirm" />
            </Marquee>
          </TextWrapper>
        </ContentWrapper>
      </Container>
    </InsuranceSection>
  )
}

export default Insurance
