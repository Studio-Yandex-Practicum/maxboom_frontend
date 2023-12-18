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
    <main className={styles.main}>
      <WrapperForMainContent>
        <div className={styles.content}>
          <Heading>Страница авторизации</Heading>
          <Suspense fallback={<Spinner />}>
            <LazyLoginForm />
          </Suspense>
        </div>
      </WrapperForMainContent>
    </main>
  )
}

export default LoginPage
