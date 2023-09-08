import { RootState } from '../index'

const getIsAuth = (state: RootState) => state.auth.isAuth

export const authSelectors = {
  getIsAuth
}
