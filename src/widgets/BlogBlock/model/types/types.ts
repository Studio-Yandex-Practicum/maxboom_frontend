export interface IPaginatedResponse<T> {
  count: number
  previous: string
  next: string
  results: T[]
}
export interface IBlogTagData {
  name: string
}
export interface TBlogCategoryLight {
  title: string
  slug: string
}
export interface IBlogPostData {
  id: number
  title: string
  text: string
  pub_date: string
  author: string
  image: string
  category: TBlogCategoryLight
  tags: IBlogTagData[]
  views: number
  slug: string
  meta_title: string
  meta_description: string
}

export interface IBlogPostsSchema {
  isLoading: boolean
  posts: IBlogPostData[]
  error?: string | string[]
}
