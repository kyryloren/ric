import { Info } from 'templates'
import { List } from './components'
import { Footer, Nav } from 'components'
import { fetchAPI, getStrapiURL } from 'lib'

export async function generateMetadata() {
  const seoData = await fetchAPI('/all-services', {
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
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },
    noIndex: seoDoc?.preventIndexing || false,
    openGraph: {
      title: seoDoc?.metaTitle,
      description: seoDoc?.metaDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
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

export default async function Services() {
  const servicesDoc = await fetchAPI('/services', {
    populate: '*',
  })
  const allServicesData = await fetchAPI('/all-services', {
    populate: {
      all_services_header: {
        populate: '*',
      },
      info_col: {
        populate: '*',
      },
    },
  })
  const allServicesDoc = await allServicesData?.data?.attributes

  return (
    <>
      <Nav hideNav={allServicesDoc?.all_services_header?.book} />
      <List
        headerData={allServicesDoc?.all_services_header}
        data={servicesDoc?.data}
      />
      <Info data={allServicesDoc?.info_col} />
      <Footer />
    </>
  )
}
