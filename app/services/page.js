import { Info } from 'templates'
import { List } from './components'
import { Footer, Nav } from 'components'
import { fetchAPI } from 'lib'

export default async function Services() {
  const servicesDoc = await fetchAPI('/services', {
    populate: '*',
  })
  const allServicesData = await fetchAPI('/all-services', {
    populate: '*',
  })
  const allServicesDoc = await allServicesData?.data?.attributes

  return (
    <>
      <Nav />
      <List data={servicesDoc?.data} />
      <Info data={allServicesDoc?.info_col} />
      <Footer />
    </>
  )
}
