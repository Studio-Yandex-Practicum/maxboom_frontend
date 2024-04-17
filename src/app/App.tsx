import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { getCart } from '@/entities/CartEntity/model/slice/cartEntitySlice'
import { loginActions } from '@/features/login/model/slice/loginSlice'
import { $api } from '@/shared/api/api'
import { tokenFromStorageGet } from '@/shared/libs/helpers/localStorageHandler'
import { useAppDispatch } from '@/shared/libs/hooks/store'

import { router } from './router/AppRouter'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = tokenFromStorageGet()
    if (token) {
      dispatch(loginActions.initAuth(token))
      $api.addToken(token)
    }

    dispatch(getCart())
  }, [dispatch])
  return <RouterProvider router={router} />
}

export default App
