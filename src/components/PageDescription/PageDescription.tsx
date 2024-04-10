import { FC } from 'react'

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

  return (
    <div className={styles.content__description}>
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
      <Breadcrumbs links={links} />
    </div>
  )
}
