import { RouterProvider } from 'react-router-dom'
import { router } from './router/AppRouter'
import { useEffect } from 'react'
import { loginActions } from '@/features/login/model/slice/loginSlice'
import { useAppDispatch } from '@/shared/libs/hooks/store'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loginActions.initAuth())
  }, [dispatch])
  return <RouterProvider router={router} />
}

export default App
