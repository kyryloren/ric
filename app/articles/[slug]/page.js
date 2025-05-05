import { Footer, Nav } from 'components'
import { Body, Hero } from './components'
import { fetchAPI, getStrapiURL } from 'lib'

export async function generateMetadata(props) {
  const params = await props.params
  const { slug } = params

  const seoData = await fetchAPI('/articles', {
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
  const seoDoc = seoData?.data[0]?.attributes?.SEO

  return {
    title: seoDoc?.metaTitle || 'Articles',
    description: seoDoc?.metaDescription,
    keywords: seoDoc?.keywords?.split(', '),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${slug}`,
    },
    noIndex: seoDoc?.preventIndexing || false,
    openGraph: {
      title: seoDoc?.metaTitle,
      description: seoDoc?.metaDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${slug}`,
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

export default async function Article(props) {
  const params = await props.params
  const { slug } = params

  const articleData = await fetchAPI('/articles', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: '*',
  })
  const articleDoc = articleData?.data[0]?.attributes

  return (
    <>
      <Nav />
      <Hero data={articleDoc} />
      <Body data={articleDoc?.article} />
      <Footer />
    </>
  )
}
