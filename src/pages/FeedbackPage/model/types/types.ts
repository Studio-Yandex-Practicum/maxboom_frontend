export interface IGetFeedbackResponse {
  count: number
  previous: string
  next: string
  results: IFeedback[]
}

export interface IFeedback {
  pk: number
  text: string
  pub_date: string
  author_name: string
  author_email: string
  average_score: number
  delivery_speed_score: number
  quality_score: number
  price_score: number
  replay: IFeedbackReplay | null
}
export interface IFeedbackReplay {
  text: string
  pub_date: string
  name: string
}

export interface IFeedbackSchema {
  isLoading: boolean
  feedbacks: IFeedback[]
  error?: string | string[]
}
