export interface INewsItem {
  isLoading: boolean
  newsItemData: TNews
  error?: string | string[]
}

export type TNews = {
  id: number
  title: string
  text: string
  image: string
  pub_date: string
  slug: string
  meta_title: string | null
  meta_description: string | null
}
