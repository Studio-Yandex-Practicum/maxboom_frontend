import { Nullable } from '@/shared/model/types/common'

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
