import { forwardRef } from 'react'
import IconLogo from './logo'
import IconRightArrow from './right-arrow'
import IconInstagram from './instagram'
import IconFacebook from './facebook'
import IconX from './x'
import IconLinkedIn from './linkedin'
import IconTikTok from './tiktok'

const Icon = forwardRef((props, ref) => {
  switch (props.name) {
    case 'logo':
      return <IconLogo ref={ref} {...props} />
    case 'right-arrow':
      return <IconRightArrow ref={ref} {...props} />
    case 'linkedin':
      return <IconLinkedIn ref={ref} {...props} />
    case 'instagram':
      return <IconInstagram ref={ref} {...props} />
    case 'facebook':
      return <IconFacebook ref={ref} {...props} />
    case 'x':
      return <IconX ref={ref} {...props} />
    case 'tiktok':
      return <IconTikTok ref={ref} {...props} />
    default:
      return null
  }
})

export default Icon
