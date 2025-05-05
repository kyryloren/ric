import { FAQ, Info, Insurance } from 'templates'
import { Hero } from './components'
import { Footer, Nav } from 'components'
import { fetchAPI, getStrapiURL } from 'lib'

export async function generateMetadata(props) {
  const params = await props.params
  const { slug } = params

  const seoData = await fetchAPI('/services', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      SEO: {
        populate: '*',
      },
    },
  })
  const seoDoc = seoData?.data?.attributes.SEO

  return {
    title: seoDoc?.metaTitle || 'Services',
    description: seoDoc?.metaDescription,
    keywords: seoDoc?.keywords?.split(', '),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${slug}`,
    },
    noIndex: seoDoc?.preventIndexing || false,
    openGraph: {
      title: seoDoc?.metaTitle,
      description: seoDoc?.metaDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${slug}`,
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

export default async function Page(props) {
  const params = await props.params
  const { slug } = params

  const serviceData = await fetchAPI('/services', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      fields: ['name', 'short_description', 'long_description'],
      media: {
        populate: '*',
      },
      FAQ_header: {
        populate: '*',
      },
      FAQ: {
        populate: '*',
      },
      finances: {
        populate: '*',
      },
      info_col: {
        populate: '*',
      },
    },
  })
  const serviceDoc = serviceData?.data[0]?.attributes

  return (
    <>
      <Nav />
      <Hero data={serviceDoc} />
      <FAQ headerData={serviceDoc?.FAQ_header} data={serviceDoc.FAQ} />
      <Insurance data={serviceDoc?.finances} />
      <Info data={serviceDoc?.info_col} />
      <Footer />
    </>
  )
}
