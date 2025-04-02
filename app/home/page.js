import { About, Hero, Reviews, Services, Technology } from './components'
import { Articles, Info, Insurance } from 'templates'

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Reviews />
      <Technology />
      <Insurance />
      <Services />
      <Info />
      <Articles />
    </>
  )
}
