import { Footer, Nav } from 'components'
import { About, Facts, Hero } from './components'
import { FAQ } from 'templates'
import { fetchAPI, getStrapiURL } from 'lib'

export async function generateMetadata() {
  const seoData = await fetchAPI('/technology', {
    populate: {
      SEO: {
        populate: '*',
      },
    },
  })
  const seoDoc = seoData?.data?.attributes.SEO

  return {
    title: seoDoc?.metaTitle || 'Technology',
    description: seoDoc?.metaDescription,
    keywords: seoDoc?.keywords?.split(', '),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/technology`,
    },
    noIndex: seoDoc?.preventIndexing || false,
    openGraph: {
      title: seoDoc?.metaTitle,
      description: seoDoc?.metaDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/technology`,
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

export default async function Technology() {
  const data = await fetchAPI('/technology', {
    populate: {
      fields: ['info_col_title'],
      hero_header: {
        populate: '*',
      },
      hero_media: {
        populate: '*',
      },
      info_col: {
        populate: '*',
      },
      row: {
        populate: {
          media: {
            populate: '*',
          },
        },
      },
      FAQ_header: {
        populate: '*',
      },
      FAQ: {
        populate: '*',
      },
    },
  })
  const doc = data?.data?.attributes

  return (
    <>
      <Nav hideNav={doc?.hero_header?.book} />
      <Hero data={doc} />
      <About data={doc} />
      <Facts data={doc?.row} />
      <FAQ headerData={doc?.FAQ_header} data={doc?.FAQ} />
      <Footer />
    </>
  )
}
