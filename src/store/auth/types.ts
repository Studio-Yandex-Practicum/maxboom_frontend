import { TUser } from '../../models/UserModel'
import { RequestStatus } from '../types'

export type AuthSlice = {
  user: TUser | null
  isAuth: boolean
  signInStatus: RequestStatus
  signInError: string | null

  signUpStatus: RequestStatus
  signUpError: string | null

  logOutStatus: RequestStatus
  logOutError: string | null

  passwordStatus: RequestStatus
  passwordError: string | null
}
