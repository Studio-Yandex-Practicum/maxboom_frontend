export interface GetShopNewsResponse {
  count: number
  previous: string
  next: string
  results: ShopNewsData[]
}

export interface ShopNewsData {
  id: number
  title: string
  text: string
  image: string
  pub_date: string
  slug: string
  meta_title: string
  meta_description: string
}

export interface ShopNewsSchema {
  isLoading: boolean
  news: ShopNewsData[]
  error?: string | string[]
}
