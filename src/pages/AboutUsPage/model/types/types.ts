export interface IData {
  headline?: string
  text?: string
}

export interface IAboutUsSchema {
  isLoading: boolean
  result?: IData[]
  error?: string | string[] | null
}
