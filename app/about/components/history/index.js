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

export default function History({ data }) {
  return (
    <HistorySection>
      <Container>
        <CustomGrid>
          <SectionTextWrapper>
            <H2>{splitText(data?.title)}</H2>
            <P>{data?.description}</P>
          </SectionTextWrapper>

          <TopCard>
            <H1>{data?.card[0]?.title}</H1>
            <H4>{splitText(data?.card[0]?.description)}</H4>
          </TopCard>

          <MiddleLeftCard>
            <H1>{data?.card[1]?.title}</H1>
            <H4>{splitText(data?.card[1]?.description)}</H4>
          </MiddleLeftCard>
          <MiddleRightCard>
            <Icon name="25Y" />
            <H4>{splitText(data?.card[2]?.description)}</H4>
          </MiddleRightCard>

          <BottomLeftCard>
            <H2>{splitText(data?.card[3]?.title)}</H2>
            <H4>{splitText(data?.card[3]?.description)}</H4>
          </BottomLeftCard>

          <BottomRightCard>
            <H2>{splitText(data?.card[4]?.title)}</H2>
            <H4>{splitText(data?.card[4]?.description)}</H4>
          </BottomRightCard>
        </CustomGrid>
      </Container>
    </HistorySection>
  )
}
