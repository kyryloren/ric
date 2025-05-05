import { Footer, Nav } from 'components'
import { PolicyHeader, PrivacySection } from './styles'
import { Container } from 'styles'
import { fetchAPI, getStrapiURL } from 'lib'
import Body from './styles/body'

export async function generateMetadata() {
  const seoData = await fetchAPI('/privacy-policy', {
    populate: {
      SEO: {
        populate: '*',
      },
    },
  })
  const seoDoc = seoData?.data?.attributes.SEO

  return {
    title: seoDoc?.metaTitle || 'Privacy Policy',
    description: seoDoc?.metaDescription,
    keywords: seoDoc?.keywords?.split(', '),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy`,
    },
    noIndex: seoDoc?.preventIndexing || false,
    openGraph: {
      title: seoDoc?.metaTitle,
      description: seoDoc?.metaDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy`,
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

export default async function PrivacyPolicy() {
  const data = await fetchAPI('/privacy-policy', {
    populate: '*',
  })
  const doc = data?.data?.attributes

  return (
    <>
      <Nav />

      <PrivacySection>
        <Container>
          <PolicyHeader data={doc?.header} updated={doc?.updatedAt} />
        </Container>

        <Body data={doc?.text} />
      </PrivacySection>

      <Footer />
    </>
  )
}
