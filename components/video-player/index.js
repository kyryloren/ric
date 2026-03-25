'use client'

import { useRef, useEffect } from 'react'

export default function VideoPlayer({
  src,
  poster,
  className,
  autoPlay = false,
  muted = false,
  loop = false,
  playsInline = false,
  controls = false,
  ...props
}) {
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (autoPlay) {
            video.play().catch(() => { })
          }
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px', threshold: 0.1 },
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [autoPlay])

  return (
    <div ref={containerRef}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        controls={controls}
        preload="none"
        className={className || 'h-full w-full object-cover'}
        {...props}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
