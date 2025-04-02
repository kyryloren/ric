'use client'

import { useEffect, useRef } from 'react'
import { useLenis } from 'lenis/react'
import Icon from 'components/icons'
import {
  ButtonsWrapper,
  CustomContainer,
  Header,
  InnerWrapper,
  LogoWrapper,
  NavWrapper,
  OverflowWrapper,
} from './styles'
import CustomLink from 'components/link'
import CustomButton from 'components/button'
import RevealText from 'components/reveal-text'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname, useRouter } from 'next/navigation'

const Nav = () => {
  const logoAnim = useRef(null)
  const textAnims = useRef([])
  const buttonsAnim = useRef([])
  const lineAnim = useRef(null)
  const pathname = usePathname()
  const router = useRouter()
  const lenis = useLenis()

  useEffect(() => {
    document.getElementById('main').style.paddingTop =
      document.getElementById('header').offsetHeight + 'px'
  }, [])

  useGSAP(
    () => {
      let tl = gsap.timeline({ delay: 0.5 })

      tl.from(
        logoAnim.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        0.5,
      )
        .from(
          textAnims.current,
          {
            yPercent: 100,
            stagger: true,
            duration: 1.5,
            ease: 'power3.out',
          },
          0.5,
        )
        .from(
          buttonsAnim.current,
          {
            yPercent: 50,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
          },
          0.5,
        )
        .to(
          lineAnim.current,
          {
            '--width': '100%',
            duration: 1,
            ease: 'power3.out',
          },
          0,
        )
    },
    { dependencies: [textAnims, buttonsAnim, lineAnim] },
  )

  return (
    <Header id="header">
      <CustomContainer ref={lineAnim}>
        <InnerWrapper>
          <LogoWrapper
            ref={logoAnim}
            href={'/'}
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
              <div ref={(el) => textAnims.current.push(el)}>
                <CustomLink href={'/about'}>About</CustomLink>
              </div>
            </OverflowWrapper>
            <OverflowWrapper>
              <div ref={(el) => textAnims.current.push(el)}>
                <CustomLink href={'/services'}>Services</CustomLink>
              </div>
            </OverflowWrapper>
            <OverflowWrapper>
              <div ref={(el) => textAnims.current.push(el)}>
                <CustomLink href={'/technology'}>Technology</CustomLink>
              </div>
            </OverflowWrapper>
            <OverflowWrapper>
              <div ref={(el) => textAnims.current.push(el)}>
                <CustomLink href={'/finances'}>Finances</CustomLink>
              </div>
            </OverflowWrapper>
            <OverflowWrapper>
              <div ref={(el) => textAnims.current.push(el)}>
                <CustomLink href={'/articles'}>Articles</CustomLink>
              </div>
            </OverflowWrapper>
            <OverflowWrapper>
              <div ref={(el) => textAnims.current.push(el)}>
                <CustomLink href={'/contact'}>Contact</CustomLink>
              </div>
            </OverflowWrapper>
          </NavWrapper>
          <ButtonsWrapper>
            <div ref={(el) => buttonsAnim.current.push(el)}>
              <CustomButton $secondary $internal href={'/'}>
                Call Now
              </CustomButton>
            </div>
            <div ref={(el) => buttonsAnim.current.push(el)}>
              <CustomButton $primary $internal href={'/'}>
                Book Now
              </CustomButton>
            </div>
          </ButtonsWrapper>
        </InnerWrapper>
      </CustomContainer>
    </Header>
  )
}

export default Nav
