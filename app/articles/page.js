import { Footer, Nav } from 'components'
import { fetchAPI, getStrapiURL } from 'lib'
import { ArticleItem, Header, ImageWrapper, ListWrapper } from './styles'
import { Container, CustomGrid, H4, RenderMedia } from 'styles'

export async function generateMetadata() {
  const seoData = await fetchAPI('/all-articles', {
    populate: {
      SEO: {
        populate: '*',
      },
    },
  })
  const seoDoc = seoData?.data?.attributes.SEO

  return {
    title: seoDoc?.metaTitle || 'Articles',
    description: seoDoc?.metaDescription,
    keywords: seoDoc?.keywords?.split(', '),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/articles`,
    },
    noIndex: seoDoc?.preventIndexing || false,
    openGraph: {
      title: seoDoc?.metaTitle,
      description: seoDoc?.metaDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/articles`,
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
  const articlesData = await fetchAPI('/articles', {
    populate: '*',
  })
  const allArticlesData = await fetchAPI('/all-articles', {
    populate: {
      all_articles_header: {
        populate: '*',
      },
    },
  })
  const allArticlesDoc = await allArticlesData?.data?.attributes
  const articlesDoc = articlesData?.data

  return (
    <>
      <Nav hideNav={allArticlesDoc?.all_articles_header?.book} />

      <ListWrapper>
        <Container>
          <Header data={allArticlesDoc?.all_articles_header} />
          <CustomGrid>
            {articlesDoc.map((_, index) => (
              <ArticleItem
                key={index}
                href={`/articles/${_?.attributes?.slug}`}
              >
                <ImageWrapper>
                  <RenderMedia data={_?.attributes?.media?.data?.attributes} />
                </ImageWrapper>
                <H4>{_?.attributes?.title}</H4>
              </ArticleItem>
            ))}
          </CustomGrid>
        </Container>
      </ListWrapper>

      <Footer />
    </>
  )
}
