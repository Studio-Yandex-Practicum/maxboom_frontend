import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import { getUserAuthStatus } from '@/features/login/model/selectors/getUserAuthStatus'
import { useAppDispatch } from '@/shared/libs/hooks/store'

import { getCurrentUser } from '../slice/userSlice'
import { IUser } from '../types/types'

export const useUser = (): IUser => {
  const isAuth = useSelector(getUserAuthStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isAuth) {
      dispatch(getCurrentUser())
    }
  }, [isAuth])

  const user = useSelector((state: StateSchema) => state.user.user)

  return isAuth ? user : { id: null, email: null }
}
