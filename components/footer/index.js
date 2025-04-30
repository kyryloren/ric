'use client'

import { useContext } from 'react'
import { Container, H1, H4, P, splitText } from 'styles'
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
import { GlobalAPIContext, ModalContext } from 'context'
import { formatPhone } from 'lib'

const Footer = () => {
  const { setModal } = useContext(ModalContext)
  const globalAPI = useContext(GlobalAPIContext)

  return (
    <BottomSectionWrapper>
      <Container>
        <InnerWrapper>
          <CTAWrapper>
            <LeftCard
              href={'/'}
              onClick={(e) => {
                e.preventDefault()
                setModal(true)
              }}
            >
              <H4>
                Your new smile is
                <br />
                just a click away.
              </H4>
              <H1>Book Now</H1>
            </LeftCard>
            <RightCard
              target="_blank"
              rel="noopener noreferrer"
              href={globalAPI?.contact?.googleMaps}
            >
              <H4>{splitText(globalAPI?.contact?.address)}</H4>
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
                <P>{splitText(globalAPI?.contact?.address)}</P>
              </BlackLinkWrapper>

              <LinkListWrapper>
                <CustomLink href="/about#faq">FAQ</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/about#doctors">Doctors</CustomLink>
                <CustomLink href="/services">Services</CustomLink>
                <CustomLink href="/technology">Technology</CustomLink>
                <CustomLink href="/finances">Finances</CustomLink>
                <CustomLink href="/finances">Insurance</CustomLink>
                <CustomLink href="/articles">Articles</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
              </LinkListWrapper>
            </LeftColWrapper>

            <RightColWrapper>
              <BlackLinkWrapper>
                <CustomLink href={`tel:${globalAPI?.contact?.phone}`}>
                  {formatPhone(globalAPI?.contact?.phone)}
                </CustomLink>
                <CustomLink href={`mailto:${globalAPI?.contact?.email}`}>
                  Click to email
                </CustomLink>
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
              {globalAPI?.socials?.instagram && (
                <SocialLink
                  aria-label="Instagram"
                  href={globalAPI?.socials?.instagram}
                >
                  <Icon name="instagram" />
                </SocialLink>
              )}
              {globalAPI?.socials?.facebook && (
                <SocialLink
                  aria-label="Facebook"
                  href={globalAPI?.socials?.facebook}
                >
                  <Icon name="facebook" />
                </SocialLink>
              )}
              {globalAPI?.socials?.tiktok && (
                <SocialLink
                  aria-label="TikTok"
                  href={globalAPI?.socials?.tiktok}
                >
                  <Icon name="tiktok" />
                </SocialLink>
              )}
              {globalAPI?.socials?.linkedin && (
                <SocialLink
                  aria-label="LinkedIn"
                  href={globalAPI?.socials?.linkedin}
                >
                  <Icon name="linkedin" />
                </SocialLink>
              )}
              {globalAPI?.socials?.x && (
                <SocialLink aria-label="X" href={globalAPI?.socials?.x}>
                  <Icon name="x" />
                </SocialLink>
              )}
            </SocialsWrapper>
          </FooterWrapper>
        </InnerWrapper>
      </Container>
    </BottomSectionWrapper>
  )
}

export default Footer
