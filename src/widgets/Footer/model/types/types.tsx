interface Logo {
  image: string
  url: string
  title: string
}

interface Support {
  callback: string
  phone_number: string
}

export interface CoreBaseFooterData {
  company_info: string
  disclaimer: string
  support_work_time: string
  main_logo: Logo
  additional_logos: Logo[]
  support: Support
}

export interface CoreBaseFooterSchema {
  footer: CoreBaseFooterData
  error?: string | string[]
}
