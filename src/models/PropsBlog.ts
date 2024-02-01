import { TBlogItem } from './BlogItemModel'

export type PropsBlog = {
  title?: string
  linkText?: string
  linkPath?: string
  cards: TBlogItem[]
}

export type PropsCategories = {
  title?: string
  linkText?: string
  linkPath?: string
  cards: TBlogItem[]
}

export type PropsTags = {
  title?: string
  linkText?: string
  linkPath?: string
  cards: TBlogItem[]
}

export type ObjectType = {
  name: string
}
