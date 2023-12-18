import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading from '@/shared/ui/Heading/Heading'
import styles from './LoginPage.module.scss'
import { Suspense, lazy } from 'react'
import Spinner from '@/shared/ui/Spinner/Spinner'

const LazyLoginForm = lazy(() => import('@/features/login/index'))

/**
 * Страница авторизации
 */
const LoginPage = () => {
  return (
    <WrapperForMainContent>
      <Heading className={styles.heading}>Страница авторизации</Heading>
      <Suspense fallback={<Spinner />}>
        <LazyLoginForm />
      </Suspense>
    </WrapperForMainContent>
  )
}

export default LoginPage
