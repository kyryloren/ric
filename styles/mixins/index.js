import { CustomImage, VideoPlayer } from 'components'
import { AnimWord, LineWrapper } from './styles'
import { getStrapiURL } from 'lib'

export function pxCutOff(px) {
  return `${(px / 1280) * 100}vw`
}

export function splitText(text) {
  return (
    <>
      {text?.split('\n').map((line, lineIndex) => (
        <LineWrapper key={lineIndex} className="line-wrapper">
          {line?.split(' ').map((word, wordIndex) => (
            <AnimWord key={wordIndex} className="anim-word">
              {word}&nbsp;
            </AnimWord>
          ))}
        </LineWrapper>
      ))}
    </>
  )
}

export function RenderMedia({
  priority = false,
  parallax = true,
  speed = 0.75,
  sizes,
  data,
  fill = true,
  width,
  height,
  fallback,
  ...props
}) {
  if (data?.mime?.startsWith('image/')) {
    return (
      <CustomImage
        src={getStrapiURL(data?.url + '?format=webp')}
        alt={data?.alternativeText || 'Robotic Implant Center Image'}
        priority={priority}
        sizes={sizes}
        parallax={parallax}
        {...(!fill && { width: data?.width, height: data?.height })}
        {...props}
      />
    )
  } else if (data?.mime?.startsWith('video/')) {
    const videoUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL + data?.url

    return (
      <VideoPlayer
        src={videoUrl}
        poster={data?.placeholder || data?.preview}
        alt={data?.alternativeText || 'New Studio Case Study Video'}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        controls={false}
        {...props}
      />
    )
  }

  return null
}
