interface Logo {
  image: string
}

interface Support {
  callback: string
  phone_number: string
  name: string
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
