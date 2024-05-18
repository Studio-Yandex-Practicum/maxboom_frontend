export interface IData {
  routes?: IRoute[]
  subtitle?: string
  route?: string | null
}

export interface IRoute {
  subtitle?: string
  route?: string | null
}

export interface ICategory {
  id?: number
  name?: string
  slug?: string
}
