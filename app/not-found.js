import { Footer, Nav } from 'components'
import { H3, Letters, NotFoundWrapper, P } from 'styles'

export default function NotFound() {
  return (
    <>
      <Nav />
      <NotFoundWrapper>
        <Letters>404</Letters>
        <H3>Page not found</H3>
        <P>This page is either missing, or requires an implant.</P>
      </NotFoundWrapper>
      <Footer />
    </>
  )
}
