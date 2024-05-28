import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { getCart } from '@/entities/CartEntity/model/slice/cartEntitySlice'
import { getCurrentUser } from '@/features/login/model/services/getCurrentUser/getCurrentUser'
import { loginActions } from '@/features/login/model/slice/loginSlice'
import { $api } from '@/shared/api/api'
import { tokenFromStorageGet } from '@/shared/libs/helpers/localStorageHandler'
import { useAppDispatch } from '@/shared/libs/hooks/store'

import { router } from './router/AppRouter'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = tokenFromStorageGet()
    dispatch(loginActions.initAuth(token))

    if (token) {
      $api.addToken && $api.addToken(token)
      dispatch(getCurrentUser())
    }

    dispatch(getCart())
  }, [dispatch])
  return <RouterProvider router={router} />
}

export default App
