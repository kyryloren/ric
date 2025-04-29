import { forwardRef } from 'react'
import IconLogo from './logo'
import IconRightArrow from './right-arrow'
import IconInstagram from './instagram'
import IconFacebook from './facebook'
import IconX from './x'
import IconLinkedIn from './linkedin'
import IconTikTok from './tiktok'
import IconLeftArrow from './left-arrow'
import IconLogoIcon from './logo-icon'
import Icon25Y from './25Y'
import IconClose from './close'

const Icon = forwardRef((props, ref) => {
  switch (props.name) {
    case 'logo':
      return <IconLogo ref={ref} {...props} />
    case 'logo-icon':
      return <IconLogoIcon ref={ref} {...props} />
    case 'right-arrow':
      return <IconRightArrow ref={ref} {...props} />
    case 'left-arrow':
      return <IconLeftArrow ref={ref} {...props} />
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
    case '25Y':
      return <Icon25Y ref={ref} {...props} />
    case 'close':
      return <IconClose ref={ref} {...props} />
    default:
      return null
  }
})

export default Icon
