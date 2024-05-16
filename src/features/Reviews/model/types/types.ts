import { Nullable } from '@/shared/model/types/common'

export interface IGetFeedbackResponse {
  count: number
  previous: Nullable<string>
  next: Nullable<string>
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
  replay: Nullable<IFeedbackReplay>
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
  next: Nullable<number>
  previous: Nullable<number>
  feedbacks: IFeedback[]
  averageMark: IAverageMark
  error?: string | string[]
}
