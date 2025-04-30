import { Footer, Nav } from 'components'
import { Hero, History, Team, Who } from './components'
import { FAQ } from 'templates'
import { fetchAPI, getStrapiURL } from 'lib'

export async function generateMetadata() {
  const seoData = await fetchAPI('/about', {
    populate: {
      SEO: {
        populate: '*',
      },
    },
  })
  const seoDoc = seoData?.data?.attributes.SEO

  return {
    title: seoDoc?.metaTitle || 'About',
    description: seoDoc?.metaDescription,
    keywords: seoDoc?.keywords?.split(', '),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    noIndex: seoDoc?.preventIndexing || false,
    openGraph: {
      title: seoDoc?.metaTitle,
      description: seoDoc?.metaDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      images: {
        url: getStrapiURL(
          `${seoDoc?.metaImage?.data?.attributes?.url}?format=jpg&resize=1200x630`,
        ),
        width: 1200,
        height: 630,
      },
    },
  }
}

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
