'use client'

import { useRef, useState, useEffect } from 'react'
import { Container, CustomGrid, H1, H4, splitText } from 'styles'
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
import { CustomImage } from 'components'

gsap.registerPlugin(ScrollTrigger)

const ALL_TEXT = `Born and raised on Staten Island, Dr. Greg Pedro is what some consider a local hero. Inducted into the Staten Island Hall of Fame, Dr. Pedro returned to “The Rock” to give back to the community that means the world to him.

A 1983 graduate from the award-winning St. Peter’s Boy’s Basketball team, Dr. Pedro earned full-scholarships to both Michigan State and Fordham University for his undergraduate Bachelor of Science degree in General Science. He graduated from Temple University’s School of Dentistry with his DMD and an ADA certification in the highly specialized and deeply competitive field of Prosthodontics.

Presciently seeing the future of high-end dentistry, Dr. Pedro was one of the first 30 candidates to extensively train in Computer Guided Dental Implant Surgery under world-renowned prosthodontist, Thomas Ballshi.  This insight and experience makes Dr. Pedro the most sought after surgical prosthodontist on Staten Island.   

Dr. Pedro’s mission is simple: to make world-class implant dentistry more accessible, precise, and stress-free. Whether you're looking for a single implant, a full-mouth transformation, or a second opinion, he and the Robotic Implant Center team are ready to help you take the next step with confidence and clarity.`

const frameCount = 20
const generateImagePaths = () =>
  Array.from(
    { length: frameCount },
    (_, i) => `/videos/team/frame-${(i + 1).toString().padStart(3, '0')}.webp`,
  )

export default function Team() {
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
            <H1>Meet Dr. Pedro</H1>
            <StyledCanvas ref={canvasRef} />
            <ImageWrapper>
              <CustomImage
                src={'/drpedro.webp'}
                alt={'Dr. Pedro'}
                sizes="calc(96.79vw - 30px)"
              />
            </ImageWrapper>
          </StickyWrapper>
          <TextWrapper ref={textRef}>
            <H4>{splitText(ALL_TEXT)}</H4>
          </TextWrapper>
        </CustomGrid>
      </Container>
    </TeamSection>
  )
}
