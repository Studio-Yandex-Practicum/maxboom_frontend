export type TCategory = {
  id?: number
  name: string
  slug: string
  branches?: TCategory[]
  root?: TCategory
  is_prohibited?: boolean
  is_visible_on_main?: boolean
  image?: string
  type?: 'category'
}
