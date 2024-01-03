import { productsData } from '@/mockData/productsData'

export function getProduct(article: string) {
  const products = productsData.filter(item => item.article === article)
  if (products.length === 0) {
    return null
  }
  return products[0]
}
