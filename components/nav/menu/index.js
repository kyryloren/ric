'use client'

import { useEffect } from 'react'
import { Container } from 'styles'
import { useLenis } from 'lenis/react'
import {
  BottomContact,
  LinksWrapper,
  MenuLayover,
  MenuLink,
  SocialLink,
  SocialsWrapper,
} from './styles'
import { usePathname } from 'next/navigation'
import CustomLink from 'components/link'
import Icon from 'components/icons'

export default function Menu({ menuOpen }) {
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    if (menuOpen) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenis, menuOpen])

  return (
    <MenuLayover $menuOpen={menuOpen}>
      <Container>
        <LinksWrapper>
          <MenuLink $disabled={pathname === '/'} href="/">
            Home
          </MenuLink>
          <MenuLink $disabled={pathname === '/about'} href="/about">
            About
          </MenuLink>
          <MenuLink $disabled={pathname === '/services'} href="/services">
            Services
          </MenuLink>
          <MenuLink $disabled={pathname === '/technology'} href="/technology">
            Technology
          </MenuLink>
          <MenuLink $disabled={pathname === '/finances'} href="/finances">
            Finances
          </MenuLink>
          <MenuLink $disabled={pathname === '/articles'} href="/articles">
            Articles
          </MenuLink>
          <MenuLink $disabled={pathname === '/contact'} href="/contact">
            Contact
          </MenuLink>
        </LinksWrapper>

        <BottomContact>
          <CustomLink href={'mailto:hello@roboticimplantsnyc.com'}>
            hello@roboticimplantsnyc.com
          </CustomLink>
          <CustomLink href={'tel:7189480870'}>+1 (718) 948-0870</CustomLink>
        </BottomContact>

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
      </Container>
    </MenuLayover>
  )
}
