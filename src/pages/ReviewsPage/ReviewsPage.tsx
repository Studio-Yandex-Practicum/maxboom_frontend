import { FC } from 'react'

import { Routes } from '@/shared/config/routerConfig/routes'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'

import styles from './ReviewsPage.module.scss'

/**
 * Страница с обзорами.
 * TODO наполнить страницу смыслом
 */
export const ReviewsPage: FC = () => {
  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Блог', href: Routes.BLOG },
    { heading: 'Обзоры', href: '' }
  ]

  return (
    <WrapperForMainContent>
      <div className={styles.reviewsPage}>
        <div className={styles.reviewsPage__pageDescriptor}>
          <Heading>Обзоры</Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.reviewsPage__contant}>
          <Paragraph>Обзоры</Paragraph>
        </div>
      </div>
    </WrapperForMainContent>
  )
}
