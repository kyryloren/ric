'use client'

import { Container, H1, H2, H3, H4, P, RenderMedia } from 'styles'
import { ArticleBody, ImageWrapper } from './styles'
import { CustomLink } from 'components'

const h1Tag = ({ children }) => <H1>{children}</H1>
const h2Tag = ({ children }) => <H2>{children}</H2>
const h3Tag = ({ children }) => <H3>{children}</H3>
const h4Tag = ({ children }) => <H4>{children}</H4>
// fallback for deeper levels
const h5Tag = h4Tag
const h6Tag = h4Tag

// render any inline node (text or link)
const renderInline = (node, key) => {
  if (node.type === 'text') {
    return node.text
  }
  if (node.type === 'link') {
    return (
      <CustomLink key={key} href={node.url}>
        {node.children.map((child, i) => child.text)}
      </CustomLink>
    )
  }
  return null
}

export default function Body({ data }) {
  return (
    <ArticleBody>
      <Container>
        {data?.map((section, idx) => {
          if (section.__component === 'articles.media') {
            return (
              <ImageWrapper key={section.id || idx}>
                <RenderMedia data={section.media.data.attributes} />
              </ImageWrapper>
            )
          }

          if (section.__component === 'articles.text') {
            return section.text.map((block, i) => {
              const key = `${idx}-${i}`

              // paragraph with inline nodes
              if (block.type === 'paragraph') {
                return (
                  <P key={key}>
                    {block.children.map((child, j) =>
                      renderInline(child, `${key}-${j}`),
                    )}
                  </P>
                )
              }

              // headings 1–6
              if (block.type === 'heading') {
                const Heading =
                  {
                    1: h1Tag,
                    2: h2Tag,
                    3: h3Tag,
                    4: h4Tag,
                    5: h5Tag,
                    6: h6Tag,
                  }[block.level] || h4Tag

                return (
                  <Heading key={key}>
                    {block.children.map((child, j) =>
                      renderInline(child, `${key}-${j}`),
                    )}
                  </Heading>
                )
              }

              // ordered / unordered lists
              if (block.type === 'list') {
                const ListTag = block.format === 'ordered' ? 'ol' : 'ul'
                return (
                  <ListTag key={key}>
                    {block.children.map((item, j) => (
                      <li key={`${key}-${j}`}>
                        {item.children.map((child, k) =>
                          renderInline(child, `${key}-${j}-${k}`),
                        )}
                      </li>
                    ))}
                  </ListTag>
                )
              }

              return null
            })
          }

          return null
        })}
      </Container>
    </ArticleBody>
  )
}
