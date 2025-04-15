import { RealViewport, StyledComponentsRegistry } from 'lib'

const title = 'Robotic Implant Center | Tooth Implant Solutions | RIC'
const description = `Dental implants can help you achieve the smile you’ve always wanted. Discover Robotic Implant Center for expert care. Book your consultation today!`

export const metadata = {
  title: {
    template: '%s | Robotic Implant Center New York',
    default: title,
  },
  description: description,
  keywords: [
    'robotic dental implants',
    'dental implant specialist NYC',
    'Yomi robotic implant system',
    'full mouth dental implants',
    'dental implants Staten Island',
    'pain-free dental implants',
    'advanced dental technology Staten Island',
    'precision dental implants',
  ],
  openGraph: {
    title: title,
    description: description,
    url: 'https://roboticimplantsnyc.com/',
    locale: 'en_US',
    type: 'website',
    images: {
      url: `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://roboticimplantsnyc.com/'
      }/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@roboticimplant.center',
    images: [
      `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://roboticimplantsnyc.com/'
      }/images/og-image.jpg`,
    ],
  },
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
