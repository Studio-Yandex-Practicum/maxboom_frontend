interface Logo {
  image: string
  url: string
  title: string
}

interface Support {
  callback: string
  phone_number: string
}

export interface CoreBaseHeaderData {
  main_logo: Logo
  support: Support
}

export interface CoreBaseHeaderSchema {
  isLoading: boolean
  header: CoreBaseHeaderData
  error?: string | string[]
}
