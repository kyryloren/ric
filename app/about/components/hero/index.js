'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { H1 } from 'styles'
import {
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
      {text?.split('\n').map((line, lineIndex) => (
        <span key={lineIndex} className="custom-line-wrapper">
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

const generateImagePaths = () =>
  Array.from(
    { length: frameCount },
    (_, index) =>
      `/videos/about/frame-${(index + 1).toString().padStart(3, '0')}.webp`,
  )

export default function Hero() {
  const sectionEl = useRef(null)
  const canvasEl = useRef(null)

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)
  const images = useRef(generateImagePaths())

  const updateFrameIndex = useCallback((index) => {
    setCurrentFrameIndex(index)
  }, [])

  useEffect(() => {
    const canvas = canvasEl.current
    const ctx = canvas.getContext('2d')
    const imgElements = images.current.map((src) => {
      const img = new Image()
      img.src = src
      return img
    })

    // Calculate the max height-to-width ratio
    const maxHeightToWidthRatio = Math.max(
      ...imgElements.map((img) => img.height / img.width),
    )

    const drawImage = (index) => {
      const img = imgElements[index]
      const aspectRatio = img.width / img.height
      const imgWidth = canvas.width / window.devicePixelRatio
      const imgHeight = imgWidth / aspectRatio

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw the image centered vertically within the canvas
      ctx.drawImage(
        img,
        0,
        (canvas.height / window.devicePixelRatio - imgHeight) / 2,
        imgWidth,
        imgHeight,
      )
    }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const canvasWidth = window.innerWidth * 0.65
      const canvasHeight = canvasWidth * maxHeightToWidthRatio

      // Set canvas width and height in device pixels for high-quality rendering
      canvas.width = canvasWidth * dpr
      canvas.height = canvasHeight * dpr
      canvas.style.width = `${canvasWidth}px`
      canvas.style.height = `${canvasHeight}px`

      // Ensure context scaling matches device pixel ratio for sharpness
      ctx.scale(dpr, dpr)

      drawImage(currentFrameIndex)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas() // Initial canvas sizing

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [currentFrameIndex])

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top top',
          end: '+=2000',
          scrub: true,
          pin: true,
          onUpdate: ({ progress }) => {
            if (progress >= 0.05) {
              const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(progress * (frameCount - 1)),
              )
              updateFrameIndex(frameIndex)
            }
          },
        },
        defaults: { ease: 'linear' },
      })

      timeline
        .set('.anim-text-bottom', { display: 'none' }, 0)
        .fromTo(
          '.anim-wrapper',
          { top: '100%' },
          { top: '0%', duration: 0.5 },
          0,
        )
        .set('.anim-text-top', { display: 'none' }, 0.5)
        .set('.anim-text-bottom', { display: 'block' }, 0.5)
        .to('.anim-wrapper', { top: '-80%' }, 0.5)
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  useEffect(() => {
    const canvas = canvasEl.current
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = images.current[currentFrameIndex]

    img.onload = () => {
      const aspectRatio = img.width / img.height
      const imgWidth = canvas.width / window.devicePixelRatio
      const imgHeight = imgWidth / aspectRatio

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.imageSmoothingEnabled = false

      // Draw the image centered vertically within the canvas
      ctx.drawImage(
        img,
        0,
        (canvas.height / window.devicePixelRatio - imgHeight) / 2,
        imgWidth,
        imgHeight,
      )
    }
  }, [currentFrameIndex])

  return (
    <HeroSection ref={sectionEl}>
      <MovementWrapper className="anim-wrapper">
        <StyledCanvas ref={canvasEl} />
      </MovementWrapper>
      <CenterTextWrapper>
        <H1 className="anim-text-top">{customSplitText(TOP_TEXT)}</H1>
        <H1 className="anim-text-bottom">{customSplitText(BOTTOM_TEXT)}</H1>
      </CenterTextWrapper>
    </HeroSection>
  )
}
