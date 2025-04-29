'use client'

import { useEffect, useRef, useState } from 'react'
import { useLenis } from 'lenis/react'
import Icon from 'components/icons'
import {
  ButtonsWrapper,
  CustomContainer,
  FloatingNavButton,
  HamburgerLine,
  HamburgerWrapper,
  Header,
  InnerWrapper,
  LogoWrapper,
  MenuWrapperButton,
  NavWrapper,
  OverflowWrapper,
} from './styles'
import CustomLink from 'components/link'
import CustomButton from 'components/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname, useRouter } from 'next/navigation'
import Menu from './menu'
import { ScrollTrigger } from 'gsap/all'
import { theme } from 'twin.macro'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Nav = () => {
  const navEl = useRef(null)

  const pathname = usePathname()
  const router = useRouter()
  const lenis = useLenis()

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (pathname !== '/about') {
      document.getElementById('main').style.paddingTop =
        document.getElementById('header').offsetHeight + 'px'
    }
  }, [pathname])

  useGSAP(
    () => {
      const heroSection = document.getElementById('hero')

      if (heroSection) {
        gsap.from('.primary-button', {
          opacity: 0,
          scrollTrigger: {
            trigger: heroSection,
            start: `top+=${heroSection.offsetHeight / 2} top`,
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        })
      } else {
        gsap.from(gsap.utils.toArray('.primary-button'), {
          yPercent: 50,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
          delay: 1,
        })
      }
    },
    { dependencies: [navEl, pathname], scope: navEl },
  )

  useGSAP(
    () => {
      let tl = gsap.timeline({ delay: 0.5 })

      tl.from(
        '.anim-logo',
        {
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        0.5,
      )
        .from(
          gsap.utils.toArray('.anim-link'),
          {
            yPercent: 100,
            stagger: true,
            duration: 1.5,
            ease: 'power3.out',
          },
          0.5,
        )
        .from(
          gsap.utils.toArray('.anim-button'),
          {
            yPercent: 50,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
          },
          0.5,
        )
        .to(
          '.anim-line',
          {
            '--width': '100%',
            duration: 1,
            ease: 'power3.out',
          },
          0,
        )
    },
    { dependencies: [navEl, pathname], scope: navEl },
  )

  return (
    <>
      <Header ref={navEl} id="header">
        <CustomContainer className="anim-line">
          <InnerWrapper>
            <LogoWrapper
              className="anim-logo"
              href={'/'}
              aria-label="Navigate Home"
              onClick={(e) => {
                e.preventDefault()

                if (pathname === '/') lenis.scrollTo(0)
                else router.push('/')
              }}
            >
              <Icon name="logo" />
            </LogoWrapper>
            <NavWrapper>
              <OverflowWrapper>
                <div className="anim-link">
                  <CustomLink
                    href={'/about'}
                    onClick={(e) => {
                      e.preventDefault()

                      if (pathname === '/about') lenis.scrollTo(0)
                      else router.push('/about')
                    }}
                  >
                    About
                  </CustomLink>
                </div>
              </OverflowWrapper>
              <OverflowWrapper>
                <div className="anim-link">
                  <CustomLink
                    href={'/services'}
                    onClick={(e) => {
                      e.preventDefault()

                      if (pathname === '/services') lenis.scrollTo(0)
                      else router.push('/services')
                    }}
                  >
                    Services
                  </CustomLink>
                </div>
              </OverflowWrapper>
              <OverflowWrapper>
                <div className="anim-link">
                  <CustomLink
                    href={'/technology'}
                    onClick={(e) => {
                      e.preventDefault()

                      if (pathname === '/technology') lenis.scrollTo(0)
                      else router.push('/technology')
                    }}
                  >
                    Technology
                  </CustomLink>
                </div>
              </OverflowWrapper>
              <OverflowWrapper>
                <div className="anim-link">
                  <CustomLink
                    href={'/finances'}
                    onClick={(e) => {
                      e.preventDefault()

                      if (pathname === '/finances') lenis.scrollTo(0)
                      else router.push('/finances')
                    }}
                  >
                    Finances
                  </CustomLink>
                </div>
              </OverflowWrapper>
              <OverflowWrapper>
                <div className="anim-link">
                  <CustomLink
                    href={'/articles'}
                    onClick={(e) => {
                      e.preventDefault()

                      if (pathname === '/articles') lenis.scrollTo(0)
                      else router.push('/articles')
                    }}
                  >
                    Articles
                  </CustomLink>
                </div>
              </OverflowWrapper>
              <OverflowWrapper>
                <div className="anim-link">
                  <CustomLink
                    href={'/contact'}
                    onClick={(e) => {
                      e.preventDefault()

                      if (pathname === '/contact') lenis.scrollTo(0)
                      else router.push('/contact')
                    }}
                  >
                    Contact
                  </CustomLink>
                </div>
              </OverflowWrapper>
            </NavWrapper>
            <ButtonsWrapper>
              <div className="primary-button book">
                <CustomButton $primary href={'/book'}>
                  Book Now
                </CustomButton>
              </div>
              <div className="anim-button call">
                <CustomButton $secondary href={'/'}>
                  Call Now
                </CustomButton>
              </div>

              <MenuWrapperButton onClick={() => setMenuOpen(!menuOpen)}>
                <HamburgerWrapper $open={menuOpen}>
                  <HamburgerLine />
                  <HamburgerLine />
                  <HamburgerLine />
                </HamburgerWrapper>
              </MenuWrapperButton>
            </ButtonsWrapper>
          </InnerWrapper>
        </CustomContainer>
        <Menu menuOpen={menuOpen} />

        <FloatingNavButton className="primary-button">
          <CustomButton $primary href={'/book'}>
            Book Now
          </CustomButton>
        </FloatingNavButton>
      </Header>
    </>
  )
}

export default Nav
