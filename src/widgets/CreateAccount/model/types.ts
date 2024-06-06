export interface ICreateAccountForm {
  name: string
  surname: string
  email: string
  tel: string
  country: string
  region: string
  index: string
  model: string
  city: string
  password: string
  passwordConfirmation: string
  subscription: string
  agreement: boolean
}

export interface IUserAccount {
  email: string
  password: string
}

// export interface IUserProfile {
//     first_name: string,
//     last_name: string,
//     about: string,
//     company: string,
//     is_vendor: boolean
// }

export interface INewAccountSchema {
  isLoading: boolean
  accountInfo: IRegisterInfo
}

export interface IRegisterInfo {
  email: string
  password: string
}
