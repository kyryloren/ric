'use client'

import { useEffect, useRef } from 'react'
import { H1, H4 } from 'styles'
import {
  BottomTextWrapper,
  CenterTextWrapper,
  HeroSection,
  MovementWrapper,
  StyledCanvas,
} from './styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { theme } from 'twin.macro'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const frameCount = 30

function customSplitText(text) {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <span key={i} className="anim-line custom-line-wrapper">
          {line}
        </span>
      ))}
    </>
  )
}

const imagePaths = Array.from(
  { length: frameCount },
  (_, i) => `/videos/about/frame-${(i + 1).toString().padStart(3, '0')}.webp`,
)

export default function Hero({ data }) {
  const sectionEl = useRef(null)
  const canvasEl = useRef(null)
  const frameIndexRef = useRef(0)
  const imagesRef = useRef([])
  const drawRef = useRef(null)

  useEffect(() => {
    const canvas = canvasEl.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const draw = (idx) => {
      const img = imagesRef.current[idx]
      if (!img?.complete || !img.naturalWidth) return

      const dpr = window.devicePixelRatio || 1
      const aspect = img.naturalWidth / img.naturalHeight
      const w = canvas.width / dpr
      const h = w / aspect

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, (canvas.height / dpr - h) / 2, w, h)
    }
    drawRef.current = draw

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const loaded = imagesRef.current.filter(
        (img) => img?.complete && img.naturalWidth,
      )
      if (!loaded.length) return

      const maxRatio = Math.max(
        ...loaded.map((img) => img.naturalHeight / img.naturalWidth),
      )
      const w = window.innerWidth * 0.65
      const h = w * maxRatio

      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      draw(frameIndexRef.current)
    }

    imagesRef.current = imagePaths.map((src) => {
      const img = new Image()
      img.onload = () => resize()
      img.src = src
      return img
    })

    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [])

  useGSAP(
    () => {
      gsap.from('.anim-line', {
        yPercent: 100,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2,
        duration: 1.5,
        delay: 0.5,
      })

      const mm = gsap.matchMedia()

      mm.add('(min-width: ' + theme`screens.xs` + ')', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl.current,
            start: 'top top',
            end: '+=2000',
            scrub: true,
            pin: true,
            onUpdate: ({ progress }) => {
              const idx = Math.min(
                frameCount - 1,
                Math.floor(progress * (frameCount - 1)),
              )
              frameIndexRef.current = idx
              drawRef.current?.(idx)
            },
          },
          defaults: { ease: 'linear' },
        })

        tl.set('.anim-text-bottom', { display: 'none' }, 0)
          .fromTo(
            '.anim-wrapper',
            { top: '100%' },
            { top: '0%', duration: 0.5 },
            0,
          )
          .set('.anim-text-top', { display: 'none' }, 0.5)
          .set('.anim-text-bottom', { display: 'block' }, 0.5)
          .to('.anim-wrapper', { top: '-80%' }, 0.5)
      })
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <HeroSection ref={sectionEl}>
      <MovementWrapper className="anim-wrapper">
        <StyledCanvas ref={canvasEl} />
      </MovementWrapper>
      <CenterTextWrapper>
        <H1 className="anim-text-top">
          {customSplitText(data?.hero_title_one)}
        </H1>
        <H1 className="anim-text-bottom">
          {customSplitText(data?.hero_title_two)}
        </H1>
      </CenterTextWrapper>

      <BottomTextWrapper>
        <H4>{customSplitText(data?.hero_description)}</H4>
      </BottomTextWrapper>
    </HeroSection>
  )
}
