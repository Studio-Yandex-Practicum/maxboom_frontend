import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux'

import { getLoading } from '@/pages/ProductsPage/selectors/selectors'
import { getNoun } from '@/shared/libs/helpers/getNoun'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'

import styles from './PageDescription.module.scss'

type Props = {
  count: number
  heading: string
}
/**
 * Компонент заголовка страницы товаров.
 * Содержит информацию о текущей просматриваемой категории.
 * @param {number} count - количество товаров в категории;
 * @param {string} heading - наименование-заголовок;
 */
export const PageDescription: FC<Props> = ({ count, heading }) => {
  const links = [
    { heading: 'Главная', href: '/' },
    { heading: heading, href: '/categories/' + heading }
  ]

  const isLoading = useSelector(getLoading)

  return (
    <div className={styles.content__description}>
      {isLoading ? (
        <Skeleton className={styles['sk-content']} />
      ) : (
        <div>
          <Heading className={styles.content__title}>{heading}</Heading>{' '}
          {count >= 0 ? (
            <span className={styles['content__items-count']}>
              {count} {getNoun(count, 'товар', 'товара', 'товаров')}
            </span>
          ) : (
            ''
          )}
        </div>
      )}
      <Breadcrumbs links={links} />
    </div>
  )
}
