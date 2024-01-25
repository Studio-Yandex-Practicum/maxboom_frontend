export interface GetStoreReviewsResponse {
  count: number
  previous: string
  next: string
  results: StoreReviewData[]
}

export interface StoreReviewData {
  pk: number
  text: string
  pub_date: string
  author_name: string
  author_email: string
  average_score: number
  delivery_speed_score: number
  quality_score: number
  price_score: number
  replay: StoreReviewReplay
}
export interface StoreReviewReplay {
  text: string
  pub_date: string
  name: string
}

export interface StoreReviewsSchema {
  isLoading: boolean
  reviews: StoreReviewData[]
}
