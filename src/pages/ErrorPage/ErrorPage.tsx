import { FC } from 'react'

import image from '@/assets/images/errorPage/img-page-not-found.webp'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { Routes } from '@/shared/config/routerConfig/routes'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './ErrorPage.module.scss'

/**
 * Страница ошибки 404
 */

const ErrorPage: FC = () => {
  return (
    <WrapperForMainContent>
      <section className={styles.errorPage}>
        <div className={styles.errorPage__imageBox}>
          <img src={image} alt="Error 404" className={styles.errorPage__image} />
        </div>
        <Heading type={HeadingType.MEDIUM} className={styles.errorPage__title}>
          Страница не найдена
        </Heading>
        <Paragraph className={styles.errorPage__paragraph}>
          Вы можете{' '}
          <Link to={Routes.CONTACTS} className={styles.errorPage__link}>
            связаться с нами
          </Link>
          , воспользоваться{' '}
          <Link to={Routes.SEARCH} className={styles.errorPage__link}>
            поиском по сайту
          </Link>{' '}
          или просто перейти на&nbsp;
          <Link to={Routes.HOME} className={styles.errorPage__link}>
            главную страницу
          </Link>
          .
        </Paragraph>
      </section>
    </WrapperForMainContent>
  )
}

export default ErrorPage
