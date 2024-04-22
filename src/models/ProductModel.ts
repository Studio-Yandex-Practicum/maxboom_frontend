import { IImage } from './ImageModel'

export interface IProduct {
  id: number
  category: string
  brand: string
  images: IImage[]
  price: string
  name: string
  slug: string
  description: string
  code: number
  wb_urls: string
  quantity?: number
  is_deleted?: boolean
  wholesale?: number
  label_hit?: boolean
  label_popular?: boolean
}
