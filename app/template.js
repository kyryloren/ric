import { GlobalStyle } from 'styles'
import { Book, Lenis, Scrollbar } from 'components'
import { fetchAPI, ResetAnimation } from 'lib'
import { Providers } from 'context'

export default async function Template({ children }) {
  const globalData = await fetchAPI('/global', {
    populate: '*',
  })
  const globalDoc = globalData?.data?.attributes

  return (
    <Providers globalAPI={globalDoc}>
      <GlobalStyle />
      <Scrollbar />

      <Book />
      <ResetAnimation />
      <main id="main">{children}</main>

      <Lenis root />
    </Providers>
  )
}
