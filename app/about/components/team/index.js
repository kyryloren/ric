'use client'

import { useRef, useState, useEffect } from 'react'
import { Container, CustomGrid, H1, H4, RenderMedia, splitText } from 'styles'
import {
  ImageWrapper,
  StickyWrapper,
  StyledCanvas,
  TeamSection,
  TextWrapper,
} from './styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { theme } from 'twin.macro'

gsap.registerPlugin(ScrollTrigger)

const frameCount = 20
const generateImagePaths = () =>
  Array.from(
    { length: frameCount },
    (_, i) => `/videos/team/frame-${(i + 1).toString().padStart(3, '0')}.webp`,
  )

export default function Team({ data }) {
  const wrapperRef = useRef(null)
  const textRef = useRef(null)
  const canvasRef = useRef(null)

  const [images, setImages] = useState([])
  const [ratio, setRatio] = useState(0)

  // Preload frames on mount
  useEffect(() => {
    const paths = generateImagePaths()
    Promise.all(
      paths.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image()
            img.src = src
            img.onload = () => resolve(img)
          }),
      ),
    ).then((loaded) => {
      setImages(loaded)
      if (loaded[0]) setRatio(loaded[0].height / loaded[0].width)
    })
  }, [])

  // Setup animations via GSAP matchMedia
  useEffect(() => {
    if (!images.length) return
    const mm = gsap.matchMedia()
    const sm = parseInt(theme`screens.sm`, 10)

    // ——— Mobile (≤sm) ———
    mm.add(`(max-width: ${sm})`, () => {
      return () => {}
    })

    // ——— Desktop (>sm) ———
    mm.add(`(min-width: ${sm + 1}px)`, () => {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      const dpr = window.devicePixelRatio || 1

      const drawFirst = () => {
        if (!canvas || !ctx) return
        const w = canvas.parentElement.offsetWidth
        const h = w * ratio
        canvas.width = w * dpr
        canvas.height = h * dpr
        canvas.style.width = `${w}px`
        canvas.style.height = `${h}px`
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        ctx.clearRect(0, 0, w, h)
        const img = images[0]
        const dh = w * (img.height / img.width)
        ctx.drawImage(img, 0, (h - dh) / 2, w, dh)
      }

      // draw initial frame immediately
      drawFirst()
      window.addEventListener('resize', drawFirst)

      const drawFrame = (index) => {
        if (!canvas || !ctx) return
        const width = canvas.width / dpr
        const height = canvas.height / dpr
        ctx.clearRect(0, 0, width, height)
        const img = images[index]
        const drawHeight = width * (img.height / img.width)
        ctx.drawImage(img, 0, (height - drawHeight) / 2, width, drawHeight)
      }

      const scrollDistance =
        textRef.current.offsetHeight - wrapperRef.current.offsetHeight

      const trigger = ScrollTrigger.create({
        trigger: textRef.current,
        start: 'top top+=15%',
        end: `+=${scrollDistance}`,
        scrub: true,
        pin: wrapperRef.current,
        onUpdate: ({ progress }) => {
          const frame = Math.min(
            frameCount - 1,
            Math.floor(progress * (frameCount - 1)),
          )
          // same drawFrame logic you already had
          drawFrame(frame)
        },
      })

      return () => {
        window.removeEventListener('resize', drawFirst)
        trigger.kill()
      }
    })

    return () => mm.revert()
  }, [images, ratio])

  return (
    <TeamSection id="doctors">
      <Container>
        <CustomGrid>
          <StickyWrapper ref={wrapperRef}>
            <H1>{data?.team_title}</H1>
            <StyledCanvas ref={canvasRef} />
            <ImageWrapper>
              <RenderMedia data={data?.team_image?.data?.attributes} />
            </ImageWrapper>
          </StickyWrapper>
          <TextWrapper ref={textRef}>
            <H4>{splitText(data?.team_description)}</H4>
          </TextWrapper>
        </CustomGrid>
      </Container>
    </TeamSection>
  )
}
