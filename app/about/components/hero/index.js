'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Container, H1, H4 } from 'styles'
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

const TOP_TEXT = `After 25 years
of dental implants`
const BOTTOM_TEXT = `we created the
perfect solution.`
const BOTTOM_FLOATING_TEXT = `Restoring lives through
technology and excellence.`

const generateImagePaths = () =>
  Array.from(
    { length: frameCount },
    (_, i) => `/videos/about/frame-${(i + 1).toString().padStart(3, '0')}.webp`,
  )

export default function Hero() {
  const sectionEl = useRef(null)
  const canvasEl = useRef(null)
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)
  const images = useRef(generateImagePaths())

  // draw + resize canvas (always)
  useEffect(() => {
    const canvas = canvasEl.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const imgEls = images.current.map((src) => {
      const img = new Image()
      img.src = src
      return img
    })
    const maxRatio = Math.max(...imgEls.map((img) => img.height / img.width))

    const draw = (idx) => {
      const img = imgEls[idx]
      const aspect = img.width / img.height
      const w = canvas.width / window.devicePixelRatio
      const h = w / aspect

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(
        img,
        0,
        (canvas.height / window.devicePixelRatio - h) / 2,
        w,
        h,
      )
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const w = window.innerWidth * 0.65
      const h = w * maxRatio

      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)

      draw(currentFrameIndex)
    }

    window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener('resize', resize)
  }, [currentFrameIndex])

  // redraw on frame change (always)
  useEffect(() => {
    const canvas = canvasEl.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = images.current[currentFrameIndex]
    img.onload = () => {
      const aspect = img.width / img.height
      const w = canvas.width / window.devicePixelRatio
      const h = w / aspect

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(
        img,
        0,
        (canvas.height / window.devicePixelRatio - h) / 2,
        w,
        h,
      )
    }
  }, [currentFrameIndex])

  // GSAP matchMedia for scrollTrigger + timeline
  useEffect(() => {
    const mm = gsap.matchMedia()

    // only run on viewports > 500px
    mm.add('(min-width: 501px)', () => {
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
            setCurrentFrameIndex(idx)
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

      // cleanup when this matchMedia query no longer applies
      return () => {
        tl.scrollTrigger && tl.scrollTrigger.kill()
        tl.kill()
      }
    })

    // nothing happens on ≤500px — matchMedia will auto-revert above tween
    return () => mm.revert()
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
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <HeroSection ref={sectionEl}>
      <MovementWrapper className="anim-wrapper">
        <StyledCanvas ref={canvasEl} />
      </MovementWrapper>
      <CenterTextWrapper>
        <H1 className="anim-text-top">{customSplitText(TOP_TEXT)}</H1>
        <H1 className="anim-text-bottom">{customSplitText(BOTTOM_TEXT)}</H1>
      </CenterTextWrapper>

      <BottomTextWrapper>
        <H4>{customSplitText(BOTTOM_FLOATING_TEXT)}</H4>
      </BottomTextWrapper>
    </HeroSection>
  )
}
