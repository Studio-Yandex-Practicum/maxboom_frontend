export type TBlogItem = {
  id: number
  src: string
  alt: string
  title?: string
  date?: string
  promo?: boolean
  tags: string[]
  comments: string[]
  category: string
  views?: number
}
