import { Footer, Nav } from 'components'
import { About, Hero, Reviews, Services, Technology } from './components'
import { Articles, Info, Insurance } from 'templates'
import { fetchAPI } from 'lib'

export default async function Home() {
  const homeData = await fetchAPI('/homepage', {
    populate: {
      hero_header: {
        populate: '*',
      },
      hero_media: {
        populate: '*',
      },
      about: {
        populate: {
          col: {
            populate: '*',
          },
        },
      },
    },
  })
  const homeDoc = homeData?.data?.attributes

  return (
    <>
      <Nav hideNav={homeDoc?.hero_header?.book} />
      <Hero data={homeDoc} />
      <About data={homeDoc?.about} />
      <Reviews />
      <Technology />
      <Insurance />
      <Services />
      <Info />
      <Articles />
      <Footer />
    </>
  )
}
