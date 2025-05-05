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
      reviews_header: {
        populate: '*',
      },
      review_card: {
        populate: '*',
      },
      review_media_left: {
        populate: '*',
      },
      review_media_center: {
        populate: '*',
      },
      review_media_right: {
        populate: '*',
      },
      technology_header: {
        populate: '*',
      },
      technology_media: {
        populate: '*',
      },
      technology_col: {
        populate: '*',
      },
      finances: {
        populate: '*',
      },
      services_header: {
        populate: '*',
      },
      info_col: {
        populate: '*',
      },
    },
  })
  const articlesData = await fetchAPI('/articles', {
    populate: '*',
    sort: ['publishedAt:desc'],
  })
  const homeDoc = homeData?.data?.attributes
  const articlesDoc = articlesData?.data

  return (
    <>
      <Nav hideNav={homeDoc?.hero_header?.book} />
      <Hero data={homeDoc} />
      <About data={homeDoc?.about} />
      <Reviews data={homeDoc} />
      <Technology data={homeDoc} />
      <Insurance data={homeDoc?.finances} />
      <Services data={homeDoc} />
      <Info data={homeDoc?.info_col} />
      <Articles data={articlesDoc} />
      <Footer />
    </>
  )
}
