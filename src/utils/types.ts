export type TCategory = {
  name: string
  url: string
  type: 'category'
}

export type TProduct = {
  name: string
  url: string
  type: 'product'
  number: number
  image: string
  price: string
}

export type TResultData = {
  data: Array<TCategory | TProduct>
  success: boolean
}

export enum ECardView {
  GRID = 'grid',
  LIST = 'list',
  COMPACT = 'compact'
}

export enum EPlace {
  SearchHeader = 'search-header',
  Subscribe = 'subscribe',
  SubscribeFooter = 'subscribe-footer'
}
