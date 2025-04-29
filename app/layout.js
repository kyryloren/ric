import {
  fetchAPI,
  getStrapiURL,
  RealViewport,
  StyledComponentsRegistry,
} from 'lib'

const title = 'Robotic Implant Center | Tooth Implant Solutions | RIC'
const description = `Dental implants can help you achieve the smile you’ve always wanted. Discover Robotic Implant Center for expert care. Book your consultation today!`

export async function generateMetadata() {
  const data = await fetchAPI('/global', {
    populate: {
      SEO: {
        populate: '*',
      },
    },
  })
  const doc = data?.data?.attributes?.SEO

  return {
    title: doc?.metaTitle || title,
    description: doc?.metaDescription || description,
    keywords: doc?.keywords.split(', '),
    openGraph: {
      title: doc?.metaTitle,
      description: doc?.metaDescription,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      locale: 'en_US',
      type: 'website',
      images: {
        url: getStrapiURL(
          `${doc?.metaImage?.data?.attributes?.url}?format=jpg&resize=1200x630`,
        ),
        width: 1200,
        height: 630,
      },
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ipp5wkp.css" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="RIC" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* END FAVICON */}
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <RealViewport />
      </body>
    </html>
  )
}
