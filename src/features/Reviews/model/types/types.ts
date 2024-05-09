export interface IGetFeedbackResponse {
  count: number
  previous: string | null
  next: string | null
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

export interface IAverageMark {
  delivery_speed_score__avg: number
  quality_score__avg: number
  price_score__avg: number
  average_score__avg: number
}
export interface IFeedbackSchema {
  isLoading: boolean
  count: number
  next: number | null
  previous: number | null
  feedbacks: IFeedback[]
  averageMark: IAverageMark
  error?: string | string[]
}
