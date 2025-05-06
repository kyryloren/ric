'use client'

import React, { useRef, useEffect, useState } from 'react'
import { CustomImage } from 'components'
import { getStrapiURL } from 'lib'
import { CustomVideo } from './styles'

export default function Vid({ fallback, data }) {
  const videoRef = useRef(null)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ua = navigator.userAgent || ''
    const isInstagram = /Instagram/.test(ua)
    const isTouch = 'ontouchstart' in window
    const isiOS = /(iPhone|iPad|iPod)/.test(ua)
    const isMobile = /Mobi|Android/.test(ua)

    // if mobile OR in-app OR iOS touch, switch to image
    setUseFallback(isMobile || isInstagram || (isTouch && isiOS))
  }, [])

  // render thumbnail on mobile/in-app
  if (useFallback && fallback?.url) {
    return (
      <CustomImage
        src={fallback?.url}
        alt={fallback?.alternativeText || 'Video thumbnail'}
        fill
      />
    )
  }

  return (
    <CustomVideo
      ref={videoRef}
      playsInline
      muted
      loop
      preload="metadata"
      autoPlay
      poster={fallback ? fallback?.url : undefined}
    >
      <source src={getStrapiURL(data?.url)} type="video/webm" />
      <img
        src={fallback?.url}
        alt={fallback?.alternativeText || 'Video not supported'}
        style={{ width: '100%', height: 'auto' }}
      />
    </CustomVideo>
  )
}
