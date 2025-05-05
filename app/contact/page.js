import { Footer, Nav } from 'components'
import { Hero, Info } from './components'

export async function generateMetadata() {
  return {
    title: 'Contact | Robotic Implant Center | Tooth Implant Solutions | RIC',
  }
}

export default function Contact() {
  return (
    <>
      <Nav />
      <Hero />
      <Info />
      <Footer />
    </>
  )
}
