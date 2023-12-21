import { RouterProvider } from 'react-router-dom'
import { router } from './router/AppRouter'
import { useEffect } from 'react'
import { loginActions } from '@/features/login/model/slice/loginSlice'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { tokenFromStorageGet } from '@/shared/libs/helpers/localStorageHandler'
import { $api } from '@/shared/api/api'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = tokenFromStorageGet()
    if (token) {
      dispatch(loginActions.initAuth(token))
      $api.addToken(token)
    }
  }, [dispatch])
  return <RouterProvider router={router} />
}

export default App
