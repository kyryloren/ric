import { Container, CustomGrid, H1, H2, H4, P, splitText } from 'styles'
import {
  BottomLeftCard,
  BottomRightCard,
  HistorySection,
  MiddleLeftCard,
  MiddleRightCard,
  SectionTextWrapper,
  TopCard,
} from './styles'
import { Icon } from 'components'

export default function History() {
  return (
    <HistorySection>
      <Container>
        <CustomGrid>
          <SectionTextWrapper>
            <H2>
              {splitText(
                `We’re pioneering robotic implant technology in the dental industry.`,
              )}
            </H2>
            <P>
              We’re the first Staten Island implant clinic to use robotic
              assisted technology.
            </P>
          </SectionTextWrapper>

          <TopCard>
            <H1>5,056</H1>
            <H4>
              That’s how many dental
              <br />
              implants we’ve done in
              <br />
              the past 10 years.
            </H4>
          </TopCard>

          <MiddleLeftCard>
            <H1>
              5 Minute
              <br />
              3D Printing
            </H1>
            <H4>
              It takes us 5 minutes
              <br />
              to scan and create <br />
              your new teeth.
            </H4>
          </MiddleLeftCard>
          <MiddleRightCard>
            <Icon name="25Y" />
            <H4>
              We have experience
              <br />
              doing dental implants
              <br />
              since 2000.
            </H4>
          </MiddleRightCard>

          <BottomLeftCard>
            <H2>
              Our procedures are
              <br />
              100% painless. We
              <br />
              always put patient
              <br />
              satisfaction first.
            </H2>
            <H4>...even with the robot.</H4>
          </BottomLeftCard>

          <BottomRightCard>
            <H2>
              4.8 out
              <br />
              of 5 stars
            </H2>
            <H4>
              Find out why we're
              <br />
              Staten Island's top-rated
              <br />
              dental implant clinic.
            </H4>
          </BottomRightCard>
        </CustomGrid>
      </Container>
    </HistorySection>
  )
}
