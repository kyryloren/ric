'use client'

import { Container, H1, H4, P } from 'styles'
import {
  BlackLinkWrapper,
  BottomSectionWrapper,
  CTAWrapper,
  FooterTextWrapper,
  FooterWrapper,
  InnerWrapper,
  LeftCard,
  LeftColWrapper,
  LinkListWrapper,
  LogoWrapper,
  RightCard,
  RightColWrapper,
  SocialLink,
  SocialsWrapper,
} from './styles'
import CustomLink from 'components/link'
import Icon from 'components/icons'

const Footer = () => {
  return (
    <BottomSectionWrapper>
      <Container>
        <InnerWrapper>
          <CTAWrapper>
            <LeftCard href={'/'}>
              <H4>
                Your new smile is
                <br />
                just a click away.
              </H4>
              <H1>Book Now</H1>
            </LeftCard>
            <RightCard href={'/'}>
              <H4>
                4300 Hyland Blvd.
                <br />
                Staten Island, NY 10305
              </H4>
              <H1>Visit</H1>
            </RightCard>
          </CTAWrapper>

          <FooterWrapper>
            <FooterTextWrapper>
              <H4>
                With innovation at our core, we’re making implants safer,
                smarter, and stress-free—because better care leads to better
                results.
              </H4>
            </FooterTextWrapper>

            <LeftColWrapper>
              <BlackLinkWrapper>
                <P>4300 Hyland Blvd.</P>
                <P>Staten Island, NY 10305</P>
              </BlackLinkWrapper>

              <LinkListWrapper>
                <CustomLink href="/about#faq">FAQ</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/about#doctors">Doctors</CustomLink>
                <CustomLink href="/services">Services</CustomLink>
                <CustomLink href="/technology">Technology</CustomLink>
                <CustomLink href="/finances">Finances</CustomLink>
                <CustomLink href="/insurance">Insurance</CustomLink>
                <CustomLink href="/articles">Articles</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
              </LinkListWrapper>
            </LeftColWrapper>

            <RightColWrapper>
              <BlackLinkWrapper>
                <CustomLink href="mailto:hello@ri.center">
                  hello@ri.center
                </CustomLink>
                <CustomLink href="tel:7189480870">+1 (718) 948-0870</CustomLink>
              </BlackLinkWrapper>

              <LinkListWrapper>
                <CustomLink href="/privacy">Privacy Policy</CustomLink>
                <CustomLink href="/terms">Terms & Conditions</CustomLink>
                <CustomLink href="/sitemap">Sitemap</CustomLink>
              </LinkListWrapper>

              <P className="copy">&copy; 2025 Robotic Implant Center</P>
            </RightColWrapper>

            <LogoWrapper>
              <Icon name="logo" />
            </LogoWrapper>

            <SocialsWrapper>
              <SocialLink href="/">
                <Icon name="instagram" />
              </SocialLink>
              <SocialLink href="/">
                <Icon name="facebook" />
              </SocialLink>
              <SocialLink href="/">
                <Icon name="tiktok" />
              </SocialLink>
              <SocialLink href="/">
                <Icon name="linkedin" />
              </SocialLink>
              <SocialLink href="/">
                <Icon name="x" />
              </SocialLink>
            </SocialsWrapper>
          </FooterWrapper>
        </InnerWrapper>
      </Container>
    </BottomSectionWrapper>
  )
}

export default Footer
