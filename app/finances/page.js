import { Footer, Nav } from 'components'
import { About, Hero, InfoSide } from './components'
import { FAQ, Info } from 'templates'
import { fetchAPI, getStrapiURL } from 'lib'

export async function generateMetadata() {
  const seoData = await fetchAPI('/finances', {
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

export default async function Finances() {
  const data = await fetchAPI('/finances', {
    populate: '*',
  })
  const doc = data?.data?.attributes

  return (
    <>
      <Nav />
      <Hero data={doc} />
      <Info data={doc?.info_col} />
      <About />
      <InfoSide />
      <FAQ headerData={doc?.FAQ_header} data={doc?.FAQ} />
      <Footer />
    </>
  )
}
