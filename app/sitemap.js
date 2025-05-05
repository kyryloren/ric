import { fetchAPI } from 'lib'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default async function sitemap() {
  const now = new Date().toISOString()

  // 1. static routes
  const staticPaths = [
    { path: '/', changeFrequency: 'daily', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/services', changeFrequency: 'daily', priority: 0.8 },
    { path: '/technology', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/finances', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/articles', changeFrequency: 'daily', priority: 0.9 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.5 },
  ]

  const pages = staticPaths.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  // 2. dynamic /services/[slug]
  const servicesRes = await fetchAPI('/services', {
    fields: ['slug'],
    pagination: { pageSize: 100 },
  })
  if (servicesRes?.data) {
    servicesRes.data.forEach((item) => {
      const slug = item.attributes.slug
      pages.push({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  }

  // 3. dynamic /articles/[slug]
  const articlesRes = await fetchAPI('/articles', {
    fields: ['slug'],
    pagination: { pageSize: 100 },
  })
  if (articlesRes?.data) {
    articlesRes.data.forEach((item) => {
      const slug = item.attributes.slug
      pages.push({
        url: `${BASE_URL}/articles/${slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  }

  return pages
}
