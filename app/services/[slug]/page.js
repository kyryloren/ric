import { FAQ, Info, Insurance } from 'templates'
import { Hero } from './components'
import { Footer, Nav } from 'components'
import { fetchAPI } from 'lib'

const TITLE = 'About this service'
const DESCRIPTION = `Getting dental implants is a big decision.
We're here for you every step of the way.`
const FAQ_ITEMS = [
  {
    question: 'What are dental implants?',
    answer:
      'Dental implants are titanium posts that are surgically positioned into the jawbone beneath your gums to replace missing tooth roots. Once in place, they allow your dentist to mount replacement teeth onto them.',
  },
  {
    question: 'How long do dental implants last?',
    answer:
      'With proper care and maintenance, dental implants can last a lifetime. Regular dental check-ups, good oral hygiene, and avoiding habits like smoking can significantly extend their lifespan.',
  },
  {
    question: 'Is the implant procedure painful?',
    answer:
      "The procedure is typically performed under local anesthesia, so you shouldn't feel pain during the surgery. Some discomfort may occur during the healing process, which can be managed with prescribed medications.",
  },
  {
    question: 'How long is the recovery period?',
    answer:
      'Recovery time varies by individual, but most patients can return to normal activities within 1-2 days. Complete healing and osseointegration (when the implant fuses with the jawbone) typically takes 3-6 months.',
  },
  {
    question: 'Are dental implants covered by insurance?',
    answer:
      'Coverage varies by insurance plan. Some plans cover a portion of the cost, while others may not cover implants at all. We recommend checking with your insurance provider for specific details.',
  },
  {
    question: 'What are the benefits of dental implants?',
    answer:
      "Dental implants provide a permanent solution for missing teeth, improve appearance, restore chewing ability, prevent bone loss, and maintain facial structure. They also don't require adjacent teeth to be modified, unlike bridges.",
  },
  {
    question: 'Who is a good candidate for dental implants?',
    answer:
      'Most adults in good general health with adequate bone density are candidates for dental implants. Factors like smoking, certain medical conditions, or insufficient bone may affect eligibility, but many of these can be addressed.',
  },
  {
    question: 'How do I care for my dental implants?',
    answer:
      'Care for implants like natural teeth with regular brushing, flossing, and professional cleanings. Avoid tobacco products and maintain regular dental check-ups to ensure long-term success.',
  },
]

export default async function Page(props) {
  const params = await props.params
  const { slug } = params

  const serviceData = await fetchAPI('/services', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      fields: ['name', 'short_description', 'long_description'],
      media: {
        populate: '*',
      },
      FAQ_header: {
        populate: '*',
      },
      FAQ: {
        populate: '*',
      },
      finances: {
        populate: '*',
      },
      info_col: {
        populate: '*',
      },
    },
  })
  const serviceDoc = serviceData?.data[0]?.attributes

  return (
    <>
      <Nav />
      <Hero data={serviceDoc} />
      <FAQ headerData={serviceDoc?.FAQ_header} data={serviceDoc.FAQ} />
      <Insurance data={serviceDoc?.finances} />
      <Info data={serviceDoc?.info_col} />
      <Footer />
    </>
  )
}
