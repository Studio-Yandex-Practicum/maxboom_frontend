import { Suspense, lazy, useCallback } from 'react'
import { useNavigate } from 'react-router'

import { Routes } from '@/shared/config/routerConfig/routes'
import Heading from '@/shared/ui/Heading/Heading'
import Spinner from '@/shared/ui/Spinner/Spinner'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'

import styles from './LoginPage.module.scss'

const LazyLoginForm = lazy(() => import('@/features/login/index'))

/**
 * Страница авторизации
 */
const LoginPage = () => {
  const navigate = useNavigate()
  const onLogin = useCallback(() => {
    navigate(Routes.HOME)
  }, [navigate])
  return (
    <WrapperForMainContent>
      <Heading className={styles.heading}>Страница авторизации</Heading>
      <Suspense fallback={<Spinner />}>
        <LazyLoginForm onLogin={onLogin} />
      </Suspense>
    </WrapperForMainContent>
  )
}

export default LoginPage
