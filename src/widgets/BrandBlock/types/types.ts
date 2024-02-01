export interface BrandSchema {
  brands: Brand[]
  error?: string | string[]
}

export interface Brand {
  id: number
  name: string
  slug: string
  image: string
  is_prohibited: boolean
  is_visible_on_main: boolean
  width?: number
  height?: number
}
