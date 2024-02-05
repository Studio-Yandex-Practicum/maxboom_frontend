export interface IPaginatedResponse<T> {
  count: number
  previous: string
  next: string
  results: T[]
}
export interface IStoriesPicturesData {
  image: string
}

export interface IStoriesData {
  id: number
  name: string
  link: string
  pictures: IStoriesPicturesData[]
}

export interface IStoriesSchema {
  isLoading: boolean
  stories: IStoriesData[]
}
