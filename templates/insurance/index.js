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
            <CustomImage
              src={'/smiles.webp'}
              alt={'Smiles'}
              sizes="(min-width: 780px) 59.01vw, (min-width: 580px) 95.56vw, (min-width: 420px) calc(23.57vw + 380px), (min-width: 380px) calc(95vw - 21px), 468px"
            />
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
              <ImageObject
                src="/zip.svg"
                alt="Zip"
                width={200}
                height={200}
                loading="lazy"
                priority={false}
              />
              <ImageObject
                src="/afterpay.svg"
                alt="Afterpay"
                width={200}
                height={200}
                loading="lazy"
                priority={false}
              />
              <ImageObject
                src="/humm.svg"
                alt="Humm"
                width={200}
                height={200}
                loading="lazy"
                priority={false}
              />
              <ImageObject
                src="/affirm.svg"
                alt="Affirm"
                width={200}
                height={200}
                loading="lazy"
                priority={false}
              />
            </Marquee>
          </TextWrapper>
        </ContentWrapper>
      </Container>
    </InsuranceSection>
  )
}

export default Insurance
