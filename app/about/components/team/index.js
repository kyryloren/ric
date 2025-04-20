'use client'

import { useRef, useState, useEffect } from 'react'
import { Container, CustomGrid, H1, splitText } from 'styles'
import { StickyWrapper, StyledCanvas, TeamSection, TextWrapper } from './styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

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

  // Preload all frames and compute aspect ratio
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
      if (loaded[0]) {
        setRatio(loaded[0].height / loaded[0].width)
      }
    })
  }, [])

  // Resize canvas and draw initial frame
  useEffect(() => {
    if (!images.length) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const width = canvas.parentElement.offsetWidth
      const height = width * ratio

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      // Draw first frame immediately
      const firstImg = images[0]
      const drawHeight = width * (firstImg.height / firstImg.width)
      ctx.drawImage(firstImg, 0, (height - drawHeight) / 2, width, drawHeight)
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [images, ratio])

  // Scroll-triggered frame updates
  useEffect(() => {
    if (!images.length) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const drawFrame = (index) => {
      const width = canvas.width / dpr
      const height = canvas.height / dpr

      ctx.clearRect(0, 0, width, height)
      const img = images[index]
      const drawHeight = width * (img.height / img.width)
      ctx.drawImage(img, 0, (height - drawHeight) / 2, width, drawHeight)
    }

    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: 'top top+=15%',
      end: 'bottom bottom-=21%',
      scrub: true,
      pin: wrapperRef.current,
      onUpdate: (self) => {
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(self.progress * (frameCount - 1)),
        )
        drawFrame(frameIndex)
      },
    })

    return () => trigger.kill()
  }, [images])

  return (
    <TeamSection id="doctors">
      <Container>
        <CustomGrid>
          <StickyWrapper ref={wrapperRef}>
            <H1>Meet Dr. Pedro</H1>
            <StyledCanvas ref={canvasRef} />
          </StickyWrapper>
          <TextWrapper ref={textRef}>{splitText(ALL_TEXT)}</TextWrapper>
        </CustomGrid>
      </Container>
    </TeamSection>
  )
}
