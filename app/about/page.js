import { Footer, Nav } from 'components'
import { Hero, History, Team, Who } from './components'
import { FAQ } from 'templates'
import { fetchAPI } from 'lib'

export default async function About() {
  const aboutData = await fetchAPI('/about', {
    populate: {
      fields: [
        'hero_title_one',
        'hero_title_two',
        'hero_description',
        'text',
        'team_title',
        'team_description',
      ],
      media: {
        populate: '*',
      },
      history: {
        populate: {
          card: {
            populate: '*',
          },
        },
      },
      team_image: {
        populate: '*',
      },
      FAQ_header: {
        populate: '*',
      },
      FAQ: {
        populate: '*',
      },
    },
  })
  const aboutDoc = aboutData?.data?.attributes

  return (
    <>
      <Nav />
      <Hero data={aboutDoc} />
      <Who data={aboutDoc} />
      <History data={aboutDoc?.history} />
      <Team data={aboutDoc} />
      <FAQ headerData={aboutDoc?.FAQ_header} data={aboutDoc?.FAQ} />
      <Footer />
    </>
  )
}
